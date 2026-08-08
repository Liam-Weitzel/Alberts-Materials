#!/usr/bin/env python3
"""Extract figure artwork from Molecular Biology of the Cell, 7th ed.

Usage:  python3 tools/extract-figures.py <first-pdf-page> <last-pdf-page>
Needs poppler-utils plus numpy, scipy and pillow. On NixOS:

  nix-shell -p poppler-utils 'python3.withPackages(ps: [ps.numpy ps.scipy ps.pillow])' \
    --run "python3 tools/extract-figures.py 40 87"

Output lands in $MBOC_WORK (default /tmp/mboc-figures/out), named by figure
number. Review with tools/contact-sheet.py before copying into assets/img/.


Every figure in this PDF carries a production art tag ("MBoC7 n1.101/1.26")
placed directly below its artwork; the part after the slash is the figure
number. That tag is the anchor. Body text and caption paragraphs are removed
from the page by font family, so whatever ink survives is artwork, which is
then grouped and bounded per tag.
"""

import html
import os
import re
import subprocess
import sys
import xml.etree.ElementTree as ET

import numpy as np
from PIL import Image
from scipy import ndimage

PDF = os.environ.get("MBOC_PDF", os.path.expanduser(
    "~/Downloads/the moleculary biology of the cell (7th ed).pdf"))
DPI = 300
WORK = os.environ.get("MBOC_WORK", "/tmp/mboc-figures")
PAGES = os.path.join(WORK, "pages300")
OUT = os.path.join(WORK, "out")

CAPTION_BLUE = "#0071bb"
INK_MAX = 247
DILATE = 12            # px, merges strokes into components
PAD = 18               # px of white margin kept around the artwork
TEXT_JOIN = 60         # px, how close a label must sit to attach to artwork
ABSORB = 150           # px, gap across which separate panels count as one figure
ALIGNED_ABSORB = 330   # px, same but for panels sharing a row/column
MIN_COMPONENT = 200


def is_body(fam):
    return "Utopia" in fam


def is_caption_font(fam):
    return "HelveticaNeue" in fam


def render(page):
    out = os.path.join(PAGES, f"p{page:04d}")
    png = out + ".png"
    if not os.path.exists(png):
        subprocess.run(
            ["pdftoppm", "-f", str(page), "-l", str(page), "-r", str(DPI),
             "-png", "-singlefile", PDF, out],
            check=True, capture_output=True)
    return png


def page_xml(first, last):
    r = subprocess.run(
        ["pdftohtml", "-xml", "-f", str(first), "-l", str(last), "-i", "-stdout", PDF],
        check=True, capture_output=True)
    return ET.fromstring(r.stdout)


def parse_page(pel, fonts):
    # fontspecs are declared once, on first use, so they must carry across pages
    for fs in pel.findall("fontspec"):
        fonts[fs.get("id")] = (fs.get("family", ""), fs.get("color", ""),
                               float(fs.get("size", 0)))
    items = []
    for t in pel.findall("text"):
        txt = html.unescape("".join(t.itertext()))
        fam, color, size = fonts.get(t.get("font"), ("", "", 0))
        items.append({
            "x": float(t.get("left")), "y": float(t.get("top")),
            "w": float(t.get("width")), "h": float(t.get("height")),
            "fam": fam, "color": color, "size": size, "text": txt,
        })
    return items, float(pel.get("width")), float(pel.get("height"))


CAP_RE = re.compile(r"^\s*Figure\s+(Q?)(\d+)[–\-](\d+)")
PANEL_RE = re.compile(r"^\s*PANEL\s+(\d+)[–\-](\d+)")
TABLE_RE = re.compile(r"^\s*TABLE\s+(\d+)[–\-](\d+)")
TAG_RE = re.compile(r"^\s*MBoC7\b(.*)$")
NUM_RE = re.compile(r"^(Q?)(\d+)\.(\d+)$")


def find_tags(items):
    """Art tags: the anchor and the identity of each figure."""
    tags = []
    for i, it in enumerate(items):
        m = TAG_RE.match(it["text"])
        if not m:
            continue
        rest = m.group(1).strip()
        token = rest.split("/")[-1].strip() if "/" in rest else rest.split()[-1] if rest.split() else ""
        nm = NUM_RE.match(token)
        if not nm:
            continue
        q, ch, num = nm.groups()
        tags.append({"idx": i, "key": f"{'q' if q else ''}{ch}-{int(num):02d}",
                     "x": it["x"], "y": it["y"]})
    return tags


def caption_block(items, anchor_idx):
    """The caption paragraph, so it can be kept out of the crop."""
    anchor = items[anchor_idx]
    left, top = anchor["x"], anchor["y"]
    lines = {}
    for i, it in enumerate(items):
        if not is_caption_font(it["fam"]):
            continue
        if it["y"] < top - 2 or it["x"] < left - 10 or it["x"] > left + 320:
            continue
        lines.setdefault(round(it["y"]), []).append(i)
    block, cur = set(), None
    for y in sorted(lines):
        if y < top - 2:
            continue
        if cur is None:
            if abs(y - top) > 3:
                continue
        elif y - cur > 26:
            break
        cur = y
        block.update(lines[y])
    return block


