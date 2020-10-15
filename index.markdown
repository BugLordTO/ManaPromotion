---
layout: mana_index
---
{% for pagemap in site.data.pagemap %}
  <div>
    <a href="#" onclick="lib.visitEndpoint('{{pageData.mContentId}}', '{{pageData.endpoint}}'); ">
      <img src="{{ site.url }}/{{ pagemap.banner }}" class="banner border-radius" />
    </a>
  </div>
{% endfor %}
