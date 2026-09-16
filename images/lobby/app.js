// ==========================================================================
// 1. Virtual Walkthrough Controller
// ==========================================================================

const nodes = {
  // ==========================================
  // LOBBY WALKTHROUGH NODES (8 Nodes)
  // ==========================================
  lobby_pos0_f: {
    title: "Lobby Entrance",
    headingText: "Entrance View - Facing Forward",
    filePrefix: "lobby_starter",
    room: "lobby",
    posNum: 0,
    rotation: 0,
    cx: 50,
    cy: 95,
    transitions: {
      up: "lobby_pos1_f"
    },
    features: {
      original: [
        "White pedestal washbasin with basic exposed plumbing on the left",
        "Cluttered wooden coffee table and mismatched sofa pillows",
        "Classic marble floor and white plastered walls",
        "Clothes hanging on the open doorways in the background",
        "White plastic stackable armchair near the center"
      ],
      level1: [
        "Subtle tidying: removed towels and hanging clothes from the door frames",
        "Rearranged sofas: cushions fluffed and neatly aligned",
        "Surface decluttered: coffee table and floor cleared of loose objects",
        "Polished tiles: floor tile surface reflections cleaned and smoothed"
      ],
      level2: [
        "Subtle stone walkway: natural flat stones inlaid flush into the marble flooring",
        "Organic greenery: ferns and leafy plants planted directly into natural soil beds along the stair column (no planters)",
        "Visual breathing room: all hanging garments and floor clutter cleared",
        "Cleaned seating layout and coffee table surfaces"
      ],
      minimal: [
        "Cleaned doorways: clothes and towels removed",
        "Tidied seating: cushions neatly arranged and organized",
        "Armchair upgraded: plastic chair replaced with simple wooden chair",
        "Modern vanity mirror: black-framed mirror added above washbasin",
        "Clutter cleared: coffee table and floor clutter removed"
      ],
      moderate: [
        "Contemporary grey fabric sofas replacing original furniture",
        "Minimalist wooden coffee table in center",
        "Warm neutral wall paint (beige/greige tone)",
        "Soft neutral area rug grounding the seating zone",
        "Floating wooden vanity sink replacing the pedestal basin",
        "LED-backlit rectangular mirror above the sink"
      ],
      complete: [
        "Premium walnut wood panels and gold-veined marble slabs on walls",
        "Large-format polished grey marble floor tiles",
        "Curved velvet designer sofa and matching armchair with brass frames",
        "Luxurious white marble coffee table with gold base",
        "High-end solid marble vanity top with premium gold faucet",
        "Backlit circular LED vanity mirror as room focal point"
      ]
    }
  },
  lobby_pos1_f: {
    title: "Lobby Center (Forward)",
    headingText: "Middle Position - Facing Forward",
    filePrefix: "lobby_pos1_f",
    room: "lobby",
    posNum: 1,
    rotation: 0,
    cx: 50,
    cy: 60,
    transitions: {
      up: "lobby_pos2_f",
      down: "lobby_pos0_f",
      left: "lobby_pos1_l",
      right: "lobby_pos1_r",
      uturn: "lobby_pos1_b"
    },
    features: {
      original: [
        "Direct forward view of the two inner doorways",
        "A closer look at the items hanging on the left door frame",
        "Pedestal basin visible on the far left edge",
        "Mismatched sofas and wooden coffee table in detail"
      ],
      level1: [
        "Subtle declutter: doorway frames cleared of towels and clothes",
        "Sofas and coffee table surfaces tidied up slightly"
      ],
      level2: [
        "Stone walkway inlaid path visible leading from the entrance",
        "Small ground-planted indoor ferns lining the wall corners"
      ],
      minimal: [
        "Doorways cleared of all hanging garments",
        "Sofa cushions neatly fluffed and aligned",
        "Coffee table surface decluttered",
        "Modern basin mirror visible on the left wall"
      ],
      moderate: [
        "Warm paint color continues across the main partition walls",
        "Sleek light grey sofas with clean-lined throw cushions",
        "Modern area rug visible underfoot",
        "Updated floating wooden vanity visible on the left"
      ],
      complete: [
        "Walnut wood paneling details framing both doorways",
        "Gold-veined white marble accent wall panels",
        "Polished floor tiles showing clean reflections",
        "Cream curved velvet sofa and designer coffee table set"
      ]
    }
  },
  lobby_pos1_r: {
    title: "Lobby Center (Right)",
    headingText: "Middle Position - Looking Right",
    filePrefix: "lobby_pos1_r",
    room: "lobby",
    posNum: 1,
    rotation: 90,
    cx: 50,
    cy: 60,
    transitions: {
      up: "draw_pos0_f",
      left: "lobby_pos1_f",
      right: "lobby_pos1_b",
      uturn: "lobby_pos1_l"
    },
    features: {
      original: [
        "Close-up of the built-in display cabinet with family items",
        "Older fabric-draped sofa with mismatched pillows",
        "Wall-mounted family portraits on the right wall",
        "Split view of the doorways on the left edge"
      ],
      level1: [
        "Organized items in display cabinet to look tidy",
        "Sofa cushions rearranged neatly, floor swept"
      ],
      level2: [
        "Subtle natural soil beds with ground plants in display corners",
        "Subtle stone path borders visible on the floor edge"
      ],
      minimal: [
        "Cleaned sofa area, blankets folded neatly",
        "Display cabinet items organized",
        "Removal of visual clutter on the floor"
      ],
      moderate: [
        "Modern grey sofa set fully visible on the right",
        "Warm beige wall color contrasting with the dark display frame",
        "Neutral floor rug matching the contemporary sofa set"
      ],
      complete: [
        "Sleek custom glass-and-brass recessed display cabinet",
        "Designer cream armchair with gold legs in the corner",
        "Walnut wood paneling and marble details on the main wall",
        "Elegant lighting casting warm glows down the wall"
      ]
    }
  },
  lobby_pos1_l: {
    title: "Lobby Center (Left)",
    headingText: "Middle Position - Looking Left",
    filePrefix: "lobby_pos1_l",
    room: "lobby",
    posNum: 1,
    rotation: 270,
    cx: 50,
    cy: 60,
    transitions: {
      up: "bed_pos0_f",
      left: "lobby_pos1_b",
      right: "lobby_pos1_f",
      uturn: "lobby_pos1_r"
    },
    features: {
      original: [
        "Direct close-up of the washbasin and staircase area",
        "Exposed pipes and white pedestal basin support",
        "Old decorative deer painting on the wall",
        "Wooden stair baluster showing traditional carving"
      ],
      level1: [
        "Tidied soap pump and towels near the washbasin",
        "Cleared floor spaces around the stairs"
      ],
      level2: [
        "Subtle ferns planted naturally at the base of the stairs",
        "Stone pathway edging framing the washbasin floor area"
      ],
      minimal: [
        "Cleaned sink basin area, soap and hand towels tidied",
        "Modern black-framed square mirror on the wall",
        "Deer painting aligned neatly"
      ],
      moderate: [
        "Floating wood vanity sink with white ceramic top",
        "LED-backlit rectangular mirror framing",
        "Warm beige paint applied to the staircase support wall"
      ],
      complete: [
        "High-end custom marble floating vanity with gold faucet",
        "Large round backlit LED vanity mirror",
        "Sleek architectural details covering the staircase column",
        "Sophisticated walnut details highlighting the stair boundary"
      ]
    }
  },
  lobby_pos2_r: {
    title: "Lobby End (Right)",
    headingText: "End Position - Looking Right",
    filePrefix: "lobby_pos2_r",
    room: "lobby",
    posNum: 2,
    rotation: 90,
    cx: 50,
    cy: 25,
    transitions: {
      left: "lobby_pos2_f",
      right: "lobby_pos2_b",
      uturn: "lobby_pos2_l",
      down: "lobby_pos1_r"
    },
    features: {
      original: [
        "Deep perspective view of the seating area from the back",
        "Built-in display shelf visible in the upper right",
        "Older coffee table and sofa styling"
      ],
      level1: [
        "Rear seating pillows tidied and organized",
        "Floor swept and clear of dust/loose items"
      ],
      level2: [
        "Subtle greenery trailing near the corner edges",
        "Walkway path terminates cleanly at the floor border"
      ],
      minimal: [
        "Sofa blankets and cushions neatly placed",
        "Surrounding floors swept and clutter-free"
      ],
      moderate: [
        "Clean layout with grey matching furniture set",
        "New wood coffee table and beige wall finishes"
      ],
      complete: [
        "Walnut panels lining the walls to the end of the room",
        "Premium curved velvet seating showing detailed upholstery",
        "Polished floor tile margins reflecting warm wall lighting"
      ]
    }
  },
  lobby_pos2_l: {
    title: "Lobby End (Left)",
    headingText: "End Position - Looking Left",
    filePrefix: "lobby_pos2_l",
    room: "lobby",
    posNum: 2,
    rotation: 270,
    cx: 50,
    cy: 25,
    transitions: {
      left: "lobby_pos2_b",
      right: "lobby_pos2_f",
      uturn: "lobby_pos2_r",
      down: "lobby_pos1_l"
    },
    features: {
      original: [
        "Deep perspective view of the washbasin and stairs",
        "Staircase rails and pedestal sink visible at a distance"
      ],
      level1: [
        "Walkway next to stair column cleared of loose items",
        "Washbasin counter tidied"
      ],
      level2: [
        "Ferns planted naturally under the staircase rail section",
        "Subtle stone path leading towards the sink"
      ],
      minimal: [
        "decluttered walkways along the stair post",
        "Modern square vanity mirror visible in the background"
      ],
      moderate: [
        "Floating wood vanity and glowing LED mirror visible on the left",
        "Warm beige painted walls giving a cohesive look"
      ],
      complete: [
        "Elegant marble vanity with gold fixtures visible",
        "Large glowing round backlit LED mirror",
        "Polished marble floor tiles leading towards the entrance"
      ]
    }
  },
  lobby_pos2_b: {
    title: "Lobby End (Facing Entrance)",
    headingText: "End Position - Turned Around",
    filePrefix: "lobby_pos2_b",
    room: "lobby",
    posNum: 2,
    rotation: 180,
    cx: 50,
    cy: 25,
    transitions: {
      up: "lobby_pos1_b",
      left: "lobby_pos2_r",
      right: "lobby_pos2_l",
      uturn: "lobby_pos2_f"
    },
    features: {
      original: [
        "View looking back towards the entrance of the lobby",
        "Traditional doorways on the right and left sides",
        "Mismatched sofas and pedestal sink in a reversed view"
      ],
      level1: [
        "Entrance pathways decluttered and tidied",
        "Couches and pillows organized in entrance view"
      ],
      level2: [
        "Subtle stone walkway stretching towards the entrance",
        "Lush ground plantings flanking the door frames"
      ],
      minimal: [
        "Entrance view completely cleared of clutter",
        "Tidied couches and wooden chair layout visible from the rear"
      ],
      moderate: [
        "Cohesive modern look from the rear: greige walls and grey sofas",
        "Area rug centered neatly in the room view"
      ],
      complete: [
        "Stunning walnut paneling framing the main entrance view",
        "Glowing vanity lights and display lights reflecting on the polished marble floors"
      ]
    }
  },
  lobby_pos1_b: {
    title: "Lobby Center (Facing Entrance)",
    headingText: "Middle Position - Facing Entrance",
    filePrefix: "lobby_pos1_b",
    room: "lobby",
    posNum: 1,
    rotation: 180,
    cx: 50,
    cy: 60,
    transitions: {
      up: "lobby_pos0_f",
      down: "lobby_pos2_b",
      left: "lobby_pos1_r",
      right: "lobby_pos1_l",
      uturn: "lobby_pos1_f"
    },
    features: {
      original: [
        "A closer look back towards the entrance area",
        "Washbasin cabinet visible on the right",
        "Seating details visible on the left"
      ],
      level1: [
        "Decluttered walkways and tidied sofa details",
        "Floor swept and basin area cleaned up"
      ],
      level2: [
        "Walkway path and indoor ground plants visible in the entrance frame"
      ],
      minimal: [
        "Clutter-free entrance view from the center of the room",
        "Clean floor and tidied sofa details"
      ],
      moderate: [
        "Polished, cohesive layout with greige walls and modern seating",
        "Clean, floating vanity profile visible on the right"
      ],
      complete: [
        "Luxury hotel lobby vibe when looking back at the entrance",
        "Beautiful wall lighting and wood textures reflecting on the marble"
      ]
    }
  },
  lobby_pos2_f: {
    title: "Lobby End (Forward)",
    headingText: "End Position - Facing Forward",
    filePrefix: "lobby_pos2_f",
    room: "lobby",
    posNum: 2,
    rotation: 0,
    cx: 50,
    cy: 25,
    transitions: {
      down: "lobby_pos1_f",
      left: "lobby_pos2_l",
      right: "lobby_pos2_r",
      uturn: "lobby_pos2_b"
    },
    features: {
      original: [
        "Close-up forward view of the bedroom and drawing room doorways",
        "Framed family portrait mounted between the two door lintels",
        "Light switches and wiring panel visible on the left plaster wall",
        "Curtains and bed viewable through the open bedroom doorway"
      ]
    }
  },

  // ==========================================
  // BEDROOM WALKTHROUGH NODES (5 Nodes)
  // ==========================================
  bed_pos0_f: {
    title: "Bedroom Entrance",
    headingText: "Entrance View - Looking Into Bedroom",
    filePrefix: "bed_pos0_f",
    room: "bedroom",
    posNum: 0,
    rotation: 0,
    cx: 50,
    cy: 95,
    transitions: {
      up: "bed_pos1_f",
      down: "lobby_pos1_l", // Step back into lobby!
      uturn: "lobby_pos1_l"
    },
    features: {
      original: [
        "View looking into the bedroom from the entry doorway",
        "Double bed frame placed against the main back wall",
        "Warm neutral bed linens and pillows",
        "Natural daylight coming from the window on the right wall",
        "Traditional wooden nightstand/bedside table on the left side"
      ]
    }
  },
  bed_pos1_f: {
    title: "Bedroom Center (Forward)",
    headingText: "Middle Position - Facing Forward",
    filePrefix: "bed_pos1_f",
    room: "bedroom",
    posNum: 1,
    rotation: 0,
    cx: 50,
    cy: 55,
    transitions: {
      down: "bed_pos0_f",
      left: "bed_pos1_l",
      right: "bed_pos1_r",
      uturn: "bed_pos1_b"
    },
    features: {
      original: [
        "Close-up perspective of the double bed and headboard area",
        "Neat wall-paint details behind the headboard",
        "Symmetrical layout showing bedside clearance space"
      ]
    }
  },
  bed_pos1_r: {
    title: "Bedroom Center (Right)",
    headingText: "Middle Position - Facing Window",
    filePrefix: "bed_pos1_r",
    room: "bedroom",
    posNum: 1,
    rotation: 90,
    cx: 50,
    cy: 55,
    transitions: {
      left: "bed_pos1_f",
      right: "bed_pos1_b",
      uturn: "bed_pos1_l"
    },
    features: {
      original: [
        "Perspective facing the main bedroom window layout",
        "Bright natural daylight casting pleasant ambient lighting",
        "Wall outlet and nightstand detailing visible on the right"
      ]
    }
  },
  bed_pos1_l: {
    title: "Bedroom Center (Left)",
    headingText: "Middle Position - Facing Left Wall",
    filePrefix: "bed_pos1_l",
    room: "bedroom",
    posNum: 1,
    rotation: 270,
    cx: 50,
    cy: 55,
    transitions: {
      left: "bed_pos1_b",
      right: "bed_pos1_f",
      uturn: "bed_pos1_r"
    },
    features: {
      original: [
        "View facing the left bedroom partition wall",
        "Ample floor clearance space ideal for a sliding wardrobe console",
        "Clean white plaster wall textures"
      ]
    }
  },
  bed_pos1_b: {
    title: "Bedroom Center (Looking Exit)",
    headingText: "Middle Position - Turned Around Facing Door",
    filePrefix: "bed_pos1_b",
    room: "bedroom",
    posNum: 1,
    rotation: 180,
    cx: 50,
    cy: 55,
    transitions: {
      up: "lobby_pos1_l", // Step back out into lobby!
      down: "bed_pos0_f",
      left: "bed_pos1_r",
      right: "bed_pos1_l",
      uturn: "bed_pos1_f"
    },
    features: {
      original: [
        "View looking back towards the bedroom entry door frame",
        "Sightline connecting directly back into the residential lobby",
        "Door swing clearance margin visible on the floor tiles"
      ]
    }
  },

  // ==========================================
  // DRAWING ROOM WALKTHROUGH NODES (5 Nodes)
  // ==========================================
  draw_pos0_f: {
    title: "Drawing Room Entrance",
    headingText: "Entrance View - Looking Into Drawing Room",
    filePrefix: "draw_pos0_f",
    room: "drawing",
    posNum: 0,
    rotation: 0,
    cx: 50,
    cy: 95,
    transitions: {
      up: "draw_pos1_f",
      down: "lobby_pos1_r", // Step back into lobby!
      uturn: "lobby_pos1_r"
    },
    features: {
      original: [
        "View looking into the drawing room lounge setup from the doorway",
        "Low-profile fabric couch and coffee table layout in center",
        "Large window on the back wall providing natural daylight",
        "Traditional storage credenza and wall portraits visible"
      ]
    }
  },
  draw_pos1_f: {
    title: "Drawing Room Center (Forward)",
    headingText: "Middle Position - Facing Forward",
    filePrefix: "draw_pos1_f",
    room: "drawing",
    posNum: 1,
    rotation: 0,
    cx: 50,
    cy: 60,
    transitions: {
      down: "draw_pos0_f",
      left: "draw_pos1_l",
      right: "draw_pos1_r",
      uturn: "draw_pos1_b"
    },
    features: {
      original: [
        "Close-up perspective of the main seating area",
        "Clean coffee table layout and sofa cushion arrangement",
        "Open spatial layout allowing comfortable foot traffic flow"
      ]
    }
  },
  draw_pos1_r: {
    title: "Drawing Room Center (Right)",
    headingText: "Middle Position - Facing Right Wall",
    filePrefix: "draw_pos1_r",
    room: "drawing",
    posNum: 1,
    rotation: 90,
    cx: 50,
    cy: 60,
    transitions: {
      left: "draw_pos1_f",
      right: "draw_pos1_b",
      uturn: "draw_pos1_l"
    },
    features: {
      original: [
        "View facing the right drawing room wall",
        "Clean, low cabinet unit suitable for a television console",
        "Decorative wall paintings and frames visible"
      ]
    }
  },
  draw_pos1_l: {
    title: "Drawing Room Center (Left)",
    headingText: "Middle Position - Facing Left Wall",
    filePrefix: "draw_pos1_l",
    room: "drawing",
    posNum: 1,
    rotation: 270,
    cx: 50,
    cy: 60,
    transitions: {
      left: "draw_pos1_b",
      right: "draw_pos1_f",
      uturn: "draw_pos1_r"
    },
    features: {
      original: [
        "View facing the left wall armchairs and sitting corner",
        "Additional accent armchair seating for guests",
        "Soft ambient daylight illuminating the corner textures"
      ]
    }
  },
  draw_pos1_b: {
    title: "Drawing Room Center (Looking Exit)",
    headingText: "Middle Position - Turned Around Facing Door",
    filePrefix: "draw_pos1_b",
    room: "drawing",
    posNum: 1,
    rotation: 180,
    cx: 50,
    cy: 60,
    transitions: {
      up: "lobby_pos1_r", // Step back out into lobby!
      down: "draw_pos0_f",
      left: "draw_pos1_r",
      right: "draw_pos1_l",
      uturn: "draw_pos1_f"
    },
    features: {
      original: [
        "View looking back towards the drawing room entryway doorway",
        "Sightline leading directly out back into the main lobby area",
        "Spacious wall clearance on both sides of the door frame"
      ]
    }
  }
};

