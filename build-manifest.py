#!/usr/bin/env python3
"""Regenerate chapters.json by pairing write-ups with decks.

A chapter is a slug that may have either half present:

    notes/ch01-cells-and-genomes.md     the write-up
    decks/ch01-cells-and-genomes.md     the cards

Static hosting can't list a directory, so chapters.json is how the site finds
both. Run this after adding or renaming either file:

    python3 build-manifest.py

Chapters are ordered by filename, which is why the files carry ch01-, ch02-
prefixes. The site title and description are preserved from the existing file.
"""

import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent
NOTES = ROOT / "notes"
DECKS = ROOT / "decks"
CHAPTERS = ROOT / "chapters.json"

existing = {}
if CHAPTERS.exists():
    try:
        existing = json.loads(CHAPTERS.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"warning: could not parse existing chapters.json ({exc}); rewriting", file=sys.stderr)

note_files = {p.stem: p.name for p in NOTES.glob("*.md")} if NOTES.is_dir() else {}
deck_files = {p.stem: p.name for p in DECKS.glob("*.md")} if DECKS.is_dir() else {}

chapters = [
    {"slug": slug, "notes": note_files.get(slug), "deck": deck_files.get(slug)}
    for slug in sorted(set(note_files) | set(deck_files))
]

if not chapters:
    print("warning: found no .md files in notes/ or decks/", file=sys.stderr)

CHAPTERS.write_text(
    json.dumps(
        {
            "title": existing.get("title", "Alberts Materials"),
            "description": existing.get("description", ""),
            "chapters": chapters,
        },
        indent=2,
        ensure_ascii=False,
    )
    + "\n",
    encoding="utf-8",
)

print(f"wrote chapters.json with {len(chapters)} chapter(s):")
for ch in chapters:
    have = [label for label, key in (("write-up", "notes"), ("deck", "deck")) if ch[key]]
    print(f"  {ch['slug']:<40} {' + '.join(have)}")

partial = [c["slug"] for c in chapters if not c["notes"] or not c["deck"]]
if partial:
    print(f"\n{len(partial)} chapter(s) missing a half: {', '.join(partial)}")
