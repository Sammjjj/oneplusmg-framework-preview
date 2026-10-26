---
title: "Framework Foundations"
permalink: "/framework-foundations"
page_id: framework-foundations
navigation_tiles:
  - page_id: governance-elsi
    image_url: /assets/img/section-icons/data-standard-v1.svg
  - page_id: technical-infrastructure
    image_url: /assets/img/section-icons/data-infrastructure-v1.svg
  - page_id: data-metadata
    image_url: /assets/img/section-icons/data-governance-v1.svg
  - page_id: genomics-into-healthcare
    image_url: /assets/img/section-icons/genomics-into-healthcare.svg
---

<div class="my-4">
  <p>The 1+MG Framework Foundations bring together the guidance needed to enable secure, responsible and interoperable access to genomic and associated clinical data across Europe. They provide a common starting point for understanding the requirements and approaches that support the 1+MG initiative.</p>

  <p>Explore the four areas above for guidance on legal, ethical and governance considerations, technical infrastructure, data and metadata, and the integration of genomics into healthcare and its long-term sustainability. Each area brings together the principles, recommendations and resources relevant to planning and implementing the Framework.</p>
</div>

{% include page-navigation-tiles.html tiles=page.navigation_tiles %}


<div class="foundations-resources-full-width">
  {% include resource-tiles_compact.html
     resource_ids="data-access-governance-framework,beacon,minimal-metadata-model,b1mg-maturity-level-model-report"
  %}
</div>

<style>
  /* Keep the final resource band adjacent to the footer on this landing page. */
  .container.min-vh-100 {
    min-height: 0 !important;
  }
  main#main.mb-5 {
    margin-bottom: 0 !important;
    padding-bottom: 20px;
  }
  /* Extend the resource band to both viewport edges, outside the page container. */
  .foundations-resources-full-width {
    position: relative;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
  }
</style>
