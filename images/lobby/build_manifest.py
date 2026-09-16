"""
Scan this folder and write renders-manifest.js listing which upgrade tiers
actually have an image on disk, per node.

Run from images/lobby, any time new renders are added:

    python build_manifest.py

The app reads this manifest to decide which tier buttons to enable, so newly
generated images switch themselves on with no code edit. Nothing else needs
to change.
"""

import os
import re
import json

TIERS = ["level1", "level2", "minimal", "moderate", "complete"]
APP = "app.js"
OUT = "renders-manifest.js"


def main():
    if not os.path.exists(APP):
        print("Run this from the images/lobby folder (no app.js here).")
        return 1

    src = open(APP, encoding="utf-8").read()
    prefixes = []
    for m in re.finditer(r"^  ([a-z_0-9]+): \{(.*?)^  \},", src, re.S | re.M):
        pref = re.search(r'filePrefix:\s*"([^"]+)"', m.group(2))
        if pref and pref.group(1) not in prefixes:
            prefixes.append(pref.group(1))

    manifest = {}
    for p in prefixes:
        levels = ["original"] if os.path.exists(p + "_original.jpg") else []
        for t in TIERS:
            if os.path.exists("%s_%s.png" % (p, t)):
                levels.append(t)
        manifest[p] = levels

    body = json.dumps(manifest, indent=2, sort_keys=False)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(
            "// GENERATED FILE - do not edit by hand.\n"
            "// Regenerate with:  python build_manifest.py\n"
            "// Lists the upgrade tiers that have a real image on disk, per node.\n"
            "window.RENDER_MANIFEST = %s;\n" % body
        )

    total = sum(len(v) for v in manifest.values())
    full = [p for p, v in manifest.items() if len(v) == len(TIERS) + 1]
    print("Wrote %s" % OUT)
    print("  %d nodes, %d images present" % (len(manifest), total))
    print("  %d node(s) have all %d tiers" % (len(full), len(TIERS) + 1))
    for p, v in manifest.items():
        missing = [t for t in TIERS if t not in v]
        status = "complete" if not missing else "missing: " + ", ".join(missing)
        print("    %-16s %s" % (p, status))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
