---
title: Navigate by Role
description: Find guidance and resources relevant to your role in the 1+MG initiative
page_id: navigate-by-role
permalink: "/navigate-by-role"
navigation_tiles:
  - page_id: national-coordinators
    image_url: /assets/img/section-icons/national-coordinators.svg
  - page_id: technical-implementers
    image_url: /assets/img/section-icons/technical-implementers.svg
  - page_id: data-stewards
    image_url: /assets/img/section-icons/data-stewards.svg
  - page_id: policy-elsi-governance
    image_url: /assets/img/section-icons/policy-elsi-governance.svg
  - page_id: citizen-engagement
    image_url: /assets/img/section-icons/citizen-engagement.svg
---

<div class="my-4">
  <p>The 1+MG Framework brings together guidance and resources for people contributing to genomic data sharing across Europe. The role-based sections provide different starting points, helping you find information that is relevant to your responsibilities without having to explore every part of the Framework.</p>

  <p>Choose the role above that best describes your work: national coordination, technical implementation, data stewardship, policy, ethical, legal and governance matters, or citizen engagement. Each section is intended to guide you towards relevant topics and resources. If your work spans more than one area, you can explore multiple role sections and follow their links into the wider Framework.</p>
</div>

{% include page-navigation-tiles.html tiles=page.navigation_tiles five_column_grid=true %}


<div class="role-resources-full-width">
  {% include resource-tiles_compact.html
     resource_ids="1mg-glossary,1mg-data-lifecycle,gdi-d1-10,b1mg-recommendation-citizen-engagement-public-trust"
  %}
</div>

<style>
  /* Match the other section landing pages while keeping this resource strip at the bottom. */
  .container.min-vh-100 {
    min-height: 0 !important;
  }
  main#main.mb-5 {
    margin-bottom: 0 !important;
    padding-bottom: 20px;
  }
  .role-resources-full-width {
    position: relative;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
  }
</style>
