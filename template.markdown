---
layout: mana_page
---
{% assign pageData = site.data.pagemap | where:"share.url", "template" | first %}

<div class="content-white padding">
  <img src="{{ site.url }}/{{pageData.banner }}" class="banner border-radius" />
  {{ pageData.details | markdownify }}
  <button class="btn-share margin-vertical" onclick="sharePage('{{pageData.share.title}}', '{{ pageData.share.text }}', '{{ site.url }}/{{ pageData.share.url }}')">แชร์</button>
</div>

<div class="padding">

<h2>รับคูปอง</h2> 

<div class="content-white border-radius text-center padding margin-vertical">
  {{ "### หมดเขต" | markdownify }}
  <h1 class="text-red">{{ pageData.expired }}</h1>
</div>

<div class="content-white padding border-radius">
  <img src="{{ site.url }}/{{pageData.couponBanner }}" class="banner"/>
  <div class="text-right">
    <button class="btn-red" onclick="lib.visitEndpoint(mcontentid, '{{pageData.couponEndpoint}}'); ">กดรับคูปอง</button>
  </div>
</div>

</div>