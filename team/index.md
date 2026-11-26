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

## Alumni & Past Members

Former members are listed with their degree and year, and their next position when we know it.

### Graduate

<div class="alumni-list">
{% include list.html data="members" component="portrait" filter="alumni == true and role != 'undergrad'" style="tiny" %}
</div>

### Undergraduate

<div class="alumni-list">
{% include list.html data="members" component="portrait" filter="alumni == true and role == 'undergrad'" style="tiny" %}
</div>

{% include section.html %}

Lab members: to update your profile, add a paper, or post news, see the
[Contribute page]({{ "/contribute" | relative_url }}).

{% include section.html dark=true %}

Moments from our work, research, and fun — snapshots of the OUNLP community in action.

{% include section.html %}

{% capture content %}

{% include figure.html image="images/ricky-in-lab.jpg" %}
{% include figure.html image="images/gallogy.jpg" %}
{% include figure.html image="images/devon.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
