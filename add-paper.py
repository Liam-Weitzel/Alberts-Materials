#!/usr/bin/env python3
"""Start a paper summary from a DOI or an arXiv ID.

    python3 add-paper.py 10.1073/pnas.87.12.4576 -c ch01
    python3 add-paper.py https://doi.org/10.1038/191144a0 -c ch02 -c ch14
    python3 add-paper.py arXiv:2301.00001 -c ch03
    python3 add-paper.py --title "A paper with no DOI" --authors "R Franklin" --year 1953 -c ch04

Looks the metadata up (Crossref for DOIs, the arXiv API for preprints), writes
papers/<slug>.md with the front matter filled in and the summary left for you,
then rebuilds chapters.json so the site can see it. Prints the path it wrote so
you can open it straight away:

    $EDITOR "$(python3 add-paper.py 10.1038/191144a0 -c ch02 --quiet)"

Standard library only, in keeping with the rest of the repo. The network is only
touched for the lookup. Pass every field by hand and it never leaves the disk.
"""

import argparse
import json
import pathlib
import re
import subprocess
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import date

ROOT = pathlib.Path(__file__).resolve().parent
PAPERS = ROOT / "papers"
MANIFEST = ROOT / "build-manifest.py"

UA = "alberts-materials/1.0 (https://alberts.liam-w.com)"
TIMEOUT = 20

# Consortium papers can carry hundreds of authors, which is unreadable in front
# matter and pointless in a personal reading list. --all-authors keeps the lot.
MAX_AUTHORS = 8

# Dropped when building a slug out of a title.
STOPWORDS = {
    "a", "an", "and", "as", "at", "by", "for", "from", "in", "into", "is", "its",
    "of", "on", "or", "the", "to", "with", "towards", "toward", "using", "via",
}


def die(msg):
    print(f"error: {msg}", file=sys.stderr)
    sys.exit(1)


def get(url, accept="application/json"):
    request = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": accept})
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
            return response.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as exc:
        die(f"{url} returned HTTP {exc.code}. Check the identifier, or pass --title to skip the lookup.")
    except urllib.error.URLError as exc:
        die(f"could not reach {urllib.parse.urlsplit(url).netloc} ({exc.reason}). "
            f"Pass --title/--authors/--year to write the entry without a lookup.")


def clean(text):
    """One line, no stray whitespace, because front matter values are single-line."""
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", str(text or ""))).strip()


def join_authors(names, keep_all=False):
    names = [n for n in (clean(n) for n in names) if n]
    if not keep_all and len(names) > MAX_AUTHORS:
        return ", ".join(names[:MAX_AUTHORS]) + ", et al."
    return ", ".join(names)


def identify(raw):
    """Work out whether we were handed a DOI or an arXiv ID."""
    ref = raw.strip().rstrip("/")
    ref = re.sub(r"^(?:https?://)?(?:dx\.)?doi\.org/", "", ref, flags=re.I)
    arxiv = re.match(r"^(?:https?://arxiv\.org/(?:abs|pdf)/)?arxiv[:/]?\s*(.+)$", ref, flags=re.I)
    if arxiv:
        return "arxiv", re.sub(r"v\d+$|\.pdf$", "", arxiv.group(1).strip())
    if re.match(r"^https?://arxiv\.org/", ref, flags=re.I):
        tail = ref.rsplit("/", 1)[-1]
        return "arxiv", re.sub(r"v\d+$|\.pdf$", "", tail)
    if ref.lower().startswith("10."):
        return "doi", ref
    die(f"'{raw}' doesn't look like a DOI (10.xxxx/…) or an arXiv ID. Use --title to add it by hand.")


def from_crossref(doi, keep_all=False):
    data = json.loads(get("https://api.crossref.org/works/" + urllib.parse.quote(doi, safe="")))
    work = data.get("message", {})

    titles = work.get("title") or []
    authors = []
    for person in work.get("author") or []:
        name = " ".join(p for p in (person.get("given"), person.get("family")) if p)
        authors.append(clean(name or person.get("name", "")))

    year = ""
    for key in ("issued", "published-print", "published-online", "created"):
        parts = (work.get(key) or {}).get("date-parts") or []
        if parts and parts[0] and parts[0][0]:
            year = str(parts[0][0])
            break

    journal = clean((work.get("container-title") or [""])[0])
    volume, issue, pages = work.get("volume"), work.get("issue"), work.get("page")
    if journal and volume:
        journal += f" {volume}" + (f"({issue})" if issue else "")
    if journal and pages:
        journal += f", {pages}"

    return {
        "title": clean(titles[0] if titles else ""),
        "authors": join_authors(authors, keep_all),
        "year": year,
        "journal": journal,
        "link": clean(work.get("URL") or ("https://doi.org/" + doi)),
    }


def from_arxiv(ident, keep_all=False):
    ns = {"a": "http://www.w3.org/2005/Atom", "arxiv": "http://arxiv.org/schemas/atom"}
    xml = get("http://export.arxiv.org/api/query?max_results=1&id_list=" +
              urllib.parse.quote(ident), accept="application/atom+xml")
    entry = ET.fromstring(xml).find("a:entry", ns)
    if entry is None or entry.find("a:title", ns) is None:
        die(f"arXiv has no record for '{ident}'.")

    published = clean(entry.findtext("a:published", "", ns))
    journal = clean(entry.findtext("arxiv:journal_ref", "", ns))

    return {
        "title": clean(entry.findtext("a:title", "", ns)),
        "authors": join_authors([n.findtext("a:name", "", ns) for n in entry.findall("a:author", ns)], keep_all),
        "year": published[:4],
        "journal": journal or f"arXiv:{ident}",
        "link": clean(entry.findtext("a:id", "", ns)) or f"https://arxiv.org/abs/{ident}",
    }


