#!/usr/bin/env python3
"""Render flat iPhone mockups from app screenshots (Pillow only).

Usage: python3 scripts/make-mockups.py <screens-dir> [out-dir]
Input : <screens-dir>/{checkin,calm,calendar,worries,progress,journal}.webp
        (just the app screen, no bezel)
Output: <out-dir>/<name>.webp  (transparent, 720x1460)
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

S = 4  # supersample
W, H = 720, 1460
PX, PY, PW, PH = 20, 20, 680, 1420  # phone body
RIM, BEZEL = 6, 12
RIM_COLOR = (44, 46, 51, 255)
SCREEN_BG = (11, 22, 39, 255)
FONT = "/usr/share/fonts/opentype/inter/Inter-SemiBold.otf"


def s(v):
	return round(v * S)


def box(x0, y0, x1, y1):
	return (s(x0), s(y0), s(x1), s(y1))


def status_bar(d, left, top, width):
	white = (255, 255, 255, 255)
	try:
		font = ImageFont.truetype(FONT, s(27))
	except OSError:
		font = ImageFont.load_default()
	cy = top + 29
	d.text((s(left + 52), s(cy)), "9:41", font=font, fill=white, anchor="lm")
	# battery
	bx = left + width - 52 - 46
	d.rounded_rectangle(box(bx, cy - 11, bx + 46, cy + 11), radius=s(6), outline=(255, 255, 255, 140), width=s(2))
	d.rounded_rectangle(box(bx + 3, cy - 8, bx + 3 + 34, cy + 8), radius=s(3.5), fill=white)
	# wifi
	wx = bx - 16 - 34
	for r in (17, 11, 5):
		d.arc(box(wx + 17 - r, cy + 10 - r, wx + 17 + r, cy + 10 + r), 225, 315, fill=white, width=s(3.6))
	d.ellipse(box(wx + 15, cy + 8, wx + 19, cy + 12), fill=white)
	# signal
	sx = wx - 14 - 34
	for i, h in enumerate((8, 13, 18, 23)):
		x = sx + i * 9
		d.rounded_rectangle(box(x, cy + 11 - h, x + 6, cy + 11), radius=s(1.6), fill=white)


def render(shot_path: Path, out_path: Path):
	canvas = Image.new("RGBA", (W * S, H * S), (0, 0, 0, 0))
	d = ImageDraw.Draw(canvas)

	# side buttons
	for x, y, h, w in ((15, 250, 48, 6), (15, 330, 88, 6), (15, 440, 88, 6), (699, 380, 140, 6)):
		d.rounded_rectangle(box(x, y, x + w, y + h), radius=s(3), fill=RIM_COLOR)

	# rim + bezel
	d.rounded_rectangle(box(PX, PY, PX + PW, PY + PH), radius=s(92), fill=RIM_COLOR)
	d.rounded_rectangle(box(PX + RIM, PY + RIM, PX + PW - RIM, PY + PH - RIM), radius=s(86), fill=(0, 0, 0, 255))

	# screen
	inset = RIM + BEZEL
	sx0, sy0, sx1, sy1 = PX + inset, PY + inset, PX + PW - inset, PY + PH - inset
	sw, sh = sx1 - sx0, sy1 - sy0
	screen = Image.new("RGBA", (sw * S, sh * S), SCREEN_BG)
	shot = Image.open(shot_path).convert("RGB")
	new_h = round(sw * S * shot.height / shot.width)
	shot = shot.resize((sw * S, new_h), Image.LANCZOS)
	screen.paste(shot, (0, s(56)))
	mask = Image.new("L", screen.size, 0)
	ImageDraw.Draw(mask).rounded_rectangle((0, 0, screen.width - 1, screen.height - 1), radius=s(74), fill=255)
	canvas.paste(screen, (s(sx0), s(sy0)), mask)

	d = ImageDraw.Draw(canvas)
	status_bar(d, sx0, sy0, sw)
	cx = PX + PW / 2
	d.rounded_rectangle(box(cx - 88, sy0 + 14, cx + 88, sy0 + 64), radius=s(25), fill=(0, 0, 0, 255))
	d.rounded_rectangle(box(cx - 110, sy1 - 22, cx + 110, sy1 - 14), radius=s(4), fill=(255, 255, 255, 215))

	canvas.resize((W, H), Image.LANCZOS).save(out_path, quality=92, method=6)


if __name__ == "__main__":
	src = Path(sys.argv[1])
	out = Path(sys.argv[2] if len(sys.argv) > 2 else "public/assets/mockups")
	out.mkdir(parents=True, exist_ok=True)
	for name in ("checkin", "calm", "calendar", "worries", "progress", "journal"):
		render(src / f"{name}.webp", out / f"{name}.webp")
		print("wrote", out / f"{name}.webp")
