---
title: Projects
# nav entry hidden for now — re-add to show Projects in the menu again:
# nav:
#   order: 2
#   tooltip: Software, datasets, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects

A selection of the software, datasets, shared-task systems, and demos built by the OUNLP Lab.
Our projects turn research on dialogue, structured prediction, and trustworthy human–AI collaboration into open, reusable tools. Browse by tag or search below.

{% include tags.html tags="publication, resource, website" %}

{% include search-info.html %}

{% include section.html %}

## Featured

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

## More

{% include list.html component="card" data="projects" filter="!group" style="small" %}
