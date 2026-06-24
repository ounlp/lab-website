---
name: add-publication
description: Add a paper to the OUNLP lab website when it is published/accepted — creates the News entry, the publication-list citation (sources.yaml + generated citations.yaml), and a thumbnail. Use when the user says a paper was "accepted to <venue>" / "published in <venue>" and wants it on the site, or gives a DOI/arXiv/OpenReview/ESSOAr link to add.
---

# Add a publication to the lab website

Adds an accepted/published paper to **two** places and makes a **thumbnail**:
1. `news/index.md` — a dated News bullet.
2. `_data/sources.yaml` — the publication-list entry (and mirror into the generated `_data/citations.yaml`).
3. `images/papers/<slug>.jpg` — a thumbnail.

## Inputs to collect first
- An identifier or link: DOI, arXiv id, OpenReview URL, ESSOAr URL, or just the title.
- The **venue it was accepted to** and the venue's homepage URL (e.g. TMLR → https://jmlr.org/tmlr/, GRL → https://agupubs.onlinelibrary.wiley.com/journal/19448007).
- The acceptance month/year (default to the current month if "just accepted").

## Step 1 — Fetch metadata
Prefer Crossref (works for DOIs incl. arXiv `10.48550/arXiv.*` and ESSOAr `10.22541/essoar.*`):
```bash
curl -s --max-time 30 "https://api.crossref.org/works/<DOI>" -H "User-Agent: mailto:jie.cao@ou.edu" \
  | python3 -c "import sys,json;d=json.load(sys.stdin)['message'];print('TITLE:',d.get('title'));print('AUTHORS:',[(a.get('given','')+' '+a.get('family','')).strip() for a in d.get('author',[])]);print('PUBLISHER:',d.get('container-title') or d.get('publisher'));print('ISSUED:',d.get('issued'))"
```
Fallback: OpenAlex `https://api.openalex.org/works/https://doi.org/<DOI>` (also reports `best_oa_location.pdf_url`).
Keep the **author order** exactly as returned. Note: the accepted version's author list can differ from an earlier preprint (e.g. an added author) — trust the venue/Crossref record.

## Step 2 — News entry (`news/index.md`)
Add a bullet at the **top** of the matching `## YYYY` section (newest first):
```
- **MM/YYYY** — Our paper "[<Title>](<paper-link>)" is accepted to [<Venue>](<venue-url>)!
```
Use the stable paper link (OpenReview forum, DOI, or arXiv abs). Keep the existing terse style; link the title and the venue.

## Step 3 — Publication entry (`_data/sources.yaml`)
The cite pipeline (`_cite/cite.py`) uses **Manubot** to fetch metadata from an `id:`, then **fields you set on the source override Manubot** (`citation.update(source)`). Pick the right shape:

- **Clean DOI/arXiv id, venue matches the DOI** → minimal entry, let Manubot fill it:
  ```yaml
  - id: doi:10.1234/...
    image: images/papers/<slug>.jpg
    type: paper
    tags: [ ... ]
  ```
- **Has a DOI/arXiv id but accepted venue differs** (e.g. arXiv preprint now TMLR) → keep `id:` and **override** the changed fields:
  ```yaml
  - id: doi:10.48550/arXiv.2510.17139
    publisher: Transactions on Machine Learning Research
    date: '2026-06-01'
    link: https://openreview.net/forum?id=...
    authors: [ ...accepted-version order... ]
    image: images/papers/<slug>.jpg
    type: paper
    tags: [ ... ]
  ```
- **No Manubot-citeable id** (ESSOAr / journal-only / not yet on Crossref-resolvable DOI) → **manual entry with NO `id:`** (Manubot is skipped; an unresolvable `id` would make `cite.py` error out):
  ```yaml
  - title: '<Title>'
    authors: [ ... ]
    publisher: <Venue>
    date: '2026-06-01'
    link: https://doi.org/10.22541/essoar.<...>
    image: images/papers/<slug>.jpg
    type: paper
    tags: [ ... ]
  ```

