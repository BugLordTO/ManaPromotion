---
layout: mana_index
---
{% for pagemap in site.data.pagemap %}
  <div>
    <a href="{{ site.url }}/{{ pagemap.share.url }}">
      <img src="{{ site.url }}/{{ pagemap.banner }}" class="banner" />
    </a>
  </div>
{% endfor %}
