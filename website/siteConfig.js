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
  organizationName: "chillicream",
  organizationTitle: "ChilliCream",
  organizationUrl,
  headerLinks: [{
      doc: "installation",
      label: "Docs"
    },
    {
      doc: "example-break",
      label: "Examples"
    },
    {
      href: blogUrl,
      label: "Blog"
    },
    //{ search: true },
    {
      href: repoUrl,
      label: "GitHub"
    }
  ],
  headerIcon: "img/signet.svg",
  footerIcon: "img/signet.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#29303a",
    secondaryColor: "#363f4c"
  },
  copyright: `Copyright © ${new Date().getFullYear()}`,
  editUrl: "https://github.com/ChilliCream/react-rasta-docs/edit/master/docs/",
  /*algolia: {
    apiKey: "bf33c17016c2932f4993e27c5d3aba72",
    indexName: "react-rasta"
  },*/
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "androidstudio"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate",
  twitter: true,
  twitterUsername: "Chilli_Cream",
  twitterImage: "img/cupcake.png",
  cleanUrl: true
};

module.exports = siteConfig;