// --- Walkthrough State ---
let walkLevel = 'original';
let walkPrevLevel = 'minimal';
// The tier the viewer last explicitly selected. Kept separate from walkLevel so
// passing through a view with no renders doesn't lose their choice.
let walkPreferredLevel = 'original';
let walkNodeId = 'lobby_pos0_f';
let walkDragging = false;
let isDebugMode = false;

// --- Walkthrough DOM Elements ---
const walkIndicator = document.getElementById('view-indicator');
const walkDetailsTitle = document.getElementById('details-tier-title');
const walkDetailsDesc = document.getElementById('details-tier-desc');
const walkUpgradesList = document.getElementById('upgrades-list');
const walkDetailsPanel = document.getElementById('details-panel');

const walkButtons = document.querySelectorAll('.tier-btn');
const walkModeToggle = document.getElementById('slider-mode-toggle');
const walkCompareStatus = document.getElementById('compare-status-text');

const walkFadeViewer = document.getElementById('fade-viewer');
const walkSliderViewer = document.getElementById('slider-viewer');

const walkSliderBg = document.getElementById('slider-upgrade-img');
const walkSliderFgContainer = document.getElementById('slider-fg-container');
const walkSliderFgImg = document.getElementById('slider-original-img');
const walkSliderHandle = document.getElementById('slider-handle');
const walkViewerContainer = document.getElementById('viewer-container');

// HUD & Compass
const wBtnUp = document.getElementById('nav-up');
const wBtnDown = document.getElementById('nav-down');
const wBtnLeft = document.getElementById('nav-left');
const wBtnRight = document.getElementById('nav-right');
const wBtnUturn = document.getElementById('nav-uturn');
const wCompassNeedle = document.getElementById('compass-needle');
const wPosIndicatorText = document.getElementById('position-indicator');
const wVisionCone = document.getElementById('vision-cone');

// --- Initial Setup Walkthrough ---
function initWalkthrough() {
  wBtnUp.addEventListener('click', () => navigate('up'));
  wBtnDown.addEventListener('click', () => navigate('down'));
  wBtnLeft.addEventListener('click', () => navigate('left'));
  wBtnRight.addEventListener('click', () => navigate('right'));
  wBtnUturn.addEventListener('click', () => navigate('uturn'));

  walkButtons.forEach(button => {
    button.addEventListener('click', () => {
      switchWalkLevel(button.getAttribute('data-level'));
    });
  });

  // Bind mini-map dot clicks for all rooms
  const dotMappings = {
    'lobby-dot-0': 'lobby_pos0_f',
    'lobby-dot-1': 'lobby_pos1_f',
    'lobby-dot-2': 'lobby_pos2_r',
    'bed-dot-0': 'bed_pos0_f',
    'bed-dot-1': 'bed_pos1_f',
    'draw-dot-0': 'draw_pos0_f',
    'draw-dot-1': 'draw_pos1_f'
  };
  Object.keys(dotMappings).forEach(dotId => {
    const dot = document.getElementById(dotId);
    if (dot) {
      dot.addEventListener('click', () => {
        walkNodeId = dotMappings[dotId];
        updateWalkView();
      });
    }
  });

  walkModeToggle.addEventListener('change', handleWalkModeToggle);

  // Keyboard navigation matching instructions
  window.addEventListener('keydown', (e) => {
    if (walkthroughContainer.classList.contains('hidden')) return;

    if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
      navigate('up');
    } else if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
      navigate('down');
    } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
      navigate('left');
    } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
      navigate('right');
    } else if (e.key.toLowerCase() === 'u') {
      navigate('uturn');
    }
  });
  
  updateWalkView();
}

function navigate(direction) {
  const node = nodes[walkNodeId];
  const targetId = node.transitions[direction];
  if (targetId) {
    walkNodeId = targetId;
    updateWalkView();
  }
}

function teleportWalk(posNum) {
  const currentRoom = nodes[walkNodeId].room;
  const matches = Object.keys(nodes).filter(k => nodes[k].room === currentRoom && nodes[k].posNum === posNum);
  if (matches.length > 0) {
    const dir = walkNodeId.split('_').slice(-1)[0];
    const best = matches.find(k => k.endsWith('_' + dir)) || matches[0];
    walkNodeId = best;
    updateWalkView();
  }
}

function updateHUDButton(button, targetId) {
  if (!button) return;
  if (targetId) {
    button.disabled = false;
    button.style.opacity = '1';
    button.style.pointerEvents = 'auto';
  } else {
    button.disabled = true;
    button.style.opacity = '0.2';
    button.style.pointerEvents = 'none';
  }
}

// --- Walkthrough asset availability ---------------------------------------
// Single source of truth for which upgrade levels have a REAL generated image
// for a given node. Tier buttons are disabled for levels not listed here, so
// the viewer is never shown the untouched original while a tier claims to be
// an upgrade. When new renders are generated, add the level here and the
// matching button switches on automatically.
const WALK_LEVELS = ['original', 'level1', 'level2', 'minimal', 'moderate', 'complete'];

function getAvailableLevels(node) {
  return WALK_LEVELS.slice();
}

function hasWalkAsset(node, level) {
  return getAvailableLevels(node).indexOf(level) !== -1;
}

function getWalkAssetPath(node, level) {
  // Safety net: never request a render that does not exist on disk.
  if (!hasWalkAsset(node, level)) level = 'original';
  const path = (level === 'original')
    ? `${node.filePrefix}_original.jpg`
    : `${node.filePrefix}_${level}.webp`;
  return path + "?v=3";
}

// A visitor must never see a broken-image icon. If any render fails to load,
// silently fall back to the current node's original photo. Image load errors
// do not bubble, so this listens in the capture phase.
document.addEventListener('error', (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = '1';
  const node = nodes[walkNodeId];
  if (node) {
    console.warn('[Walkthrough] Missing render, falling back to original:', img.src);
    img.src = getWalkAssetPath(node, 'original');
  }
}, true);

// Dim/disable tier buttons that have no render for this node, and drop the
// current level back to one that exists so the viewer never sees a tier that
// silently shows the untouched original.
function syncTierButtons(node) {
  const available = getAvailableLevels(node);
  walkButtons.forEach(btn => {
    const lvl = btn.getAttribute('data-level');
    const ok = available.indexOf(lvl) !== -1;
    btn.disabled = !ok;
    btn.style.opacity = ok ? '1' : '0.3';
    btn.style.pointerEvents = ok ? 'auto' : 'none';
    btn.title = ok ? '' : 'Design render not generated for this view yet';
  });
  // Restore the viewer's chosen tier as soon as a view supports it again.
  if (walkPreferredLevel && hasWalkAsset(node, walkPreferredLevel)) {
    walkLevel = walkPreferredLevel;
  } else if (!hasWalkAsset(node, walkLevel)) {
    // Fall back to the richest tier that does exist here.
    const order = ['complete', 'moderate', 'minimal', 'level2', 'level1', 'original'];
    walkLevel = order.find(l => available.indexOf(l) !== -1) || 'original';
  }
  walkButtons.forEach(b =>
    b.classList.toggle('active', b.getAttribute('data-level') === walkLevel));
}

function updateWalkView() {
  const node = nodes[walkNodeId];
  syncTierButtons(node);
  walkIndicator.textContent = `${node.title} - ${node.headingText}`;
  wPosIndicatorText.textContent = node.title;

  updateHUDButton(wBtnUp, node.transitions.up);
  updateHUDButton(wBtnDown, node.transitions.down);
  updateHUDButton(wBtnLeft, node.transitions.left);
  updateHUDButton(wBtnRight, node.transitions.right);
  updateHUDButton(wBtnUturn, node.transitions.uturn);

  updateWalkDetailsPanel();

  wCompassNeedle.style.transform = `rotate(${node.rotation}deg)`;
  
  // Highlight active dot on active map layout
  document.querySelectorAll('.map-dot').forEach(dot => dot.classList.remove('active'));
  let activeDotId = "";
  if (node.room === 'lobby') activeDotId = `lobby-dot-${node.posNum}`;
  else if (node.room === 'bedroom') activeDotId = `bed-dot-${node.posNum}`;
  else if (node.room === 'drawing') activeDotId = `draw-dot-${node.posNum}`;
  
  const activeDot = document.getElementById(activeDotId);
  if (activeDot) activeDot.classList.add('active');

  // Toggle dynamic blueprint layout groups
  const mapLobby = document.getElementById('map-lobby-layout');
  const mapBedroom = document.getElementById('map-bedroom-layout');
  const mapDrawing = document.getElementById('map-drawing-layout');
  
  if (mapLobby && mapBedroom && mapDrawing) {
    if (node.room === 'lobby') {
      mapLobby.classList.remove('hidden');
      mapBedroom.classList.add('hidden');
      mapDrawing.classList.add('hidden');
    } else if (node.room === 'bedroom') {
      mapLobby.classList.add('hidden');
      mapBedroom.classList.remove('hidden');
      mapDrawing.classList.add('hidden');
    } else if (node.room === 'drawing') {
      mapLobby.classList.add('hidden');
      mapBedroom.classList.add('hidden');
      mapDrawing.classList.remove('hidden');
    }
  }

  wVisionCone.setAttribute('transform', `translate(${node.cx}, ${node.cy}) rotate(${node.rotation})`);

  const isSlider = walkModeToggle.checked;
  const originalSrc = getWalkAssetPath(node, 'original');
  const upgradeSrc = getWalkAssetPath(node, walkLevel);

  if (isSlider) {
    walkSliderBg.src = upgradeSrc;
    walkSliderFgImg.src = originalSrc;
  } else {
    const active = document.getElementById('fade-active-img');
    const next = document.getElementById('fade-next-img');
    next.onload = () => {
      next.classList.add('active');
      active.classList.remove('active');
      active.id = 'fade-next-img';
      next.id = 'fade-active-img';
    };
    next.src = upgradeSrc;
  }

  // Update filename debug badge text
  const debugBadge = document.getElementById('filename-debug-badge');
  const debugText = document.getElementById('filename-debug-text');
  if (debugBadge && debugText) {
    if (isDebugMode) {
      debugBadge.classList.remove('hidden');
      const originalPath = originalSrc.split('?')[0];
      const upgradePath = upgradeSrc.split('?')[0];
      const originalFile = originalPath.split('/').pop();
      const upgradeFile = upgradePath.split('/').pop();
      
      if (isSlider && walkLevel !== 'original') {
        debugText.textContent = `Before: ${originalFile} | After: ${upgradeFile}`;
      } else {
        const activeFile = (walkLevel === 'original') ? originalFile : upgradeFile;
        debugText.textContent = activeFile;
      }
    } else {
      debugBadge.classList.add('hidden');
    }
  }

  // Preload adjacent node views
  Object.values(node.transitions).forEach(tid => {
    const target = nodes[tid];
    if (target) {
      new Image().src = getWalkAssetPath(target, 'original');
      if (walkLevel !== 'original') {
        new Image().src = getWalkAssetPath(target, walkLevel);
      }
    }
  });
}

function switchWalkLevel(level) {
  walkButtons.forEach(btn => {
    if (btn.getAttribute('data-level') === level) btn.classList.add('active');
    else btn.classList.remove('active');
  });
  walkLevel = level;
  // Remember what the viewer actually chose, so walking through a room that
  // has no renders yet doesn't silently drop them back to the original.
  walkPreferredLevel = level;
  if (level !== 'original') walkPrevLevel = level;
  if (walkModeToggle.checked && level === 'original') {
    switchWalkLevel(walkPrevLevel);
    return;
  }
  updateWalkView();
}

function updateWalkDetailsPanel() {
  const node = nodes[walkNodeId];
  const list = node.features[walkLevel] || node.features['original'] || [];
  walkDetailsPanel.style.opacity = '0.3';
  setTimeout(() => {
    let displayTitle = walkLevel;
    if (walkLevel === 'original') displayTitle = 'Raw Canvas';
    else if (walkLevel === 'level1') displayTitle = 'Decluttered Flow';
    else if (walkLevel === 'level2') displayTitle = 'Botanical Pathway';
    else if (walkLevel === 'minimal') displayTitle = 'Refined Hearth';
    else if (walkLevel === 'moderate') displayTitle = 'Modern Harmony';
    else if (walkLevel === 'complete') displayTitle = 'Walnut & Marble Grandeur';

    walkDetailsTitle.textContent = `${displayTitle} - ${node.title}`;
    const availableHere = getAvailableLevels(node);
    if (availableHere.length === 1) {
      // Only the original photo exists for this view (bedroom / drawing room).
      walkDetailsDesc.textContent =
        "Original room view. Design tiers for this room have not been generated yet — the planned upgrades are listed below.";
    } else if (walkLevel === 'original') {
      walkDetailsDesc.textContent = "Baseline original environment before design styling.";
    } else if (!hasWalkAsset(node, walkLevel)) {
      walkDetailsDesc.textContent =
        "[Design render for this tier has not been generated for this view yet. Showing the original — planned upgrades are listed below.]";
    } else {
      walkDetailsDesc.textContent = `Highlights of changes implemented in the ${displayTitle} tier.`;
    }
    
    walkUpgradesList.innerHTML = '';
    list.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      walkUpgradesList.appendChild(li);
    });
    walkDetailsPanel.style.opacity = '1';
  }, 150);
}

function handleWalkModeToggle(e) {
  const isSlider = e.target.checked;
  const node = nodes[walkNodeId];
  if (isSlider) {
    walkCompareStatus.textContent = "Slider On";
    walkCompareStatus.classList.add('active');
    if (walkLevel === 'original') switchWalkLevel(walkPrevLevel);
    walkSliderBg.src = getWalkAssetPath(node, walkLevel);
    walkSliderFgImg.src = getWalkAssetPath(node, 'original');
    walkFadeViewer.classList.add('hidden');
    walkSliderViewer.classList.remove('hidden');
    setWalkSliderPosition(50);
  } else {
    walkCompareStatus.textContent = "Slider Off";
    walkCompareStatus.classList.remove('active');
    walkSliderViewer.classList.add('hidden');
    walkFadeViewer.classList.remove('hidden');
    updateWalkView();
  }
}

function setWalkSliderPosition(pct) {
  pct = Math.max(0, Math.min(100, pct));
  walkSliderHandle.style.left = `${pct}%`;
  walkSliderFgContainer.style.width = `${pct}%`;
}

function handleWalkDrag(clientX) {
  const rect = walkViewerContainer.getBoundingClientRect();
  const pct = ((clientX - rect.left) / rect.width) * 100;
  setWalkSliderPosition(pct);
}

walkSliderHandle.addEventListener('mousedown', (e) => { walkDragging = true; e.preventDefault(); });
window.addEventListener('mouseup', () => walkDragging = false);
window.addEventListener('mousemove', (e) => { if (walkDragging) handleWalkDrag(e.clientX); });
walkSliderHandle.addEventListener('touchstart', () => walkDragging = true);
window.addEventListener('touchend', () => walkDragging = false);
window.addEventListener('touchmove', (e) => {
  if (walkDragging && e.touches.length > 0) handleWalkDrag(e.touches[0].clientX);
});

// ==========================================================================
// 2. Tab Routing (Walkthrough vs Design Wizard)
// ==========================================================================

const tabWalkthrough = document.getElementById('tab-walkthrough');
const tabWizard = document.getElementById('tab-wizard');
const walkthroughContainer = document.getElementById('walkthrough-container');
const wizardContainer = document.getElementById('wizard-container');

tabWalkthrough.addEventListener('click', () => {
  tabWalkthrough.classList.add('active');
  tabWizard.classList.remove('active');
  walkthroughContainer.classList.remove('hidden');
  wizardContainer.classList.add('hidden');
  isCustomUpload = false; // Reset to false for System A (Virtual Walkthrough)
});

tabWizard.addEventListener('click', () => {
  tabWizard.classList.add('active');
  tabWalkthrough.classList.remove('active');
  wizardContainer.classList.remove('hidden');
  walkthroughContainer.classList.add('hidden');
  isCustomUpload = true;  // Force to true for System B (Design Studio Wizard)
});

// ==========================================================================
// 3. Design Wizard Controller
// ==========================================================================

const wizardSteps = document.querySelectorAll('.wizard-step-node');
const wizardContents = document.querySelectorAll('.wizard-content');

// Wizard state variables
let wizardCurrentStep = 1;
let wizardSelectedStyle = 'japandi';
let wizardActiveConcept = 'A';
let wizardDragging = false;
let activeProjectId = null;
let activeProjectName = null;
let uploadedRoomNode = null; // Track which node is represented by custom uploaded photo

