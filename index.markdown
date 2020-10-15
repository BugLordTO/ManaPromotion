---
layout: mana_index
---
{% for pagemap in site.data.pagemap %}
  <div>
    <a href="#" onclick="lib.visitEndpoint('{{pagemap.mContentId}}', '{{pagemap.endpoint}}'); ">
      <img src="{{ site.url }}/{{ pagemap.banner }}" class="banner border-radius" />
    </a>
  </div>
{% endfor %}