def make_slug(meta):
    """Surname, year, then the first real words of the title."""
    first = (meta["authors"].split(",")[0] or "").strip()
    surname = re.sub(r"[^a-z]", "", first.split()[-1].lower()) if first else ""

    words = [w for w in re.findall(r"[a-z0-9]+", meta["title"].lower()) if w not in STOPWORDS]
    tail = "-".join(words[:3])

    slug = "-".join(p for p in (surname, meta["year"], tail) if p)
    return re.sub(r"-+", "-", slug).strip("-") or "paper"


def chapter_slugs():
    """Full chapter slugs, so `-c ch01` can be checked before it's written."""
    notes = ROOT / "notes"
    decks = ROOT / "decks"
    found = set()
    for folder in (notes, decks):
        if folder.is_dir():
            found.update(p.stem for p in folder.glob("*.md"))
    return sorted(found)


def resolve_chapters(refs):
    known = chapter_slugs()
    out = []
    for ref in refs:
        for part in re.split(r"[,\s]+", ref):
            if not part:
                continue
            hits = [s for s in known if s == part] or [s for s in known if s.startswith(part)]
            if len(hits) == 1:
                if hits[0] not in out:
                    out.append(hits[0])
            elif not hits:
                print(f"warning: no chapter matches '{part}'; writing it through as-is", file=sys.stderr)
                out.append(part)
            else:
                die(f"'{part}' matches {len(hits)} chapters ({', '.join(hits)}); be more specific")
    return out


BODY = """_Not summarised yet._

What were they actually asking, and what did they do about it? Write it down so
that it still makes sense in six months.
"""


def main():
    parser = argparse.ArgumentParser(
        description="Start a paper summary from a DOI or arXiv ID.",
        epilog="Fields passed by hand always win over the looked-up ones.",
    )
    parser.add_argument("ref", nargs="?", help="DOI, doi.org URL, or arXiv ID")
    parser.add_argument("-c", "--chapter", action="append", default=[], metavar="SLUG",
                        help="chapter this belongs to; repeatable, and a prefix like ch01 is enough")
    parser.add_argument("-t", "--tag", action="append", default=[], metavar="TAG", help="repeatable")
    parser.add_argument("--title")
    parser.add_argument("--authors")
    parser.add_argument("--year")
    parser.add_argument("--journal")
    parser.add_argument("--link")
    parser.add_argument("--slug", help="override the generated filename")
    parser.add_argument("--all-authors", action="store_true",
                        help=f"keep every author, rather than the first {MAX_AUTHORS} and 'et al.'")
    parser.add_argument("--force", action="store_true", help="overwrite an existing summary")
    parser.add_argument("--no-manifest", action="store_true", help="skip rebuilding chapters.json")
    parser.add_argument("-q", "--quiet", action="store_true", help="print only the path written")
    args = parser.parse_args()

    if not args.ref and not args.title:
        parser.error("give a DOI or arXiv ID, or --title to write the entry by hand")

    meta = {"title": "", "authors": "", "year": "", "journal": "", "link": ""}
    if args.ref:
        kind, ident = identify(args.ref)
        if not args.quiet:
            print(f"looking up {kind} {ident}…", file=sys.stderr)
        meta.update(from_crossref(ident, args.all_authors) if kind == "doi"
                    else from_arxiv(ident, args.all_authors))

    for key in meta:
        override = getattr(args, key, None)
        if override:
            meta[key] = clean(override)

    if not meta["title"]:
        die("no title came back from the lookup; pass --title")

    chapters = resolve_chapters(args.chapter)
    slug = re.sub(r"[^a-z0-9-]+", "-", (args.slug or make_slug(meta)).lower()).strip("-")

    PAPERS.mkdir(exist_ok=True)
    path = PAPERS / f"{slug}.md"
    if path.exists() and not args.force:
        die(f"{path.relative_to(ROOT)} already exists. Edit it, or pass --force to overwrite.")

    front = [
        ("title", meta["title"]),
        ("authors", meta["authors"]),
        ("year", meta["year"]),
        ("journal", meta["journal"]),
        ("link", meta["link"]),
        ("chapters", "[" + ", ".join(chapters) + "]"),
        ("tags", "[" + ", ".join(clean(t) for t in args.tag) + "]"),
        ("date", date.today().isoformat()),
    ]
    path.write_text(
        "---\n" + "".join(f"{k}: {v}\n" for k, v in front if v) + "---\n\n" + BODY,
        encoding="utf-8",
    )

    if not args.quiet:
        print(f"wrote {path.relative_to(ROOT)}")
        print(f"  {meta['title']}")
        if meta["authors"]:
            print(f"  {meta['authors']}" + (f" ({meta['year']})" if meta["year"] else ""))
        print(f"  chapters: {', '.join(chapters) or 'none yet, add them to the front matter'}")

    if not args.no_manifest and MANIFEST.exists():
        result = subprocess.run([sys.executable, str(MANIFEST)],
                                capture_output=True, text=True)
        if result.returncode != 0:
            print(result.stderr, file=sys.stderr)
            die("build-manifest.py failed; chapters.json may be stale")

    if args.quiet:
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