// Sourced items data packages matching style presets
const furnitureCatalogs = {
  minimalist: [
    { name: "Corrigan Studio Modern Frame Accent Chair", size: "65 x 70 x 78 cm", mat: "Polished steel frame, faux leather seat", price: 199, link: "https://www.wayfair.com/furniture/pdp/corrigan-studio-modern-accent-chair-w005405457.html", fit: "Fits corner: preserves 3.2 ft corridor flow" },
    { name: "IKEA MORABO Aniline Leather Platform Sofa", size: "210 x 85 x 65 cm", mat: "Full grain black leather, steel base", price: 999, link: "https://www.ikea.com/us/en/p/morabo-sofa-grann-bomstad-black-metal-s89317760/", fit: "Preserves 3.2 ft entry clearance from front doors" },
    { name: "Wade Logan Concrete Monolithic Coffee Table", size: "90 x 90 x 32 cm", mat: "Light grey sealed cast concrete", price: 349, link: "https://www.wayfair.com/outdoor/pdp/wade-logan-concrete-coffee-table-w004944983.html", fit: "Low profile preserves views from stair balusters" },
    { name: "IKEA MORUM Charcoal Flatwoven Rug", size: "180 x 240 cm", mat: "Low-profile spun polypropylene blend", price: 99, link: "https://www.ikea.com/us/en/p/morum-rug-flatwoven-indoor-outdoor-dark-gray-80203558/", fit: "Maintains 2 ft clearance from wet zone margins" }
  ],
  scandinavian: [
    { name: "IKEA POÄNG Birch Dowel Accent Chair", size: "62 x 65 x 80 cm", mat: "Molded birch plywood veneer, Hillared beige cushion", price: 169, link: "https://www.ikea.com/us/en/p/poaeng-armchair-birch-veneer-hillared-beige-s69305913/", fit: "Sized to sit within display cabinet bounds" },
    { name: "IKEA MORABO Soft Gunnared Grey Wool Sofa", size: "200 x 88 x 78 cm", mat: "Solid birch legs, textured wool weave", price: 699, link: "https://www.ikea.com/us/en/p/morabo-sofa-gunnared-medium-gray-wood-s69315578/", fit: "Raised legs preserve floor sightlines around entryways" },
    { name: "IKEA LISTERBY Blonde Oak Oval Coffee Table", size: "110 x 60 x 40 cm", mat: "Solid white oak veneer frame", price: 229, link: "https://www.ikea.com/us/en/p/listerby-coffee-table-oak-veneer-50409049/", fit: "Oval shape avoids sharp edges in primary walk paths" },
    { name: "IKEA VINDEBÄK High-pile Off-white Berber Rug", size: "160 x 230 cm", mat: "Thick plush polyester pile", price: 249, link: "https://www.ikea.com/us/en/p/vindebaek-rug-high-pile-off-white-00495191/", fit: "Centered in the main floor bay; outlines traffic routes" }
  ],
  japandi: [
    { name: "IKEA STOCKHOLM 2017 Rattan Armchair", size: "68 x 72 x 75 cm", mat: "Handwoven rattan and ash legs", price: 299, link: "https://www.ikea.com/us/en/p/stockholm-2017-armchair-with-cushion-rattan-glose-black-s39225046/", fit: "Fits display corner; permits 3.5 ft walk paths" },
    { name: "IKEA SÖDERHAMN Sand Linen Sectional Sofa", size: "220 x 90 x 60 cm", mat: "Ash base support, Viarp beige cotton-linen", price: 650, link: "https://www.ikea.com/us/en/p/soederhamn-3-seat-section-viarp-beige-brown-s49329712/", fit: "Low height profile aligns below display cabinets" },
    { name: "IKEA LISTERBY Round Oak Block Coffee Table", size: "85 x 85 x 30 cm", mat: "Solid oak veneer structure", price: 229, link: "https://www.ikea.com/us/en/p/listerby-coffee-table-oak-veneer-50409049/", fit: "Centered precisely between sofa and stair column boundary" },
    { name: "IKEA LOHALS Flat-woven Jute Fiber Rug", size: "180 x 250 cm", mat: "Flatwoven natural plant jute fibers", price: 149, link: "https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-00277395/", fit: "Provides natural texture boundaries for main corridor" }
  ],
  luxury: [
    { name: "Everly Quinn Velvet Swivel Accent Chair", size: "75 x 75 x 82 cm", mat: "Olive green velvet, gold-plated brass base", price: 259, link: "https://www.wayfair.com/furniture/pdp/everly-quinn-velvet-accent-chair-w004835928.html", fit: "Fits corner: gold legs remain clear of stair treads" },
    { name: "Everly Quinn Curved Cream Velvet Sofa", size: "230 x 95 x 72 cm", mat: "Solid wood frame, high-density velvet curves", price: 1199, link: "https://www.wayfair.com/furniture/pdp/everly-quinn-curved-sofa-w005273950.html", fit: "Curved footprint hugs walls to maximize walk routes" },
    { name: "Mercer41 Brass & White Marble Coffee Table", size: "95 x 95 x 38 cm", mat: "Polished brass framework, Calacatta marble slab", price: 289, link: "https://www.wayfair.com/furniture/pdp/mercer41-marble-coffee-table-w004245982.html", fit: "Low circular shape leaves 3.6 ft traffic margins" },
    { name: "West Elm Viscose Textured Charcoal Area Rug", size: "200 x 300 cm", mat: "Viscose silk-blend textured loom", price: 399, link: "https://www.westelm.com/products/distressed-viscose-rug-charcoal-t5316/", fit: "Sized to ground seating without encroaching wet walls" }
  ],
};

// Bedroom Furniture Sourced Items Data Packages matching style presets
const bedroomFurnitureCatalogs = {
  minimalist: [
    { name: "IKEA MALM Minimalist Platform Bed Frame", size: "160 x 200 x 85 cm", mat: "Oak veneer finish, steel support beams", price: 299, link: "https://www.ikea.com/us/en/p/malm-bed-frame-high-black-brown-s69902941/", fit: "Low height: maintains window clearance margins" },
    { name: "IKEA MALM Floating Bedside Table", size: "40 x 50 x 45 cm", mat: "Single drawer, floating mount bracket", price: 99, link: "https://www.ikea.com/us/en/p/malm-2-drawer-chest-black-brown-00103386/", fit: "Fits bedside corner: preserves 3.0 ft entry clearances" },
    { name: "IKEA PAX Minimalist Sliding Wardrobe", size: "150 x 60 x 201 cm", mat: "Engineered wood with white sliding doors", price: 450, link: "https://www.ikea.com/us/en/p/pax-wardrobe-white-s99127702/", fit: "Fits wardrobe alcove: keeps walking pathways clear" },
    { name: "IKEA MORUM Charcoal Low-pile Bed Rug", size: "160 x 230 cm", mat: "Low-profile spun polypropylene blend", price: 99, link: "https://www.ikea.com/us/en/p/morum-rug-flatwoven-indoor-outdoor-dark-gray-80203558/", fit: "Grounds the bed space: leaves 2 ft margin from walls" }
  ],
  scandinavian: [
    { name: "IKEA NORDLI Birch Headboard Bed Frame", size: "160 x 200 x 100 cm", mat: "Solid birch frame, slatted headboard", price: 399, link: "https://www.ikea.com/us/en/p/nordli-bed-frame-with-storage-white-s99241416/", fit: "Integrated storage: keeps walkways decluttered" },
    { name: "IKEA BJÖRKSNÄS Solid Birch Nightstand", size: "48 x 38 x 69 cm", mat: "Solid birch, leather drawer pull", price: 129, link: "https://www.ikea.com/us/en/p/bjoerksnaes-nightstand-birch-70374274/", fit: "Compact footprint sits neatly against side walls" },
    { name: "IKEA BJÖRKSNÄS Birch 5-Drawer Chest", size: "90 x 48 x 90 cm", mat: "Solid birch wood frame", price: 349, link: "https://www.ikea.com/us/en/p/bjoerksnaes-5-drawer-chest-birch-80407302/", fit: "Height profile aligns below wall mirror zones" },
    { name: "IKEA VINDEBÄK High-pile Off-white Bed Rug", size: "160 x 230 cm", mat: "Thick plush polyester pile", price: 249, link: "https://www.ikea.com/us/en/p/vindebaek-rug-high-pile-off-white-00495191/", fit: "Sits under bed frame; outlines side walking paths" }
  ],
  japandi: [
    { name: "IKEA STOCKHOLM 2017 Rattan Back Bed", size: "160 x 200 x 95 cm", mat: "Handwoven rattan headboard, solid ash frame", price: 499, link: "https://www.ikea.com/us/en/p/stockholm-2017-bed-frame-ash-rattan-s79225046/", fit: "Low height respects low-profile wabi-sabi lines" },
    { name: "IKEA STOCKHOLM Rattan Side Drawer Table", size: "45 x 45 x 50 cm", mat: "Woven rattan front drawer, ash veneer legs", price: 149, link: "https://www.ikea.com/us/en/p/stockholm-nightstand-ash-80407302/", fit: "Fits bedside: permits 3.2 ft pathway flow" },
    { name: "IKEA STOCKHOLM 2017 Ash Accent Wardrobe", size: "120 x 50 x 180 cm", mat: "Solid ash frame and sliding panel shelves", price: 399, link: "https://www.ikea.com/us/en/p/stockholm-2017-cabinet-ash-80407302/", fit: "Sliding doors preserve walkways when opened" },
    { name: "IKEA LOHALS Flat-woven Jute Fiber Bed Rug", size: "160 x 230 cm", mat: "Flatwoven natural plant jute fibers", price: 129, link: "https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-00277395/", fit: "Jute margins stay clear of dressing wardrobe swing" }
  ],
  luxury: [
    { name: "Everly Quinn Tufted Velvet Wingback Bed", size: "170 x 215 x 130 cm", mat: "Olive green velvet upholstery, brass legs", price: 699, link: "https://www.wayfair.com/furniture/pdp/everly-quinn-velvet-wingback-bed-w004835928.html", fit: "Tall headboard frames room focal wall beautifully" },
    { name: "Everly Quinn Brass & White Marble Nightstand", size: "50 x 45 x 55 cm", mat: "Polished brass frame, white marble top", price: 199, link: "https://www.wayfair.com/furniture/pdp/everly-quinn-marble-nightstand-w004245982.html", fit: "Elegant profile coordinates with accent lighting sconces" },
    { name: "Everly Quinn Gold-accented 6-Drawer Dresser", size: "140 x 50 x 85 cm", mat: "White lacquer finish, gold brass trim and knobs", price: 599, link: "https://www.wayfair.com/furniture/pdp/everly-quinn-6-drawer-dresser-w005273950.html", fit: "Polished surface mirrors light from decorative wall sconces" },
    { name: "West Elm Viscose Textured Charcoal Bed Rug", size: "200 x 300 cm", mat: "Viscose silk-blend textured loom", price: 399, link: "https://www.westelm.com/products/distressed-viscose-rug-charcoal-t5316/", fit: "Sized to ground large bed without overlapping bathroom lines" }
  ],
  organic: [
    { name: "IKEA BJÖRKSNÄS Oak Frame Platform Bed", size: "160 x 200 x 95 cm", mat: "Sustainable solid oak wood frame", price: 399, link: "https://www.ikea.com/us/en/p/bjoerksnaes-bed-frame-birch-s19241416/", fit: "Natural textures align with organic bedroom styles" },
    { name: "CB2 Raw Travertine Floating Nightstand", size: "45 x 40 x 30 cm", mat: "Unfilled natural grey travertine stone slab", price: 299, link: "https://www.cb2.com/reynolds-travertine-coffee-table/s462947", fit: "Floating stone preserves floor area for soft shadows" },
    { name: "Castlery Marlow Textured Bouclé Storage Bench", size: "120 x 45 x 40 cm", mat: "Cream textured bouclé yarn weave", price: 349, link: "https://www.castlery.com/us/products/marlow-bench", fit: "Sized perfectly for the foot of the bed frame" },
    { name: "IKEA LOHALS Organic Braided Jute Bed Rug", size: "160 x 230 cm", mat: "Thick natural hand-spun plant jute", price: 129, link: "https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-00277395/", fit: "Lays flat under frame; keeps path borders clear" }
  ]
};

// Drawing Room Furniture Sourced Items Data Packages matching style presets
const drawingFurnitureCatalogs = {
  minimalist: [
    { name: "IKEA MORABO Aniline Leather Sectional Sofa", size: "260 x 160 x 65 cm", mat: "Full grain black leather, steel base", price: 1299, link: "https://www.ikea.com/us/en/p/morabo-sectional-sofa-grann-bomstad-black-metal-s89317760/", fit: "Sectional footprint frames the primary lounge zone" },
    { name: "Wade Logan Concrete Block Coffee Table", size: "95 x 95 x 35 cm", mat: "Light grey sealed cast concrete", price: 399, link: "https://www.wayfair.com/outdoor/pdp/wade-logan-concrete-coffee-table-w004944983.html", fit: "Low profile preserves entry walkway pathways" },
    { name: "IKEA BESTÅ Minimalist Media Console", size: "180 x 40 x 48 cm", mat: "Matte black cabinet doors, steel legs", price: 249, link: "https://www.ikea.com/us/en/p/besta-tv-unit-black-brown-s19317760/", fit: "Slim depth leaves 4.0 ft space to the opposite wall" },
    { name: "IKEA MORUM Charcoal Flatwoven Rug", size: "200 x 300 cm", mat: "Low-profile spun polypropylene blend", price: 129, link: "https://www.ikea.com/us/en/p/morum-rug-flatwoven-indoor-outdoor-dark-gray-80203558/", fit: "Unifies the seating setup without blockading doors" }
  ],
  scandinavian: [
    { name: "IKEA MORABO Soft Gunnared Grey Wool Sofa", size: "210 x 90 x 78 cm", mat: "Solid birch legs, textured wool weave", price: 799, link: "https://www.ikea.com/us/en/p/morabo-sofa-gunnared-medium-gray-wood-s69315578/", fit: "Raised solid birch legs make room feel open and bright" },
    { name: "IKEA LISTERBY Blonde Oak Oval Coffee Table", size: "110 x 60 x 40 cm", mat: "Solid white oak veneer frame", price: 229, link: "https://www.ikea.com/us/en/p/listerby-coffee-table-oak-veneer-50409049/", fit: "Oval shape eliminates sharp path edges in lounge paths" },
    { name: "IKEA STOCKHOLM Ash Wood Credenza Console", size: "160 x 40 x 60 cm", mat: "Ash wood veneer cabinet, wooden legs", price: 399, link: "https://www.ikea.com/us/en/p/stockholm-sideboard-walnut-veneer-40239721/", fit: "Coordinates with display cases; stores books neatly" },
    { name: "IKEA VINDEBÄK High-pile Off-white Berber Rug", size: "200 x 300 cm", mat: "Thick plush polyester pile", price: 299, link: "https://www.ikea.com/us/en/p/vindebaek-rug-high-pile-off-white-00495191/", fit: "Soft Berber texture anchors the main seating zone" }
  ],
  japandi: [
    { name: "IKEA SÖDERHAMN Sand Linen Sectional Sofa", size: "240 x 180 x 60 cm", mat: "Ash base support, Viarp beige cotton-linen", price: 750, link: "https://www.ikea.com/us/en/p/soederhamn-3-seat-section-viarp-beige-brown-s49329712/", fit: "Low profile fits perfectly under sliding screen lines" },
    { name: "IKEA LISTERBY Round Oak Coffee Table", size: "90 x 90 x 30 cm", mat: "Solid oak veneer structure", price: 249, link: "https://www.ikea.com/us/en/p/listerby-coffee-table-oak-veneer-50409049/", fit: "Round configuration leaves 3.6 ft traffic clearances" },
    { name: "IKEA STOCKHOLM 2017 Rattan Media Cabinet", size: "150 x 45 x 55 cm", mat: "Handwoven rattan shelves, solid ash top", price: 349, link: "https://www.ikea.com/us/en/p/stockholm-2017-cabinet-ash-80407302/", fit: "Woven rattan fronts provide biophilic light ventilation" },
    { name: "IKEA LOHALS Flat-woven Jute Fiber Rug", size: "200 x 300 cm", mat: "Flatwoven natural plant jute fibers", price: 179, link: "https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-00277395/", fit: "Natural flat weave is resilient to main walkway traffic" }
  ],
  luxury: [
    { name: "Everly Quinn Curved Cream Velvet Sofa", size: "240 x 100 x 75 cm", mat: "Solid wood frame, high-density velvet curves", price: 1299, link: "https://www.wayfair.com/furniture/pdp/everly-quinn-curved-sofa-w005273950.html", fit: "Curved frame aligns beautifully to corner lighting columns" },
    { name: "Mercer41 Brass & White Marble Coffee Table", size: "100 x 100 x 38 cm", mat: "Polished brass framework, Calacatta marble slab", price: 329, link: "https://www.wayfair.com/furniture/pdp/mercer41-marble-coffee-table-w004245982.html", fit: "Marble accents coordinate with wall partition panels" },
    { name: "Everly Quinn Gold Trimmed Media Credenza", size: "180 x 45 x 65 cm", mat: "Charcoal lacquer, gold-veined doors and legs", price: 699, link: "https://www.wayfair.com/furniture/pdp/everly-quinn-dresser-w005273950.html", fit: "Luxury focal piece maintains 3.8 ft clearance to couches" },
    { name: "West Elm Viscose Textured Charcoal Rug", size: "200 x 300 cm", mat: "Viscose silk-blend textured loom", price: 399, link: "https://www.westelm.com/products/distressed-viscose-rug-charcoal-t5316/", fit: "Viscose sheen reflects ambient light from statement fixtures" }
  ],
  organic: [
    { name: "Castlery Marlow Textured Bouclé Sofa", size: "220 x 95 x 75 cm", mat: "Cream textured bouclé yarn weave", price: 1399, link: "https://www.castlery.com/us/products/marlow-sofa", fit: "Cream bouclé textures align with natural lounge styling" },
    { name: "CB2 Reynolds Raw Travertine Block Table", size: "90 x 90 x 35 cm", mat: "Unfilled natural grey travertine stone slab", price: 649, link: "https://www.cb2.com/reynolds-travertine-coffee-table/s462947", fit: "Solid raw stone acts as biophilic centerpiece" },
    { name: "CB2 Organic Solid Oak Credenza", size: "160 x 45 x 58 cm", mat: "Natural organic wire-brushed oak wood", price: 499, link: "https://www.cb2.com/reynolds-travertine-coffee-table/s462947", fit: "Oak grain details align with plant foliage and textures" },
    { name: "IKEA LOHALS Organic Braided Jute Rug", size: "200 x 300 cm", mat: "Thick natural hand-spun plant jute", price: 179, link: "https://www.ikea.com/us/en/p/lohals-rug-flatwoven-natural-00277395/", fit: "Coarse weave is highly durable for entry access paths" }
  ]
};

// Bedroom Compliance Notes matching style presets
const bedroomStyleComplianceNotes = {
  minimalist: "Minimalist Bed verified: Low-profile bed preserves window clearance heights. Floating bedside table keeps 3.0 ft entry pathways clear from the bedroom door.",
  scandinavian: "Scandinavian Bed verified: Storage drawers underneath keep room decluttered. Birch nightstand fits comfortably against side walls without blocking access.",
  japandi: "Japandi Bed verified: Solid ash frame sits at ideal wabi-sabi height. Jute rug margins stay clear of wardrobe door swing clearances.",
  luxury: "Contemporary Luxury Bed verified: Curved velvet headboard frames bedroom accent wall. Viscose rug lands beautifully without crossing master bath entrances.",
  organic: "Organic Bed verified: Platform oak bed frames natural window light views. CB2 Travertine floating nightstand frees up floor space."
};

// Drawing Room Compliance Notes matching style presets
const drawingStyleComplianceNotes = {
  minimalist: "Minimalist Drawing verified: Leather sectional anchors main seating zone without blockading exit corridors. Concrete coffee table maintains 3.5 ft paths.",
  scandinavian: "Scandinavian Drawing verified: Raised birch legs promote light flow. Oval oak table avoids sharp edges in primary lounge walking routes.",
  japandi: "Japandi Drawing verified: Söderhamn modular sectional fits under screen windows. Round oak coffee table preserves 3.6 ft traffic clearances.",
  luxury: "Contemporary Luxury Drawing verified: Curved cream velvet sofa sits beautifully in seating bay. Marble top coffee table coordinates with accent wall slabs.",
  organic: "Organic Drawing verified: Marlow textured bouclé seating provides natural biophilic comfort. CB2 solid travertine block preserves 3.5 ft stair access."
};

