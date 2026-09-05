---
title: Awards
nav:
  order: 2
  tooltip: Honors, grants, and support
---

# {% include icon.html icon="fa-solid fa-trophy" %}Awards

Honors earned by our students, grants that fund our research, and the computing and
industry support that makes it possible.

{%
  include button.html
  link="awards/#student-awards"
  text="Student Awards"
  tooltip="Jump to student awards"
  icon="fa-solid fa-medal"
  style="bare"
%}
{%
  include button.html
  link="awards/#grants--funding"
  text="Grants & Funding"
  tooltip="Jump to grants and funding"
  icon="fa-solid fa-landmark"
  style="bare"
%}
{%
  include button.html
  link="awards/#compute--industry-support"
  text="Compute & Industry Support"
  tooltip="Jump to compute and industry support"
  icon="fa-solid fa-microchip"
  style="bare"
%}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-medal" %}Student Awards

{% include list.html data="awards" component="award" filter="type == 'student'" %}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-landmark" %}Grants & Funding

{% include list.html data="awards" component="award" filter="type == 'grant'" %}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-microchip" %}Compute & Industry Support

{% include list.html data="awards" component="award" filter="type == 'support'" %}
