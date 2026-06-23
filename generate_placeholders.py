"""
Generates placeholder logo.png and owners.png so the site renders out of the box.
Replace these files with your real assets when ready.
"""
from PIL import Image, ImageDraw, ImageFont
import os

OUT = os.path.join(os.path.dirname(__file__), "src", "assets")
os.makedirs(OUT, exist_ok=True)


def make_logo():
    """Circular gold-on-black logo with 'TL' monogram."""
    size = 512
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Outer ring
    pad = 18
    draw.ellipse([pad, pad, size - pad, size - pad],
                 outline=(212, 175, 55, 255), width=8)

    # Inner ring
    inner_pad = 46
    draw.ellipse([inner_pad, inner_pad, size - inner_pad, size - inner_pad],
                 outline=(212, 175, 55, 255), width=3)

    # Fill black inside
    fill_pad = 56
    draw.ellipse([fill_pad, fill_pad, size - fill_pad, size - fill_pad],
                 fill=(0, 0, 0, 255), outline=(212, 175, 55, 255), width=2)

    # Try a serif font for the monogram
    font = None
    for path in [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]:
        if os.path.exists(path):
            font = ImageFont.truetype(path, 230)
            break
    if font is None:
        font = ImageFont.load_default()

    text = "TL"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text(((size - tw) / 2 - bbox[0], (size - th) / 2 - bbox[1] - 12),
              text, fill=(212, 175, 55, 255), font=font)

    # Small caption font
    cap_font = None
    for path in [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]:
        if os.path.exists(path):
            cap_font = ImageFont.truetype(path, 28)
            break
    if cap_font is None:
        cap_font = ImageFont.load_default()

    for label, y in [("THANGALATHA", 70), ("FINANCE", 410)]:
        bb = draw.textbbox((0, 0), label, font=cap_font)
        w = bb[2] - bb[0]
        draw.text(((size - w) / 2 - bb[0], y), label, fill=(212, 175, 55, 255), font=cap_font)

    img.save(os.path.join(OUT, "logo.png"))
    print("Created src/assets/logo.png")


def make_owners():
    """Simple gold silhouette placeholder for owner photo."""
    w, h = 600, 800
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Gradient background ellipse (gold halo behind silhouettes)
    for r in range(360, 0, -8):
        alpha = int(40 * (1 - r / 360))
        draw.ellipse(
            [w / 2 - r, h / 2 - r * 1.1, w / 2 + r, h / 2 + r * 1.1],
            fill=(212, 175, 55, max(0, alpha))
        )

    # Two head silhouettes
    for cx, cy, rx, ry in [(220, 340, 80, 95), (390, 320, 85, 100)]:
        draw.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=(180, 145, 50, 255))
    # Bodies (rounded shoulders)
    draw.ellipse([130, 460, 480, 760], fill=(150, 120, 40, 255))

    # Subtle text overlay
    font = None
    for path in [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    ]:
        if os.path.exists(path):
            font = ImageFont.truetype(path, 22)
            break
    if font is None:
        font = ImageFont.load_default()
    draw.text((140, 740), "Replace with owners.png", fill=(255, 255, 255, 180), font=font)

    img.save(os.path.join(OUT, "owners.png"))
    print("Created src/assets/owners.png")


if __name__ == "__main__":
    make_logo()
    make_owners()
    print("Done.")
