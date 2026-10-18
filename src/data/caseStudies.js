// Case studies are based on the resume and verified project notes.
// Any value wrapped in square brackets, e.g. "[Add project duration]", renders as an
// editable placeholder on the site. Replace it with verified information before publishing.
// Screenshot files go in /public/case-studies/<folder>/ and are referenced by path.
export const caseStudies = [
  {
    slug: "jacks-bbq-location-menu",
    folder: "jacks-bbq",
    title: "Location-Based Menu & Pricing for Jack's BBQ",
    client: "Jack's BBQ",
    industry: "Food & Beverage (restaurant)",
    type: "Custom WordPress theme with e-commerce",
    duration: "[Add project duration]",
    category: ["WordPress", "E-commerce"],
    cover: "/case-studies/jacks-bbq/cover.jpg",
    seoDescription:
      "Case study: a custom WordPress theme with an AJAX location-based menu and pricing system, built with ACF and WooCommerce for Jack's BBQ.",
    overview:
      "A custom WordPress theme for a restaurant client, featuring a menu and pricing system that changes based on the selected location.",
    role: [
      "Custom WordPress theme development",
      "Location-based menu filtering and pricing system",
      "WooCommerce template compatibility fixes",
      "Security audit of the theme",
    ],
    technologies: ["WordPress", "PHP", "Advanced Custom Fields (ACF)", "Custom Post Types", "AJAX", "WooCommerce"],
    challenge:
      "The restaurant needed menu items and prices to vary by location. [Add the business context and original problem, as discussed with the client.]",
    goals: [
      "Show the correct menu and prices for each location",
      "Support price variations such as Grande sizes",
      "Keep the theme compatible with WooCommerce and its updates",
      "[Add any additional goals agreed with the client]",
    ],
    approach:
      "I structured the menu with custom post types and ACF repeater fields, so location-specific prices can be entered inside WordPress. An AJAX layer filters the menu for the selected location.",
    process: [
      { stage: "Content structure", detail: "Custom post types and ACF repeater fields for location price overrides (override_location and override_price)." },
      { stage: "Frontend functionality", detail: "AJAX-driven location filtering for menu items and prices." },
      { stage: "Extended pricing", detail: "Added an override_grande_price field and extended the pricing logic to support it." },
      { stage: "Integrations", detail: "Filtered the items_location relationship field to show only parent posts, and resolved a WooCommerce cart.php template compatibility issue after a plugin update." },
      { stage: "Security review", detail: "Conducted a security audit covering 10 issues across four severity levels." },
    ],
    features: [
      "Location-specific menu items and prices",
      "AJAX filtering by location",
      "Repeater-based price overrides, including Grande pricing",
      "WooCommerce template compatibility",
      "Security audit completed",
    ],
    challengesSolutions: [
      {
        challenge: "Prices needed to change by location",
        solution: "Built an ACF repeater field (location_price_overrides) with override_location and override_price sub-fields.",
      },
      {
        challenge: "A relationship field showed child posts instead of the intended items",
        solution: "Filtered the items_location relationship field to show only parent posts.",
      },
      {
        challenge: "A WooCommerce cart template conflicted with the custom layout after a plugin update",
        solution: "Merged the theme's custom layout with the updated plugin template structure.",
      },
    ],
    results: {
      delivered: [
        "Location-based menu filtering and pricing system",
        "Price overrides including Grande pricing",
        "WooCommerce template compatibility resolved",
        "Security audit completed, covering 10 issues across four severity levels",
      ],
      metrics: "[Add verified results, such as before-and-after load times, only if measured]",
    },
    screenshots: [
      { label: "Desktop: homepage", src: "/case-studies/jacks-bbq/desktop-home.jpg", type: "desktop" },
      { label: "Desktop: menu by location", src: "/case-studies/jacks-bbq/desktop-menu.jpg", type: "desktop" },
      { label: "Mobile: menu", src: "/case-studies/jacks-bbq/mobile-menu.jpg", type: "mobile" },
    ],
    liveUrl: "", // Add the live website URL to enable the button.
    sourceUrl: "",
  },
  {
    slug: "due-cucina-menu-system",
    folder: "due-cucina",
    title: "Due' Cucina: Menu System & Theme Modernization",
    client: "Due' Cucina",
    industry: "Food & Beverage (restaurant)",
    type: "WordPress theme and menu system",
    duration: "[Add project duration]",
    category: ["WordPress", "SEO & Structured Data"],
    cover: "/case-studies/due-cucina/cover.jpg",
    seoDescription:
      "Case study: a WordPress menu system with AJAX filtering, location-aware pricing, Schema.org structured data, and a PHP 8 and WordPress 6.4 compatibility update for Due' Cucina.",
    overview:
      "A WordPress theme and food-menu system for a restaurant. It covers category filtering, location-aware pricing, structured data for search engines, and a v1.1 update for modern PHP and WordPress versions.",
    role: [
      "Menu system development with ACF Pro",
      "Debugging and resolving rendering and caching issues",
      "Structured data implementation",
      "Theme v1.1 compatibility update and documentation",
    ],
    technologies: ["WordPress", "ACF Pro", "PHP", "AJAX", "Schema.org JSON-LD", "Breakdance builder"],
    challenge:
      "The site needed a menu that visitors could filter by category, with prices that depend on location, plus structured data for several page types. The theme also needed to run on modern PHP and WordPress versions.",
    goals: [
      "Menu browsing by category and location",
      "Structured data (Schema.org JSON-LD) across page types",
      "Compatibility with PHP 8.x and WordPress 6.4",
      "[Add any additional goals agreed with the client]",
    ],
    approach:
      "I built a [food_menu] shortcode system with AJAX filtering, category navigation, and location-aware pricing. Schema.org JSON-LD is output for multiple page contexts. After resolving issues found during development, I released version 1.1 with compatibility updates and documentation.",
    process: [
      { stage: "Menu system", detail: "[food_menu] shortcode with AJAX filtering, category navigation, and location-aware pricing." },
      { stage: "Structured data", detail: "Schema.org JSON-LD for multiple page contexts, including debugging a schema output issue." },
      { stage: "Debugging & optimization", detail: "Resolved location slug collisions, duplicate rendering in the Breakdance builder, page caching issues, and sticky header anchor scroll offsets." },
      { stage: "Compatibility update (v1.1)", detail: "Updated for PHP 8.0+ (supports PHP 7.4 to 8.3) and WordPress 6.4, removed extract() usage, standardized the text domain, and applied 183+ modifications with no database changes." },
      { stage: "Documentation", detail: "Delivered a CHANGELOG, implementation guide, audit report, and quick reference." },
    ],
    features: [
      "AJAX menu filtering with category navigation",
      "Location-aware pricing",
      "Schema.org JSON-LD structured data across page contexts",
      "PHP 8.x and WordPress 6.4 compatibility",
      "Backward-compatible update with no database changes",
      "Documentation package",
    ],
    challengesSolutions: [
      {
        challenge: "Location slug collisions",
        solution: "[Describe how the slug collision was resolved]",
      },
      {
        challenge: "The schema output showed #location-menu as a location @id",
        solution: "Traced the issue to an ACF field returning an empty string, which produced the incorrect @id.",
      },
      {
        challenge: "Duplicate rendering in the Breakdance builder and page caching issues",
        solution: "[Describe how the duplicate rendering and caching issues were resolved]",
      },
      {
        challenge: "Compatibility with modern PHP and WordPress versions",
        solution: "Released theme v1.1 with PHP 8.0+ and WordPress 6.4 compatibility, with no database changes required.",
      },
    ],
    results: {
      delivered: [
        "Theme v1.1 released for PHP 8.0+ and WordPress 6.4 compatibility",
        "Documentation package delivered: CHANGELOG, implementation guide, audit report, and quick reference",
        "Location-aware menu and structured data live on the site",
      ],
      metrics: "[Add verified results, such as before-and-after load times, only if measured]",
    },
    screenshots: [
      { label: "Desktop: menu page", src: "/case-studies/due-cucina/desktop-menu.jpg", type: "desktop" },
      { label: "Desktop: category filter", src: "/case-studies/due-cucina/desktop-filter.jpg", type: "desktop" },
      { label: "Mobile: menu", src: "/case-studies/due-cucina/mobile-menu.jpg", type: "mobile" },
    ],
    liveUrl: "https://duecucina.com",
    sourceUrl: "",
  },
  {
    slug: "multi-location-event-registration",
    folder: "multi-location-event",
    title: "Multi-Location Event Registration Confirmation System",
    client: "Healthcare organization (name withheld for confidentiality)",
    industry: "Healthcare",
    type: "WordPress registration system",
    duration: "[Add project duration]",
    category: ["WordPress", "Integrations"],
    cover: "/case-studies/multi-location-event/cover.jpg",
    seoDescription:
      "Case study: a WordPress event registration confirmation system serving 14 healthcare centers, with English and Spanish support.",
    overview:
      "A WordPress registration confirmation system for a healthcare organization with 14 centers across Texas and Arizona, with English and Spanish support.",
    role: [
      "Developed the multi-location registration confirmation system",
      "Implemented bilingual English and Spanish content",
      "Configured center-level settings with ACF Options Pages",
    ],
    technologies: ["WordPress", "PHP", "WordPress hooks (the_content filter)", "Advanced Custom Fields (ACF Options Pages)"],
    challenge:
      "Registration confirmations had to work consistently across many centers and in two languages, with content that could be managed from the WordPress admin. [Add the business context, as discussed with the client.]",
    goals: [
      "A consistent confirmation experience across all 14 centers",
      "English and Spanish support",
      "Center-level content managed through ACF Options Pages",
      "[Add any additional goals agreed with the client]",
    ],
    approach:
      "I implemented the confirmation output using a hook-based approach with the_content, and stored center-level settings in ACF Options Page fields.",
    process: [
      { stage: "Planning & requirements", detail: "[Describe the requirements gathering with the client]" },
      { stage: "Core implementation", detail: "Hook-based the_content filter to output the registration confirmation content." },
      { stage: "Content management", detail: "ACF Options Page fields for center-level settings." },
      { stage: "Localization", detail: "English and Spanish content support." },
      { stage: "Testing & rollout", detail: "[Describe testing across centers and the rollout process]" },
    ],
    features: [
      "Confirmation output across 14 centers in Texas and Arizona",
      "English and Spanish support",
      "Center settings managed through ACF Options Pages",
      "Hook-based integration with WordPress content",
    ],
    challengesSolutions: [
      {
        challenge: "Serving many centers from one system",
        solution: "[Describe how center-specific content was handled]",
      },
      {
        challenge: "Confirmations needed to work in two languages",
        solution: "Added English and Spanish support to the confirmation content.",
      },
    ],
    results: {
      delivered: [
        "Multi-location confirmation system covering 14 centers",
        "English and Spanish support delivered",
      ],
      metrics: "[Add verified results, only if available and shareable]",
    },
    screenshots: [
      { label: "Desktop: confirmation page (redacted)", src: "/case-studies/multi-location-event/desktop-confirmation.jpg", type: "desktop" },
      { label: "Mobile: confirmation page (redacted)", src: "/case-studies/multi-location-event/mobile-confirmation.jpg", type: "mobile" },
    ],
    liveUrl: "",
    sourceUrl: "",
  },
];

export const categoryList = ["All", ...new Set(caseStudies.flatMap((s) => s.category))];
