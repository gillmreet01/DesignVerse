/* ==========================================================================
   Landing / front door.

   Injects a full-screen welcome overlay that explains what the product is
   before dropping the visitor into a walkthrough. Self-contained: one <script>
   tag, its own styles, no dependency on app.js internals beyond clicking the
   existing tab buttons.

   Shows on load unless the visitor opted out ("Skip this welcome next time").
   Re-openable any time by clicking the header logo.
   ========================================================================== */

(function () {
  'use strict';

  var SKIP_KEY = 'lobby_landing_skip';

  var CARDS = [
    {
      tab: 'tab-walkthrough',
      icon: '🏛️',
      title: 'Virtual Walkthrough',
      body: 'Walk through a real lobby and switch between six design tiers — from a '
        + 'simple declutter to a full walnut-and-marble remodel. Arrows or W/A/S/D to move.',
      cta: 'Explore the lobby'
    },
    {
      tab: 'tab-wizard',
      icon: '🎨',
      title: 'Design Studio',
      body: 'Upload a room photo and preview it in five styles, with a design brief and '
        + 'shopping ideas. The preview is a colour-graded mood board of your photo — a '
        + 'direction to picture, not a generated redesign.',
      cta: 'Open the studio'
    },
    {
      tab: 'tab-mywalk',
      icon: '🚶',
      title: 'My Walkthroughs',
      body: 'Build your own walkthrough from photos you took while moving through a space, '
        + 'then explore it with the same controls. Everything stays in your browser.',
      cta: 'Build your own'
    }
  ];

  function injectStyles() {
    var s = document.createElement('style');
    s.textContent = [
      '#landing-overlay{position:fixed;inset:0;z-index:9999;overflow-y:auto;',
      '  background:radial-gradient(1200px 600px at 50% -10%,rgba(124,58,237,0.22),transparent 60%),',
      '  var(--bg-primary,#0a0b10);display:flex;align-items:center;justify-content:center;',
      '  padding:44px 22px;animation:landing-fade .4s ease;}',
      '@keyframes landing-fade{from{opacity:0}to{opacity:1}}',
      '#landing-overlay.closing{opacity:0;transition:opacity .3s ease;pointer-events:none;}',
      '.landing-inner{max-width:960px;width:100%;text-align:center;}',
      '.landing-badge{display:inline-block;font-family:var(--font-family-display,sans-serif);',
      '  font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent-violet,#b98cff);',
      '  border:1px solid var(--glass-border,rgba(255,255,255,.1));border-radius:30px;',
      '  padding:6px 15px;margin-bottom:22px;background:var(--glass-bg,rgba(255,255,255,.03));}',
      '.landing-inner h1{font-family:var(--font-family-display,sans-serif);font-weight:800;',
      '  font-size:clamp(2rem,5vw,3.3rem);line-height:1.08;margin:0 0 16px;color:var(--text-primary,#f3f4f6);}',
      '.landing-inner h1 .grad{background:var(--accent-gradient,linear-gradient(135deg,#7c3aed,#b98cff));',
      '  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}',
      '.landing-lead{color:var(--text-secondary,#9ca3af);font-size:clamp(.95rem,2vw,1.12rem);',
      '  max-width:60ch;margin:0 auto 34px;line-height:1.6;}',
      '.landing-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:30px;text-align:left;}',
      '@media(max-width:760px){.landing-cards{grid-template-columns:1fr;}}',
      '.landing-card{background:var(--glass-bg,rgba(255,255,255,.03));',
      '  border:1px solid var(--glass-border,rgba(255,255,255,.08));border-radius:var(--border-radius-md,14px);',
      '  padding:22px 20px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease;',
      '  display:flex;flex-direction:column;}',
      '.landing-card:hover{transform:translateY(-3px);border-color:var(--accent-purple,#7c3aed);',
      '  box-shadow:0 10px 30px rgba(124,58,237,.18);}',
      '.landing-card .ico{font-size:1.7rem;margin-bottom:12px;}',
      '.landing-card h3{font-family:var(--font-family-display,sans-serif);font-size:1.08rem;margin:0 0 8px;',
      '  color:var(--text-primary,#f3f4f6);}',
      '.landing-card p{color:var(--text-secondary,#9ca3af);font-size:.85rem;line-height:1.55;margin:0 0 16px;flex:1;}',
      '.landing-card .go{font-family:var(--font-family-display,sans-serif);font-weight:600;font-size:.85rem;',
      '  color:var(--accent-violet,#b98cff);display:inline-flex;align-items:center;gap:6px;}',
      '.landing-card:hover .go{gap:10px;}',
      '.landing-foot{display:flex;flex-direction:column;align-items:center;gap:16px;}',
      '.landing-enter{background:var(--accent-gradient,linear-gradient(135deg,#7c3aed,#b98cff));color:#fff;',
      '  border:none;padding:13px 34px;border-radius:var(--border-radius-sm,8px);font-weight:600;',
      '  font-family:var(--font-family-display,sans-serif);font-size:.95rem;cursor:pointer;',
      '  transition:transform .2s ease,box-shadow .2s ease;}',
      '.landing-enter:hover{transform:translateY(-1px);box-shadow:0 8px 24px rgba(124,58,237,.35);}',
      '.landing-skip{display:flex;align-items:center;gap:8px;color:var(--text-muted,#6b7280);font-size:.8rem;cursor:pointer;}',
      '.landing-skip input{accent-color:var(--accent-purple,#7c3aed);cursor:pointer;}',
      '.landing-note{color:var(--text-muted,#6b7280);font-size:.76rem;max-width:64ch;line-height:1.5;margin:4px auto 0;}',
      '.landing-logo-hint{position:absolute;top:14px;right:18px;color:var(--text-muted,#6b7280);font-size:.72rem;}'
    ].join('');
    document.head.appendChild(s);
  }

  function open() {
    if (document.getElementById('landing-overlay')) return;

    var ov = document.createElement('div');
    ov.id = 'landing-overlay';

    var cardsHtml = CARDS.map(function (c, i) {
      return '<div class="landing-card" data-tab="' + c.tab + '" tabindex="0" role="button">'
        + '<div class="ico">' + c.icon + '</div>'
        + '<h3>' + c.title + '</h3>'
        + '<p>' + c.body + '</p>'
        + '<span class="go">' + c.cta + ' →</span>'
        + '</div>';
    }).join('');

    ov.innerHTML =
      '<span class="landing-logo-hint">Tip: click the 📐 logo to reopen this</span>'
      + '<div class="landing-inner">'
      + '<span class="landing-badge">Design concept demo</span>'
      + '<h1>Reimagine a space, <span class="grad">tier by tier</span></h1>'
      + '<p class="landing-lead">An interactive interior-design demo. Walk through a real lobby and '
      + 'compare six upgrade tiers, preview room styles, or build a walkthrough from your own photos. '
      + 'No sign-up, and nothing you add ever leaves your browser.</p>'
      + '<div class="landing-cards">' + cardsHtml + '</div>'
      + '<div class="landing-foot">'
      + '<button class="landing-enter" id="landing-enter">Enter the walkthrough</button>'
      + '<label class="landing-skip"><input type="checkbox" id="landing-skip"> Skip this welcome next time</label>'
      + '<p class="landing-note">Walkthrough upgrade images are pre-rendered design concepts, '
      + 'not live AI generation. The Design Studio preview colour-grades your photo to suggest a '
      + 'direction; it does not alter the room.</p>'
      + '</div></div>';

    document.body.appendChild(ov);

    var persistSkip = function () {
      var cb = document.getElementById('landing-skip');
      try { if (cb && cb.checked) localStorage.setItem(SKIP_KEY, '1'); } catch (e) { /* ignore */ }
    };

    var enter = function (tabId) {
      persistSkip();
      if (tabId) { var t = document.getElementById(tabId); if (t) t.click(); }
      close();
    };

    document.getElementById('landing-enter').onclick = function () { enter('tab-walkthrough'); };
    ov.querySelectorAll('.landing-card').forEach(function (card) {
      var go = function () { enter(card.getAttribute('data-tab')); };
      card.onclick = go;
      card.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } };
    });

    // Esc dismisses to the current (default) view.
    var onKey = function (e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onKey); } };
    document.addEventListener('keydown', onKey);
  }

  function close() {
    var ov = document.getElementById('landing-overlay');
    if (!ov) return;
    ov.classList.add('closing');
    setTimeout(function () { if (ov.parentNode) ov.parentNode.removeChild(ov); }, 300);
  }

  function wireReopen() {
    // Clicking the header logo brings the welcome back.
    var logo = document.querySelector('.header-logo');
    if (logo) {
      logo.style.cursor = 'pointer';
      logo.title = 'About this app';
      logo.addEventListener('click', open);
    }
  }

  function init() {
    injectStyles();
    wireReopen();
    var skip = false;
    try { skip = localStorage.getItem(SKIP_KEY) === '1'; } catch (e) { /* ignore */ }
    if (!skip) open();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
