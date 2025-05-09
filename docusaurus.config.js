import path from 'path';

module.exports = {
  title: 'javelin.',
  tagline: 'Enterprise AI Platform for Rapid, Responsible AI Adoption',
  url: 'https://getjavelin.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'getjavelin',
  projectName: 'documentation',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Javelin Logo',
        src: 'img/javelinlogoblack.png',
        srcDark: 'img/javelinlogowhite.png',
      },
      items: [
        { type: 'doc', docId: 'javelin-core/overview', position: 'left', label: 'Getting Started' },
        { type: 'doc', docId: 'javelin-processors/overview', position: 'left', label: 'Security & Guardrails' },
        /*
        { to: 'api', label: 'API Reference', position: 'left' },
        */
        { type: 'doc', docId: 'javelin-python/quickstart', position: 'left', label: 'Python SDK' },
        /*
        { type: 'doc', docId: 'javelin-langchain-python/quickstart', position: 'left', label: 'LangChain' },
         */
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Javelin, Inc`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/getjavelin/documentation/tree/main/',
          routeBasePath: '/', // Set to '/' to make documentation the root
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        config: path.join(__dirname, 'redocly.yaml'),
        specs: [{
          route: '/api',
          spec: 'api/openapi.yaml',
        }],
      }
    ],
  ]
};
