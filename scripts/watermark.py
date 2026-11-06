#!/usr/bin/env python3
"""
SAMIRA HOME DECOR — Watermark product photos
--------------------------------------------
Adds a subtle "SAMIRA HOME DECOR" mark to every product and hamper
photo, so copied photos carry the brand and are harder to pass off.

    python3 scripts/watermark.py            watermark any new photos
    python3 scripts/watermark.py --dry      list what would change

Each photo is marked only once: watermarked files are recorded in
scripts/watermarked.json (by content hash), and anything already in
that list is skipped. Run it every time new product photos are added.
The un-watermarked originals stay in the git history.
"""
import hashlib, json, os, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIRS = ["assets/products", "assets/hamper"]
LEDGER = os.path.join(ROOT, "scripts", "watermarked.json")
FONT = "/usr/share/fonts/opentype/inter/Inter-SemiBold.otf"
TEXT = "SAMIRA HOME DECOR"


def find_font():
    for p in [FONT, "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"]:
        if os.path.exists(p):
            return p
    import glob
    hits = glob.glob("/usr/share/fonts/**/Inter*SemiBold*.tt*", recursive=True)
    if hits:
        return hits[0]
    raise SystemExit("No font found for the watermark")


def sha(path):
    return hashlib.sha1(open(path, "rb").read()).hexdigest()


def mark(im, font_path):
    im = im.convert("RGBA")
    w, h = im.size
    size = max(8, round(min(w, h) * 0.034))
    while True:                                # never wider than 55% of the photo
        font = ImageFont.truetype(font_path, size)
        spacing = size * 0.28                  # letter tracking
        widths = [font.getlength(c) for c in TEXT]
        text_w = sum(widths) + spacing * (len(TEXT) - 1)
        if text_w <= w * 0.55 or size <= 8:
            break
        size -= 1
    margin = round(min(w, h) * 0.035)
    x0, y0 = w - margin - text_w, h - margin - size * 1.15

    shadow = Image.new("RGBA", im.size, (0, 0, 0, 0))
    text = Image.new("RGBA", im.size, (0, 0, 0, 0))
    ds, dt = ImageDraw.Draw(shadow), ImageDraw.Draw(text)
    x = x0
    for c, cw in zip(TEXT, widths):
        ds.text((x, y0), c, font=font, fill=(0, 0, 0, 90))
        dt.text((x, y0), c, font=font, fill=(255, 255, 255, 175))
        x += cw + spacing
    shadow = shadow.filter(ImageFilter.GaussianBlur(max(1, size // 6)))
    out = Image.alpha_composite(im, shadow)
    out = Image.alpha_composite(out, text)
    return out.convert("RGB")


def main():
    dry = "--dry" in sys.argv
    ledger = json.load(open(LEDGER)) if os.path.exists(LEDGER) else {}
    font_path = find_font()
    done = skipped = 0
    for d in DIRS:
        folder = os.path.join(ROOT, d)
        for f in sorted(os.listdir(folder)):
            if not f.lower().endswith((".webp", ".jpg", ".jpeg", ".png")):
                continue
            rel = f"{d}/{f}"
            path = os.path.join(folder, f)
            if ledger.get(rel) == sha(path):
                skipped += 1
                continue
            if dry:
                print("would mark", rel); done += 1; continue
            im = Image.open(path)
            out = mark(im, font_path)
            if f.lower().endswith(".webp"):
                out.save(path, "WEBP", quality=80, method=6)
            elif f.lower().endswith(".png"):
                out.save(path, "PNG", optimize=True)
            else:
                out.save(path, "JPEG", quality=85, optimize=True)
            ledger[rel] = sha(path)
            done += 1
    if not dry:
        json.dump(dict(sorted(ledger.items())), open(LEDGER, "w"), indent=0)
    print(f"{'Would mark' if dry else 'Marked'} {done} photos, {skipped} already done")


if __name__ == "__main__":
    main()
