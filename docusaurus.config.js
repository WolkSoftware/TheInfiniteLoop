// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Infinite Loop",
  tagline:
    "An Agile software development methodology designed to help technology businesses create a culture of trust, ownership, and data-driven continuous experimentation that fosters sustainable product-led growth and high-performance digital product teams that can thrive in the age of disruption",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.infinite-loop.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "WolkSoftware", // Usually your GitHub org/user name.
  projectName: "TheInfiniteLoop", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          path: "guide",
          routeBasePath: "guide",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.jpg",
      announcementBar: {
        id: "support_us",
        content:
          '🚧 Please note that this site is under construction. Please join our <a href="https://discord.gg/QJX6kWvxWP">Discord channel</a> to share your feedback.',
        backgroundColor: "yellow",
        textColor: "#091E42",
        isCloseable: false,
      },
      navbar: {
        title: "The Infinite Loop",
        logo: {
          alt: "The Infinite Loop",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "/category/fundamentals",
            position: "left",
            label: "Guide",
          },
          { to: "/book", label: "Book", position: "left" },
          { to: "/community", label: "Community", position: "left" },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "BROUGHT TO YOU BY",
            items: [
              {
                html: `
                    <a href="https://www.wolksoftware.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                      <img src="/img/wolk.png" alt="Wolk SOftware" width="150px" />
                    </a>
                  `,
              },
            ],
          },
          {
            title: "RESOURCES",
            items: [
              {
                label: "Guide",
                to: "/guide/category/fundamentals",
              },
              {
                label: "Book",
                to: "/book",
              },
            ],
          },
          {
            title: "COMMUNITY",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/QJX6kWvxWP",
              },
              {
                label: "GitHub",
                href: "https://github.com/WolkSoftware/TheInfiniteLoop",
              },
            ],
          },
          {
            title: "THE BORING STUFF",
            items: [
              {
                label: "Code of conduct",
                href: "/code-of-conduct",
              },
              {
                label: "Privacy policy",
                href: "/privacy",
              },
              {
                label: "Terms & conditions",
                href: "/terms",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wolk Software Limited.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
