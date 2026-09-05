---
title: Awards
nav:
  order: 2
  tooltip: Honors, grants, and support
---

# {% include icon.html icon="fa-solid fa-trophy" %}Awards

Honors earned by our students, grants that fund our research, and the computing and
industry support that makes it possible.

{% include section.html %}

## {% include icon.html icon="fa-solid fa-medal" %}Student Awards

{% include list.html data="awards" component="award" filter="type == 'student'" %}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-hand-holding-dollar" %}Grants & Funding

{% include list.html data="awards" component="award" filter="type == 'grant'" %}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-microchip" %}Compute & Industry Support

{% include list.html data="awards" component="award" filter="type == 'support'" %}
