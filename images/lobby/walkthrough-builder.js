/* ==========================================================================
   My Walkthroughs — let a visitor build and navigate their own walkthrough.

   Self-contained on purpose: this file injects its own tab, UI and styles, and
   reuses the existing walkthrough engine in app.js by adding nodes to the same
   `nodes` graph and wrapping four of its functions. The only change required
   elsewhere is one <script> tag in index.html.

   Photos live in IndexedDB as Blobs (localStorage is far too small for these),
   so a walkthrough survives a reload and never leaves the browser.

   User walkthroughs deliberately expose only the "original" tier: this app has
   no runtime image generation, so claiming upgrade tiers for a visitor's own
   photos would be dishonest.
   ========================================================================== */

(function () {
  'use strict';

  var DB_NAME = 'interior_walkthroughs';
  var STORE = 'walkthroughs';
  var DIRS = { f: 0, r: 90, b: 180, l: 270 };
  var DIR_LABEL = { f: 'Forward', r: 'Right', b: 'Back', l: 'Left' };
  var DIR_HEADING = {
    f: 'Facing Forward', r: 'Looking Right',
    b: 'Turned Around', l: 'Looking Left'
  };

  var urlCache = {};   // blobKey -> object URL
  var loadedId = null; // id of the walkthrough currently injected into `nodes`
  var draft = null;    // walkthrough being edited in the builder

  /* ---------------------------------------------------------------- storage */

  function rawOpen(version) {
    return new Promise(function (resolve, reject) {
      var req = version ? indexedDB.open(DB_NAME, version) : indexedDB.open(DB_NAME);
      req.onupgradeneeded = function () {
        if (!req.result.objectStoreNames.contains(STORE)) {
          req.result.createObjectStore(STORE, { keyPath: 'id' });
        }
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
      req.onblocked = function () { reject(new Error('database blocked by another tab')); };
    });
  }

  // Open at whatever version exists, then self-heal: if the database was left
  // without our object store (an interrupted first run, or another script
  // creating the name first), bump the version to force an upgrade that adds
  // it. Without this the store can never appear and every read fails forever.
  function openDB() {
    return rawOpen(null).then(function (db) {
      if (db.objectStoreNames.contains(STORE)) return db;
      var next = db.version + 1;
      db.close();
      return rawOpen(next);
    });
  }

  function tx(mode, fn) {
    return openDB().then(function (db) {
      return new Promise(function (resolve, reject) {
        var t = db.transaction(STORE, mode);
        var req = fn(t.objectStore(STORE));
        t.oncomplete = function () { resolve(req && req.result); };
        t.onerror = function () { reject(t.error); };
      });
    });
  }

  var store = {
    all: function () { return tx('readonly', function (s) { return s.getAll(); }); },
    get: function (id) { return tx('readonly', function (s) { return s.get(id); }); },
    put: function (wt) { return tx('readwrite', function (s) { return s.put(wt); }); },
    del: function (id) { return tx('readwrite', function (s) { return s.delete(id); }); }
  };

  /* ------------------------------------------------------- graph generation */

  // Turn a saved walkthrough into walkthrough-engine nodes.
  //
  // Turning stays inside a stop; walking moves between stops and preserves
  // which way you face. left = rotation-90, right = rotation+90, uturn = +180,
  // matching the convention the built-in lobby graph uses.
  function buildNodes(wt) {
    var out = {};
    var n = wt.positions.length;
    var idOf = function (i, d) { return wt.id + '_p' + i + '_' + d; };

    wt.positions.forEach(function (pos, i) {
      Object.keys(DIRS).forEach(function (d) {
        if (!pos[d]) return;

        var rot = DIRS[d];
        var viewAt = function (wanted) {
          var norm = ((wanted % 360) + 360) % 360;
          var key = Object.keys(DIRS).filter(function (k) { return DIRS[k] === norm; })[0];
          return (key && pos[key]) ? idOf(i, key) : null;
        };

        var t = {};
        var l = viewAt(rot - 90), r = viewAt(rot + 90), u = viewAt(rot + 180);
        if (l) t.left = l;
        if (r) t.right = r;
        if (u) t.uturn = u;

        // Facing "back" means forward motion heads toward the start.
        var ahead = (d === 'b') ? i - 1 : i + 1;
        var behind = (d === 'b') ? i + 1 : i - 1;
        if (wt.positions[ahead] && wt.positions[ahead][d]) t.up = idOf(ahead, d);
        if (wt.positions[behind] && wt.positions[behind][d]) t.down = idOf(behind, d);

        out[idOf(i, d)] = {
          title: wt.name + ' — Stop ' + (i + 1),
          headingText: DIR_HEADING[d],
          room: wt.room,
          posNum: i,
          rotation: rot,
          cx: 50,
          cy: n > 1 ? 95 - (i * (70 / (n - 1))) : 60,
          blobKey: wt.id + '|' + i + '|' + d,
          userWalkthrough: wt.id,
          transitions: t,
          features: {
            original: [
              'Your photo from Stop ' + (i + 1) + ', ' + DIR_LABEL[d].toLowerCase() + ' view.',
              'Stop ' + (i + 1) + ' of ' + n + ' in "' + wt.name + '".',
              'Use the arrows or W/A/S/D to walk and look around.'
            ]
          }
        };
      });
    });
    return out;
  }

  function releaseUrls() {
    Object.keys(urlCache).forEach(function (k) {
      try { URL.revokeObjectURL(urlCache[k]); } catch (e) { /* already gone */ }
    });
    urlCache = {};
  }

  // Remove a previously loaded user walkthrough from the shared graph.
  function unload() {
    Object.keys(nodes).forEach(function (k) {
      if (nodes[k].userWalkthrough) delete nodes[k];
    });
    releaseUrls();
    loadedId = null;
  }

  // Drop the personal walkthrough and put the viewer back on the built-in tour.
  function returnToBuiltIn() {
    unload();
    var mine = document.getElementById('map-user-layout');
    if (mine) mine.remove();
    document.getElementById('tab-walkthrough').click();
    walkNodeId = 'lobby_pos0_f';
    if (typeof switchWalkLevel === 'function') switchWalkLevel('original');
    updateWalkView();
  }

  function loadWalkthrough(id) {
    return store.get(id).then(function (wt) {
      if (!wt || !wt.positions.length) return;
      unload();

      var built = buildNodes(wt);
      if (!Object.keys(built).length) {
        alert('That walkthrough has no photos yet. Edit it and add at least one.');
        return;
      }

      // Object URLs must exist before navigating: the engine resolves image
      // paths synchronously.
      wt.positions.forEach(function (pos, i) {
        Object.keys(DIRS).forEach(function (d) {
          if (pos[d]) urlCache[wt.id + '|' + i + '|' + d] = URL.createObjectURL(pos[d]);
        });
      });

      Object.keys(built).forEach(function (k) { nodes[k] = built[k]; });
      loadedId = wt.id;
      buildUserMinimap(wt);

      var first = Object.keys(built).filter(function (k) {
        return built[k].posNum === 0 && built[k].rotation === 0;
      })[0] || Object.keys(built)[0];

      document.getElementById('tab-walkthrough').click();
      walkNodeId = first;
      if (typeof switchWalkLevel === 'function') switchWalkLevel('original');
      updateWalkView();
    });
  }

  /* ------------------------------------------------------------- minimap */

  function buildUserMinimap(wt) {
    var svg = document.getElementById('mini-map-svg');
    if (!svg) return;
    var old = document.getElementById('map-user-layout');
    if (old) old.remove();

    var NS = 'http://www.w3.org/2000/svg';
    var g = document.createElementNS(NS, 'g');
    g.setAttribute('id', 'map-user-layout');

    var frame = document.createElementNS(NS, 'rect');
    frame.setAttribute('x', 5); frame.setAttribute('y', 5);
    frame.setAttribute('width', 90); frame.setAttribute('height', 110);
    frame.setAttribute('rx', 6); frame.setAttribute('fill', 'none');
    frame.setAttribute('stroke', 'rgba(255,255,255,0.2)');
    frame.setAttribute('stroke-width', 2);
    g.appendChild(frame);

    var n = wt.positions.length;
    var yOf = function (i) { return n > 1 ? 95 - (i * (70 / (n - 1))) : 60; };

    if (n > 1) {
      var path = document.createElementNS(NS, 'line');
      path.setAttribute('x1', 50); path.setAttribute('y1', yOf(0));
      path.setAttribute('x2', 50); path.setAttribute('y2', yOf(n - 1));
      path.setAttribute('stroke', 'rgba(255,255,255,0.12)');
      path.setAttribute('stroke-width', 2);
      path.setAttribute('stroke-dasharray', '3 3');
      g.appendChild(path);
    }

    wt.positions.forEach(function (_, i) {
      var dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('cx', 50);
      dot.setAttribute('cy', yOf(i));
      dot.setAttribute('r', 4.5);
      dot.setAttribute('class', 'map-dot');
      dot.setAttribute('id', 'user-dot-' + i);
      g.appendChild(dot);
    });

    svg.appendChild(g);
  }

  // The engine only knows about the three built-in blueprints, so when a user
  // node is active we hide those and show ours instead.
  function syncMinimap() {
    var node = nodes[walkNodeId];
    var mine = document.getElementById('map-user-layout');
    var builtIn = ['map-lobby-layout', 'map-bedroom-layout', 'map-drawing-layout']
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    if (node && node.userWalkthrough) {
      builtIn.forEach(function (el) { el.classList.add('hidden'); });
      if (mine) {
        mine.classList.remove('hidden');
        mine.querySelectorAll('.map-dot').forEach(function (d) { d.classList.remove('active'); });
        var active = document.getElementById('user-dot-' + node.posNum);
        if (active) active.classList.add('active');
      }
    } else if (mine) {
      mine.classList.add('hidden');
    }
  }

  /* ------------------------------------------- wrap the walkthrough engine */

  var _getWalkAssetPath = getWalkAssetPath;
  getWalkAssetPath = function (node, level) {
    if (node && node.blobKey) return urlCache[node.blobKey] || '';
    return _getWalkAssetPath(node, level);
  };

  var _getAvailableLevels = getAvailableLevels;
  getAvailableLevels = function (node) {
    if (node && node.blobKey) return ['original'];
    return _getAvailableLevels(node);
  };

  var _updateWalkView = updateWalkView;
  updateWalkView = function () {
    var out = _updateWalkView.apply(this, arguments);
    syncMinimap();
    return out;
  };

  var _updateWalkDetailsPanel = updateWalkDetailsPanel;
  updateWalkDetailsPanel = function () {
    var out = _updateWalkDetailsPanel.apply(this, arguments);
    var node = nodes[walkNodeId];
    if (node && node.userWalkthrough) {
      // The engine writes this text on a 150ms fade; land just after it.
      setTimeout(function () {
        var el = document.getElementById('details-tier-desc');
        if (el) {
          el.textContent = 'Your own walkthrough. Design tiers are not available '
            + 'for personal walkthroughs — this app does not generate images.';
        }
      }, 200);
    }
    return out;
  };

  /* ------------------------------------------------------------------- UI */

  function injectStyles() {
    var css = document.createElement('style');
    css.textContent = [
      '#mywalk-container{padding:28px 32px;max-width:1180px;margin:0 auto;}',
      '.mywalk-head{display:flex;align-items:center;justify-content:space-between;',
      '  gap:16px;flex-wrap:wrap;margin-bottom:22px;}',
      '.mywalk-head h2{font-family:var(--font-family-display);font-size:1.55rem;',
      '  color:var(--text-primary);margin:0 0 4px;}',
      '.mywalk-head p{color:var(--text-secondary);margin:0;font-size:.9rem;max-width:60ch;}',
      '.mywalk-btn{background:var(--accent-gradient);color:#fff;border:none;',
      '  padding:11px 20px;border-radius:var(--border-radius-sm);font-weight:600;',
      '  font-family:var(--font-family-display);cursor:pointer;font-size:.9rem;',
      '  transition:transform var(--transition-fast),box-shadow var(--transition-fast);}',
      '.mywalk-btn:hover{transform:translateY(-1px);box-shadow:0 6px 18px var(--accent-glow);}',
      '.mywalk-btn.ghost{background:var(--glass-bg);border:1px solid var(--glass-border);',
      '  color:var(--text-secondary);}',
      '.mywalk-btn.ghost:hover{border-color:var(--glass-border-hover);color:var(--text-primary);',
      '  box-shadow:none;}',
      '.mywalk-btn.danger{background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.35);',
      '  color:#fca5a5;}',
      '.mywalk-btn.danger:hover{background:rgba(239,68,68,.2);box-shadow:none;}',
      '.mywalk-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px;}',
      '.mywalk-card{background:var(--glass-bg);border:1px solid var(--glass-border);',
      '  border-radius:var(--border-radius-md);overflow:hidden;transition:border-color var(--transition-fast);}',
      '.mywalk-card:hover{border-color:var(--glass-border-hover);}',
      '.mywalk-card .thumb{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;',
      '  background:var(--bg-tertiary);}',
      '.mywalk-card .body{padding:13px 15px;}',
      '.mywalk-card h3{margin:0 0 3px;font-size:1rem;color:var(--text-primary);',
      '  font-family:var(--font-family-display);}',
      '.mywalk-card .meta{color:var(--text-muted);font-size:.78rem;margin-bottom:11px;}',
      '.mywalk-card .row{display:flex;gap:8px;}',
      '.mywalk-card .row .mywalk-btn{padding:7px 13px;font-size:.8rem;flex:1;}',
      '.mywalk-empty{border:1.5px dashed var(--glass-border);border-radius:var(--border-radius-md);',
      '  padding:46px 24px;text-align:center;color:var(--text-muted);}',
      '.mywalk-stop{background:var(--glass-bg);border:1px solid var(--glass-border);',
      '  border-radius:var(--border-radius-md);padding:15px;margin-bottom:14px;}',
      '.mywalk-stop-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;}',
      '.mywalk-stop-head strong{font-family:var(--font-family-display);color:var(--text-primary);font-size:.95rem;}',
      '.mywalk-slots{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}',
      '@media(max-width:640px){.mywalk-slots{grid-template-columns:repeat(2,1fr);}}',
      '.mywalk-slot{border:1.5px dashed var(--glass-border);border-radius:var(--border-radius-sm);',
      '  aspect-ratio:4/3;display:flex;flex-direction:column;align-items:center;justify-content:center;',
      '  cursor:pointer;position:relative;overflow:hidden;background:var(--bg-tertiary);',
      '  transition:border-color var(--transition-fast);}',
      '.mywalk-slot:hover{border-color:var(--accent-purple);}',
      '.mywalk-slot img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;}',
      '.mywalk-slot .lbl{font-size:.72rem;color:var(--text-muted);font-weight:600;',
      '  letter-spacing:.04em;text-transform:uppercase;z-index:1;}',
      '.mywalk-slot .plus{font-size:1.15rem;color:var(--text-muted);z-index:1;line-height:1;margin-bottom:3px;}',
      '.mywalk-slot.filled .lbl{position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.68);',
      '  color:#fff;padding:4px 0;text-align:center;}',
      '.mywalk-slot.filled .plus{display:none;}',
      '.mywalk-field{margin-bottom:18px;}',
      '.mywalk-field label{display:block;font-size:.8rem;color:var(--text-secondary);',
      '  margin-bottom:6px;font-weight:600;}',
      '.mywalk-field input{width:100%;max-width:420px;background:var(--bg-tertiary);',
      '  border:1px solid var(--glass-border);border-radius:var(--border-radius-sm);',
      '  padding:10px 13px;color:var(--text-primary);font-size:.92rem;font-family:inherit;}',
      '.mywalk-field input:focus{outline:none;border-color:var(--accent-purple);}',
      '.mywalk-actions{display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;}',
      '.mywalk-tip{background:rgba(59,130,246,.08);border:1px solid rgba(59,130,246,.25);',
      '  border-radius:var(--border-radius-sm);padding:12px 15px;color:var(--text-secondary);',
      '  font-size:.84rem;margin-bottom:20px;line-height:1.55;}'
    ].join('');
    document.head.appendChild(css);
  }

  function injectShell() {
    var tabs = document.getElementById('tab-portfolio');
    var tab = document.createElement('button');
    tab.className = 'nav-tab';
    tab.id = 'tab-mywalk';
    tab.textContent = '🚶 My Walkthroughs';
    tabs.parentNode.insertBefore(tab, tabs.nextSibling);

    var panel = document.createElement('div');
    panel.className = 'app-container hidden';
    panel.id = 'mywalk-container';
    document.getElementById('wizard-container').parentNode.appendChild(panel);

    var walkC = document.getElementById('walkthrough-container');
    var wizC = document.getElementById('wizard-container');

    tab.addEventListener('click', function () {
      document.querySelectorAll('.nav-tab').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      walkC.classList.add('hidden');
      wizC.classList.add('hidden');
      panel.classList.remove('hidden');
      renderList();
    });

    // Returning to another tab must hide this panel too.
    ['tab-walkthrough', 'tab-wizard', 'tab-portfolio'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('click', function () {
        panel.classList.add('hidden');
        tab.classList.remove('active');
      });
    });
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderList() {
    var box = document.getElementById('mywalk-container');
    store.all().then(function (list) {
      var html = ''
        + '<div class="mywalk-head"><div>'
        + '<h2>My Walkthroughs</h2>'
        + '<p>Build a walkthrough of any space from your own photos, then walk through it '
        + 'with the same controls as the built-in tours. Everything stays in this browser.</p>'
        + '</div><button class="mywalk-btn" id="mywalk-new">+ Create Walkthrough</button></div>';

      // Once a personal walkthrough is loaded the viewer stays inside it, so
      // there must always be a way back to the built-in tour.
      if (loadedId) {
        html += '<div class="mywalk-tip" style="display:flex;align-items:center;'
          + 'justify-content:space-between;gap:14px;flex-wrap:wrap;">'
          + '<span>You are currently walking through your own walkthrough.</span>'
          + '<button class="mywalk-btn ghost" id="mywalk-exit">Return to built-in Lobby tour</button>'
          + '</div>';
      }

      if (!list.length) {
        html += '<div class="mywalk-empty"><strong>No walkthroughs yet.</strong><br>'
          + 'Create one and add photos for each stop along your route.</div>';
      } else {
        html += '<div class="mywalk-grid">';
        list.forEach(function (wt) {
          var shots = wt.positions.reduce(function (a, p) {
            return a + Object.keys(DIRS).filter(function (d) { return p[d]; }).length;
          }, 0);
          var cover = null;
          for (var i = 0; i < wt.positions.length && !cover; i++) {
            for (var k in DIRS) if (wt.positions[i][k]) { cover = wt.positions[i][k]; break; }
          }
          html += '<div class="mywalk-card">'
            + (cover ? '<img class="thumb" src="' + URL.createObjectURL(cover) + '" alt="">'
                     : '<div class="thumb"></div>')
            + '<div class="body"><h3>' + esc(wt.name) + '</h3>'
            + '<div class="meta">' + wt.positions.length + ' stop'
            + (wt.positions.length === 1 ? '' : 's') + ' · ' + shots + ' photo'
            + (shots === 1 ? '' : 's') + '</div>'
            + '<div class="row">'
            + '<button class="mywalk-btn" data-open="' + wt.id + '">Walk</button>'
            + '<button class="mywalk-btn ghost" data-edit="' + wt.id + '">Edit</button>'
            + '<button class="mywalk-btn danger" data-del="' + wt.id + '">Delete</button>'
            + '</div></div></div>';
        });
        html += '</div>';
      }
      box.innerHTML = html;

      document.getElementById('mywalk-new').onclick = function () { openBuilder(null); };

      var exit = document.getElementById('mywalk-exit');
      if (exit) exit.onclick = function () { returnToBuiltIn(); };
      box.querySelectorAll('[data-open]').forEach(function (b) {
        b.onclick = function () { loadWalkthrough(b.getAttribute('data-open')); };
      });
      box.querySelectorAll('[data-edit]').forEach(function (b) {
        b.onclick = function () {
          store.get(b.getAttribute('data-edit')).then(openBuilder);
        };
      });
      box.querySelectorAll('[data-del]').forEach(function (b) {
        b.onclick = function () {
          var id = b.getAttribute('data-del');
          if (!confirm('Delete this walkthrough? This cannot be undone.')) return;
          if (loadedId === id) unload();
          store.del(id).then(renderList);
        };
      });
    });
  }

  function openBuilder(existing) {
    draft = existing || {
      id: 'wt_' + Date.now(),
      name: '',
      room: 'user_' + Date.now(),
      created: new Date().toISOString(),
      positions: [{}]
    };
    renderBuilder();
  }

  function renderBuilder() {
    var box = document.getElementById('mywalk-container');
    var html = ''
      + '<div class="mywalk-head"><div><h2>'
      + (draft.name ? 'Edit Walkthrough' : 'New Walkthrough') + '</h2>'
      + '<p>Add a stop for each place you paused along your route, then attach the '
      + 'photos you took while facing each direction.</p></div></div>'
      + '<div class="mywalk-tip"><strong>How to capture:</strong> stand at your first spot and '
      + 'photograph Forward. Walk a few steps, photograph Forward again, then Left and Right. '
      + 'Repeat to the end, then turn around for the Back views. Only Forward is required — '
      + 'add Left, Right and Back wherever you have them.</div>'
      + '<div class="mywalk-field"><label for="mywalk-name">Walkthrough name</label>'
      + '<input id="mywalk-name" placeholder="e.g. Ground floor tour" value="'
      + esc(draft.name) + '"></div>'
      + '<div id="mywalk-stops"></div>'
      + '<div class="mywalk-actions">'
      + '<button class="mywalk-btn ghost" id="mywalk-addstop">+ Add Stop</button>'
      + '<button class="mywalk-btn" id="mywalk-save">Save Walkthrough</button>'
      + '<button class="mywalk-btn ghost" id="mywalk-cancel">Cancel</button>'
      + '</div>';
    box.innerHTML = html;

    renderStops();

    document.getElementById('mywalk-name').oninput = function (e) { draft.name = e.target.value; };
    document.getElementById('mywalk-addstop').onclick = function () {
      draft.positions.push({});
      renderStops();
    };
    document.getElementById('mywalk-cancel').onclick = function () { draft = null; renderList(); };
    document.getElementById('mywalk-save').onclick = saveDraft;
  }

  function renderStops() {
    var wrap = document.getElementById('mywalk-stops');
    wrap.innerHTML = '';

    draft.positions.forEach(function (pos, i) {
      var stop = document.createElement('div');
      stop.className = 'mywalk-stop';

      var head = document.createElement('div');
      head.className = 'mywalk-stop-head';
      head.innerHTML = '<strong>Stop ' + (i + 1) + '</strong>';
      if (draft.positions.length > 1) {
        var rm = document.createElement('button');
        rm.className = 'mywalk-btn danger';
        rm.style.padding = '5px 11px';
        rm.style.fontSize = '.78rem';
        rm.textContent = 'Remove';
        rm.onclick = function () { draft.positions.splice(i, 1); renderStops(); };
        head.appendChild(rm);
      }
      stop.appendChild(head);

      var slots = document.createElement('div');
      slots.className = 'mywalk-slots';

      ['f', 'l', 'r', 'b'].forEach(function (d) {
        var slot = document.createElement('div');
        slot.className = 'mywalk-slot' + (pos[d] ? ' filled' : '');
        slot.title = pos[d] ? 'Click to replace · right-click to remove' : 'Click to add a photo';

        if (pos[d]) {
          var img = document.createElement('img');
          img.src = URL.createObjectURL(pos[d]);
          img.alt = DIR_LABEL[d] + ' view at stop ' + (i + 1);
          slot.appendChild(img);
        } else {
          var plus = document.createElement('div');
          plus.className = 'plus';
          plus.textContent = '+';
          slot.appendChild(plus);
        }

        var lbl = document.createElement('div');
        lbl.className = 'lbl';
        lbl.textContent = DIR_LABEL[d];
        slot.appendChild(lbl);

        slot.onclick = function () { pickPhoto(i, d); };
        slot.oncontextmenu = function (e) {
          e.preventDefault();
          if (pos[d]) { delete pos[d]; renderStops(); }
        };
        slots.appendChild(slot);
      });

      stop.appendChild(slots);
      wrap.appendChild(stop);
    });
  }

  function pickPhoto(index, dir) {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function () {
      var file = input.files && input.files[0];
      if (!file) return;
      if (!/^image\//.test(file.type)) { alert('Please choose an image file.'); return; }
      draft.positions[index][dir] = file;   // File is a Blob; IndexedDB stores it directly
      renderStops();
    };
    input.click();
  }

  function saveDraft() {
    var name = (draft.name || '').trim();
    if (!name) { alert('Give your walkthrough a name first.'); return; }

    var shots = draft.positions.reduce(function (a, p) {
      return a + Object.keys(DIRS).filter(function (d) { return p[d]; }).length;
    }, 0);
    if (!shots) { alert('Add at least one photo before saving.'); return; }

    var noForward = draft.positions.some(function (p, i) {
      return !p.f && (p.l || p.r || p.b) && i > 0;
    });
    if (noForward && !confirm(
      'Some stops have no Forward photo, so walking between them may be limited. Save anyway?'
    )) return;

    draft.name = name;
    draft.positions = draft.positions.filter(function (p) {
      return Object.keys(DIRS).some(function (d) { return p[d]; });
    });

    store.put(draft).then(function () {
      var id = draft.id;
      draft = null;
      renderList();
      if (confirm('Saved. Walk through it now?')) loadWalkthrough(id);
    }).catch(function (e) {
      alert('Could not save: ' + e);
    });
  }

  /* ---------------------------------------------------------------- start */

  function init() {
    if (!document.getElementById('tab-portfolio') || typeof nodes === 'undefined') return;
    injectStyles();
    injectShell();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
