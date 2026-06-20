# OUNLP logo PNGs

Raster (PNG) exports of the OUNLP logo, generated from the source SVGs in
`images/` (`logo.svg`, `ounlp-mark-navy.svg`, `ounlp-mark-white.svg`,
`logo-currentcolor.svg`, `favicon.svg`, `favicon-light.svg`). The lab-name
lockups are composed from the mark plus the brand wordmark (Jost) — they have
no source SVG.

**For the web/site itself, prefer the SVGs** in `images/` (sharper, smaller).
These PNGs are for places that can't use SVG: slide decks, posters, social
cards, email signatures, third-party profiles, etc.

All files have transparent backgrounds **except** the favicons (which carry
their own rounded-square background tile).

## Brand colors

| Name         | Hex       | Used for                          |
| ------------ | --------- | --------------------------------- |
| Navy         | `#2A3150` | mark + wordmark on light bg       |
| Slate        | `#3D4468` | `logo.svg` mark, currentColor PNG |
| White        | `#ffffff` | mark + wordmark on dark bg        |
| Prairie Sage | `#708977` | tagline (lockups, light bg)       |

Wordmark typeface: **Jost** (weight 400), matching `--logotype` in
`_styles/-theme.scss`.

## Files

### Standalone marks — `ounlp-mark-*-{256,512,1024}.png`
The tornado mark only, no text. Pick by background:

- `ounlp-mark-navy-*` — navy mark, for light backgrounds.
- `ounlp-mark-white-*` — white mark, for dark backgrounds / photos.
- `ounlp-mark-slate-*` — slate mark (from `logo.svg`).
- `ounlp-mark-currentcolor-slate-*` — raster of `logo-currentcolor.svg`. The
  source inherits the surrounding text color; since a PNG can't do that, this is
  rendered in slate as a fixed fallback.

### Favicons — `favicon-{16,32,180,192,512}.png` and `favicon-light-*`
App/browser icons with a rounded-square tile baked in.

- `favicon-*` — white mark on navy tile (default).
- `favicon-light-*` — navy mark on white tile.

Sizes: 16/32 (browser tab), 180 (Apple touch icon), 192/512 (PWA / Android).

### Lab-name lockups — `ounlp-lockup-{horizontal,stacked}-{navy,white}-{1024,2048}.png`
Mark + "OUNLP" wordmark + "OU NATURAL LANGUAGE PROCESSING LAB" tagline.

- `horizontal` — mark left, wordmark/tagline stacked to the right.
- `stacked` — mark on top, wordmark/tagline centered below.
- `navy` — navy mark + navy wordmark + sage tagline, for **light** backgrounds.
- `white` — white mark + white wordmark + light-sage tagline, for **dark**
  backgrounds.

Trimmed to the artwork with even transparent padding.

## Regenerating

Not part of the Jekyll build. To re-export after the source SVGs or wordmark
change, re-run the one-off render pipeline (Node `@resvg/resvg-js` for SVG→PNG
with the Jost font, then Pillow to trim/pad/resize the lockups). Ask Claude
Code to "regenerate the OUNLP logo PNGs" if the script is no longer around.
