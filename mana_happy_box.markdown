---
layout: mana_page
---
{% assign pageData = site.data.pagemap | where:"share.url", "mana_happy_box" | first %}

<div class="content-white padding">
  <img src="{{ site.url }}/{{pageData.banner }}" class="banner border-radius" />
  {{ pageData.details | markdownify }}
  <button class="btn-share margin-vertical btn-on-android" onclick="sharePage('{{pageData.share.title}}', '{{ pageData.share.text }}', '{{ site.url }}/{{ pageData.share.url }}')" style="display:none">แชร์ android</button>
  <button class="btn-share margin-vertical btn-on-web" onclick="sharePage('{{pageData.share.title}}', '{{ pageData.share.text }}', '{{ site.url }}/{{ pageData.share.url }}')" style="display:none">แชร์ web</button>
  <button class="btn-share margin-vertical btn-on-ios" onclick="sharePage('{{pageData.share.title}}', '{{ pageData.share.text }}', '{{ site.url }}/{{ pageData.share.url }}')" style="display:none">แชร์ iOS</button>
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
    <button class="btn-red" onclick="visitEndpoint(mcontentid, '{{pageData.couponEndpoint}}'); ">กดรับคูปอง</button>
  </div>
</div>

</div>