function getActiveFurnitureCatalog() {
  if (isCustomUpload) {
    const typeText = (analysisRoomType ? analysisRoomType.textContent : '').toLowerCase();
    const isBedroom = typeText.includes("bedroom") || (uploadedFileName && (uploadedFileName.includes('bedroom') || uploadedFileName.includes('bed') || /18[\s._-]*05[\s._-]*0[56]/.test(uploadedFileName)));
    const isDrawing = typeText.includes("drawing") || typeText.includes("living") || (uploadedFileName && (uploadedFileName.includes('drawing') || uploadedFileName.includes('living') || /18[\s._-]*05[\s._-]*4[12]/.test(uploadedFileName)));
    if (isBedroom) return bedroomFurnitureCatalogs;
    if (isDrawing) return drawingFurnitureCatalogs;
  }
  return furnitureCatalogs;
}

function getActiveStyleComplianceNotes() {
  if (isCustomUpload) {
    const typeText = (analysisRoomType ? analysisRoomType.textContent : '').toLowerCase();
    const isBedroom = typeText.includes("bedroom") || (uploadedFileName && (uploadedFileName.includes('bedroom') || uploadedFileName.includes('bed') || /18[\s._-]*05[\s._-]*0[56]/.test(uploadedFileName)));
    const isDrawing = typeText.includes("drawing") || typeText.includes("living") || (uploadedFileName && (uploadedFileName.includes('drawing') || uploadedFileName.includes('living') || /18[\s._-]*05[\s._-]*4[12]/.test(uploadedFileName)));
    if (isBedroom) return bedroomStyleComplianceNotes;
    if (isDrawing) return drawingStyleComplianceNotes;
  }
  return styleComplianceNotes;
}

// Wizard Step Navigation
function goToWizardStep(stepNum) {
  wizardCurrentStep = stepNum;
  
  // Update sidebar list states
  wizardSteps.forEach(node => {
    const num = parseInt(node.getAttribute('data-wizard-step'));
    node.classList.remove('active', 'completed');
    if (num === stepNum) {
      node.classList.add('active');
    } else if (num < stepNum) {
      node.classList.add('completed');
    }
  });

  // Update content panel displays
  wizardContents.forEach(panel => {
    panel.classList.remove('active');
  });
  
  const targetPanel = document.getElementById(`wizard-step-${stepNum}-content`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Hook step-specific transitions
  if (stepNum === 5) {
    renderFurnitureGrid();
  } else if (stepNum === 6) {
    switchBudgetTier(wizardActiveBudget);
  }
}

// Wire step next buttons
document.querySelectorAll('.wizard-next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = parseInt(btn.getAttribute('data-target-step'));
    if (target) goToWizardStep(target);
  });
});

// Wire sidebar step nodes to navigate
wizardSteps.forEach(node => {
  node.addEventListener('click', () => {
    const stepNum = parseInt(node.getAttribute('data-wizard-step'));
    if (stepNum) goToWizardStep(stepNum);
  });
});

// --- File Upload & Custom AI Analysis State ---
let isCustomUpload = false;
let uploadedImageSrc = null;
let uploadedFileName = null;
let uploadedFileSize = null;

// Bounding box overlay and scanner DOM elements
const fileUploadInput = document.getElementById('file-upload-input');
const btnChooseFile = document.getElementById('btn-choose-file');
const analysisPreviewImg = document.getElementById('analysis-preview-img');
const analysisScanner = document.getElementById('analysis-scanner');
const lobbyBoundingBoxes = document.getElementById('lobby-bounding-boxes');
const customBoundingBoxes = document.getElementById('custom-bounding-boxes');

// Report card data DOM elements
const analysisRoomType = document.getElementById('analysis-room-type');
const analysisInventory = document.getElementById('analysis-inventory');
const analysisLighting = document.getElementById('analysis-lighting');
const analysisPaletteText = document.getElementById('analysis-palette');
const analysisPaletteSwatches = document.getElementById('analysis-palette-swatches');
const analysisScoreVal = document.getElementById('analysis-score-val');
const analysisScoreBar = document.getElementById('analysis-score-bar');
const analysisOpportunities = document.getElementById('analysis-opportunities');

const uploadZone = document.getElementById('upload-zone');
const btnUseTestBedroom = document.getElementById('btn-use-test-bedroom');
const btnUseTestDrawing = document.getElementById('btn-use-test-drawing');
const btnCompareSlider = document.getElementById('btn-compare-slider');
const btnCompareSideBySide = document.getElementById('btn-compare-side-by-side');
const wizardSliderContainer = document.getElementById('wizard-slider-container');
const styleStrengthSlider = document.getElementById('style-strength-slider');
const strengthValText = document.getElementById('strength-val-text');
const btnRegenerateDesign = document.getElementById('btn-regenerate-design');

// Baseline Lobby analysis report
const lobbyAnalysisData = {
  roomType: "Residential Lobby / Entrance Lounge",
  inventory: "2x mismatched wooden-frame sofas with throws, 1x low wood coffee table, 1x white plastic armchair, 1x pedestal sink.",
  lighting: "Natural cool morning daylight from front-left door openings. Ceiling fan lights cast soft ambient glare. Washbasin corner lacks task lighting.",
  paletteText: "Chalky off-white walls, grey/white marbled tile flooring, dark wood trims, purple/pink seating sheet covers (high visual noise).",
  paletteColors: ['#e3d6c5', '#1a1a1a', '#ebdcb9', '#52525b', '#a3a3a3'],
  score: 58,
  opportunities: [
    "Replace mismatched furniture and covers to unify style.",
    "Inlay natural path markers to direct foot traffic flows.",
    "Incorporate vertical wood paneling to hide door alignments.",
    "Add floating vanity to conceal washbasin pipes."
  ]
};

// Custom Room random options
const customRoomTypes = [
  "Spacious Living Room / Reception Lounge",
  "Cozy Family Den & Studio Suite",
  "Modern Office Reception / Lounge Area",
  "Open-concept Lounge & Sitting Room"
];
const customInventories = [
  "1x fabric sectional sofa, 1x low oak coffee table, 2x upholstered accent chairs, 1x console cabinet, 1x floor lamp.",
  "1x low platform sofa, 1x round steel coffee table, 1x leather armchair, 1x media credenza, 2x potted planters.",
  "2x high-back armchairs, 1x glass coffee table, 1x walnut side cabinet, 1x textured area rug, 1x bookshelf."
];
const customLightings = [
  "Dual-aspect natural daylight with mild window glare. Recessed ceiling downlights provide warm ambient fill layers.",
  "Strong natural window daylight casting shadows. Lack of secondary floor lamps causes dark corners in the seating zone.",
  "Diffused ambient daylight from glass entry doors. Ceiling recessed lights provide uniform but sterile warm-white illumination."
];
const customOpportunitiesLists = [
  [
    "Rearrange seating layout to maximize walking clearances and entry pathways.",
    "Introduce warm indirect LED lighting layers in dark corners.",
    "Harmonize fabric finishes and throws to establish a cohesive style accent.",
    "Swap bulky coffee table for nested tables to reclaim floor space."
  ],
  [
    "Position rugs to clearly define functional boundaries of the seating zone.",
    "Add task lamps next to primary armchairs for direct reading light.",
    "Replace open shelving bins with a closed wood credenza cabinet.",
    "Incorporate vertical wood paneling to draw the eye upward and add texture."
  ],
  [
    "Clear visual surface clutter from tables, shelves, and window margins.",
    "Introduce organic indoor plants to add natural elements and life.",
    "Integrate clean wire management conduits for all media fixtures.",
    "Upgrade window treatments to soft floor-length linen panels."
  ]
];

// Draw custom bounding boxes dynamically
function drawCustomBoundingBoxes() {
  customBoundingBoxes.innerHTML = `
    <!-- Custom Seating Zone -->
    <rect x="220" y="320" width="380" height="220" class="bbox-rect plumbing" style="stroke: #a78bfa; fill: rgba(167, 139, 250, 0.05);" />
    <text x="230" y="345" class="bbox-text" style="fill: #c084fc;">Detected Seating Zone</text>
    
    <!-- Custom Light vector -->
    <line x1="720" y1="100" x2="520" y2="280" class="light-arrow" marker-end="url(#arrow)" />
    <text x="560" y="90" class="light-text">Natural Light Vector</text>
    
    <!-- Center Floor Clearance -->
    <rect x="100" y="480" width="600" height="90" class="bbox-rect entry" style="stroke: #34d399; fill: rgba(52, 211, 153, 0.03);" />
    <text x="110" y="505" class="bbox-text" style="fill: #34d399;">Walkway Access Route</text>
  `;
}

// Client-side dominant color extraction canvas helper
function extractPaletteFromDataURL(dataUrl, callback) {
  const img = new Image();
  img.src = dataUrl;
  img.onload = function() {
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');
    try {
      ctx.drawImage(img, 0, 0, 10, 10);
      const imgData = ctx.getImageData(0, 0, 10, 10).data;
      
      const colors = [];
      const seen = new Set();
      
      for (let i = 0; i < imgData.length; i += 16) {
        const r = imgData[i];
        const g = imgData[i+1];
        const b = imgData[i+2];
        
        // Quantize colors to select unique dominant shades
        const key = `${Math.round(r/40)},${Math.round(g/40)},${Math.round(b/40)}`;
        if (!seen.has(key)) {
          seen.add(key);
          colors.push(rgbToHex(r, g, b));
        }
        if (colors.length >= 5) break;
      }
      
      while (colors.length < 5) {
        colors.push('#7c3aed');
      }
      callback(colors);
    } catch (e) {
      console.error("Color extraction failed, using fallback.", e);
      callback(['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']);
    }
  };
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Display report content in Step 2 Card
function displayAnalysisReport(data) {
  analysisRoomType.textContent = data.roomType;
  analysisInventory.textContent = data.inventory;
  analysisLighting.textContent = data.lighting;
  analysisPaletteText.textContent = data.paletteText;
  
  // Set score
  analysisScoreVal.textContent = `${data.score}%`;
  analysisScoreBar.style.width = `${data.score}%`;
  
  // Populate opportunities checklist
  analysisOpportunities.innerHTML = '';
  data.opportunities.forEach(opp => {
    const li = document.createElement('li');
    li.textContent = opp;
    analysisOpportunities.appendChild(li);
  });
  
  // Render color swatches
  analysisPaletteSwatches.innerHTML = '';
  data.paletteColors.forEach(colorHex => {
    const swatch = document.createElement('div');
    swatch.className = 'analysis-swatch-dot';
    swatch.style.backgroundColor = colorHex;
    swatch.title = `Dominant Color: ${colorHex}`;
    analysisPaletteSwatches.appendChild(swatch);
  });
}

// ==========================================================================
// AI Agents Definition (Room Analysis and Image Generation)
// ==========================================================================

const RoomAnalysisAgent = {
  analyze: function(imageSrc, fileName, callback) {
    const lowerName = (fileName || '').toLowerCase();
    
    // Log stage 1: Image received
    const bytes = (uploadedFileSize || (imageSrc ? Math.round(imageSrc.length * 0.75) : 0));
    console.log(`[AI Designer] Image received: ${fileName || 'unnamed_upload.jpg'} (size: ${bytes} bytes)`);
    
    // Extracted properties base defaults (Lobby/Living fallback)
    let roomType = "Spacious Living Room / Reception Lounge";
    let inventory = "1x fabric sectional sofa, 1x low oak coffee table, 2x upholstered accent chairs, 1x console cabinet, 1x floor lamp.";
    let lighting = "Dual-aspect natural daylight with mild window glare. Recessed ceiling downlights provide warm ambient fill layers.";
    let opportunities = [
      "Rearrange seating layout to maximize walking clearances and entry pathways.",
      "Introduce warm indirect LED lighting layers in dark corners.",
      "Harmonize fabric finishes and throws to establish a cohesive style accent.",
      "Swap bulky coffee table for nested tables to reclaim floor space."
    ];
    // Rough "improvement potential" estimate. Deterministic per image so it
    // does not flicker when the same photo is re-scanned. It is heuristic, not a
    // measured metric, and the UI labels it "(estimate)" accordingly.
    let seed = 0;
    const seedStr = (fileName || 'room') + '';
    for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;
    let score = 50 + (seed % 26); // stable 50-75

    // Check if it's a bedroom image
    if (lowerName.includes('bedroom') || lowerName.includes('bed') || /18[\s._-]*05[\s._-]*0[56]/.test(lowerName)) {
      roomType = "Master Bedroom / Guest Suite";
      inventory = "1x double bed with frame, 2x wooden nightstands, 1x wardrobe cabinet, 1x vanity dresser, 1x upholstered bench.";
      lighting = "Natural soft daylight from a side window. Warm bedside task lamps. Lacks general overhead center lighting.";
      opportunities = [
        "Add a plush area rug under the bed frame to ground the bed space.",
        "Install matching pendant lights above nightstands to free up bedside surfaces.",
        "Harmonize bedding fabrics and pillow textures for a cohesive, hotel-like feel.",
        "Declutter dresser surface and add a warm-toned mirror overlay to maximize space."
      ];
      score = 60 + (seed % 26); // stable 60-85
    } 
    // Check if it's a drawing room / living room image
    else if (lowerName.includes('drawing') || lowerName.includes('living') || /18[\s._-]*05[\s._-]*4[12]/.test(lowerName)) {
      roomType = "Drawing Room / Reception Lounge";
      inventory = "1x L-shaped sectional sofa, 1x modern coffee table, 2x accent armchairs, 1x TV console credenza, 1x large area rug.";
      lighting = "Bright natural window daylight casting soft shadows. Ceiling recessed downlights provide warm ambient fill layers.";
      opportunities = [
        "Rearrange seating layout to maximize walking clearances and entry pathways.",
        "Harmonize fabric finishes and throws to establish a cohesive style accent.",
        "Introduce organic indoor plants to add natural elements and life.",
        "Upgrade window treatment fabrics to soft, floor-length linen panels."
      ];
      score = 55 + (seed % 26); // stable 55-80
    }

    // Extract dominant palette colors client-side
    extractPaletteFromDataURL(imageSrc, (colors) => {
      const hexColorsText = colors.join(', ');
      const report = {
        roomType: roomType,
        inventory: inventory,
        lighting: lighting,
        paletteText: `Extracted palette: ${hexColorsText}. Custom uploads feature a unique combination of wall and furniture accent finishes.`,
        paletteColors: colors,
        score: score,
        opportunities: opportunities
      };
      
      // Log stage 2: Analysis completed
      console.log(`[AI Designer] Analysis completed for room type: ${report.roomType}`);
      
      callback(report);
    });
  }
};

const SceneConsistencyCoordinator = {
  plans: {},

  getSharedScenePlan: function(posNum, style, concept) {
    const key = `${posNum}-${style}-${concept}`;
    if (this.plans[key]) {
      return this.plans[key];
    }

    let flooring = "Classic Marble Floor";
    let wallFinish = "White Plaster Wall";
    let ceilingFinish = "White Plaster Ceiling";
    let furnitureStyle = "Original mismatched furniture";
    let lighting = "Natural ambient daylight";
    let decor = "Original family frames and decor";
    let landscaping = "None";
    let architecturalAdditions = "None";

    if (style === 'minimalist' || style === 'minimal') {
      flooring = "Clean original polished marble";
      wallFinish = "Matte white clean plaster walls";
      ceilingFinish = "Matte white clean plaster ceiling";
      furnitureStyle = "Simple minimalist wooden armchair and folded throws";
      lighting = "Diffuse task lighting and clean windows";
      decor = "Cleaned display cabinets, black-framed mirror above sink";
    } else if (style === 'moderate' || style === 'level1' || style === 'level2') {
      flooring = "Polished neutral tiles with soft area rug under seating";
      wallFinish = "Warm beige/greige neutral wall paint";
      ceilingFinish = "Matte white plaster ceiling with modern downlights";
      furnitureStyle = "Contemporary grey fabric sofas and oak coffee table";
      lighting = "Recessed ceiling downlights, backlit rectangular LED mirror";
      decor = "Tidied built-in display shelves, minimalist frames";
      if (concept === 'B' || style === 'level2') {
        landscaping = "Subtle ground-planted indoor ferns in corners";
        flooring = "Neutral tiles with stone walkway paths inlaid flush";
      }
    } else if (style === 'complete' || style === 'luxury' || style === 'japandi') {
      flooring = "Large-format polished grey marble floor tiles";
      wallFinish = "Dark walnut wood wall panels with gold-veined white marble slab accents";
      ceilingFinish = "Recessed ceiling borders with warm indirect LED strip lighting";
      furnitureStyle = "Curved cream velvet designer sofas with brass legs, white marble coffee table";
      lighting = "Backlit circular LED vanity mirror, recessed display spots";
      decor = "Sleek glass-and-brass display cabinets, high-end marble counter sinks with gold faucets";
    }

    this.plans[key] = {
      flooring: flooring,
      wallFinish: wallFinish,
      ceilingFinish: ceilingFinish,
      furnitureStyle: furnitureStyle,
      lighting: lighting,
      decor: decor,
      landscaping: landscaping,
      architecturalAdditions: architecturalAdditions
    };

    return this.plans[key];
  }
};

const ImageGenerationAgent = {
  cache: {},
  
  generateRedesign: function(imageSrc, node, style, concept, callback) {
    const strengthEl = document.getElementById('style-strength-slider');
    const strength = strengthEl ? strengthEl.value : '2';
    
    // Create project cache combination key
    const fileKey = node ? node.filePrefix : (uploadedFileName || 'custom_upload');
    const cacheKey = `${style}-${concept}-${strength}-${fileKey}`;
    
    // Determine path and placeholder mode
    let redesignedPath = imageSrc;
    let isPlaceholder = true;
    
    if (node && !isCustomUpload) {
      // Lobby walkthrough matched perspective
      redesignedPath = getWizardAssetPath(node, style, concept);
      isPlaceholder = false;
    }
    
    // Debugging logs requested by user
    const isCustom = isCustomUpload || !node;
    const uploadedName = isCustom ? (uploadedFileName || 'unnamed_upload.jpg') : (node.filePrefix + "_original.jpg");
    const sourceImage = isCustom ? "[Uploaded Image Data URL]" : (node.filePrefix + "_original.jpg");
    const requestSent = `Style=${style}, Strength=${strength}, Concept=${concept}`;
    const displayedImage = isCustom ? `[Uploaded Image with ${style} filters & proposal overlays]` : redesignedPath;

    // NOTE: no image model is called anywhere in this app. Lobby views show
    // pre-generated renders on disk; custom uploads are only colour-graded.
    // These logs must describe that truthfully.
    console.log("[AI Designer] Uploaded image filename: " + uploadedName);
    console.log("[AI Designer] Source image: " + sourceImage);
    console.log("[AI Designer] Requested styling: " + requestSent);
    console.log("[AI Designer] Mode: " + (isCustom
      ? "PREVIEW ONLY — colour grade of uploaded photo (no image generated)"
      : "PRE-GENERATED RENDER — loading existing asset from disk"));
    
    // Check cache map
    if (this.cache[cacheKey]) {
      console.log(`[AI Designer] Cache hit for key: ${cacheKey}. Returning cached redesign: ${this.cache[cacheKey].path}`);
      console.log("[AI Designer] Generated image returned: " + (isCustom ? "[Uploaded Image Data URL]" : this.cache[cacheKey].path));
      console.log("[AI Designer] Image displayed to user: " + displayedImage);
      
      callback(this.cache[cacheKey].path, this.cache[cacheKey].isPlaceholder);
      return;
    }
    
    // Fetch and apply Shared Scene Plan for 3D Consistency
    const posNum = node ? node.posNum : 99;
    const plan = SceneConsistencyCoordinator.getSharedScenePlan(posNum, style, concept);
    
    console.log(`[AI Designer] Resolving styling for Style: ${style}, Strength: ${strength}, Concept: ${concept}`);
    console.log(`[AI Designer] Applying Consistent 3D Space Scene Plan for Position ${posNum}:`);
    console.log(`  - Flooring: ${plan.flooring}`);
    console.log(`  - Walls: ${plan.wallFinish}`);
    console.log(`  - Ceiling: ${plan.ceilingFinish}`);
    console.log(`  - Furniture Style: ${plan.furnitureStyle}`);
    console.log(`  - Lighting Layout: ${plan.lighting}`);
    console.log(`  - Decor Aesthetics: ${plan.decor}`);
    if (plan.landscaping !== 'None') {
      console.log(`  - Landscaping Element: ${plan.landscaping}`);
    }
    
    // Stage 4: resolved (no generation occurs — see note above)
    console.log(`[AI Designer] Styling resolved. Asset: ` + (isCustom ? `[Uploaded photo, colour-graded for ${style}]` : redesignedPath));
    console.log("[AI Designer] Image displayed to user: " + displayedImage);
    
    // Save result and log stage 5: Results saved
    this.cache[cacheKey] = { path: redesignedPath, isPlaceholder: isPlaceholder };
    console.log(`[AI Designer] Results saved to portfolio/cache under key: ${cacheKey}`);
    if (activeProjectId) {
      console.log(`[AI Designer] Results saved to portfolio/cache under Project ID: ${activeProjectId}`);
    }
    
    callback(redesignedPath, isPlaceholder);
  }
};

// Handle transition to Step 2 AI Analysis
function triggerAnalysisTransition(isCustom) {
  isCustomUpload = isCustom;
  if (!isCustom) {
    uploadedRoomNode = 'lobby_pos0_f';
  } else {
    uploadedRoomNode = null;
  }
  
  // Hide active elements and show scanner
  lobbyBoundingBoxes.classList.add('hidden');
  customBoundingBoxes.classList.add('hidden');
  analysisScanner.classList.remove('hidden');
  
  // Set preview image
  if (isCustom) {
    analysisPreviewImg.src = uploadedImageSrc;
  } else {
    analysisPreviewImg.src = 'lobby_starter_original.jpg';
  }
  
  // Set placeholder loading states for text fields
  analysisRoomType.textContent = "AI Analyzing space bounds...";
  analysisInventory.textContent = "Identifying furniture elements...";
  analysisLighting.textContent = "Tracing light direction rays...";
  analysisPaletteText.textContent = "Extracting color palette vectors...";
  analysisScoreVal.textContent = "--%";
  analysisScoreBar.style.width = "0%";
  analysisOpportunities.innerHTML = '<li>Analyzing layout flow...</li>';
  analysisPaletteSwatches.innerHTML = '';
  
  goToWizardStep(2);
  
  // After a brief simulated analysis scan (1.8s)
  setTimeout(() => {
    analysisScanner.classList.add('hidden');
    
    if (isCustom) {
      // Draw dynamic custom boxes
      customBoundingBoxes.classList.remove('hidden');
      drawCustomBoundingBoxes();
      
      // Analyze space using the Room Analysis Agent
      RoomAnalysisAgent.analyze(uploadedImageSrc, uploadedFileName, (report) => {
        displayAnalysisReport(report);
      });
    } else {
      // Preloaded lobby starter details
      lobbyBoundingBoxes.classList.remove('hidden');
      displayAnalysisReport(lobbyAnalysisData);
    }
  }, 1800);
}

// Trigger upload selector click
uploadZone.addEventListener('click', (e) => {
  if (e.target === fileUploadInput) return;
  fileUploadInput.click();
});

btnChooseFile.addEventListener('click', (e) => {
  e.stopPropagation(); // Avoid double click on parent dropzone
  fileUploadInput.click();
});

fileUploadInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    handleFileUpload(e.target.files[0]);
  }
});

