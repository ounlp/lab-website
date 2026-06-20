# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The OUNLP (OU Natural Language Processing Lab) website — a Jekyll static site forked from the [Greene Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs). It's served at the apex domain **ounlp.org** (see `CNAME`). Most "content" work is editing YAML/markdown data, not code.

## Common commands

```bash
# Local preview via Docker (recommended — matches CI, runs Jekyll + cite process w/ hot reload)
bash .docker/run.sh                 # builds image, serves at http://localhost:4000

# Native (requires Ruby 3.3 + bundler, Python 3.11)
bundle install
bundle exec jekyll serve --livereload
python _cite/cite.py                # regenerate _data/citations.yaml from sources

# Build as CI does (apex domain => empty baseurl)
bundle exec jekyll build --baseurl ""
```

There is no test suite. `html-proofer` is available (Gemfile) but `proofer: false` in `_config.yaml`.

## Deployment & automation (GitHub Actions)

- **`jekyll.yml`** builds and deploys to GitHub Pages on push to `main`. It builds with `--baseurl ""` *intentionally* — the default `base_path` from `configure-pages` bakes in a project path and breaks asset/link URLs under the apex domain. Don't "fix" this back.
- **Citations are regenerated in CI**, not just locally: `update-citations.yaml` runs `_cite/cite.py` on PRs (`on-pull-request`), on push to main (`on-push`), and weekly (`on-schedule`, opens a PR). Editing `_data/sources.yaml` is enough; the generated `_data/citations.yaml` will be refreshed automatically, though committing it too keeps local previews accurate.
- `versioning.yaml` and `first-time-setup.yaml` are template-machinery guarded by `if: github.repository == 'greenelab/...'` — they are inert in this fork. Leave them alone.

## Architecture

### Citation pipeline (`_cite/`)
The distinctive part of this codebase. `cite.py` reads "source" data files, expands them via plugins, dedupes by `id`, then uses **Manubot** to fetch full citation metadata from identifiers (`doi:`, `arxiv:`, `pmid:`, `pmcid:`). Output is written to `_data/citations.yaml` (generated — don't hand-edit).

- Plugins run in order defined in `cite.py` (`plugins` list): `google-scholar` → `pubmed` → `sources`. Each plugin `_cite/plugins/<name>.py` exposes `main(entry)` returning a list of source dicts. A plugin processes every `_data/<name>*.{yaml,yml,json}` file (e.g. the `sources` plugin reads `sources.yaml`).
- `orcid` is currently **disabled** (commented out in the `plugins` list).
- "metasources" (scholar/pubmed/orcid) auto-discover IDs; failures there only warn. Manual entries in `sources.yaml` error hard if Manubot can't resolve them.
- Fields set on a source override Manubot's fetched fields. Add `remove: true` to a merged source to drop it.

### Jekyll content model
Pages compose reusable **`_includes/*.html` components** rather than writing HTML. The two workhorses:
- `list.html` — renders a collection (`data="citations"`, `data="members"`, etc.) through a `component` (e.g. `citation`, `portrait`), with `filter=` (custom `data_filter` Liquid expression), grouping by year, and `merge_before=<year>` to collapse old items under "Earlier".
- `section.html`, `tags.html`, `citation.html`, `portrait.html`, `feature.html`, `search-box.html` — see existing pages (`research/index.md`, `team/index.md`, `index.md`) for usage patterns. Prefer copying an existing include invocation over writing markup.

Custom Liquid filters live in **`_plugins/*.rb`** (`data_filter`, `regex_*`, `array_*`, `google_fonts`, etc.). These are why the `filter=` expressions in `list.html` work.

### Collections & data
- `_members/*.md` — one file per person; `role` (`pi`, `postdoc`, `phd`, `masters`, `undergrad`, `research-assistant`, `programmer`, `mascot`) and `alumni: true` drive the Team page filters.
- `_data/sources.yaml` — publications you maintain (input to the cite pipeline).
- `_data/projects.yaml` — projects; `group: featured` surfaces on homepage.
- `_data/types.yaml` — maps roles/citation types to icons + labels.
- `_data/themes.yaml` — research-cluster keyword slugs; tags matching these render as highlighted "theme" chips and power the theme filter bar.
- `_layouts/` — `default`, `home`, `member`, `post` (assigned via `defaults` in `_config.yaml`).

## Editing conventions

- To add a publication: add an entry to `_data/sources.yaml` (minimally `- id: doi:...`); citation details are fetched automatically. README has the full field reference.
- To add a team member: create `_members/firstname-lastname.md` with frontmatter (`name`, `image`, `role`, `links`); see `_members/` for examples.
- When tagging publications, reuse the slugs in `_data/themes.yaml` so they become filterable theme chips.
- This is a fork of an upstream template — when editing shared template files, keep changes surgical and watch for the `greenelab/lab-website-template` repository guards that mark template-only behavior.
