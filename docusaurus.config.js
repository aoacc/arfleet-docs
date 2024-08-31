// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import sidebars from './sidebars';

// export default {
//   presets: [
//     [
//       '@docusaurus/preset-classic',
//       {
//         docs: {
//           path: 'docs',
//           remarkPlugins: [remarkMath],
//           rehypePlugins: [rehypeKatex],
//         },
//       },
//     ],
//   ],
// };



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ArFleet Docs',
  tagline: 'Temporary storage on Arweave+ao',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.arfleet.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aoacc', // Usually your GitHub org/user name.
  projectName: 'arfleet-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Add the following lines:
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],


          // remarkPlugins: [remarkMath],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/',
            to: '/docs/home',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ArFleet Docs',
        logo: {
          alt: 'ArFleet Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Table of Contents',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   // title: 'Docs',
          //   // items: [
          //   //   {
          //   //     label: 'Table of Contents',
          //   //     to: '/',
          //   //   },
          //   // ],
          // },
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Github',
                href: 'https://github.com/aoacc',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/vYctEs7aTd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aoaccorg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://arfleet.io',
              },
              {
                label: 'ao/acc Website',
                href: 'https://aoacc.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ao/acc`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

// Add this at the end of the file:
config.customFields = {
  markdownPlugins: [
    function (md) {
      md.use(require('markdown-it-container'), 'custom');
    },
  ],
};

module.exports = config;
