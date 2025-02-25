// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache Kvrocks (incubating)',
  tagline: 'A distributed key value NoSQL database that uses RocksDB as storage engine and is compatible with Redis protocol',
  url: 'https://kvrocks.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'download',
        path: 'download',
        routeBasePath: 'download',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: "/docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/apache/incubator-kvrocks-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/apache/incubator-kvrocks-website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Apache Kvrocks',
        logo: {
          alt: 'apache-kvrocks',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'doc', docId: 'getting-started', position: 'right', label: 'Docs'},
          {to: '/download', label: 'Download', position: 'right'},
          {type: 'doc', docId: 'community', position: 'right', label: 'Community', docsPluginId: 'community'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {to: '/users', label: 'Users', position: 'right'},
          {
            href: 'https://github.com/apache/incubator-kvrocks',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {type: 'search', position: 'right'},
          {
            type: 'dropdown',
            label: 'ASF',
            position: 'right',
            items: [
              {label: 'Foundation', to: 'https://www.apache.org/'},
              {label: 'License', to: 'https://www.apache.org/licenses/'},
              {label: 'Events', to: 'https://www.apache.org/events/current-event'},
              {label: 'Security', to: 'https://www.apache.org/security/'},
              {label: 'Sponsorship', to: 'https://www.apache.org/foundation/sponsorship.html'},
              {label: 'Privacy', to: 'https://www.apache.org/foundation/policies/privacy.html'},
              {label: 'Thanks', to: 'https://www.apache.org/foundation/thanks.html'}
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/getting-started',
              },
              {
                label: 'Supported commands',
                to: '/docs/supported-commands',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/kvrockscommunity/shared_invite/zt-p5928e3r-OUAK8SUgC8GOceGM6dAz6w',
              },
              {
                label: 'Issue Tracker',
                href: 'https://github.com/apache/incubator-kvrocks/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Source Repo',
                href: 'https://github.com/apache/incubator-kvrocks',
              },
              {
                label: 'Website Source Repo',
                href: 'https://github.com/apache/incubator-kvrocks-website',
              },
            ],
          },
        ],
        logo: {
            alt: 'Apache Incubator logo',
            src: 'img/apache-incubator.svg',
            href: 'https://incubator.apache.org/'
        },
        copyright: `<div style="text-align: left;">
          <div>
            <p style="font-family: Avenir-Medium,serif;font-size: 14px;color: #999;line-height: 20px;"> Apache Kvrocks is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF. </p>
          </div>
          <div style="border-top: 1px solid #ccc;min-height: 60px;line-height: 20px;text-align: center;font-family: Avenir-Medium,serif;font-size: 14px;color: #999;display: flex;align-items: center;"><span>Copyright © ${new Date().getFullYear()} The Apache Software Foundation. Apache Kvrocks, Kvrocks, and its feather logo are trademarks of The Apache Software Foundation.</span></div>
        </div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['properties'],
      },
    }),

    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          indexDocs: true,
          indexPages: true,
          language: ["en"],
        }
      ],
    ]
};

module.exports = config;