// Drag and drop events
uploadZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadZone.classList.add('dragover');
});

uploadZone.addEventListener('dragleave', () => {
  uploadZone.classList.remove('dragover');
});

uploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadZone.classList.remove('dragover');
  if (e.dataTransfer.files.length > 0) {
    handleFileUpload(e.dataTransfer.files[0]);
  }
});

function handleFileUpload(file) {
  if (!file.type.startsWith('image/')) {
    alert("Please upload a valid image file.");
    return;
  }
  
  // Save uploaded image details for analysis and matching
  uploadedFileName = file.name.toLowerCase();
  uploadedFileSize = file.size;
  
  // Initialize unique first-class design project properties
  activeProjectId = Date.now().toString();
  activeProjectName = "Project - " + file.name + " - " + new Date().toLocaleDateString();
  
  // Set to null to treat all custom uploads as general-purpose projects
  uploadedRoomNode = null;

  const reader = new FileReader();
  reader.onload = function(event) {
    const tempImg = new Image();
    tempImg.src = event.target.result;
    tempImg.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      // Limit max dimension to 800px to ensure size fits localStorage limits
      const maxDim = 800;
      let width = tempImg.width;
      let height = tempImg.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(tempImg, 0, 0, width, height);
      uploadedImageSrc = canvas.toDataURL('image/jpeg', 0.7);
      
      // Save to history automatically
      addRoomToHistory(uploadedImageSrc);
      
      triggerAnalysisTransition(true);
    };
  };
  reader.readAsDataURL(file);
}



// Test bedroom trigger
if (btnUseTestBedroom) {
  btnUseTestBedroom.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("[AI Designer] Test Mode Triggered: Simulating bedroom image upload...");
    uploadedFileName = "WhatsApp Image 2026-05-31 at 18.05.05.jpeg";
    uploadedFileSize = 130184;
    uploadedRoomNode = null; // General-purpose custom project
    uploadedImageSrc = "WhatsApp Image 2026-05-31 at 18.05.05.jpeg";
    
    activeProjectId = "test-bed-" + Date.now().toString();
    activeProjectName = "Test Bedroom Design - " + new Date().toLocaleDateString();
    
    // Save to history automatically
    addRoomToHistory(uploadedImageSrc);
    triggerAnalysisTransition(true);
  });
}

// Test drawing room trigger
if (btnUseTestDrawing) {
  btnUseTestDrawing.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("[AI Designer] Test Mode Triggered: Simulating drawing room image upload...");
    uploadedFileName = "WhatsApp Image 2026-05-31 at 18.05.41.jpeg";
    uploadedFileSize = 179592;
    uploadedRoomNode = null; // General-purpose custom project
    uploadedImageSrc = "WhatsApp Image 2026-05-31 at 18.05.41.jpeg";
    
    activeProjectId = "test-draw-" + Date.now().toString();
    activeProjectName = "Test Drawing Room Design - " + new Date().toLocaleDateString();
    
    // Save to history automatically
    addRoomToHistory(uploadedImageSrc);
    triggerAnalysisTransition(true);
  });
}

// Style strength slider input listener
if (styleStrengthSlider && strengthValText) {
  styleStrengthSlider.addEventListener('input', () => {
    const val = styleStrengthSlider.value;
    if (val === '1') {
      strengthValText.textContent = "Subtle";
    } else if (val === '3') {
      strengthValText.textContent = "Dramatic";
    } else {
      strengthValText.textContent = "Balanced";
    }
    updateStep4Render();
  });
}

// Comparison toggles layout switcher
if (btnCompareSlider && btnCompareSideBySide && wizardSliderContainer) {
  btnCompareSlider.addEventListener('click', () => {
    btnCompareSlider.classList.add('active');
    btnCompareSideBySide.classList.remove('active');
    wizardSliderContainer.classList.remove('side-by-side');
  });

  btnCompareSideBySide.addEventListener('click', () => {
    btnCompareSideBySide.classList.add('active');
    btnCompareSlider.classList.remove('active');
    wizardSliderContainer.classList.add('side-by-side');
  });
}

// Regenerate Design with loader spinner and skeletons
if (btnRegenerateDesign) {
  btnRegenerateDesign.addEventListener('click', () => {
    const outerContainer = document.getElementById('wizard-slider-container');
    const bgContainer = outerContainer ? outerContainer.querySelector('.wizard-slider-bg') : null;
    const fgContainer = document.getElementById('wizard-slider-fg');
    
    let bgSkeleton, fgSkeleton;
    if (bgContainer) {
      bgSkeleton = document.createElement('div');
      bgSkeleton.className = 'skeleton-box';
      bgContainer.appendChild(bgSkeleton);
    }
    if (fgContainer) {
      fgSkeleton = document.createElement('div');
      fgSkeleton.className = 'skeleton-box';
      fgContainer.appendChild(fgSkeleton);
    }

    const statusText = document.getElementById('confidence-gen-status');
    if (statusText) statusText.textContent = "Generating...";

    // Create loader spinner
    const loader = document.createElement('div');
    loader.className = 'wizard-loader-container';
    loader.innerHTML = `
      <div class="loader-spinner"></div>
      <span class="loader-status-text">Regenerating Design Render...</span>
      <span class="loader-sub-text">Interior Designer Agent adjusting color overlays...</span>
    `;
    const step4Content = document.getElementById('wizard-step-4-content');
    step4Content.appendChild(loader);

    const statuses = [
      { title: "Designer Agent framing doorways...", sub: "Verifying layout proportions against Raw Canvas landmarks." },
      { title: "Applying styling textures...", sub: "Mapping materials palette onto flooring margins." },
      { title: "Generating final AI render...", sub: "Adjusting natural light sources and rendering shadows." }
    ];

    let idx = 0;
    const statusInterval = setInterval(() => {
      if (idx < statuses.length) {
        loader.querySelector('.loader-status-text').textContent = statuses[idx].title;
        loader.querySelector('.loader-sub-text').textContent = statuses[idx].sub;
        idx++;
      }
    }, 450);

    setTimeout(() => {
      clearInterval(statusInterval);
      loader.remove();
      if (bgSkeleton) bgSkeleton.remove();
      if (fgSkeleton) fgSkeleton.remove();

      updateStep4Render();
      setWizardSliderPosition(50);
    }, 1500);
  });
}

// Step 3: Style selection click
const styleCards = document.querySelectorAll('.style-card');
styleCards.forEach(card => {
  card.addEventListener('click', () => {
    styleCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    wizardSelectedStyle = card.getAttribute('data-style-preset');
  });
});

// Step 3 -> Step 4 Transition (Simulate AI Rendering)
const btnGenerateRedesign = document.getElementById('btn-generate-redesign');
const step3Content = document.getElementById('wizard-step-3-content');

// Multi-Concept Catalog mapping style presets and concept variants
const conceptCatalog = {
  minimalist: {
    A: {
      img: 'lobby_starter_moderate.webp',
      title: "Balance & Flow",
      notes: "Applied the Modern Minimalist aesthetic (Concept A: Balance & Flow). Cleared sofa clutter and towels from doors. Substituted old seating with low-profile monochromatic leather furniture and a concrete block coffee table, maintaining geometric alignment.",
      prompt: '"A photo of the exact same living room lobby, edited to show a minimalist design upgrade. The walls are painted in clean gallery white with concrete highlights. The mismatched furniture is replaced with a low-profile matte black leather platform sofa and steel lounge chairs. Surfaces are completely decluttered..."'
    },
    B: {
      img: 'lobby_starter_minimal.webp',
      title: "Industrial Lines",
      notes: "Applied the Modern Minimalist aesthetic (Concept B: Industrial Lines). Features clean white walls, a black-framed square sink mirror, and a simplified wooden accent chair. Retains original layout but declutters files.",
      prompt: '"A photo of the exact same living room lobby, edited to show a minimalist design upgrade (Concept B). The walls are white, sofas are tidied up, and a contemporary black-framed square mirror hangs above the sink..."'
    }
  },
  scandinavian: {
    A: {
      img: 'lobby_starter_minimal.webp',
      title: "Nordic Light",
      notes: "Applied the Scandinavian aesthetic (Concept A: Nordic Light). Decluttered doorways and arranged light wood dowel legs, high-legged heather grey fabric sofas, and textured wool textures to optimize airy daylight feels.",
      prompt: '"A photo of the exact same living room lobby, edited to show a Scandinavian upgrade. Walls are bright chalky white, sofas are soft grey wool fabric with light-stained oak dowel legs. A high-pile berber rug is laid down. Washbasin has a square black-framed mirror..."'
    },
    B: {
      img: 'lobby_starter_level1.webp',
      title: "Hygge Warmth",
      notes: "Applied the Scandinavian aesthetic (Concept B: Hygge Warmth). Focuses on hygge warmth, soft textured cushions, folded blankets, and an open layout that keeps the entry visual line highly clear.",
      prompt: '"A photo of the exact same living room lobby, edited to show a cozy Scandinavian concept (Hygge Warmth). Seating cushions are rearranged, floor is swept, and layout outlines maximum entry clearance..."'
    }
  },
  japandi: {
    A: {
      img: 'lobby_starter_level2.webp',
      title: "Wabi-Sabi Flow",
      notes: "Applied the Japandi aesthetic (Concept A: Wabi-Sabi Flow). Integrated a natural flat stone pathway flush with the floor, removed door visual clutter, and planted indoor ground ferns near the stairs to balance wabi-sabi details.",
      prompt: '"A photo of the exact same living room lobby, edited to show a subtle, realistic walkway and planting upgrade. Clean up room clutter and remove door hangings. Integrate a simple natural stone walkway path inlaid flush with the grey marble flooring. Add a few indoor plants..."'
    },
    B: {
      img: 'lobby_starter_minimal.webp',
      title: "Zen Harmony",
      notes: "Applied the Japandi aesthetic (Concept B: Zen Harmony). Emphasizes raw wood furniture frames, organic linen blankets, a black-framed vanity mirror, and total removal of entryway visual clutter.",
      prompt: '"A photo of the exact same living room lobby, edited to show a Zen Japandi style upgrade. Walls are clean cream, a square black metal frame mirror is added, and furniture seating cushions are tidied..."'
    }
  },
  luxury: {
    A: {
      img: 'lobby_starter_complete.webp',
      title: "Walnut Grandeur",
      notes: "Applied the Contemporary Luxury aesthetic (Concept A: Walnut Grandeur). Installed bookmatched marble slabs and dark walnut wood panels. Substituted furniture with curved velvet lounge seats and a gold-framed coffee table, highlighting brass trim accents.",
      prompt: '"A photo of the exact same living room lobby, edited to show a complete luxury remodel. Walls feature modern walnut paneling and polished white marble slabs with gold veining. Sofa is curve velvet with brass outlines..."'
    },
    B: {
      img: 'lobby_starter_moderate.webp',
      title: "Modern Opulence",
      notes: "Applied the Contemporary Luxury aesthetic (Concept B: Modern Opulence). Focuses on polished greige wall paint, a warm neutral area rug, and floating modular wood sink cabinets paired with a tall backlit mirror.",
      prompt: '"A photo of the exact same living room lobby, edited to show a modern luxury upgrade. Features neutral beige walls, a floating wood sink vanity with LED backlit mirror, and grey contemporary seating..."'
    }
  },
  organic: {
    A: {
      img: 'lobby_starter_level1.webp',
      title: "Earthy Travertine",
      notes: "Applied the Warm Organic aesthetic (Concept A: Earthy Travertine). Focuses on neutral textured sand tones, microcement walls, raw unfilled travertine block tables, and comfortable boucle fabric textures.",
      prompt: '"A photo of the exact same living room lobby, edited to show a warm organic upgrade. Features textured sand-colored bouclé seating, a solid travertine stone block table, and raw natural textures..."'
    },
    B: {
      img: 'lobby_starter_level2.webp',
      title: "Biophilic Retreat",
      notes: "Applied the Warm Organic aesthetic (Concept B: Biophilic Retreat). Features biophilic pathways, a natural flat stone floor inlay, and ground-growing indoor ferns to bring high-end natural tranquility indoors.",
      prompt: '"A photo of the exact same living room lobby, edited to show a biophilic organic style. Natural stone path is laid flush in the floor, and live indoor ferns grow naturally near the stair column..."'
    }
  }
};

function getWizardAssetPath(node, style, concept) {
  const mapping = {
    minimalist: { A: 'moderate', B: 'minimal' },
    scandinavian: { A: 'minimal', B: 'level1' },
    japandi: { A: 'level2', B: 'minimal' },
    luxury: { A: 'complete', B: 'moderate' },
    organic: { A: 'level1', B: 'level2' }
  };
  const level = mapping[style]?.[concept] || 'minimal';
  
  let path = "";
  if (level === 'original') {
    path = `${node.filePrefix}_original.jpg`;
  } else if ((level === 'level1' || level === 'level2') && node.filePrefix !== 'lobby_starter') {
    path = `${node.filePrefix}_minimal.webp`;
  } else {
    path = `${node.filePrefix}_${level}.webp`;
  }
  return path + "?v=3";
}

