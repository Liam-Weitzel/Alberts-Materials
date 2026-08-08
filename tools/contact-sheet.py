#!/usr/bin/env python3
"""Build labelled contact sheets so every crop can be eyeballed for clipping.
Each tile gets a red border flush against the crop edge, so any artwork that
runs into the border is a crop that cut something off."""
import os
import sys

from PIL import Image, ImageDraw

WORK = os.environ.get("MBOC_WORK", "/tmp/mboc-figures")
OUT = os.path.join(WORK, "out")
SHEETS = os.path.join(WORK, "sheets")
CELL = 620
COLS = 4
ROWS = 3


def main():
    names = sorted(sys.argv[1:]) if len(sys.argv) > 1 else sorted(
        f[:-4] for f in os.listdir(OUT) if f.endswith(".png"))
    os.makedirs(SHEETS, exist_ok=True)
    per = COLS * ROWS
    for s in range((len(names) + per - 1) // per):
        chunk = names[s * per:(s + 1) * per]
        sheet = Image.new("RGB", (COLS * CELL, ROWS * (CELL + 26)), "white")
        d = ImageDraw.Draw(sheet)
        for i, n in enumerate(chunk):
            im = Image.open(os.path.join(OUT, n + ".png")).convert("RGB")
            im.thumbnail((CELL - 14, CELL - 14))
            cx = (i % COLS) * CELL
            cy = (i // COLS) * (CELL + 26)
            ox = cx + (CELL - im.width) // 2
            oy = cy + 24 + (CELL - 24 - im.height) // 2
            sheet.paste(im, (ox, oy))
            d.rectangle([ox - 1, oy - 1, ox + im.width, oy + im.height],
                        outline=(220, 0, 0))
            d.text((cx + 6, cy + 6), f"{n}  {im.width}x{im.height}", fill=(0, 0, 0))
        p = os.path.join(SHEETS, f"sheet-{s:02d}.png")
        sheet.save(p)
        print(p, len(chunk))


if __name__ == "__main__":
    main()
