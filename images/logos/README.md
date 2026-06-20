# OUNLP logo package

The official OUNLP logo set — modeled on university brand packages (CU Boulder,
Utah). Organized as **{layout} × {color} × {format}** so there's a correct file
for every context: slides, posters, print, web, merch, email.

**For the website itself, prefer the SVGs in `../` (`logo.svg`, etc.).** This
folder is for everything *outside* the site.

## Pick a file in three steps

1. **Layout** — how much text you need.
2. **Color** — driven by the background it sits on.
3. **Format** — vector for print/scale, PNG for convenience.

File name pattern: **`ounlp-<layout>-<color>[-<px>].<ext>`**
(e.g. `ounlp-lockup-horizontal-navy.pdf`, `ounlp-mark-white-512.png`).

### 1. Layouts

| Layout | Contents | Use for |
| --- | --- | --- |
| `mark` | swirl mark only | favicons, avatars, watermarks, stickers |
| `wordmark-horizontal` | mark + **OUNLP**, side by side | headers, slide footers, narrow spaces |
| `wordmark-stacked` | mark over **OUNLP** | square spots, social avatars, merch |
| `lockup-horizontal` | mark + **OUNLP** + full tagline, side by side | the default — letterhead, slide title, posters |
| `lockup-stacked` | mark over **OUNLP** over tagline | portrait/centered spots, poster headers |

The `lockup-*` files carry the **OU NATURAL LANGUAGE PROCESSING LAB** tagline;
the `wordmark-*` files drop it (use when the tagline would be too small to read).

### 2. Colors — choose by background

| Color | Hex | Use on |
| --- | --- | --- |
| **`navy`** *(primary, full-color — sage tagline)* | `#2A3150` | white / light backgrounds |
| `white` *(reverse)* | `#FFFFFF` | **dark backgrounds & photos** |
| `black` *(mono)* | `#000000` | one-color print, fax, laser, engraving |
| `gray` *(grayscale)* | `#595959` | grayscale documents |
| `storm` | `#3D4468` | light bg, softer than navy |
| `sage` | `#708977` | light bg, accent |
| `dusk` | `#5A4A7A` | light bg, accent |
| `gold` | `#C9A46A` | dark bg, accent |
| `ink` | `#1F2430` | light bg, near-black |
| `crimson` | `#841617` | OU co-branded materials |

> **The "white logo looks invisible" gotcha:** the `white` files are a *reverse*
> knockout — pure white art on transparency, meant **only for dark backgrounds**.
> On a white slide they vanish (nothing for white to show against). On light
> backgrounds use `navy` (or any non-white color); reach for `white` only when
> the background is dark.

Every color exists for every layout. The **only** difference between `navy` and
the rest: `navy` is the full-color primary and renders its tagline in Prairie
Sage; all other colors are single-color throughout.

### 3. Formats

| Format | Scalable? | Use for |
| --- | --- | --- |
| **`.svg`** | ∞ vector | web, Figma/Illustrator, anything that accepts SVG |
| **`.pdf`** | ∞ vector | **posters, print shops, LaTeX, Office insert** — scales to any size with no blur |
| `-256/-512/-1024.png` | raster | `mark` sizes — icons, avatars |
| `-1024/-2048.png` | raster | lockup/wordmark sizes — slides, web, social |

**For slides:** the `-1024` / `-2048` PNGs (or the SVG) are plenty.
**For posters / large print:** use the **`.pdf` or `.svg`** — they're resolution-
independent (a 10 KB PDF renders crisp at any size). Don't scale up a PNG.

## Favicons — `favicon-{16,32,180,192,512}.png` and `favicon-light-*`

App/browser icons with a rounded-square tile baked in (the only files here that
*aren't* transparent).

- `favicon-*` — white mark on navy tile (default).
- `favicon-light-*` — navy mark on white tile.
- Sizes: 16/32 (tab), 180 (Apple touch), 192/512 (PWA / Android).

## Minimum sizes (legibility)

- `mark` — ≥ **24 px** / 0.25 in
- `wordmark-*` — ≥ **120 px** / 1.25 in wide
- `lockup-*` (with tagline) — ≥ **220 px** / 2.3 in wide (below this, use a
  `wordmark-*` instead — the tagline turns to mush)

## Regenerating

Not part of the Jekyll build. The whole package is produced by a one-off Python
script (`fonttools` to outline the Jost wordmark → pure-vector SVG, `cairosvg`
for SVG→PDF and SVG→PNG). Ask Claude Code to *"regenerate the OUNLP logo
package"* — colors, layouts, and sizes are defined at the top of the generator.

Wordmark typeface: **Jost** (Google Fonts, OFL), weights 300 (OUNLP) / 400
(tagline) — matching `--logotype` in `_styles/-theme.scss`. The text is outlined
to paths, so the files carry **no font dependency**.
