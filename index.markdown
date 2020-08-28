---
layout: mana_index
---
# Promotions

สวัสดี
{% for pagemap in site.data.pagemap %}
  <div>
    <a href="{{ site.url }}/{{ pagemap.linkUrl }}">
      <img src="{{ site.url }}/{{ pagemap.imageUrl }}" style="max-width:100%;height: auto;" />
    </a>
  </div>
{% endfor %}