def bbox_dist(a, b):
    dx = max(a[0] - b[2], b[0] - a[2], 0)
    dy = max(a[1] - b[3], b[1] - a[3], 0)
    return (dx * dx + dy * dy) ** 0.5


def extract_page(page, pel, fonts):
    items, xw, xh = parse_page(pel, fonts)
    tags = find_tags(items)
    panels = [it for it in items if PANEL_RE.match(it["text"])]
    has_caption = any(is_caption_font(it["fam"]) and it["color"].lower() == CAPTION_BLUE
                      and CAP_RE.match(it["text"]) for it in items)
    if not tags and not panels and not has_caption:
        return []

    img = np.array(Image.open(render(page)).convert("RGB"))
    H, W = img.shape[:2]
    sx, sy = W / xw, H / xh

    def box(it, pad=1):
        return (max(0, int(it["x"] * sx) - pad), max(0, int(it["y"] * sy) - pad),
                min(W, int((it["x"] + it["w"]) * sx) + pad),
                min(H, int((it["y"] + it["h"]) * sy) + pad))

    ink = (img <= INK_MAX).any(axis=2)

    # The running head sits above a full-width rule; everything above it is chrome.
    head_cut = int(0.05 * H)
    rows = np.where(ink[: int(0.20 * H), :].mean(axis=1) > 0.75)[0]
    if len(rows):
        head_cut = int(rows.max()) + 6
    foot_cut = int(0.945 * H)
    ink[:head_cut, :] = False
    ink[foot_cut:, :] = False

    caption_ids, cap_anchors = set(), {}
    for i, it in enumerate(items):
        if is_caption_font(it["fam"]) and it["color"].lower() == CAPTION_BLUE \
                and CAP_RE.match(it["text"]):
            caption_ids |= caption_block(items, i)
            m = CAP_RE.match(it["text"])
            q, ch, num = m.groups()
            key = f"{'q' if q else ''}{ch}-{int(num):02d}"
            cap_anchors[key] = (it["x"] * sx, it["y"] * sy)

    # HelveticaNeue is only ever page furniture here: captions, section headings
    # and running heads. Figure labels are Frutiger/Courier. Clear it from the
    # ink layer so a crop can never absorb a caption or heading.
    ink_keep = ink.copy()
    for it in items:
        if is_caption_font(it["fam"]) or TAG_RE.match(it["text"]):
            x0, y0, x1, y1 = box(it, pad=2)
            ink_keep[y0:y1, x0:x1] = False

    clean = img.copy()
    for it in items:
        if is_caption_font(it["fam"]) or is_body(it["fam"]) or TAG_RE.match(it["text"]):
            x0, y0, x1, y1 = box(it, pad=2)
            clean[y0:y1, x0:x1] = 255
    clean[:head_cut, :] = 255
    clean[foot_cut:, :] = 255

    graphics = ink_keep.copy()
    for it in items:
        x0, y0, x1, y1 = box(it, pad=2)
        graphics[y0:y1, x0:x1] = False

    if panels:
        m = PANEL_RE.match(panels[0]["text"])
        ys, xs = np.where(ink_keep)
        if not len(xs):
            return []
        b = (max(0, xs.min() - PAD), max(0, ys.min() - PAD),
             min(W, xs.max() + PAD), min(H, ys.max() + PAD))
        return [(f"panel-{m.group(1)}-{int(m.group(2)):02d}", page, b, clean)]

    st = np.ones((3, 3), bool)
    lab, n = ndimage.label(ndimage.binary_dilation(graphics, st, iterations=DILATE), st)
    if n == 0:
        return []
    comps = []
    for i, sl in enumerate(ndimage.find_objects(lab), start=1):
        if sl is None:
            continue
        area = int((graphics[sl] & (lab[sl] == i)).sum())
        if area < MIN_COMPONENT:
            continue
        ys, xs = sl
        comps.append([xs.start + DILATE, ys.start + DILATE,
                      xs.stop - DILATE, ys.stop - DILATE])
    if not comps:
        return []

    # Seed each figure with the component sitting directly above its art tag.
    anchors = {t["key"]: (t["x"] * sx, t["y"] * sy) for t in tags}
    figs, used = {}, set()
    for key, (ax, ay) in anchors.items():
        best, bc = None, 1e18
        for ci, c in enumerate(comps):
            if ci in used:
                continue
            dy = ay - c[3]                       # positive when art is above tag
            dx = max(c[0] - ax, ax - c[2], 0)
            cost = (dy if dy >= -40 else 6000 - dy) + dx * 1.6
            if cost < bc:
                best, bc = ci, cost
        if best is not None and bc < 2600:
            figs[key] = list(comps[best])
            used.add(best)

    # Tables are ruled grids, not artwork. Let each table claim the graphics
    # directly beneath its caption so no figure can absorb them.
    for it in items:
        if not TABLE_RE.match(it["text"]):
            continue
        tx0, ty0, tx1, ty1 = box(it, pad=0)
        for ci, c in enumerate(comps):
            if ci in used:
                continue
            overlaps_col = min(c[2], tx1 + 1400) - max(c[0], tx0 - 60) > 0
            if overlaps_col and c[1] >= ty0 - 40:
                used.add(ci)

    # A few figures carry no art tag; seed those from their caption instead.
    for key, (ax, ay) in cap_anchors.items():
        if key in figs:
            continue
        best, bd = None, 1e18
        for ci, c in enumerate(comps):
            if ci in used:
                continue
            d = ((max(c[0] - ax, ax - c[2], 0)) ** 2
                 + (max(c[1] - ay, ay - c[3], 0)) ** 2) ** 0.5
            if d < bd:
                best, bd = ci, d
        if best is not None and bd < 900:
            figs[key] = list(comps[best])
            used.add(best)

    # Absorb neighbouring panels of the same figure.
    for _ in range(6):
        grew = False
        for ci, c in enumerate(comps):
            if ci in used:
                continue
            best, bd = None, 1e18
            for key, b in figs.items():
                d = bbox_dist(c, b)
                # panels of one figure line up in a row or column, so allow a
                # much wider gap when the component overlaps that axis
                ox = min(c[2], b[2]) - max(c[0], b[0])
                oy = min(c[3], b[3]) - max(c[1], b[1])
                aligned = (ox > 0.3 * min(c[2] - c[0], b[2] - b[0])
                           or oy > 0.3 * min(c[3] - c[1], b[3] - b[1]))
                limit = ALIGNED_ABSORB if aligned else ABSORB
                if d < bd and d < limit:
                    best, bd = key, d
            if best is not None:
                b = figs[best]
                figs[best] = [min(b[0], c[0]), min(b[1], c[1]),
                              max(b[2], c[2]), max(b[3], c[3])]
                used.add(ci)
                grew = True
        if not grew:
            break

    results = []
    for key, b in figs.items():
        x0, y0, x1, y1 = b
        for _ in range(4):
            grew = False
            for i, it in enumerate(items):
                if i in caption_ids or not it["text"].strip():
                    continue
                if TAG_RE.match(it["text"]) or is_caption_font(it["fam"]):
                    continue
                tx0, ty0, tx1, ty1 = box(it, pad=0)
                if ty1 <= head_cut or ty0 >= foot_cut:
                    continue
                inside = (tx0 >= x0 - 6 and tx1 <= x1 + 6
                          and ty0 >= y0 - 6 and ty1 <= y1 + 6)
                if is_body(it["fam"]) and not inside:
                    continue
                if bbox_dist((tx0, ty0, tx1, ty1), (x0, y0, x1, y1)) > TEXT_JOIN:
                    continue
                n0, n1, n2, n3 = min(x0, tx0), min(y0, ty0), max(x1, tx1), max(y1, ty1)
                if (n0, n1, n2, n3) != (x0, y0, x1, y1):
                    x0, y0, x1, y1 = n0, n1, n2, n3
                    grew = True
            if not grew:
                break

        sub = ink_keep[max(0, y0):min(H, y1), max(0, x0):min(W, x1)]
        if sub.size == 0 or not sub.any():
            continue
        ys, xs = np.where(sub)
        bx = (max(0, max(0, x0) + xs.min() - PAD), max(0, max(0, y0) + ys.min() - PAD),
              min(W, max(0, x0) + xs.max() + PAD), min(H, max(0, y0) + ys.max() + PAD))
        results.append((f"fig-{key}", page, bx, clean))
    return results


def main():
    first, last = int(sys.argv[1]), int(sys.argv[2])
    os.makedirs(PAGES, exist_ok=True)
    os.makedirs(OUT, exist_ok=True)
    bypage = {int(p.get("number")): p for p in page_xml(first, last).findall("page")}
    fonts, manifest = {}, []
    for page in range(first, last + 1):
        if page not in bypage:
            continue
        try:
            for name, pg, b, img in extract_page(page, bypage[page], fonts):
                crop = img[b[1]:b[3], b[0]:b[2]]
                if crop.size == 0:
                    continue
                Image.fromarray(crop).save(os.path.join(OUT, name + ".png"))
                manifest.append((name, pg, crop.shape[1], crop.shape[0]))
                print(f"{name:14s} p{pg:<5d} {crop.shape[1]}x{crop.shape[0]}")
        except Exception as e:
            print(f"!! page {page}: {type(e).__name__}: {e}", file=sys.stderr)
    with open(os.path.join(OUT, "manifest.tsv"), "a") as f:
        for n, p, w, h in manifest:
            f.write(f"{n}\t{p}\t{w}\t{h}\n")
    print(f"{len(manifest)} figures", file=sys.stderr)


if __name__ == "__main__":
    main()