Rules:
- **Date format is `'YYYY-MM-01'`** — always day `01`. The display drops the day (`citation.html` formats with `%b %Y`), and sorting needs a valid `YYYY-MM-DD`. Do NOT use bare `YYYY-MM` (it fails `format_date` and becomes blank).
- **Tags**: reuse slugs from `_data/themes.yaml` where possible so they render as theme chips.

## Step 4 — Mirror into `_data/citations.yaml`
`citations.yaml` is generated (header says DO NOT EDIT) and CI's `update-citations.yaml` regenerates it from `sources.yaml`. But mirror the new entry so local previews and the live site are correct **before** that Action runs. Copy the same fields and append:
```yaml
  plugin: sources.py
  file: sources.yaml
```
For an `id:`-based override entry, instead update the existing generated record's fields to match your overrides.

## Step 5 — Thumbnail (`images/papers/<slug>.jpg`)
Existing thumbnails are hand-cropped figures/first pages (~850px wide, JPEG q90). No generator script. Tools available: `pdftoppm`, `gs`, `python3` + **Pillow** (note: ImageMagick `convert`/`magick` are NOT installed).

1. Get the PDF. If the host is bot-protected (ESSOAr, ResearchGate return 403; OpenAlex shows no OA mirror), **ask the user to drop the PDF** somewhere and give the path.
2. Pick a representative figure — usually the overview/teaser (Figure 1). Render a few early pages and look:
   ```bash
   pdftoppm -jpeg -f 2 -l 6 -scale-to-x 700 -scale-to-y -1 "<pdf>" /tmp/pg
   ```
3. Render the chosen page at ~200 dpi and auto-crop the figure with Pillow (mask the left-margin sidebar text and bottom page number, then bbox the content):
   ```bash
   pdftoppm -jpeg -jpegopt quality=95 -f <PAGE> -l <PAGE> -r 200 "<pdf>" /tmp/pghi
   python3 - <<'PY'
   from PIL import Image, ImageChops
   im = Image.open("/tmp/pghi-0<PAGE>.jpg").convert("RGB"); W,H = im.size
   top = im.crop((int(0.07*W), 0, W, int(0.68*H)))          # drop left margin; figure is in upper page
   g = top.convert("L"); bg = Image.new("L", g.size, 255)
   bbox = ImageChops.difference(g, bg).point(lambda p: 255 if p>12 else 0).getbbox()
   x0=int(0.07*W)+bbox[0]; y0=bbox[1]; x1=int(0.07*W)+bbox[2]; y1=bbox[3]; pad=24
   crop = im.crop((max(0,x0-pad),max(0,y0-pad),min(W,x1+pad),min(H,y1+pad)))
   tw=850; crop=crop.resize((tw, round(crop.height*tw/crop.width)), Image.LANCZOS)
   crop.save("/tmp/<slug>.jpg", quality=90, optimize=True)
   PY
   ```
   Adjust the `0.68`/`0.07` region bounds per paper. **Always Read the output JPG to verify** it captured the figure cleanly before installing it.
4. `cp /tmp/<slug>.jpg images/papers/<slug>.jpg` and set `image: images/papers/<slug>.jpg` in both YAML entries.
5. If no usable asset can be obtained, omit `image` (the template renders fine without it) and tell the user.

Slug convention is loose (e.g. `matterchat.jpg`, `songkun2025sea.jpg`, `aiagent-grl2026.jpg`) — make it short and descriptive of paper+venue/year.

## Step 6 — Verify & commit
- Optional sanity check: `python _cite/cite.py` (regenerates citations.yaml; must exit 0 — a hard error means an unresolvable `id`). Or preview with `bash .docker/run.sh`.
- Stage `news/index.md`, `_data/sources.yaml`, `_data/citations.yaml`, and the new image.
- **Rebase before pushing**: the news/cite GitHub Actions push to `main`, so `git fetch origin && git rebase origin/main` before `git push` to avoid non-fast-forward rejects.
- Push only when the user asks (they typically say "push").
