# Tasks for Gemini / Antigravity

## ⛔ READ FIRST — OUTPUT ASPECT RATIO MUST BE 4:3

**Every render generated so far is 1024x1024 (square). Every source photo is 4:3**
(1600x1200 or 1280x960). This is a defect and it must stop immediately.

Because the render is square and the original is 4:3, the before/after slider
compares two different fields of view — roughly **25% of the scene height differs**,
so the room visibly shifts and re-zooms as the user drags the slider. That destroys
the "we preserved your room" effect, which is the whole point of the product.

**Requirement for every image from now on:**

- Generate at **4:3, matching the source photo's aspect ratio** (e.g. 1600x1200,
  1280x960, or 1024x768). Do **not** output 1:1.
- Do not crop, pad, letterbox, or stretch a square result into 4:3 afterwards —
  that reintroduces the same distortion. Generate at 4:3 natively.
- The render must line up with its `_original.jpg` when the two are laid on top of
  each other: same framing, same edges, same field of view.

Verify with `python validate_renders.py` (in this folder). It flags any file whose
aspect ratio drifts from its original as **GEOMETRY**, and also catches unedited
copies, duplicate tiers, and missing files. **A task is not done until that script
reports no problems for the files you generated.**

---

Code and navigation bugs are already fixed. **Everything left is image generation**,
which only the build tool can do. Work top-down: Priority 1 alone makes the lobby
walkthrough complete and customer-ready.

**Before generating anything, read `image-edit-prompt-guide.md` in this folder and
use that template.** It is an image-EDIT template (keeps the real room). The old
text-to-image phrasing in `design_system.md` §3 is what caused hallucinated doors,
extra windows, and perspective drift — do not use it.

Two hard rules for every image below:
1. **Always edit the node's own `_original.jpg`** as the source. Never edit a
   previously upgraded render, and never edit a different camera position.
2. **Save as PNG with the exact filename listed.** The app loads these by name;
   a typo means the tier silently stays switched off.

---

## PRIORITY 1 — Finish the lobby (17 images)

### 1a. Regenerate one duplicate (1 image)
`lobby_pos2_b_complete.png` is currently a **byte-identical copy** of
`lobby_pos2_b_moderate.png`, so the top tier looks broken at that view.
Regenerate it as a genuine "Walnut & Marble Grandeur" render from
`lobby_pos2_b_original.jpg`.

### 1b. Generate the missing Level 1 + Level 2 renders (16 images)
These two tiers currently exist **only** for the entrance view. Every other lobby
view has them switched off. Source each from the matching `_original.jpg`:

```
lobby_pos1_f_level1.png   lobby_pos1_f_level2.png
lobby_pos1_r_level1.png   lobby_pos1_r_level2.png
lobby_pos1_l_level1.png   lobby_pos1_l_level2.png
lobby_pos2_f_level1.png   lobby_pos2_f_level2.png
lobby_pos2_r_level1.png   lobby_pos2_r_level2.png
lobby_pos2_l_level1.png   lobby_pos2_l_level2.png
lobby_pos2_b_level1.png   lobby_pos2_b_level2.png
lobby_pos1_b_level1.png   lobby_pos1_b_level2.png
```

- **Level 1 — "Decluttered Flow"**: tidying only, no new materials. Clear doorways
  of hanging garments/towels, fold blankets, align cushions, clear surfaces, sweep
  floor. Nothing is bought or replaced.
- **Level 2 — "Botanical Pathway"**: Level 1 plus a flush natural-stone path inlaid
  into the existing tile, and ferns/leafy plants growing from soil gaps —
  **planted in the ground, never in pots or planters**.

Keep both subtle. The user's exact note: *"realistic, premium, and believable
rather than heavily decorated."*

---

## PRIORITY 2 — Bedroom + drawing room tiers (30 images)

Both rooms currently have **only** their original photo, so all five tier buttons
are disabled there. Generate the three main tiers for all 10 views:

```
bed_pos0_f_{minimal,moderate,complete}.png
bed_pos1_f_{minimal,moderate,complete}.png
bed_pos1_r_{minimal,moderate,complete}.png
bed_pos1_l_{minimal,moderate,complete}.png
bed_pos1_b_{minimal,moderate,complete}.png
draw_pos0_f_{minimal,moderate,complete}.png
draw_pos1_f_{minimal,moderate,complete}.png
draw_pos1_r_{minimal,moderate,complete}.png
draw_pos1_l_{minimal,moderate,complete}.png
draw_pos1_b_{minimal,moderate,complete}.png
```

Tier meanings are in `design_system.md` §2 (Refined Hearth / Modern Harmony /
Walnut & Marble Grandeur). **Consistency matters most here**: the same room seen
from different angles must show the *same* flooring, wall colour, and furniture.
Decide the scheme once per room per tier, then reuse that wording across all five
views of that room.

> Note: these files were renamed from the old `WhatsApp Image ...jpeg` names and
> copied into this folder so the site is self-contained. Do not reintroduce
> `../bedroom/` or `../drawing/` paths — they 404 when the site is deployed.

---

## PRIORITY 3 — Optional (20 images)

`level1` / `level2` for the bedroom and drawing room, same rules as 1b.

---

## After generating: switch the tiers on (one small code edit)

The app hides tiers that have no render, via a single function in `app.js`.
Once files exist, update `getAvailableLevels()` — this is the **only** change needed:

```js
function getAvailableLevels(node) {
  // After Priority 2, delete this bedroom/drawing early-return:
  if (node.room === 'bedroom' || node.room === 'drawing') return ['original'];

  // After Priority 1b, delete this special case so every lobby node
  // gets the full six tiers:
  if (node.filePrefix === 'lobby_starter') return WALK_LEVELS.slice();

  return ['original', 'minimal', 'moderate', 'complete'];
}
```

When all priorities are done, the whole function becomes:

```js
function getAvailableLevels(node) {
  return WALK_LEVELS.slice();
}
```

**Do not** hand-edit `getWalkAssetPath()`, the node `transitions`, or the tier
buttons — the navigation graph was just corrected and verified, and the tier
buttons key off `getAvailableLevels()` automatically.

---

## PRIORITY 0 — Re-generate the existing lobby renders at 4:3

The 41 renders that already exist are all square and therefore all misaligned with
their originals. Once the pipeline is producing correct 4:3 output, regenerate them
so the whole site is consistent. Do this **after** confirming 4:3 works on one test
image — generate `lobby_starter_complete.png` first, run `validate_renders.py`, and
only continue once it passes with no GEOMETRY flag.

Mixing 4:3 and 1:1 across the site looks worse than either one alone, so this is
all-or-nothing: every render ends up 4:3.

---

## Verify before calling it done

Run the validator first — it is the fastest way to catch a bad batch:

```bash
python validate_renders.py      # run from images/lobby
```

Then serve **this folder** as the site root and confirm:

```bash
python -m http.server 8000     # run from images/lobby
```

1. No 404s in the Network tab, and no broken-image icons anywhere.
2. Every enabled tier button visibly changes the photo (no tier shows the untouched original).
3. Walking the full loop — entrance → middle → end → turn around → back to entrance —
   shows the correct view at every step, and Look Left really turns left.
4. Same room from different angles shows a consistent scheme within a tier.
