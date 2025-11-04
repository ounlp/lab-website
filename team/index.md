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

{% include list.html data="members" component="portrait" filter="role == 'pi'" %}

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role != 'pi'" %}

{% include section.html dark=true %}

Moments from our work, research, and fun — snapshots of the OUNLP community in action.

{% include section.html %}

{% capture content %}

{% include figure.html image="images/ricky-in-lab.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
