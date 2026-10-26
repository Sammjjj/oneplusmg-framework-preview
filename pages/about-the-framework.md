---
title: "About the Framework"
description: "Background to the 1+MG initiative and the development of its Framework"
permalink: "/about-the-framework"
page_id: about-the-framework
navigation_tiles:
  - title: "1+MG Project Portfolio"
    description: "Learn about the projects contributing to the 1+MG vision and Framework."
    url: /1mg-projects
    image_url: /assets/img/section-icons/project-family.svg
  - title: "How to use the Framework"
    description: "Understand how this website's guidance and resources are organised."
    url: /how-to-use-framework
    image_url: /assets/img/section-icons/how-to-use.svg
  - title: "Contact"
    description: "Find out how to get in touch about the Framework."
    url: /contact
    image_url: /assets/img/section-icons/contact.svg
  - title: "Accessibility"
    description: "Read information about accessibility of this website."
    url: /accessibility
    image_url: /assets/img/section-icons/accessibility.svg
  - title: "Privacy"
    description: "Read the website's privacy information."
    url: /privacy
    image_url: /assets/img/section-icons/privacy.svg
---

<div class="my-4">
  <p>The 1+ Million Genomes (1+MG) initiative brings together European countries working towards secure, ethical and interoperable access to genomic and related clinical data. The 1+MG Framework brings together guidance, recommendations and resources developed through the initiative and supporting projects to help turn this shared ambition into practice.</p>

  <p>This section provides background on the Framework and the projects that have contributed to it. You can explore the project portfolio, learn how the website and its resources are organised, or find contact, accessibility and privacy information. The selected resources below introduce terminology, data lifecycle concepts and approaches developed through the 1+MG project family.</p>
</div>

{% include page-navigation-tiles.html tiles=page.navigation_tiles five_column_grid=true %}


<div class="about-resources-full-width">
  {% include resource-tiles_compact.html
     resource_ids="1mg-glossary,1mg-data-lifecycle,b1mg-maturity-level-model-report,b1mg-secure-cross-border-data-access-roadmap-v2"
  %}
</div>

<style>
  /* Match the Framework Foundations landing page's footer and resources layout. */
  .container.min-vh-100 {
    min-height: 0 !important;
  }
  main#main.mb-5 {
    margin-bottom: 0 !important;
    padding-bottom: 20px;
  }
  .about-resources-full-width {
    position: relative;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
  }
</style>
