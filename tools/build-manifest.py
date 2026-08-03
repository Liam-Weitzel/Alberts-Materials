#!/usr/bin/env python3
"""Regenerate decks/manifest.json from the .md files in decks/.

Static hosting can't list a directory, so the manifest is how the site
discovers decks. Run this after adding, renaming or deleting a deck:

    python3 tools/build-manifest.py

The site title/description are preserved from the existing manifest.
Deck order follows filename order, so name files ch01-, ch02-, ... to
control how they appear.
"""

import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DECKS = ROOT / "decks"
MANIFEST = DECKS / "manifest.json"

existing = {}
if MANIFEST.exists():
    try:
        existing = json.loads(MANIFEST.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"warning: could not parse existing manifest ({exc}); rewriting", file=sys.stderr)

files = sorted(p.name for p in DECKS.glob("*.md"))
if not files:
    print("warning: no .md deck files found in decks/", file=sys.stderr)

manifest = {
    "title": existing.get("title", "Alberts Materials"),
    "description": existing.get("description", ""),
    "decks": files,
}

MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(f"wrote {MANIFEST.relative_to(ROOT)} with {len(files)} deck(s):")
for name in files:
    print(f"  {name}")
