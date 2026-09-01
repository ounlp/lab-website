# Contributing to the OUNLP website

Thanks for helping maintain [ounlp.org](https://ounlp.org)! Most edits are small
markdown/YAML changes and can be made entirely in the GitHub web interface — no
cloning required.

## Workflow

1. Edit a file on GitHub (pencil icon) or push a branch. Direct pushes to
   `main` are blocked — GitHub will guide you to create a branch and open a
   **pull request**.
2. CI runs automatically (citation pipeline + site build check).
3. A maintainer reviews and merges. Merging to `main` deploys the live site
   within a few minutes.

## Common edits

### Add or update a team member

Create or edit `_members/firstname-lastname.md`:

```yaml
---
name: Your Name
image: images/members/your-photo.jpg
role: phd          # pi | postdoc | phd | masters | undergrad | research-assistant
links:
  home-page: https://your-site.example.com
  github: yourusername
---

A short bio paragraph.
```

Add your photo under `images/members/`. Set `alumni: true` when you leave the lab.

### Add a publication

Add one entry to `_data/sources.yaml` (minimal form):

```yaml
- id: doi:10.1234/abcd.567
```

Citation details (title, authors, venue) are fetched automatically by CI via
Manubot. `arxiv:`, `pmid:`, and `pmcid:` IDs also work. Do **not** hand-edit
`_data/citations.yaml` — it is generated.

### Add a news post

Create `_posts/YYYY-MM-DD-short-title.md` following an existing post's format.

## Previewing locally (optional)

```bash
bash .docker/run.sh   # serves http://localhost:4000 with hot reload
```

## Questions

Open an issue, or ask Dr. Cao (@mlciv).