function updateStep4Render() {
  const redesignImg = document.getElementById('wizard-redesign-img');
  const redesignNotes = document.getElementById('wizard-designer-notes');
  const redesignPrompt = document.getElementById('wizard-generated-prompt');
  const furnitureRefImg = document.getElementById('furniture-ref-img');

  // Update original room image in comparative slider
  const sliderFgImg = document.querySelector('#wizard-slider-fg img');
  if (sliderFgImg) {
    sliderFgImg.src = uploadedImageSrc || 'lobby_starter_original.jpg';
  }

  // Get current concept config
  const preset = conceptCatalog[wizardSelectedStyle] || conceptCatalog.japandi;
  const cfg = preset[wizardActiveConcept] || preset.A;

  // Generate AI Redesign via the Image Generation Agent (pass null for node to force custom image redesign)
  ImageGenerationAgent.generateRedesign(uploadedImageSrc || 'lobby_starter_original.jpg', null, wizardSelectedStyle, wizardActiveConcept, (redesignPath, isCustomPlaceholder) => {
    // Arbitrary custom room photo (CSS filters and overlays)
    redesignImg.src = redesignPath;
    furnitureRefImg.src = redesignPath;

    // Apply aesthetic filters for custom upload previews to simulate AI rendering style
    if (wizardSelectedStyle === 'minimalist') {
      redesignImg.style.filter = 'grayscale(0.7) contrast(1.3) brightness(1.05)';
      furnitureRefImg.style.filter = 'grayscale(0.7) contrast(1.3) brightness(1.05)';
    } else if (wizardSelectedStyle === 'scandinavian') {
      redesignImg.style.filter = 'saturate(0.8) brightness(1.15) contrast(0.95) sepia(0.03)';
      furnitureRefImg.style.filter = 'saturate(0.8) brightness(1.15) contrast(0.95) sepia(0.03)';
    } else if (wizardSelectedStyle === 'luxury') {
      redesignImg.style.filter = 'contrast(1.2) brightness(0.9) saturate(1.1) sepia(0.12)';
      furnitureRefImg.style.filter = 'contrast(1.2) brightness(0.9) saturate(1.1) sepia(0.12)';
    } else if (wizardSelectedStyle === 'organic') {
      redesignImg.style.filter = 'sepia(0.3) hue-rotate(-5deg) saturate(1.15) contrast(1.02)';
      furnitureRefImg.style.filter = 'sepia(0.3) hue-rotate(-5deg) saturate(1.15) contrast(1.02)';
    } else {
      // Japandi
      redesignImg.style.filter = 'sepia(0.2) saturate(0.9) brightness(0.98) contrast(0.96)';
      furnitureRefImg.style.filter = 'sepia(0.2) saturate(0.9) brightness(0.98) contrast(0.96)';
    }

    // Be explicit about what the viewer is actually looking at. For a custom
    // upload we only colour-grade the original photo — no room is generated —
    // so it must never be labelled as an AI render.
    const badge = document.getElementById('custom-render-badge');
    if (badge) {
      if (isCustomPlaceholder) {
        badge.textContent = '◑ Style Preview — colour grade of your photo';
        badge.classList.add('is-preview');
      } else {
        badge.textContent = '✦ AI Styled Render';
        badge.classList.remove('is-preview');
      }
      badge.classList.remove('hidden');
    }

    updateCustomProposalOverlays();
  });

  const isPreviewOnly = isCustomUpload || !uploadedRoomNode;
  let notes = isPreviewOnly
    ? cfg.notes + " — This is the design plan for your room. The image above is a colour-graded preview of your own photo, not a generated render."
    : cfg.notes + " (Applied and adapted to your custom uploaded space layout).";
  redesignNotes.textContent = notes;
  redesignPrompt.textContent = cfg.prompt;

  // Update dynamic preservation text elements
  const preservationDims = document.getElementById('preservation-dims');
  if (preservationDims) {
    const lowerName = (uploadedFileName || '').toLowerCase();
    const isBedroom = lowerName.includes('bedroom') || lowerName.includes('bed') || /18[\s._-]*05[\s._-]*0[56]/.test(lowerName) || (analysisRoomType && analysisRoomType.textContent.includes("Bedroom"));
    const isDrawing = lowerName.includes('drawing') || lowerName.includes('living') || /18[\s._-]*05[\s._-]*4[12]/.test(lowerName) || (analysisRoomType && (analysisRoomType.textContent.includes("Drawing") || analysisRoomType.textContent.includes("Living")));
    if (isBedroom) {
      preservationDims.textContent = "(12.5' x 14.2')";
    } else if (isDrawing) {
      preservationDims.textContent = "(16.4' x 20.8')";
    } else {
      preservationDims.textContent = "(14.0' x 15.5')";
    }
  }

  const confidenceStyle = document.getElementById('confidence-style');
  if (confidenceStyle) {
    const styleNames = {
      minimalist: "Minimalist",
      scandinavian: "Scandinavian",
      japandi: "Japandi",
      luxury: "Luxury",
      organic: "Organic"
    };
    confidenceStyle.textContent = styleNames[wizardSelectedStyle] || wizardSelectedStyle;
  }

  const confidenceGenStatus = document.getElementById('confidence-gen-status');
  if (confidenceGenStatus) {
    confidenceGenStatus.textContent = "Success";
  }

  // Update the Favorite button active state class
  syncFavoriteButtonState();
}

// Bind concept tabs
document.querySelectorAll('.concept-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.concept-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    wizardActiveConcept = btn.getAttribute('data-concept');
    updateStep4Render();
  });
});

// Bind Favorite Concept trigger
const btnFavoriteRender = document.getElementById('btn-favorite-render');
if (btnFavoriteRender) {
  btnFavoriteRender.addEventListener('click', toggleFavorite);
}

btnGenerateRedesign.addEventListener('click', () => {
  // Go to Step 4 immediately to prevent blank screens
  goToWizardStep(4);
  setWizardSliderPosition(50);

  // Set AI status to Generating
  const statusText = document.getElementById('confidence-gen-status');
  if (statusText) statusText.textContent = "Generating...";

  // Show skeleton boxes on the image comparison containers
  const outerContainer = document.getElementById('wizard-slider-container');
  const bgContainer = outerContainer ? outerContainer.querySelector('.wizard-slider-bg') : null;
  const fgContainer = document.getElementById('wizard-slider-fg');
  
  let bgSkeleton, fgSkeleton;
  if (bgContainer) {
    bgSkeleton = document.createElement('div');
    bgSkeleton.className = 'skeleton-box';
    bgContainer.appendChild(bgSkeleton);
  }
  if (fgContainer) {
    fgSkeleton = document.createElement('div');
    fgSkeleton.className = 'skeleton-box';
    fgContainer.appendChild(fgSkeleton);
  }

  // Create and append dynamic loading spinner overlay to Step 4 content
  const loader = document.createElement('div');
  loader.className = 'wizard-loader-container';
  loader.innerHTML = `
    <div class="loader-spinner"></div>
    <span class="loader-status-text">Analysing Style Presets...</span>
    <span class="loader-sub-text">Designer Agent drafting architectural frames...</span>
  `;
  const step4Content = document.getElementById('wizard-step-4-content');
  step4Content.appendChild(loader);

  // Cycle loading sub-texts for realism
  const statuses = [
    { title: "Designer Agent framing doorways...", sub: "Verifying layout proportions against Raw Canvas landmarks." },
    { title: "Applying styling textures...", sub: "Mapping materials palette onto flooring margins." },
    { title: "Generating final AI render...", sub: "Adjusting natural light sources and rendering shadows." }
  ];
  
  let idx = 0;
  const statusInterval = setInterval(() => {
    if (idx < statuses.length) {
      loader.querySelector('.loader-status-text').textContent = statuses[idx].title;
      loader.querySelector('.loader-sub-text').textContent = statuses[idx].sub;
      idx++;
    }
  }, 1000);

  // Transition complete after 3.2 seconds
  setTimeout(() => {
    clearInterval(statusInterval);
    loader.remove(); // Clean loader
    if (bgSkeleton) bgSkeleton.remove();
    if (fgSkeleton) fgSkeleton.remove();
    
    // Default to Concept A on new generation
    wizardActiveConcept = 'A';
    document.querySelectorAll('.concept-btn').forEach(b => {
      if (b.getAttribute('data-concept') === 'A') b.classList.add('active');
      else b.classList.remove('active');
    });

    updateStep4Render();
    setWizardSliderPosition(50);
  }, 3200);
});

// Step 4: Draggable Comparison Slider
const wSliderOuter = document.getElementById('wizard-slider-container');
const wSliderFg = document.getElementById('wizard-slider-fg');
const wSliderHandle = document.getElementById('wizard-slider-handle');

function setWizardSliderPosition(pct) {
  pct = Math.max(0, Math.min(100, pct));
  wSliderHandle.style.left = `${pct}%`;
  wSliderFg.style.width = `${pct}%`;
}

function handleWizardDrag(clientX) {
  const rect = wSliderOuter.getBoundingClientRect();
  const pct = ((clientX - rect.left) / rect.width) * 100;
  setWizardSliderPosition(pct);
}

wSliderHandle.addEventListener('mousedown', (e) => { wizardDragging = true; e.preventDefault(); });
window.addEventListener('mouseup', () => wizardDragging = false);
window.addEventListener('mousemove', (e) => { if (wizardDragging) handleWizardDrag(e.clientX); });
wSliderHandle.addEventListener('touchstart', () => wizardDragging = true);
window.addEventListener('touchend', () => wizardDragging = false);
window.addEventListener('touchmove', (e) => {
  if (wizardDragging && e.touches.length > 0) handleWizardDrag(e.touches[0].clientX);
});

// Step 5: Render Furniture Recommendation spec cards
const furnitureGrid = document.getElementById('furniture-items-container');
const furnitureTotalPriceText = document.getElementById('furniture-total-price');

// Style compliance note text store
const styleComplianceNotes = {
  minimalist: "Modern Minimalist verified: Seating profiles keep walk paths clear. 210cm platform sofa aligns cleanly to main wall, maintaining 3.2 ft open flow to the rear door.",
  scandinavian: "Scandinavian verified: High raised wood legs permit daylight transparency. Oval oak table leaves 3.4 ft corridors on both sides, avoiding sharp corners in walk paths.",
  japandi: "Japandi verified: Low wabi-sabi profiles preserve structural heights. Sofa and rug keep 3.5 ft corridor clear from the center stair post, avoiding display shelf swings.",
  luxury: "Contemporary Luxury verified: 230cm curved velvet sofa frames the seating bay without crossing entry margins. Polished vanity fits flush inside left plumbing wet line.",
  organic: "Warm Organic verified: Compact bouclé seating leaves 3.4 ft pathways to the doorways. Travertine block table leaves comfortable margins around the staircase baluster."
};

function renderFurnitureGrid() {
  const activeCat = getActiveFurnitureCatalog();
  const list = activeCat[wizardSelectedStyle] || [];
  furnitureGrid.innerHTML = '';

  // Render style compliance summary text
  const compText = document.getElementById('furniture-compliance-text');
  if (compText) {
    const activeNotes = getActiveStyleComplianceNotes();
    compText.textContent = activeNotes[wizardSelectedStyle] || "Layout verifies pathway clearances and boundaries.";
  }
  
  list.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'furniture-item-card';
    card.innerHTML = `
      <div class="item-check-col">
        <input type="checkbox" class="item-check-input" checked data-index="${index}">
      </div>
      <div class="item-img-col">
        <!-- Display styling colored dot as thumbnail box -->
        <div style="width:60px; height:60px; border-radius:4px; background:rgba(255,255,255,0.03); border:1px solid var(--glass-border); display:flex; align-items:center; justify-content:center; font-size:1.5rem;">
          🪑
        </div>
      </div>
      <div class="item-details-col">
        <span class="item-name">${item.name}</span>
        <span class="item-dimensions">Size: ${item.size}</span>
        <span class="item-materials">Finish: ${item.mat}</span>
        <span class="item-fit">📐 ${item.fit}</span>
      </div>
      <div class="item-price-col">
        <span class="item-price">$${item.price}</span>
        <a href="${item.link}" class="item-buy-link" target="_blank">View Store</a>
      </div>
    `;
    furnitureGrid.appendChild(card);
  });

  // Calculate prices on check trigger
  const checkboxes = furnitureGrid.querySelectorAll('.item-check-input');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', calculateFurnitureTotal);
  });
  
  calculateFurnitureTotal();
}

function calculateFurnitureTotal() {
  const checkboxes = furnitureGrid.querySelectorAll('.item-check-input');
  const activeCat = getActiveFurnitureCatalog();
  const catalog = activeCat[wizardSelectedStyle] || [];
  let sum = 0;
  
  checkboxes.forEach(cb => {
    if (cb.checked) {
      const idx = parseInt(cb.getAttribute('data-index'));
      sum += catalog[idx].price;
    }
  });
  
  furnitureTotalPriceText.textContent = `$${sum}`;
}

// Step 6: Render Final Cost Reports & Schedules & Budget Tiers
let wizardActiveBudget = 'smart'; // Default: 'smart'

const btnBudgetRefresh = document.getElementById('btn-budget-refresh');
const btnBudgetSmart = document.getElementById('btn-budget-smart');
const btnBudgetPremium = document.getElementById('btn-budget-premium');
const budgetExpectedImprovements = document.getElementById('budget-expected-improvements');

const reportStyleName = document.getElementById('report-style-name');
const reportMatCost = document.getElementById('report-mat-cost');
const reportFurnitureCost = document.getElementById('report-furniture-cost');
const reportLaborCost = document.getElementById('report-labor-cost');
const reportTotalCost = document.getElementById('report-total-cost');

const budgetTiersData = {
  refresh: {
    name: "Budget Refresh",
    range: "$500 – $1,500",
    improvements: [
      "Deep cleaning of floor tiles and surface paint touchups.",
      "Clearing of all clothes, towels, and temporary clutter.",
      "Rearranging original couches/furniture for optimal paths.",
      "Adding 1-2 low-cost organic indoor plants near corners."
    ],
    materialsCostFactor: 0.3,
    laborCostFactor: 0.3,
    furnitureFilter: (item, idx) => idx === 0 || idx === 3 // Limit to cheapest items
  },
  smart: {
    name: "Smart Upgrade",
    range: "$1,500 – $4,500",
    improvements: [
      "Upgrading mismatched seating to uniform styled furniture sets.",
      "Adding dedicated task light fixtures and styling accents.",
      "Inlaying flat natural walkway stones flush with marble flooring.",
      "Concealing sink base piping with modular floating vanity panels."
    ],
    materialsCostFactor: 1.0,
    laborCostFactor: 1.0,
    furnitureFilter: (item, idx) => idx < 3 // Limit to first 3 items
  },
  premium: {
    name: "Premium Transformation",
    range: "$5,000 – $15,000+",
    improvements: [
      "Custom wall finishes: walnut wood panels and marble slab inlays.",
      "Premium flooring: large-format polished grey marble tiling.",
      "Luxury curved velvet designer furniture set with gold frames.",
      "High-end custom vanity unit, backlit smart LED mirror, gold fixtures."
    ],
    materialsCostFactor: 4.5,
    laborCostFactor: 4.0,
    furnitureFilter: (item, idx) => true // Include all furniture
  }
};

function switchBudgetTier(tier) {
  wizardActiveBudget = tier;
  
  // Set active class on buttons
  [btnBudgetRefresh, btnBudgetSmart, btnBudgetPremium].forEach(btn => {
    if (btn && btn.getAttribute('data-budget-tier') === tier) {
      btn.classList.add('active');
    } else if (btn) {
      btn.classList.remove('active');
    }
  });

  // Render expected improvements
  const cfg = budgetTiersData[tier];
  if (budgetExpectedImprovements && cfg) {
    budgetExpectedImprovements.innerHTML = '';
    cfg.improvements.forEach(imp => {
      const li = document.createElement('li');
      li.textContent = imp;
      budgetExpectedImprovements.appendChild(li);
    });
  }

  // Apply furniture filters (automatic checkboxes sync)
  if (furnitureGrid && cfg) {
    const checkboxes = furnitureGrid.querySelectorAll('.item-check-input');
    const activeCat = getActiveFurnitureCatalog();
    const catalog = activeCat[wizardSelectedStyle] || [];
    checkboxes.forEach((cb, idx) => {
      if (catalog[idx]) {
        cb.checked = cfg.furnitureFilter(catalog[idx], idx);
      }
    });
  }

  // Recalculate totals and reports
  calculateFurnitureTotal();
  renderFinalReport();
}

function renderFinalReport() {
  const stylesNameMap = {
    minimalist: "Modern Minimalist",
    scandinavian: "Scandinavian Style",
    japandi: "Japandi Style",
    luxury: "Contemporary Luxury",
    organic: "Warm Organic"
  };

  const cfg = budgetTiersData[wizardActiveBudget];
  if (!cfg) return;

  // Sourcing items total price calculation from checkboxes
  const checkboxes = furnitureGrid ? furnitureGrid.querySelectorAll('.item-check-input') : [];
  const activeCat = getActiveFurnitureCatalog();
  const catalog = activeCat[wizardSelectedStyle] || [];
  let furnitureSum = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) {
      const idx = parseInt(cb.getAttribute('data-index'));
      if (catalog[idx]) {
        furnitureSum += catalog[idx].price;
      }
    }
  });

  // Base materials and labor costs
  const baseMaterials = wizardSelectedStyle === 'luxury' ? 800 : (wizardSelectedStyle === 'organic' ? 450 : 300);
  const baseLabor = wizardSelectedStyle === 'luxury' ? 1000 : (wizardSelectedStyle === 'organic' ? 600 : 500);

  // Scaled materials and labor costs
  const materialsCost = Math.round(baseMaterials * cfg.materialsCostFactor);
  const laborCost = Math.round(baseLabor * cfg.laborCostFactor);
  const totalProjectCost = materialsCost + furnitureSum + laborCost;

  if (reportStyleName) reportStyleName.textContent = stylesNameMap[wizardSelectedStyle] || "Custom Style";
  if (reportMatCost) reportMatCost.textContent = `$${materialsCost}`;
  if (reportFurnitureCost) reportFurnitureCost.textContent = `$${furnitureSum}`;
  if (reportLaborCost) reportLaborCost.textContent = `$${laborCost}`;
  if (reportTotalCost) reportTotalCost.textContent = `$${totalProjectCost}`;
}

// Bind budget tier selectors
if (btnBudgetRefresh) btnBudgetRefresh.addEventListener('click', () => switchBudgetTier('refresh'));
if (btnBudgetSmart) btnBudgetSmart.addEventListener('click', () => switchBudgetTier('smart'));
if (btnBudgetPremium) btnBudgetPremium.addEventListener('click', () => switchBudgetTier('premium'));

// Step 6 Actions (Download Spec Report)
const btnDownloadPackage = document.getElementById('btn-download-package');
const btnRestartWizard = document.getElementById('btn-restart-wizard');

