---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{%
  include button.html
  type="email"
  text="jie.cao@ou.edu"
  link="jie.cao@ou.edu"
%}
{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps/search/?api=1&query=Devon+Energy+Hall+Norman+OK"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
OUNLP Lab
University of Oklahoma
Principal Investigator: Dr. Jie Cao
{% endcapture %}

{% capture col2 %}
Devon Energy Hall, 210
110 W Boyd St
Norman, OK 73019
{% endcapture %}

{% capture col3 %}
Email: jie.cao@ou.edu
Phone: (405) 000-0000
Please reach out to schedule a visit or meeting.
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
