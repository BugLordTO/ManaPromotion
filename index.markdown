---
layout: mana_index
---
# Promotions
{% for pagemap in site.data.pagemap %}
  <li>
    <a href="{{ site.url }}/{{ pagemap.linkUrl }}">
      <img src="{{ site.url }}/{{ pagemap.imageUrl }}" style="max-width:100%;height: auto;" />
    </a>
  </li>
{% endfor %}