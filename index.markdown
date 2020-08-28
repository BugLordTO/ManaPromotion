---
layout: mana_index
---
# Promotions

{% for myimage in site.static_files %}
  {{ myimage.path }}
{% endfor %}
สวัสดี
{% for pagemap in site.data.pagemap %}
  <li>
    <a href="{{ site.url }}/{{ pagemap.linkUrl }}">
      <img src="{{ site.url }}/{{ pagemap.imageUrl }}" style="max-width:100%;height: auto;" />
    </a>
  </li>
{% endfor %}