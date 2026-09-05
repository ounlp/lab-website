<h1 align="center">OUNLP –– NLP Lab</h1>
<p align="center">
Welcome to the OUNLP Lab website repository! This site showcases our research, team members, and publications in Natural Language Processing at the University of Oklahoma.
Use this guide to update team information, projects, and citations.

👇👇 **Quick Start Guide** 👇👇

[**Documentation**](https://greene-lab.gitbook.io/lab-website-template-docs)

## Key Features

- 🤖 Based on Git, GitHub, and Jekyll.
- 📜 Automatically generated citations from simple identifiers (DOI, PubMed, ORCID, and many more) using Manubot. E.g. `doi:1234/5678` -> `title`, `authors`, `publisher`, `date`, etc.
- 🧱 A comprehensive and flexible suite of pre-made components (building blocks) for structuring and styling your website:
  - Formatted tables, code blocks, figures, and other basic elements.
  - Citations with thumbnails and other rich details.
  - List large sets of data with flexible filters and components.
  - ...many more
- 👁️ Automatic pull request previews.
- ⚙️ Easy and automated configuration.
- 👥 Team member pages with bios, roles, and social media links.
- 🖋️ Blog posts with tags and rich content.
- 📱 Works and looks good on desktop and mobile.
- 🤝 Great documentation and support (if we do say so ourselves).
- ... and much more!
---

## 🎨 Logo & Brand Assets

📦 **[Download the OUNLP logo package](https://github.com/ounlp/lab-website/raw/main/images/logos/OUNLP-Logo-Package.zip)** (zip, ~4.6 MB)

The official OUNLP logo in every layout, color, and format — for slides, posters,
print, and merch. Organized by color treatment (full-color, reverse, mono,
grayscale, OU crimson, brand alternates), each with **SVG + PDF** (scalable
vector, poster-ready) and **PNG**. See [`images/logos/README.md`](images/logos/README.md)
for which file to use on which background.

---

## 📝 How to Update Website Content

### Adding/Updating Team Members

Team member profiles are stored as individual markdown files in the `_members/` directory.

**To add a new team member:**

1. Create a new file in `_members/` with the format: `firstname-lastname.md`
2. Add the following frontmatter and bio:

```yaml
---
name: Your Full Name
image: images/your-photo.jpg
description: Your Title/Position
role: your-role
links:
  email: youremail@ou.edu
  website: https://yourwebsite.com
  github: https://github.com/yourusername/
  linkedin: https://www.linkedin.com/in/yourprofile/
  twitter: yourusername
  orcid: 0000-0000-0000-0000
---

Write your bio here. This section supports markdown formatting, so you can use **bold**, _italic_, and [links](https://example.com).
```

**Available roles:**
- `principal-investigator` - Principal Investigator
- `postdoc` - Postdoctoral Researcher
- `phd` - PhD Student
- `masters` - Master's Student
- `undergrad` - Undergraduate Student
- `research-assistant` - Research Assistant
- `programmer` - Programmer
- `mascot` - Lab Mascot

**Example:** See `_members/arman-radmanesh.md` for a complete example.

**Image requirements:**
- Place your photo in the `images/` directory
- Recommended size: minimum of 400x400 pixels or similar square dimensions
- Supported formats: JPG, PNG

---

### Adding Projects

Projects are defined in the `_data/projects.yaml` file. Each project is a YAML object with various properties.

**To add a new project:**

Open `_data/projects.yaml` and add a new entry:

```yaml
- title: Your Project Title
  subtitle: A brief subtitle (optional)
  group: featured  # Use "featured" to highlight on homepage, omit otherwise
  image: images/project-image.jpg
  link: https://github.com/yourorg/yourproject
  description: A detailed description of your project. You can use _markdown_ **formatting** here.
  repo: yourorg/yourproject  # GitHub repository (optional)
  tags:
    - machine-learning
    - nlp
    - research
```

**Project fields:**
- `title` (required): The name of your project
- `subtitle` (optional): A short tagline
- `group` (optional): Set to `featured` to display prominently
- `image` (optional): Path to project image/logo
- `link` (optional): URL to project website or repository
- `description` (required): Detailed project description (markdown supported)
- `repo` (optional): GitHub repository in format `owner/repo`
- `tags` (optional): List of tags for filtering/categorization

**Example:**
```yaml
- title: Agentic AI Workflow System
  subtitle: Multi-agent code generation framework
  group: featured
  image: images/ai-agents.png
  link: https://github.com/ounlp/agentic-workflow
  description: An advanced framework for orchestrating multiple AI agents to solve complex coding tasks using retrieval-augmented generation.
  repo: ounlp/agentic-workflow
  tags:
    - ai-agents
    - code-generation
    - rag
```

---

### Adding Awards

Awards, grants, and compute/industry support are listed on the **Awards** page (`/awards`) and defined in `_data/awards.yaml`. Entries are grouped into three sections by `type`, and within each section by year.

**To add an award:**

Open `_data/awards.yaml` and add a new entry under the matching section comment:

```yaml
- type: student            # student | grant | support
  date: 2026-09-01         # YYYY-MM-DD; drives year grouping and order
  title: STAR-D Mini-Grant
  image: images/awards/ou.png
  subtitle: Yiming Liu     # recipients, or the awarding body for grants
  description: Departmental Stimulation & Translation of Academic Research (STAR-D).
  link: https://example.org/program-page
  icon: fa-solid fa-award  # fallback when no image is given
```

**Award fields:**
- `type` (required): `student` (Student Awards), `grant` (Grants & Funding), or `support` (Compute & Industry Support)
- `date` (required): Used for the year heading and sort order; the card shows month and year
- `title` (required): Name of the award or program
- `image` (optional): Organization logo, shown as a 120×48 badge; put new logos in `images/awards/` as horizontal (wide) lockups on a transparent or white background, about 480 px wide
- `subtitle` (optional): Recipient names for student awards, awarding organization for grants and support
- `description` (optional): One extra line, e.g. what the grant funds (markdown supported)
- `link` (optional): Program or announcement page
- `icon` (optional): Font Awesome 6 class used when no `image` is set

Logos already available: `ou.png`, `nsf.png`, `access.png`, `aces.png`, `sigdial.png`, `nvidia.png`, `modal.png`.

Most awards are also worth a one-line entry on the News page (`news/index.md`).

---

### Adding Citations (Publications)

Citations are managed through the `_data/sources.yaml` file. The system automatically generates full citation details from identifiers like DOI.

**To add a new publication:**

Open `_data/sources.yaml` and add an entry:

```yaml
- id: doi:10.1234/your.doi.here
  type: paper
  description: Optional custom description of the paper's significance or contribution.
  date: 2024-10-25  # Optional: override publication date
  image: https://example.com/paper-figure.jpg  # Optional: custom thumbnail
  buttons:
    - type: source
      text: Paper Source
      link: https://github.com/yourorg/paper-repo
    - type: website
      link: https://yourproject.com/
    - type: data
      link: https://zenodo.org/record/12345
  tags:
    - natural-language-processing
    - deep-learning
  repo: yourorg/paper-repo  # Optional: associated GitHub repository
```

**Supported identifier types:**
- `doi:10.1234/5678` - Digital Object Identifier
- `pmid:12345678` - PubMed ID
- `pmcid:PMC1234567` - PubMed Central ID
- `arxiv:1234.5678` - arXiv ID

**Citation fields:**
- `id` (required): The publication identifier (DOI, PMID, etc.)
- `type` (optional): Type of publication (e.g., `paper`, `book`, `preprint`)
- `description` (optional): Custom description with markdown support
- `date` (optional): Override the publication date (format: YYYY-MM-DD)
- `image` (optional): Custom image URL for the citation thumbnail
- `buttons` (optional): Additional links/buttons for the citation
  - `type`: Button type (`source`, `website`, `data`, `preprint`, etc.)
  - `text`: Custom button text (optional)
  - `link`: URL for the button
- `tags` (optional): Keywords for categorization
- `repo` (optional): GitHub repository associated with the publication

**Example:**
```yaml
- id: doi:10.1371/journal.pcbi.1007128
  type: paper
  description: This paper introduces a collaborative approach to writing scientific reviews using **Manubot**, enabling transparent and reproducible manuscript generation.
  date: 2020-12-04
  image: https://journals.plos.org/ploscompbiol/article/figure/image?size=inline&id=info:doi/10.1371/journal.pcbi.1007128.g001
  buttons:
    - type: source
      text: Manuscript Source
      link: https://github.com/greenelab/meta-review
    - type: website
      link: http://manubot.org/
  tags:
    - open-science
    - collaboration
    - manubot
  repo: greenelab/meta-review
```

**After adding citations:**

Run the citation update script to generate formatted citations:

```bash
cd _cite
python cite.py
```

This will automatically fetch citation details and update `_data/citations.yaml`. Commit both `sources.yaml` and the generated `citations.yaml`.

---

## 🔄 Publishing Changes

After making any updates:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Update team/projects/citations"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **Wait for deployment:** GitHub Pages will automatically rebuild and deploy your site (usually takes 1-2 minutes).

---

## 🆘 Need Help?

- Check the [full documentation](https://greene-lab.gitbook.io/lab-website-template-docs)
- Look at existing examples in `_members/`, `_data/projects.yaml`, and `_data/sources.yaml`
- Contact the lab administrator for assistance