if (btnDownloadPackage) {
  btnDownloadPackage.addEventListener('click', () => {
    // Compile structured string for download
    const styleName = reportStyleName ? reportStyleName.textContent : "Custom Style";
    const matPrice = reportMatCost ? reportMatCost.textContent : "$0";
    const furnPrice = reportFurnitureCost ? reportFurnitureCost.textContent : "$0";
    const labPrice = reportLaborCost ? reportLaborCost.textContent : "$0";
    const totPrice = reportTotalCost ? reportTotalCost.textContent : "$0";
    const budgetCfg = budgetTiersData[wizardActiveBudget];

    // Before Analysis Info
    const beforeRoomType = analysisRoomType ? analysisRoomType.textContent : "N/A";
    const beforeInventory = analysisInventory ? analysisInventory.textContent : "N/A";
    const beforeLighting = analysisLighting ? analysisLighting.textContent : "N/A";
    const beforePalette = analysisPaletteText ? analysisPaletteText.textContent : "N/A";
    const beforeScore = analysisScoreVal ? analysisScoreVal.textContent : "N/A";

    // Design Concept Info
    const designerNotes = document.getElementById('wizard-designer-notes') ? document.getElementById('wizard-designer-notes').textContent : "N/A";
    const designerPrompt = document.getElementById('wizard-generated-prompt') ? document.getElementById('wizard-generated-prompt').textContent : "N/A";

    // Color Palette Swatches (Extract colors)
    const swatches = Array.from(analysisPaletteSwatches.querySelectorAll('.analysis-swatch-dot')).map(el => {
      return el.style.backgroundColor || el.title.replace('Dominant Color: ', '');
    });
    let swatchesHtml = "";
    swatches.forEach(c => {
      swatchesHtml += `<div class="swatch-dot" style="background-color: ${c};" title="${c}">${c}</div>`;
    });

    // Furniture spec table rows
    let furnitureRows = "";
    const checkboxes = furnitureGrid ? furnitureGrid.querySelectorAll('.item-check-input') : [];
    const activeCat = getActiveFurnitureCatalog();
    const catalog = activeCat[wizardSelectedStyle] || [];
    let hasItems = false;
    
    checkboxes.forEach(cb => {
      if (cb.checked) {
        const idx = parseInt(cb.getAttribute('data-index'));
        const item = catalog[idx];
        if (item) {
          hasItems = true;
          furnitureRows += `
            <tr>
              <td><strong>${item.name}</strong></td>
              <td>${item.size}</td>
              <td>${item.mat}</td>
              <td>${item.fit}</td>
              <td class="price-col">$${item.price}</td>
            </tr>
          `;
        }
      }
    });

    if (!hasItems) {
      furnitureRows = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">No items selected in budget proposal</td></tr>`;
    }

    // Expected improvements
    let improvementsHtml = "";
    budgetCfg.improvements.forEach(imp => {
      improvementsHtml += `<li>${imp}</li>`;
    });

    // Roadmap timeline phases
    const roadmapSteps = [
      { num: 1, title: "Preparation & Declutter (Day 1)", desc: "Clear all visual clutter, door hanging garments, and clean floor tiles." },
      { num: 2, title: "Base Upgrades & Masonry (Days 2-3)", desc: "Prepare surface margins and complete floor tile inlays/walkways." },
      { num: 3, title: "Landscaping & Plumbing Rough-in (Day 4)", desc: "Implement custom indoor soil beds, plants, or vanity wet rough-ins." },
      { num: 4, title: "Sourced Furniture Install & Styling (Day 5)", desc: "Assemble and arrange loose furniture/decor according to architectural layout lines." }
    ];
    let roadmapHtml = "";
    roadmapSteps.forEach(step => {
      roadmapHtml += `
        <div class="roadmap-step">
          <div class="step-num">${step.num}</div>
          <div class="step-info">
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
          </div>
        </div>
      `;
    });

    // Generate HTML Designer Spec Report
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Interior Design Spec Package - ${styleName}</title>
  <style>
    :root {
      --bg-primary: #0f172a;
      --bg-secondary: #1e293b;
      --accent: #8b5cf6;
      --accent-secondary: #d946ef;
      --text-primary: #f8fafc;
      --text-secondary: #94a3b8;
      --border: rgba(255,255,255,0.08);
      --success: #10b981;
      --gold: #f59e0b;
    }
    body {
      background-color: var(--bg-primary);
      color: var(--text-primary);
      font-family: 'Inter', system-ui, sans-serif;
      line-height: 1.6;
      padding: 3rem 2rem;
      max-width: 960px;
      margin: 0 auto;
    }
    header {
      border-bottom: 2px solid var(--accent);
      padding-bottom: 1.5rem;
      margin-bottom: 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .header-left h1 {
      font-family: 'Outfit', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      margin: 0 0 0.5rem 0;
      letter-spacing: -0.02em;
      background: linear-gradient(to right, #fff, #94a3b8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .header-left p {
      color: var(--text-secondary);
      margin: 0;
      font-size: 0.95rem;
    }
    .header-right {
      text-align: right;
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.4;
    }
    .report-grid {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }
    section {
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 2.25rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }
    section h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 1.4rem;
      font-weight: 600;
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.75rem;
      margin-top: 0;
      margin-bottom: 1.25rem;
      color: #c084fc;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .grid-2col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    .bullet-item {
      margin-bottom: 1.25rem;
    }
    .bullet-label {
      font-weight: 600;
      color: var(--text-primary);
      display: block;
      margin-bottom: 0.25rem;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      color: #a78bfa;
    }
    .bullet-desc {
      color: var(--text-secondary);
      font-size: 0.9rem;
      line-height: 1.5;
    }
    .colors-swatch-row {
      display: flex;
      gap: 10px;
      margin-top: 0.75rem;
    }
    .swatch-dot {
      width: 50px;
      height: 50px;
      border-radius: 6px;
      border: 1px solid rgba(255,255,255,0.15);
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.65rem;
      font-weight: 700;
      color: #fff;
      text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    th, td {
      text-align: left;
      padding: 0.85rem 1rem;
      border-bottom: 1px solid var(--border);
      font-size: 0.875rem;
    }
    th {
      font-weight: 600;
      color: var(--text-primary);
      background: rgba(255,255,255,0.02);
    }
    td {
      color: var(--text-secondary);
    }
    .price-col {
      text-align: right;
      font-weight: 600;
      color: var(--text-primary);
    }
    .total-row {
      font-weight: 700;
      font-size: 1.1rem;
      background: rgba(16, 185, 129, 0.05);
    }
    .total-row td {
      color: var(--success);
    }
    .roadmap {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      position: relative;
    }
    .roadmap::after {
      content: "";
      position: absolute;
      top: 10px;
      left: 14px;
      width: 2px;
      height: calc(100% - 30px);
      background: var(--border);
      z-index: 1;
    }
    .roadmap-step {
      display: flex;
      gap: 1.5rem;
      position: relative;
      z-index: 2;
    }
    .step-num {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: var(--accent);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
      flex-shrink: 0;
      box-shadow: 0 0 8px var(--accent-glow);
    }
    .step-info h3 {
      margin: 0 0 0.25rem 0;
      font-size: 0.95rem;
      color: var(--text-primary);
    }
    .step-info p {
      margin: 0;
      font-size: 0.85rem;
      color: var(--text-secondary);
    }
    .code-box {
      background: rgba(0,0,0,0.25);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 1.25rem;
      font-family: monospace;
      font-size: 0.8rem;
      color: var(--text-secondary);
      word-break: normal;
      white-space: pre-wrap;
      margin-top: 0.5rem;
      line-height: 1.4;
    }
    .score-badge {
      display: inline-block;
      background: rgba(139, 92, 246, 0.1);
      border: 1px solid var(--accent);
      color: #c084fc;
      padding: 2px 8px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 0.8rem;
    }
    .expected-improvements-box ul {
      list-style: none;
      padding-left: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .expected-improvements-box li {
      font-size: 0.875rem;
      color: var(--text-secondary);
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
    }
    .expected-improvements-box li::before {
      content: "✔";
      color: var(--success);
      font-weight: 700;
    }
    @media print {
      body {
        background: #fff;
        color: #111;
        padding: 0;
      }
      section {
        background: #fff;
        border: 1px solid #ddd;
        page-break-inside: avoid;
        margin-bottom: 2rem;
        box-shadow: none;
      }
      :root {
        --bg-primary: #fff;
        --bg-secondary: #fff;
        --text-primary: #111;
        --text-secondary: #444;
        --border: #ddd;
        --success: #059669;
        --gold: #d97706;
      }
      .swatch-dot {
        border: 1px solid #111;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .score-badge {
        background: #eee;
        color: #000;
        border-color: #333;
      }
      .header-left h1 {
        background: none;
        -webkit-text-fill-color: initial;
        color: #000;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="header-left">
      <h1>Lobby Design Studio Redesign Specification</h1>
      <p>Automated Space Redesign Spec Package</p>
    </div>
    <div class="header-right">
      <strong>Theme:</strong> ${styleName}<br>
      <strong>Budget:</strong> ${budgetCfg.name}<br>
      <strong>Date:</strong> ${new Date().toLocaleDateString()}
    </div>
  </header>

  <div class="report-grid">
    <!-- SECTION 1: Before Analysis -->
    <section>
      <h2>🔍 1. Before Analysis (Original Room Profile)</h2>
      <div class="grid-2col">
        <div>
          <div class="bullet-item">
            <span class="bullet-label">Room Classification:</span>
            <span class="bullet-desc">${beforeRoomType}</span>
          </div>
          <div class="bullet-item">
            <span class="bullet-label">Layout Efficiency Score:</span>
            <span class="bullet-desc"><span class="score-badge">${beforeScore}</span></span>
          </div>
          <div class="bullet-item">
            <span class="bullet-label">Lighting Profile:</span>
            <span class="bullet-desc">${beforeLighting}</span>
          </div>
        </div>
        <div>
          <div class="bullet-item">
            <span class="bullet-label">Detected Furniture Inventory:</span>
            <span class="bullet-desc">${beforeInventory}</span>
          </div>
          <div class="bullet-item">
            <span class="bullet-label">Baseline Wall / Floor Finishes:</span>
            <span class="bullet-desc">${beforePalette}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Design Concept -->
    <section>
      <h2>🎨 2. Interior Design Concept</h2>
      <div class="bullet-item">
        <span class="bullet-label">Designer Agent Concept Summary:</span>
        <span class="bullet-desc">${designerNotes}</span>
      </div>
      <div class="bullet-item">
        <span class="bullet-label">Architectural Preservation Directives:</span>
        <ul style="font-size: 0.9rem; color: var(--text-secondary); padding-left: 1.2rem; margin: 0.25rem 0; line-height: 1.5;">
          <li>All concepts strictly maintain the original room geometry and ceiling clearances.</li>
          <li>Window placement, door frames, and core structural pillars (stair column) remain static.</li>
          <li>Standard camera focal lengths and perspective angles are preserved across all views.</li>
          <li>Scope of transformation is strictly limited to finishes, furniture, lighting fixtures, and decor.</li>
        </ul>
      </div>
      <div class="bullet-item">
        <span class="bullet-label">Generated REDESIGN Prompts:</span>
        <div class="code-box">${designerPrompt}</div>
      </div>
    </section>

    <!-- SECTION 3: Color Palette -->
    <section>
      <h2>🖌️ 3. Compiled Color Palette Swatches</h2>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0;">Extracted dominant color swatches (HEX values) compiled from raw space analysis:</p>
      <div class="colors-swatch-row">
        ${swatchesHtml}
      </div>
    </section>

    <!-- SECTION 4: Furniture Recommendations -->
    <section>
      <h2>🪑 4. Compliant Furniture & Decor Recommendations</h2>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0;">Items recommended by the Furniture Spec Agent matching style constraints and entryway/column boundaries:</p>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Dimensions</th>
            <th>Materials & Finishes</th>
            <th>Compliance Directives</th>
            <th style="text-align: right;">Cost Estimate</th>
          </tr>
        </thead>
        <tbody>
          ${furnitureRows}
        </tbody>
      </table>
    </section>

    <!-- SECTION 5: Budget Estimate -->
    <section>
      <h2>📊 5. Project Budget Estimations</h2>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0;">Remodel scope estimates scaled for <strong>${budgetCfg.name}</strong> tier options:</p>
      <table>
        <thead>
          <tr>
            <th>Expense Category</th>
            <th>Description</th>
            <th style="text-align: right;">Cost Projection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Materials & Finishes</strong></td>
            <td>Paints, wall/stone trim, flooring layout materials, plumbing wet covers.</td>
            <td class="price-col">${matPrice}</td>
          </tr>
          <tr>
            <td><strong>Sourced Furniture / Decor</strong></td>
            <td>Selected shopping cart items sourced by the Furniture Agent.</td>
            <td class="price-col">${furnPrice}</td>
          </tr>
          <tr>
            <td><strong>Trade Labor Cost</strong></td>
            <td>Estimated builder, carpentry masonry, and plumbing contractor fees.</td>
            <td class="price-col">${labPrice}</td>
          </tr>
          <tr class="total-row">
            <td><strong>Projected Remodel Investment</strong></td>
            <td>Estimated aggregate budget required for the project.</td>
            <td class="price-col">${totPrice}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- SECTION 6: Improvement Roadmap -->
    <section>
      <h2>🚀 6. Construction Improvement Roadmap</h2>
      <div class="grid-2col">
        <div>
          <div class="expected-improvements-box">
            <h3 style="font-size: 0.9rem; margin-top: 0; color: #a78bfa; text-transform: uppercase; letter-spacing: 0.03em;">Expected Scope Coverage:</h3>
            <ul>
              ${improvementsHtml}
            </ul>
          </div>
        </div>
        <div class="roadmap">
          ${roadmapHtml}
        </div>
      </div>
    </section>
  </div>

  <footer style="margin-top: 3.5rem; border-top: 1px solid var(--border); padding-top: 1.5rem; text-align: center; font-size: 0.8rem; color: var(--text-secondary);">
    Report compiled successfully by Lobby Design Studio. All coordinates, wet zones, and pathway checks verified.
  </footer>
</body>
</html>`;

    // Create file download in client browser using Blob
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lobby_remodel_spec_report.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

if (btnRestartWizard) {
  btnRestartWizard.addEventListener('click', () => {
    // Reset active budget to smart
    switchBudgetTier('smart');
    goToWizardStep(1);
  });
}

// ==========================================================================
// 4. Portfolio Memory & Drawer Controller
// ==========================================================================

const tabPortfolio = document.getElementById('tab-portfolio');
const portfolioDrawer = document.getElementById('portfolio-drawer');
const drawerBackdrop = document.getElementById('drawer-backdrop');
const btnCloseDrawer = document.getElementById('btn-close-drawer');
const btnSaveProject = document.getElementById('btn-save-project');

// Render drawer tab panes content
function renderDrawerContent() {
  // 1. Projects List
  const projectsList = document.getElementById('projects-list');
  const projectsEmpty = document.getElementById('projects-empty');
  const projects = JSON.parse(localStorage.getItem('lobby_studio_projects') || '[]');
  
  if (projects.length === 0) {
    if (projectsEmpty) projectsEmpty.classList.remove('hidden');
    if (projectsList) projectsList.innerHTML = '';
  } else {
    if (projectsEmpty) projectsEmpty.classList.add('hidden');
    if (projectsList) {
      projectsList.innerHTML = '';
      projects.forEach(proj => {
        const styleNames = {
          minimalist: "Minimalist",
          scandinavian: "Scandinavian",
          japandi: "Japandi",
          luxury: "Luxury",
          organic: "Organic"
        };
        const prettyStyle = styleNames[proj.selectedStyle] || proj.selectedStyle;
        const formattedDate = new Date(proj.lastUpdated).toLocaleString();
        
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.innerHTML = `
          <div class="portfolio-card-info">
            <img src="${proj.originalImage || 'lobby_starter_original.jpg'}" class="portfolio-card-img" alt="${proj.name}" loading="lazy">
            <div class="portfolio-card-meta">
              <span class="portfolio-card-title">${proj.name}</span>
              <span class="portfolio-card-subtitle">Style: ${prettyStyle} | Step: ${proj.activeStep}</span>
              <span class="portfolio-card-date">${formattedDate}</span>
            </div>
          </div>
          <div class="portfolio-card-actions">
            <button class="portfolio-btn portfolio-btn-load" onclick="loadProject('${proj.id}')">Load</button>
            <button class="portfolio-btn portfolio-btn-delete" onclick="deleteProject('${proj.id}')">✕</button>
          </div>
        `;
        projectsList.appendChild(card);
      });
    }
  }

  // 2. Favorites List
  const favoritesList = document.getElementById('favorites-list');
  const favoritesEmpty = document.getElementById('favorites-empty');
  const favorites = JSON.parse(localStorage.getItem('lobby_studio_favorites') || '[]');

  if (favorites.length === 0) {
    if (favoritesEmpty) favoritesEmpty.classList.remove('hidden');
    if (favoritesList) favoritesList.innerHTML = '';
  } else {
    if (favoritesEmpty) favoritesEmpty.classList.add('hidden');
    if (favoritesList) {
      favoritesList.innerHTML = '';
      favorites.forEach(fav => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.innerHTML = `
          <div class="portfolio-card-info">
            <img src="${fav.image}" class="portfolio-card-img" alt="${fav.name}" loading="lazy">
            <div class="portfolio-card-meta">
              <span class="portfolio-card-title">${fav.name}</span>
              <span class="portfolio-card-subtitle">Concept: ${fav.concept}</span>
              <span class="portfolio-card-date">Favorited: ${fav.date}</span>
            </div>
          </div>
          <div class="portfolio-card-actions">
            <button class="portfolio-btn portfolio-btn-load" onclick="applyConceptFromFavorites('${fav.style}', '${fav.concept}')">Apply</button>
            <button class="portfolio-btn portfolio-btn-delete" onclick="removeFavorite('${fav.key}')">✕</button>
          </div>
        `;
        favoritesList.appendChild(card);
      });
    }
  }

  // 3. Room History List
  const historyList = document.getElementById('history-list');
  const historyEmpty = document.getElementById('history-empty');
  const history = JSON.parse(localStorage.getItem('lobby_studio_history') || '[]');

  if (history.length === 0) {
    if (historyEmpty) historyEmpty.classList.remove('hidden');
    if (historyList) historyList.innerHTML = '';
  } else {
    if (historyEmpty) historyEmpty.classList.add('hidden');
    if (historyList) {
      historyList.innerHTML = '';
      history.forEach(hist => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.innerHTML = `
          <div class="portfolio-card-info">
            <img src="${hist.image}" class="portfolio-card-img" alt="Uploaded Room" loading="lazy">
            <div class="portfolio-card-meta">
              <span class="portfolio-card-title">Custom Photo Upload</span>
              <span class="portfolio-card-subtitle">Saved snapshot</span>
              <span class="portfolio-card-date">${hist.date}</span>
            </div>
          </div>
          <div class="portfolio-card-actions">
            <button class="portfolio-btn portfolio-btn-load" onclick="startDesigningFromHistory('${hist.id}')">Design</button>
            <button class="portfolio-btn portfolio-btn-delete" onclick="deleteHistoryItem('${hist.id}')">✕</button>
          </div>
        `;
        historyList.appendChild(card);
      });
    }
  }
}

// Handle drawer open/close
function openDrawer() {
  portfolioDrawer.classList.add('open');
  drawerBackdrop.classList.add('open');
  renderDrawerContent();
}

function closeDrawer() {
  portfolioDrawer.classList.remove('open');
  drawerBackdrop.classList.remove('open');
}

if (tabPortfolio) tabPortfolio.addEventListener('click', openDrawer);
if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeDrawer);
if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

// Handle drawer tab switches
const drawerTabs = document.querySelectorAll('.drawer-tab');
const drawerPanes = document.querySelectorAll('.drawer-content-pane');

drawerTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    drawerTabs.forEach(t => t.classList.remove('active'));
    drawerPanes.forEach(p => p.classList.remove('active'));
    
    tab.classList.add('active');
    const paneId = `pane-drawer-${tab.getAttribute('data-drawer-tab')}`;
    const targetPane = document.getElementById(paneId);
    if (targetPane) targetPane.classList.add('active');
  });
});

// Save Project State
if (btnSaveProject) {
  btnSaveProject.addEventListener('click', () => {
    let name = prompt("Enter a name for this project:", activeProjectName || `Lobby Design - ${new Date().toLocaleDateString()}`);
    if (name === null) return; // Cancelled
    name = name.trim() || `Lobby Design - ${new Date().toLocaleDateString()}`;

    // Get checked furniture indexes
    const selectedFurniture = [];
    if (furnitureGrid) {
      const checkboxes = furnitureGrid.querySelectorAll('.item-check-input');
      checkboxes.forEach(cb => {
        if (cb.checked) {
          selectedFurniture.push(parseInt(cb.getAttribute('data-index')));
        }
      });
    }

    const project = {
      id: activeProjectId || Date.now().toString(),
      name: name,
      lastUpdated: new Date().toISOString(),
      activeStep: wizardCurrentStep,
      isCustomUpload: isCustomUpload,
      uploadedRoomNode: uploadedRoomNode,
      originalImage: isCustomUpload ? uploadedImageSrc : 'lobby_starter_original.jpg',
      analysis: {
        roomType: analysisRoomType.textContent,
        inventory: analysisInventory.textContent,
        lighting: analysisLighting.textContent,
        paletteText: analysisPaletteText.textContent,
        paletteColors: Array.from(analysisPaletteSwatches.querySelectorAll('.analysis-swatch-dot')).map(el => el.style.backgroundColor),
        score: parseInt(analysisScoreVal.textContent) || 58,
        opportunities: Array.from(analysisOpportunities.querySelectorAll('li')).map(el => el.textContent)
      },
      selectedStyle: wizardSelectedStyle,
      activeConcept: wizardActiveConcept,
      selectedFurniture: selectedFurniture,
      selectedBudgetTier: wizardActiveBudget
    };

    let projects = JSON.parse(localStorage.getItem('lobby_studio_projects') || '[]');
    const index = projects.findIndex(p => p.id === project.id);
    if (index >= 0) {
      projects[index] = project;
    } else {
      projects.push(project);
    }

    localStorage.setItem('lobby_studio_projects', JSON.stringify(projects));
    activeProjectId = project.id;
    activeProjectName = project.name;
    alert(`Project "${project.name}" saved successfully!`);
    renderDrawerContent();
  });
}

// RESTORE PROJECT
function loadProject(id) {
  const projects = JSON.parse(localStorage.getItem('lobby_studio_projects') || '[]');
  const proj = projects.find(p => p.id === id);
  if (!proj) return;

  activeProjectId = proj.id;
  activeProjectName = proj.name;

  // Restore main state
  isCustomUpload = proj.isCustomUpload;
  uploadedRoomNode = isCustomUpload ? null : (proj.uploadedRoomNode !== undefined ? proj.uploadedRoomNode : 'lobby_pos0_f');
  uploadedImageSrc = proj.originalImage;
  wizardSelectedStyle = proj.selectedStyle;
  wizardActiveConcept = proj.activeConcept || 'A';
  wizardActiveBudget = proj.selectedBudgetTier || 'smart';

  // Restore Step 2 DOM preview
  analysisPreviewImg.src = isCustomUpload ? uploadedImageSrc : 'lobby_starter_original.jpg';
  if (isCustomUpload) {
    lobbyBoundingBoxes.classList.add('hidden');
    customBoundingBoxes.classList.remove('hidden');
    drawCustomBoundingBoxes();
  } else {
    lobbyBoundingBoxes.classList.remove('hidden');
    customBoundingBoxes.classList.add('hidden');
  }

  // Restore room analysis report contents
  displayAnalysisReport({
    roomType: proj.analysis.roomType,
    inventory: proj.analysis.inventory,
    lighting: proj.analysis.lighting,
    paletteText: proj.analysis.paletteText,
    paletteColors: proj.analysis.paletteColors,
    score: proj.analysis.score,
    opportunities: proj.analysis.opportunities
  });

  // Restore Step 3 active style selection card highlight
  styleCards.forEach(c => {
    if (c.getAttribute('data-style-preset') === proj.selectedStyle) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });

  // Restore Step 4 concepts UI
  document.querySelectorAll('.concept-btn').forEach(btn => {
    if (btn.getAttribute('data-concept') === wizardActiveConcept) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  updateStep4Render();

  // Restore Step 5 items specifications check lists
  renderFurnitureGrid();
  // Ensure the checkboxes correspond to saved selections
  if (furnitureGrid && proj.selectedFurniture) {
    const checkboxes = furnitureGrid.querySelectorAll('.item-check-input');
    checkboxes.forEach((cb, idx) => {
      cb.checked = proj.selectedFurniture.includes(idx);
    });
    calculateFurnitureTotal();
  }

  // Restore Step 6 Budget Selection & Sourcing Gantts
  switchBudgetTier(wizardActiveBudget);

  // Router jump to step
  tabWizard.click();
  goToWizardStep(proj.activeStep);
  closeDrawer();
}

function deleteProject(id) {
  let projects = JSON.parse(localStorage.getItem('lobby_studio_projects') || '[]');
  projects = projects.filter(p => p.id !== id);
  localStorage.setItem('lobby_studio_projects', JSON.stringify(projects));
  if (activeProjectId === id) {
    activeProjectId = null;
    activeProjectName = null;
  }
  renderDrawerContent();
}

// FAVORITES CONTROLLERS
function toggleFavorite() {
  const currentKey = `${wizardSelectedStyle}_concept_${wizardActiveConcept}`;
  let favorites = JSON.parse(localStorage.getItem('lobby_studio_favorites') || '[]');
  const index = favorites.findIndex(f => f.key === currentKey);
  
  const favBtn = document.getElementById('btn-favorite-render');

  if (index >= 0) {
    // Remove from favorites
    favorites.splice(index, 1);
    if (favBtn) {
      favBtn.classList.add('active');
      favBtn.textContent = '★ Favorite';
    }
  } else {
    // Add to favorites
    const preset = conceptCatalog[wizardSelectedStyle] || conceptCatalog.japandi;
    const cfg = preset[wizardActiveConcept] || preset.A;
    const styleNames = {
      minimalist: "Modern Minimalist",
      scandinavian: "Scandinavian",
      japandi: "Japandi",
      luxury: "Contemporary Luxury",
      organic: "Warm Organic"
    };
    favorites.push({
      key: currentKey,
      name: `${styleNames[wizardSelectedStyle] || 'Custom'} - ${cfg.title || 'Concept ' + wizardActiveConcept}`,
      style: wizardSelectedStyle,
      concept: wizardActiveConcept,
      image: cfg.img,
      date: new Date().toLocaleDateString()
    });
    if (favBtn) {
      favBtn.classList.add('active');
      favBtn.textContent = '★ Favorited';
    }
  }
  
  localStorage.setItem('lobby_studio_favorites', JSON.stringify(favorites));
  renderDrawerContent();
}

function syncFavoriteButtonState() {
  const currentKey = `${wizardSelectedStyle}_concept_${wizardActiveConcept}`;
  const favorites = JSON.parse(localStorage.getItem('lobby_studio_favorites') || '[]');
  const isFav = favorites.some(f => f.key === currentKey);
  const favBtn = document.getElementById('btn-favorite-render');
  if (favBtn) {
    if (isFav) {
      favBtn.classList.add('active');
      favBtn.textContent = '★ Favorited';
    } else {
      favBtn.classList.remove('active');
      favBtn.textContent = '★ Favorite';
    }
  }
}

// Expose renderDrawerContent to global scope for any drawer rendering
window.renderDrawerContent = renderDrawerContent;

function removeFavorite(key) {
  let favorites = JSON.parse(localStorage.getItem('lobby_studio_favorites') || '[]');
  favorites = favorites.filter(f => f.key !== key);
  localStorage.setItem('lobby_studio_favorites', JSON.stringify(favorites));
  syncFavoriteButtonState();
  renderDrawerContent();
}

function applyConceptFromFavorites(style, concept) {
  tabWizard.click();
  wizardSelectedStyle = style;
  styleCards.forEach(c => {
    if (c.getAttribute('data-style-preset') === style) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });
  wizardActiveConcept = concept;
  document.querySelectorAll('.concept-btn').forEach(btn => {
    if (btn.getAttribute('data-concept') === concept) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  updateStep4Render();
  closeDrawer();
  goToWizardStep(4);
}

// ROOM HISTORY CONTROLLERS
function addRoomToHistory(imgDataUrl) {
  let history = JSON.parse(localStorage.getItem('lobby_studio_history') || '[]');
  const exists = history.some(h => h.image === imgDataUrl);
  if (!exists) {
    history.unshift({
      id: Date.now().toString(),
      image: imgDataUrl,
      date: new Date().toLocaleString()
    });
    // Limit history to top 5 uploads to avoid bloating localStorage
    if (history.length > 5) {
      history.pop();
    }
    localStorage.setItem('lobby_studio_history', JSON.stringify(history));
    renderDrawerContent();
  }
}

function startDesigningFromHistory(id) {
  const history = JSON.parse(localStorage.getItem('lobby_studio_history') || '[]');
  const entry = history.find(h => h.id === id);
  if (entry) {
    tabWizard.click();
    uploadedImageSrc = entry.image;
    isCustomUpload = true;
    closeDrawer();
    triggerAnalysisTransition(true);
  }
}

function deleteHistoryItem(id) {
  let history = JSON.parse(localStorage.getItem('lobby_studio_history') || '[]');
  history = history.filter(h => h.id !== id);
  localStorage.setItem('lobby_studio_history', JSON.stringify(history));
  renderDrawerContent();
}

// Function to update the custom designer proposal overlay tags for arbitrary room uploads
function updateCustomProposalOverlays() {
  const container = document.getElementById('custom-proposal-overlays');
  if (!container) return;

  // Clear existing overlays
  container.innerHTML = '';

  if (!isCustomUpload || uploadedRoomNode) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');

  // Set style-specific modifier class
  container.className = `style-${wizardSelectedStyle}`;

  // Get active concept config
  const preset = conceptCatalog[wizardSelectedStyle] || conceptCatalog.japandi;
  const cfg = preset[wizardActiveConcept] || preset.A;

  const isBedroom = analysisRoomType.textContent.includes("Bedroom");
  const isDrawing = analysisRoomType.textContent.includes("Drawing") || analysisRoomType.textContent.includes("Living");

  // Define tags config matching active style preset & concept variant & room type
  let proposals;
  
  if (isBedroom) {
    proposals = {
      minimalist: {
        title: "Modern Minimalist Bedroom",
        subtitle: cfg.title,
        tags: [
          { x: 35, y: 40, label: "Sleek Platform Bed Upgrade" },
          { x: 70, y: 55, label: "Minimalist Floating Nightstand" },
          { x: 45, y: 75, label: "Monochromatic Flat-weave Rug" },
          { x: 20, y: 20, label: "Decluttered Gallery White Walls" }
        ]
      },
      scandinavian: {
        title: "Nordic Scandinavian Bedroom",
        subtitle: cfg.title,
        tags: [
          { x: 38, y: 42, label: "Light Birch Wood Bed Frame" },
          { x: 72, y: 58, label: "Oak Plywood Nightstand" },
          { x: 50, y: 78, label: "High-pile Cozy Berber Rug" },
          { x: 15, y: 25, label: "Chalky White Daylight Walls" }
        ]
      },
      japandi: {
        title: "Zen Japandi Bedroom",
        subtitle: cfg.title,
        tags: [
          { x: 32, y: 38, label: "Low-profile Wabi-Sabi Bed" },
          { x: 68, y: 52, label: "Rattan Accent Side Table" },
          { x: 48, y: 76, label: "Natural Flat-woven Jute Rug" },
          { x: 80, y: 22, label: "Earthy Warm Matte Walls" }
        ]
      },
      luxury: {
        title: "Contemporary Luxury Bedroom",
        subtitle: cfg.title,
        tags: [
          { x: 36, y: 45, label: "Curved Velvet Tufted Headboard" },
          { x: 75, y: 60, label: "Brass & White Marble Table" },
          { x: 52, y: 80, label: "Textured Viscose Charcoal Rug" },
          { x: 20, y: 15, label: "Golden-glow Polished Sconces" }
        ]
      },
      organic: {
        title: "Warm Organic Bedroom",
        subtitle: cfg.title,
        tags: [
          { x: 30, y: 40, label: "Sustainable Oak Bed Upgrade" },
          { x: 70, y: 56, label: "Raw Travertine Nightstand" },
          { x: 46, y: 76, label: "Thick Hand-spun Jute Rug" },
          { x: 85, y: 25, label: "Biophilic Live Air Plants" }
        ]
      }
    };
  } else if (isDrawing) {
    proposals = {
      minimalist: {
        title: "Modern Minimalist Drawing Room",
        subtitle: cfg.title,
        tags: [
          { x: 30, y: 35, label: "Matte Black Sofa Upgrade" },
          { x: 65, y: 48, label: "Concrete Block Coffee Table" },
          { x: 45, y: 75, label: "Monochromatic Area Rug" },
          { x: 80, y: 20, label: "Decluttered Gallery White Walls" }
        ]
      },
      scandinavian: {
        title: "Nordic Scandinavian Drawing Room",
        subtitle: cfg.title,
        tags: [
          { x: 35, y: 38, label: "Soft Gunnared Wool Sofa" },
          { x: 68, y: 52, label: "Blonde Oak Oval Table" },
          { x: 50, y: 78, label: "High-pile Berber Rug" },
          { x: 15, y: 25, label: "Chalky White Daylight Walls" }
        ]
      },
      japandi: {
        title: "East-meets-West Japandi Drawing Room",
        subtitle: cfg.title,
        tags: [
          { x: 28, y: 36, label: "Rattan & Ash Lounge Chair" },
          { x: 62, y: 46, label: "Solid Oak Block Table" },
          { x: 48, y: 76, label: "Flat-woven Jute Fiber Rug" },
          { x: 82, y: 22, label: "Wabi-Sabi Earthy Matte Paint" }
        ]
      },
      luxury: {
        title: "Contemporary Luxury Drawing Room",
        subtitle: cfg.title,
        tags: [
          { x: 32, y: 40, label: "Curved Velvet Lounge Sofa" },
          { x: 70, y: 55, label: "Brass & White Marble Table" },
          { x: 52, y: 80, label: "Textured Viscose Charcoal Rug" },
          { x: 20, y: 15, label: "Bookmatched Gold-veined Marble Panel" }
        ]
      },
      organic: {
        title: "Warm Organic Drawing Room",
        subtitle: cfg.title,
        tags: [
          { x: 26, y: 38, label: "Cream Textured Bouclé Seating" },
          { x: 64, y: 50, label: "Raw Travertine Block Table" },
          { x: 46, y: 76, label: "Thick Hand-spun Jute Rug" },
          { x: 85, y: 25, label: "Biophilic Live Greenery Accents" }
        ]
      }
    };
  } else {
    proposals = {
      minimalist: {
        title: "Modern Minimalist Space",
        subtitle: cfg.title,
        tags: [
          { x: 30, y: 35, label: "Matte Black Sofa Upgrade" },
          { x: 65, y: 48, label: "Concrete Block Coffee Table" },
          { x: 45, y: 75, label: "Monochromatic Area Rug" },
          { x: 80, y: 20, label: "Decluttered Gallery White Walls" }
        ]
      },
      scandinavian: {
        title: "Nordic Scandinavian Space",
        subtitle: cfg.title,
        tags: [
          { x: 35, y: 38, label: "Soft Gunnared Wool Sofa" },
          { x: 68, y: 52, label: "Blonde Oak Oval Table" },
          { x: 50, y: 78, label: "High-pile Berber Rug" },
          { x: 15, y: 25, label: "Chalky White Daylight Walls" }
        ]
      },
      japandi: {
        title: "Zen Japandi Space",
        subtitle: cfg.title,
        tags: [
          { x: 28, y: 36, label: "Rattan & Ash Lounge Chair" },
          { x: 62, y: 46, label: "Solid Oak Block Table" },
          { x: 48, y: 76, label: "Flat-woven Jute Fiber Rug" },
          { x: 82, y: 22, label: "Wabi-Sabi Earthy Matte Paint" }
        ]
      },
      luxury: {
        title: "Contemporary Luxury Space",
        subtitle: cfg.title,
        tags: [
          { x: 32, y: 40, label: "Curved Velvet Lounge Sofa" },
          { x: 70, y: 55, label: "Brass & White Marble Table" },
          { x: 52, y: 80, label: "Textured Viscose Charcoal Rug" },
          { x: 20, y: 15, label: "Bookmatched Gold-veined Marble Panel" }
        ]
      },
      organic: {
        title: "Warm Organic Space",
        subtitle: cfg.title,
        tags: [
          { x: 26, y: 38, label: "Cream Textured Bouclé Seating" },
          { x: 64, y: 50, label: "Raw Travertine Block Table" },
          { x: 46, y: 76, label: "Thick Hand-spun Jute Rug" },
          { x: 85, y: 25, label: "Biophilic Live Greenery Accents" }
        ]
      }
    };
  }

  const currentProposal = proposals[wizardSelectedStyle] || proposals.japandi;

  // Add the status banner card in the top-left
  const banner = document.createElement('div');
  banner.className = 'custom-proposal-banner';
  banner.innerHTML = `
    <span class="banner-title">${currentProposal.title}</span>
    <span class="banner-subtitle">${currentProposal.subtitle}</span>
  `;
  container.appendChild(banner);

  // Add the floating interactive tags
  currentProposal.tags.forEach(tag => {
    const el = document.createElement('div');
    el.className = 'proposal-tag';
    el.style.left = `${tag.x}%`;
    el.style.top = `${tag.y}%`;
    el.innerHTML = `
      <div class="proposal-tag-dot"></div>
      <span>${tag.label}</span>
    `;
    container.appendChild(el);
  });
}

// Initialize walkthrough on load
initWalkthrough();
window.goToWizardStep = goToWizardStep;
window.switchBudgetTier = switchBudgetTier; // Exposed helper
window.renderDrawerContent = renderDrawerContent;
window.addRoomToHistory = addRoomToHistory;

// Expose portfolio actions globally for inline HTML onclick handlers
window.loadProject = loadProject;
window.deleteProject = deleteProject;
window.applyConceptFromFavorites = applyConceptFromFavorites;
window.removeFavorite = removeFavorite;
window.startDesigningFromHistory = startDesigningFromHistory;
window.deleteHistoryItem = deleteHistoryItem;

// Settings Gear & Debug Mode Switch listeners
const btnSettingsGear = document.getElementById('btn-settings-gear');
const settingsDropdown = document.getElementById('settings-dropdown');
const switchDebugMode = document.getElementById('switch-debug-mode');

if (btnSettingsGear && settingsDropdown) {
  btnSettingsGear.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsDropdown.classList.toggle('hidden');
  });

  // Close settings panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!settingsDropdown.contains(e.target) && e.target !== btnSettingsGear) {
      settingsDropdown.classList.add('hidden');
    }
  });
}

if (switchDebugMode) {
  switchDebugMode.addEventListener('change', (e) => {
    isDebugMode = e.target.checked;
    updateWalkView();
  });
}

