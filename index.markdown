---
layout: mana_index
---
# Promotions

สวัสดี
{% for pagemap in site.data.pagemap %}
  <div>
    <a href="{{ site.url }}/{{ pagemap.share.url }}">
      <img src="{{ site.url }}/{{ pagemap.banner }}" style="max-width:100%;height: auto;" />
    </a>
  </div>
{% endfor %}
