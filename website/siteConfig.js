/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible

const repoUrl = "https://github.com/ChilliCream/react-rasta";
const organizationUrl = "https://chillicream.com";
const blogUrl = organizationUrl + "/blog";

const siteConfig = {
  title: "React Rasta",
  tagline: "The most powerful and flexible grid system for React",
  url: "https://react-rasta.com",
  cname: "react-rasta.com",
  baseUrl: "/",
  blogUrl,
  repoUrl,
  gaTrackingId: "UA-72800164-2",
  projectName: "react-rasta-docs",
  realProjectName: "react-rasta",
  organizationName: "chillicream",
  organizationTitle: "ChilliCream",
  organizationUrl,
  headerLinks: [{
      doc: "installation",
      href: "/docs",
      label: "Docs"
    },
    {
      doc: "example-break",
      label: "Examples"
    },
    {
      href: blogUrl,
      label: "Blog",
      external: true
    },
    {
      href: repoUrl,
      label: "GitHub",
      external: true
    },
    { search: true }
  ],
  headerIcon: "img/signet.svg",
  footerIcon: "img/signet.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#29303a",
    secondaryColor: "#363f4c"
  },
  stylesheets: [
    "/css/code-block-buttons.css"
  ],
  copyright: `Copyright © ${new Date().getFullYear()}`,
  editUrl: "https://github.com/ChilliCream/react-rasta-docs/edit/master/docs/",
  algolia: {
    apiKey: "6fc15fee9edc8ccf2a4e53fee34c59a1",
    indexName: "react-rasta",
    algoliaOptions: {
      facetFilters: ["language:LANGUAGE", "version:VERSION"],
    },
  },
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "androidstudio"
  },
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js",
  ],
  onPageNav: "separate",
  twitter: true,
  twitterUsername: "Chilli_Cream",
  twitterImage: "img/cupcake.png",
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  enableUpdateTime: true,
  enableUpdateBy: true
};

module.exports = siteConfig;