---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Our team brings a mix of expertise in natural language processing, agent design, simulation
and human–AI interaction. Get to know the people driving our research.

{% include section.html %}

## Principal Investigator

{% include list.html data="members" component="portrait" filter="role == 'pi'" %}

{% include section.html %}

## Graduate Students

{% include list.html data="members" component="portrait" filter="(role == 'phd' or role == 'masters') and alumni != true" %}

{% include section.html %}

## Undergraduate Students

{% include list.html data="members" component="portrait" filter="role == 'undergrad' and alumni != true" %}

{% include section.html %}

## External Student Collaborators

{% include list.html data="members" component="portrait" filter="role == 'research-assistant' and alumni != true" %}

{% include section.html %}

## Alumni

{% include list.html data="members" component="portrait" filter="alumni == true" %}

{% include section.html dark=true %}

Moments from our work, research, and fun — snapshots of the OUNLP community in action.

{% include section.html %}

{% capture content %}

{% include figure.html image="images/ricky-in-lab.jpg" %}
{% include figure.html image="images/gallogy.jpg" %}
{% include figure.html image="images/devon.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
