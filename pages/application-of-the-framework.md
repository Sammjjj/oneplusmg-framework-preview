---
title: "Application of the framework"
description: "Design principles and real-world applications of the Framework across Europe"
permalink: "/application-of-the-framework"
page_id: application-of-the-framework
navigation_tiles:
  - title: Use cases
    description: Information on the scientific and clinical questions driving our development
    url: /usecases
    image_url: /assets/img/section-icons/use-case.svg
  - title: External alignment
    description: Discover how the 1+MG infrastructure is connected across Europe and beyond
    url: /ehds-data-lifecycle
    image_url: /assets/img/section-icons/user-journey.svg
  - title: National implementation
    description: See how countries are integrating and adapting the Framework
    url: /national-implementation
    image_url: /assets/img/section-icons/nation.svg
---

<div class="my-4">
  <p>Applying the 1+MG Framework brings together examples, guidance and approaches for putting the Framework into practice. This section shows how its principles can support genomic data sharing across different research and healthcare settings, and how they connect with national implementation and wider European initiatives.</p>

  <p>Explore the use cases that inform the development of the Framework, its alignment with other European data initiatives and the ways countries are adapting and implementing its guidance. The resources below provide examples and practical material to support these activities.</p>
</div>

{% include page-navigation-tiles.html tiles=page.navigation_tiles %}


<div class="application-resources-full-width">
  {% include resource-tiles_compact.html
     resource_ids="gdi-d7-1,gdi-d6-3,roadmap-and-guidance-tool,gdi-d1-10"
  %}
</div>

<style>
  /* Keep the full-width resources band immediately above the page footer. */
  .container.min-vh-100 {
    min-height: 0 !important;
  }
  main#main.mb-5 {
    margin-bottom: 0 !important;
    padding-bottom: 20px;
  }
  .application-resources-full-width {
    position: relative;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
  }
</style>
