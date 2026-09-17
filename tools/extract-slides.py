#!/usr/bin/env python3
"""Cut individual slides out of a molmed lecture deck, for use in cards.

    python3 tools/extract-slides.py <session> <slide> [<slide> ...]
    python3 tools/extract-slides.py 3 15 16 32          # slides 15, 16, 32 of session 3
    python3 tools/extract-slides.py 2 95 96             # handouts print 2 slides per page

Writes assets/img/slide-<session>-<slide>.png, which is where a deck references
it. The session is matched against molmed/slides/ by its `Session <n> -` prefix,
so the argument is the session id, not a filename.

Handout decks with two slides to a page (session 2) are detected from the page
aspect ratio: the page is halved, each half trimmed of its white margin, and the
slides numbered down the page. Needs poppler-utils and ImageMagick.
"""

import os
import re
import shutil
import subprocess
import sys
import tempfile
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SLIDES = ROOT / "molmed" / "slides"
OUT = ROOT / "assets" / "img"
DPI = 150
WIDTH = 1100          # plenty for a card, cheap to ship


def tool(name):
    found = shutil.which(name)
    if found:
        return found
    # NixOS: the binaries are in the store but not always on PATH.
    for base in pathlib.Path("/nix/store").glob("*/bin/" + name):
        return str(base)
    sys.exit(f"{name} not found (needs poppler-utils and ImageMagick)")


PDFTOPPM = tool("pdftoppm")
MAGICK = shutil.which("magick") or tool("convert")


def deck_for(session):
    for path in sorted(SLIDES.glob("*.pdf")):
        m = re.match(r"Session\s+([0-9]+[a-z]?)\s*-", path.name, re.I)
        if m and m.group(1).lower() == session.lower():
            return path
    sys.exit(f"no slides found for session {session} in {SLIDES}")


def render(pdf, page, work):
    out = os.path.join(work, f"p{page}")
    subprocess.run([PDFTOPPM, "-png", "-r", str(DPI), "-f", str(page), "-l", str(page),
                    str(pdf), out], check=True)
    files = sorted(pathlib.Path(work).glob(f"p{page}-*.png"))
    if not files:
        sys.exit(f"page {page} did not render (is the deck that long?)")
    return files[0]


def size(path):
    out = subprocess.run([MAGICK, "identify", "-format", "%w %h", str(path)],
                         capture_output=True, text=True, check=True).stdout.split()
    return int(out[0]), int(out[1])


def finish(src, dest, crop=None):
    args = [MAGICK, str(src)]
    if crop:
        args += ["-crop", crop, "+repage"]
    args += ["-trim", "+repage", "-bordercolor", "white", "-border", "12",
             "-resize", f"{WIDTH}x>", "-strip", str(dest)]
    subprocess.run(args, check=True)
    return dest


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    session, wanted = sys.argv[1], [int(a) for a in sys.argv[2:]]
    pdf = deck_for(session)
    OUT.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory() as work:
        probe = render(pdf, 1, work)
        w, h = size(probe)
        two_up = h > w * 1.2          # a portrait page is a handout, not a slide

        for slide in wanted:
            page = (slide + 1) // 2 if two_up else slide
            half = "100%x50%" if two_up else None
            src = render(pdf, page, work)
            dest = OUT / f"slide-{session}-{slide:02d}.png"
            if two_up:
                # -crop with a percentage geometry emits both halves; keep ours.
                tmp = pathlib.Path(work) / f"half{slide}.png"
                subprocess.run([MAGICK, str(src), "-crop", half, "+repage", str(tmp)], check=True)
                parts = sorted(pathlib.Path(work).glob(f"half{slide}-*.png"))
                src = parts[0 if slide % 2 else 1]
            finish(src, dest)
            print(f"  {dest.relative_to(ROOT)}  ({size(dest)[0]}x{size(dest)[1]}, "
                  f"{dest.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
