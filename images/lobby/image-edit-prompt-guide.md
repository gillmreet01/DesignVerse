# Image‑EDIT Prompt Guide (structure‑preserving room upgrades)

> Use this **instead of** the text‑to‑image template in `design_system.md` Section 3
> whenever you want the upgrade to keep YOUR actual room (same walls, doors,
> windows, ceiling, camera). This is the single biggest fix for "the AI made a
> different room / added fake doors / changed the perspective."

---

## Why your old prompts hallucinated

The old template started with *"A high‑resolution photo of a living room lobby…"*.
That is a **text‑to‑image** instruction — it tells the model to **invent a room
from scratch**, so it had no reason to keep your walls, doorways, or camera angle.

An **image‑edit** model (e.g. Gemini "Nano Banana" image, or any img2img model)
works completely differently: you hand it **your photo** and tell it what to
**change** and what to **leave alone**. Phrasing matters enormously:

| Don't write | Write instead |
|---|---|
| "A photo of a modern lobby with…" | "**Edit the provided photo.** Keep the room exactly as‑is, but…" |
| "Add a sofa, plants, marble walls" | "**Replace only** the existing sofa; **do not** move walls/doors/camera." |
| "Luxury interior design render" | "Photorealistic edit, **same lens and viewpoint** as the input." |

---

## The template (copy/paste, fill the brackets)

```
Edit the PROVIDED photograph of this room. This is a structure‑preserving
renovation edit, not a new image.

KEEP IDENTICAL (do not alter in any way):
- Camera position, viewpoint, lens, and perspective — the framing must match the input exactly.
- All architecture: wall positions, the two back doorways, the staircase column and railing,
  the recessed display alcove on the right, ceiling height and outline.
- Any windows/openings stay in their exact original positions and sizes.
- Overall room proportions and the floor plan.
- The washbasin/vanity stays on the LEFT wall by the plumbing column (never move it).
- The direction of natural light (front‑left) and the resulting shadow directions.

CHANGE ONLY (this is the upgrade — [TIER NAME]):
- [Bullet the SPECIFIC changes for this tier, e.g.:
   "Replace the white plastic chair with a simple light‑oak armchair in the same spot."
   "Apply soft greige wall paint to the existing walls."
   "Add a low neutral area rug under the existing seating."]

STYLE: [Style preset name] — [palette], [materials], [furniture language], [lighting temperature].

OUTPUT FORMAT:
- 4:3 aspect ratio, matching the source photo exactly (e.g. 1600x1200). Never 1:1.
- Identical framing and field of view to the input — the result must line up with
  the original when the two are overlaid.

REALISM RULES:
- Photorealistic, consistent with the original lighting and shadows.
- No new doors, no new windows, no new rooms, no extra hallways.
- No floating or impossible furniture; everything sits flat on the existing floor.
- Keep clear walking paths (≈3 ft) between furniture and the doorways.
- Subtle and believable, not over‑decorated. A real renovation a contractor could build.
```

> **Aspect ratio is not cosmetic.** A square render of a 4:3 room changes the field
> of view by ~25%, so the before/after slider shows the room jumping and re-zooming
> instead of transforming in place. Always generate at the source aspect ratio.

---

## A filled‑in example — Level 4 "Modern Harmony", Japandi, entrance view

```
Edit the PROVIDED photograph of this room. This is a structure‑preserving
renovation edit, not a new image.

KEEP IDENTICAL: camera viewpoint, lens and framing; both back doorways; the
staircase column and railing; the left‑wall plumbing position; ceiling height;
room proportions and floor plan; the front‑left natural light direction and all
shadow directions.

CHANGE ONLY (Level 4 – Modern Harmony):
- Repaint the existing walls in soft greige (Benjamin Moore Revere Pewter tone).
- Replace the mismatched sofas with a low, light‑grey fabric sofa set in the same footprint.
- Swap the cluttered wooden table for one minimalist light‑wood coffee table, centered.
- Add a soft neutral area rug grounding the existing seating zone.
- Replace the pedestal basin with a floating light‑wood vanity + backlit rectangular LED mirror,
  on the SAME left wall, same plumbing location.
- Clear all clutter, towels, and hanging garments.

STYLE: Japandi — oatmeal/sand/soft‑charcoal palette; bleached oak + textured plaster +
woven cord; low, organic‑curved furniture; warm 2700K lighting with a paper‑lantern pendant.

REALISM RULES: photorealistic, lighting/shadows consistent with the input; no new doors,
windows, or rooms; nothing floating; clear ~3 ft walking paths; subtle and believable.
```

---

## Workflow tips that fix the problems you hit

1. **Always feed the ORIGINAL photo as the source image** for every tier, not a
   previously upgraded render. Stacking edits on edits is what drifts the room.
2. **Generate each tier from the same original**, changing only the "CHANGE ONLY"
   block. This keeps all six levels consistent with each other.
3. **One change list per tier** — resist piling on. Your prompt 7 instinct
   ("reduce clutter, keep it subtle") was correct; the template enforces it.
4. **If the model still alters structure**, add a first line:
   *"Treat the input image as a locked background plate; only repaint/replace the
   listed objects."*
5. **Name the gap files you still need** (see below) so the walkthrough is complete.

### Missing images to generate (current gap)
Right now `level1` / `level2` only exist for the entrance view
(`lobby_starter_level1.png`, `lobby_starter_level2.png`). Every *other* position
silently falls back to the `minimal` image (see `app.js` `getWizardAssetPath`,
the `level1/level2 → _minimal.png` branch). To make Levels 1 & 2 real everywhere,
generate and save:

```
lobby_pos1_f_level1.png   lobby_pos1_f_level2.png
lobby_pos1_r_level1.png   lobby_pos1_r_level2.png
lobby_pos1_l_level1.png   lobby_pos1_l_level2.png
lobby_pos2_r_level1.png   lobby_pos2_r_level2.png
lobby_pos2_l_level1.png   lobby_pos2_l_level2.png
lobby_pos2_b_level1.png   lobby_pos2_b_level2.png
lobby_pos1_b_level1.png   lobby_pos1_b_level2.png
```

(Then remove the fallback branch so the app loads the real `_level1/_level2` files.)
