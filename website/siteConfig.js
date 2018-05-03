/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible

const siteConfig = {
  title: "React Rasta",
  tagline: "A grid system for React",
  url: "http://react-rasta.com",
  cname: "react-rasta.com",
  baseUrl: "/",
  gaTrackingId: "UA-72800164-2",
  projectName: "react-rasta-docs",
  organizationName: "chillicream",
  repoUrl: "https://github.com/ChilliCream/react-rasta",
  headerLinks: [
    { doc: "installation", label: "Docs" },
    { blog: true, label: "Blog" }
  ],
  headerIcon: "img/signet.svg",
  footerIcon: "img/signet.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#29303a",
    secondaryColor: "#363f4c"
  },
  copyright: "Copyright © " + new Date().getFullYear() + " ChilliCream",
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "androidstudio"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate"
};

module.exports = siteConfig;
