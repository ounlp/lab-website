---
title: Contribute
# internal page for lab members — not in the main menu. Linked from the Team page and footer.
# To show it in the menu, add:
# nav:
#   order: 8
#   tooltip: Update the website
---

# {% include icon.html icon="fa-solid fa-code-pull-request" %}Contribute to the Website

This site is built from the [ounlp/lab-website](https://github.com/ounlp/lab-website) repository.
Every lab member can update their own profile, add a paper, or post news. Most edits are a
few lines of text and can be done entirely in the GitHub web interface.

{% include section.html %}

## How changes get published

1. **Edit on GitHub.** Open the file, click the pencil icon, make your change, and choose
   *Create a new branch and start a pull request*.
2. **Checks run automatically.** The site is built and the publication list is refreshed.
   A red check means something is wrong; the log will say what.
3. **Dr. Cao reviews and merges.** Merging deploys [ounlp.org](https://ounlp.org) within a
   few minutes.

Ask for access first if you cannot edit: you need to be a member of the
[ounlp GitHub organization](https://github.com/ounlp).

{% include section.html %}

## What you can update

### Your profile

Edit `_members/firstname-lastname.md` (or create it if you are new):

```yaml
---
name: Your Name
image: images/your-name.jpg
description: Ph.D., CS          # shown under your name on the Team page
role: phd                       # pi | phd | masters | undergrad | research-assistant
links:
  email: you@ou.edu
  github: yourhandle
  linkedin: your-linkedin-id
  website: https://your-site.example   # optional; if set, your card links straight there
---

A short bio paragraph. Markdown works here.
```

Upload a square photo to `images/`, at least 400×400 pixels. Your publications appear on
your profile page automatically, matched by author name. If papers credit you under a
different form of your name, add `aliases:` with that form, for example
`aliases: [Yiming Liu]`.

### A paper

Add one entry to `_data/sources.yaml` for an accepted or published paper:

```yaml
- id: doi:10.1234/abcd.567
  image: images/papers/short-slug.jpg
  type: paper
  tags:
    - Dialogue and Discourse      # reuse theme names so they become filter chips
    - dialogue parsing
```

Title, authors, and venue are fetched automatically from the DOI (`arxiv:` ids work too).
Never edit `_data/citations.yaml` by hand; it is generated.
A thumbnail is a crop of a key figure, about 850 pixels wide, saved as JPEG in
`images/papers/`. The maintainers can make one if you only have the PDF.

### News

Add a line at the top of the current year in `news/index.md`:

```markdown
- **MM/YYYY** — Our paper "[Title](https://link)" is accepted to [Venue](https://venue-url)!
```

### Awards and grants

Add an entry to `_data/awards.yaml` under the matching section:

```yaml
- type: student                 # student | grant | support
  date: 2026-09-01
  title: Name of the Award
  image: images/awards/ou.png   # organization logo; see images/awards/ for existing ones
  subtitle: Your Name
  link: https://program-page
```

{% include section.html %}

## Previewing locally (optional)

With Docker installed:

```bash
git clone git@github.com:ounlp/lab-website.git
cd lab-website
bash .docker/run.sh        # serves http://localhost:4000 with live reload
```

{% include section.html %}

## Need help?

Open an [issue](https://github.com/ounlp/lab-website/issues) describing what you want
changed, or email Dr. Cao. The repository's `README.md` has the full field reference
for every data file.
