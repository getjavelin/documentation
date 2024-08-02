module.exports = {
  title: 'Javelin',
  tagline: 'Enterprise AI Platform for Rapid, Responsible AI Adoption',
  url: 'https://getjavelin.io',
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
        src: 'img/javelinlogo.png',
      },
      items: [
        { type: 'doc', docId: 'javelin-core/overview', position: 'left', label: 'Getting Started' },
        { type: 'doc', docId: 'javelin-processors/overview', position: 'left', label: 'Guardrails' },
        { type: 'doc', docId: 'javelin-python/quickstart', position: 'left', label: 'Python SDK' },
        { to: 'api', label: 'API Reference', position: 'left' },
        { type: 'doc', docId: 'javelin-langchain-python/quickstart', position: 'left', label: 'LangChain' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Javelin.`,
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [{
          route: '/api',
          spec: 'api/openapi.yaml',
        }],
      }
    ],
  ],
};
