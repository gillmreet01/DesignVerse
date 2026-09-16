"""
Validate generated walkthrough renders.

Run from images/lobby:   python validate_renders.py

Catches the failure modes that are easy to miss by eye and easy for a
generation agent to claim it avoided:

  MISSING    - the file was never produced
  UNEDITED   - byte-identical to the node's _original (nothing was changed)
  DUPLICATE  - byte-identical to another render (tier reused, e.g. the
               pos2_b complete/moderate bug)
  GEOMETRY   - aspect ratio drifted from the original, which means the room
               was re-framed instead of edited
  NEAR-COPY  - visually ~identical to the original; the tier will look broken
  DRASTIC    - almost nothing of the original survives; usually a hallucinated
               new room rather than a renovation of this one

Exit code is 0 only when every expected render passes.
"""

import os
import re
import sys
import hashlib

try:
    from PIL import Image, ImageChops
except ImportError:
    print("Pillow required:  pip install pillow")
    sys.exit(2)

TIERS = ["level1", "level2", "minimal", "moderate", "complete"]
APP = "app.js"

# How different a render must be from the original to count as a real edit,
# and how much must survive for it to still be the same room. Mean per-pixel
# difference on a downscaled greyscale copy, 0..255.
NEAR_COPY_BELOW = 4.0
DRASTIC_ABOVE = 92.0
ASPECT_TOLERANCE = 0.02


def discover_nodes(path=APP):
    """Pull (node_id, filePrefix, title) out of the app's node table."""
    if not os.path.exists(path):
        print("Cannot find %s - run this from the images/lobby folder." % path)
        sys.exit(2)
    src = open(path, encoding="utf-8").read()
    out = []
    for m in re.finditer(r"^  ([a-z_0-9]+): \{(.*?)^  \},", src, re.S | re.M):
        nid, body = m.group(1), m.group(2)
        pref = re.search(r'filePrefix:\s*"([^"]+)"', body)
        title = re.search(r'title:\s*"([^"]+)"', body)
        if pref:
            out.append((nid, pref.group(1), title.group(1) if title else ""))
    return out


def md5(p):
    return hashlib.md5(open(p, "rb").read()).hexdigest()


def signature(p):
    """Small greyscale copy used for cheap perceptual comparison."""
    im = Image.open(p).convert("L").resize((128, 128))
    return im


def mean_diff(a, b):
    return sum(
        i * c for i, c in enumerate(ImageChops.difference(a, b).histogram())
    ) / float(128 * 128)


def main():
    nodes = discover_nodes()
    if not nodes:
        print("No nodes with a filePrefix found in app.js.")
        sys.exit(2)

    seen_hashes = {}   # hash -> first filename, for cross-file duplicates
    rows = []
    missing = 0

    for nid, prefix, title in nodes:
        orig = prefix + "_original.jpg"
        if not os.path.exists(orig):
            rows.append(("ORIG-MISSING", orig, title, ""))
            continue

        o_hash = md5(orig)
        o_img = signature(orig)
        o_w, o_h = Image.open(orig).size
        o_aspect = o_w / float(o_h)

        for tier in TIERS:
            f = "%s_%s.png" % (prefix, tier)
            if not os.path.exists(f):
                rows.append(("MISSING", f, title, ""))
                missing += 1
                continue

            h = md5(f)
            problems = []

            if h == o_hash:
                problems.append("UNEDITED (identical to original)")
            if h in seen_hashes and seen_hashes[h] != f:
                problems.append("DUPLICATE of %s" % seen_hashes[h])
            seen_hashes.setdefault(h, f)

            try:
                w, hgt = Image.open(f).size
                aspect = w / float(hgt)
                if abs(aspect - o_aspect) > ASPECT_TOLERANCE:
                    problems.append(
                        "GEOMETRY (aspect %.3f vs original %.3f)" % (aspect, o_aspect)
                    )
                d = mean_diff(o_img, signature(f))
                if d < NEAR_COPY_BELOW:
                    problems.append("NEAR-COPY of original (diff %.1f)" % d)
                elif d > DRASTIC_ABOVE:
                    problems.append("DRASTIC change (diff %.1f) - verify same room" % d)
            except Exception as e:
                problems.append("UNREADABLE (%s)" % e)

            rows.append(("FAIL" if problems else "ok", f, title, "; ".join(problems)))

    fails = [r for r in rows if r[0] not in ("ok",)]
    ok_count = sum(1 for r in rows if r[0] == "ok")

    print("=" * 74)
    print("RENDER VALIDATION - %d nodes, %d tiers each" % (len(nodes), len(TIERS)))
    print("=" * 74)

    if ok_count:
        print("\nPASSED (%d):" % ok_count)
        for st, f, title, _ in rows:
            if st == "ok":
                print("  ok  %-34s %s" % (f, title))

    real_fails = [r for r in rows if r[0] == "FAIL"]
    if real_fails:
        print("\nPROBLEMS (%d) - regenerate these:" % len(real_fails))
        for st, f, title, why in real_fails:
            print("  !!  %-34s %s" % (f, title))
            print("      -> %s" % why)

    miss = [r for r in rows if r[0] in ("MISSING", "ORIG-MISSING")]
    if miss:
        print("\nNOT YET GENERATED (%d):" % len(miss))
        for st, f, title, _ in miss:
            print("  --  %-34s %s" % (f, title))

    print("\n" + "-" * 74)
    print("passed: %d   problems: %d   not yet generated: %d"
          % (ok_count, len(real_fails), len(miss)))
    if not real_fails and not miss:
        print("ALL RENDERS PRESENT AND VALID.")
    print("-" * 74)

    return 1 if (real_fails or miss) else 0


if __name__ == "__main__":
    sys.exit(main())
