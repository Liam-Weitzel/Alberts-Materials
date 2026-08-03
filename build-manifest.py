#!/usr/bin/env python3
"""Regenerate chapters.json: the index the site loads to find everything.

Two kinds of thing live in here.

A **chapter** is a slug that may have either half present:

    notes/ch01-cells-and-genomes.md     the write-up
    decks/ch01-cells-and-genomes.md     the cards

A **paper** is a standalone summary that names the chapters it belongs to:

    papers/woese-1990-three-domains.md  front matter carries chapters: [ch01…]

Chapters are paired by filename. Papers are not, because a paper is its own
document and may be listed under several chapters, or none. Their front matter is
lifted into the manifest so the chapter pages and the library index can render
without fetching every summary; only the paper's own page loads its body.

Static hosting can't list a directory, so this file is how the site finds any of
it. Run this after adding or renaming anything:

    python3 build-manifest.py

Chapters are ordered by filename, which is why they carry ch01-, ch02- prefixes.
Papers are ordered newest first by year. The site title and description are
preserved from the existing file.
"""

import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent
NOTES = ROOT / "notes"
DECKS = ROOT / "decks"
PAPERS = ROOT / "papers"
CHAPTERS = ROOT / "chapters.json"

FRONT_MATTER = re.compile(r"^---[ \t]*\n(.*?)\n---[ \t]*(?:\n|$)", re.S)
KEY_VALUE = re.compile(r"^([A-Za-z_][\w-]*)\s*:\s*(.*)$")

warnings = []


def warn(msg):
    warnings.append(msg)


def front_matter(text):
    """Leading `---` block of `key: value` pairs. `[a, b]` becomes a list.

    Deliberately the same small subset MD.frontMatter() in markdown.js accepts,
    so a file that parses here parses in the browser too.
    """
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    match = FRONT_MATTER.match(text)
    if not match:
        return {}, text
    meta = {}
    for line in match.group(1).split("\n"):
        kv = KEY_VALUE.match(line.strip())
        if not kv:
            continue
        value = kv.group(2).strip()
        if value.startswith("[") and value.endswith("]"):
            value = [v.strip().strip("\"'") for v in value[1:-1].split(",")]
            value = [v for v in value if v]
        else:
            value = value.strip("\"'")
        meta[kv.group(1).lower()] = value
    return meta, text[match.end():]


def as_list(value):
    if not value:
        return []
    if isinstance(value, list):
        return value
    return [v for v in re.split(r"[,\s]+", str(value)) if v]


def plain(text):
    """Rough plain-text projection, for excerpts and word counts."""
    text = re.sub(r"```.*?```", " ", text, flags=re.S)
    text = re.sub(r"!\[([^\]]*)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]", lambda m: m.group(2) or m.group(1), text)
    text = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"^#{1,6}\s+", "", text, flags=re.M)
    text = re.sub(r"[#>*_`~$=|]", "", text)
    return re.sub(r"\s+", " ", text).strip()


def excerpt(body, limit=180):
    """First sentence or so of the summary, for the library index."""
    text = plain(body)
    if len(text) <= limit:
        return text
    cut = text[:limit]
    stop = max(cut.rfind(". "), cut.rfind("? "), cut.rfind("! "))
    if stop > limit * 0.4:
        return cut[:stop + 1]
    return cut[:cut.rfind(" ")].rstrip(",;:") + "…"


def collect_chapters():
    notes = {p.stem: p.name for p in NOTES.glob("*.md")} if NOTES.is_dir() else {}
    decks = {p.stem: p.name for p in DECKS.glob("*.md")} if DECKS.is_dir() else {}
    return [
        {"slug": slug, "notes": notes.get(slug), "deck": decks.get(slug)}
        for slug in sorted(set(notes) | set(decks))
    ]


def resolve_chapter(ref, slugs, source):
    """`ch01` is enough to name `ch01-cells-and-genomes`, if it's unambiguous."""
    if ref in slugs:
        return ref
    hits = [s for s in slugs if s.startswith(ref)]
    if len(hits) == 1:
        return hits[0]
    if len(hits) > 1:
        warn(f"{source}: '{ref}' matches {len(hits)} chapters ({', '.join(hits)}); write it out in full")
    else:
        warn(f"{source}: no chapter matches '{ref}'")
    return None


def collect_papers(chapter_slugs):
    if not PAPERS.is_dir():
        return []

    papers = []
    for path in sorted(PAPERS.glob("*.md")):
        meta, body = front_matter(path.read_text(encoding="utf-8"))

        linked = []
        for ref in as_list(meta.get("chapters")):
            slug = resolve_chapter(ref, chapter_slugs, path.name)
            if slug and slug not in linked:
                linked.append(slug)

        text = plain(body)
        papers.append({
            "slug": path.stem,
            "file": path.name,
            "title": meta.get("title") or path.stem.replace("-", " ").capitalize(),
            "authors": meta.get("authors", ""),
            "year": str(meta.get("year", "")),
            "journal": meta.get("journal", ""),
            "link": meta.get("link", ""),
            "date": str(meta.get("date", "")),
            "chapters": linked,
            "tags": as_list(meta.get("tags")),
            "excerpt": meta.get("description") or excerpt(body),
            "words": len(text.split()) if text else 0,
        })

        if not meta.get("title"):
            warn(f"{path.name}: no title in front matter")

    # Newest first, since a reading list is usually consulted from the top.
    papers.sort(key=lambda p: (p["year"] or "0", p["slug"]), reverse=True)
    return papers


existing = {}
if CHAPTERS.exists():
    try:
        existing = json.loads(CHAPTERS.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"warning: could not parse existing chapters.json ({exc}); rewriting", file=sys.stderr)

chapters = collect_chapters()
papers = collect_papers([c["slug"] for c in chapters])

if not chapters and not papers:
    print("warning: found no .md files in notes/, decks/ or papers/", file=sys.stderr)

CHAPTERS.write_text(
    json.dumps(
        {
            "title": existing.get("title", "Alberts Materials"),
            "description": existing.get("description", ""),
            "chapters": chapters,
            "papers": papers,
        },
        indent=2,
        ensure_ascii=False,
    )
    + "\n",
    encoding="utf-8",
)

print(f"wrote chapters.json with {len(chapters)} chapter(s) and {len(papers)} paper(s):")
for ch in chapters:
    have = [label for label, key in (("write-up", "notes"), ("deck", "deck")) if ch[key]]
    linked = sum(1 for p in papers if ch["slug"] in p["chapters"])
    if linked:
        have.append(f"{linked} paper{'s' if linked > 1 else ''}")
    print(f"  {ch['slug']:<40} {' + '.join(have)}")

for paper in papers:
    print(f"  {paper['slug']:<40} {', '.join(paper['chapters']) or 'unlinked'}")

partial = [c["slug"] for c in chapters if not c["notes"] or not c["deck"]]
if partial:
    print(f"\n{len(partial)} chapter(s) missing a half: {', '.join(partial)}")

if warnings:
    print(f"\n{len(warnings)} warning(s):", file=sys.stderr)
    for line in warnings:
        print(f"  {line}", file=sys.stderr)
