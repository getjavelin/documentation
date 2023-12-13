module.exports = {
  title: 'Javelin',
  tagline: 'Enterprise Data Security for Safe, Responsible AI Use',
  url: 'https://getjavelin.io', // Your website URL
  baseUrl: '/', 
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'getjavelin', // GitHub org/user name.
  projectName: 'documentation', // GitHub repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Javelin Logo',
        src: 'img/javelinlogo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'javelin-core/overview', 
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          docId: 'javelin-core/retries',
          position: 'left',
          label: 'Features',
        },
        {
          type: 'doc',
          docId: 'javelin-python/quickstart',
          position: 'left',
          label: 'Python API Reference',
        },
        {
          type: 'doc',
          docId: 'javelin-langchain-python/quickstart',
          position: 'left',
          label: 'Langchain',
        },        // Add other links or dropdowns as you like...
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/getjavelin/documentation/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
