import path from 'path';

module.exports = {
    title: 'Javelin Documentation',
    tagline: 'Enterprise AI Platform for Rapid, Responsible AI Adoption',
    url: 'https://getjavelin.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'getjavelin',
    projectName: 'documentation',
    trailingSlash: false,

    // Docusaurus 3.8 Performance Features & Future Flags
    future: {
        experimental_faster: {
            swcJsLoader: true,
            swcJsMinimizer: true,
            swcHtmlMinimizer: true,
            lightningCssMinimizer: true,
            // rspackBundler: true, // Disabled due to compatibility issues
        },
        // Prepare for Docusaurus v4 features
        experimental_storage: {
            type: 'localStorage',
            namespace: true, // Use safe namespacing to avoid localStorage key collisions
        },
    },

    // SEO and Meta tags
    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'description',
                content: 'Complete documentation for Javelin - Enterprise AI Platform with security guardrails, LLM routing, and responsible AI adoption tools.',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'keywords',
                content: 'AI platform, LLM, enterprise AI, AI security, guardrails, prompt injection, content moderation, AI governance',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                property: 'og:title',
                content: 'Javelin Documentation - Enterprise AI Platform',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                property: 'og:description',
                content: 'Comprehensive documentation for implementing secure, reliable AI solutions with Javelin Enterprise AI Platform.',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                property: 'og:image',
                content: 'https://getjavelin.com/img/javelinlogoblack.png',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'twitter:card',
                content: 'summary_large_image',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'twitter:title',
                content: 'Javelin Documentation - Enterprise AI Platform',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'twitter:description',
                content: 'Complete documentation for implementing secure, reliable AI solutions with Javelin.',
            },
        },

    ],

    themeConfig: {
        // Announcement bar
        announcementBar: {
            id: 'support_us',
            content:
                '⭐️ If you like Javelin, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/getjavelin">GitHub</a>! ⭐️',
            backgroundColor: '#fafbfc',
            textColor: '#091E42',
            isCloseable: false,
        },

        // Color mode configuration
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },

        navbar: {
            title: '',
            hideOnScroll: true,
            logo: {
                alt: 'Javelin Logo',
                src: 'img/javelinlogoblack-120x32.png',
                srcDark: 'img/javelinlogowhite-120x32.png',
                href: '/',
                target: '_self',
                width: 120,
                height: 32,
            },
            items: [
                {
                    type: 'doc',
                    docId: 'javelin-core/overview',
                    position: 'left',
                    label: 'Getting Started'
                },
                {
                    type: 'doc',
                    docId: 'javelin-processors/processors-overview',
                    position: 'left',
                    label: 'Security & Guardrails'
                },
                /*
                {
                    to: 'api',
                    label: 'API Reference',
                    position: 'left'
                },
                */
                {
                    type: 'doc',
                    docId: 'javelin-python/python-quickstart',
                    position: 'left',
                    label: 'Python SDK'
                },
                {
                    type: 'search',
                    position: 'right',
                },
                {
                    href: 'https://github.com/getjavelin/documentation',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },

        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/',
                        },
                        {
                            label: 'Security & Guardrails',
                            to: '/javelin-processors/processors-overview',
                        },
                        {
                            label: 'Python SDK',
                            to: '/javelin-python/python-quickstart',
                        },
                        /*
                        {
                            label: 'API Reference',
                            to: '/api',
                        },
                        */
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/getjavelin',
                        },
                        /*
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/your-discord-server',
                        },
                        */
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/getjavelin',
                        },
                    ],
                },
                {
                    title: 'Company',
                    items: [
                        {
                            label: 'Website',
                            href: 'https://getjavelin.com',
                        },
                        {
                            label: 'Contact',
                            href: 'https://www.getjavelin.com/get-in-touch',
                        },
                        {
                            label: 'Security',
                            to: '/security',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Javelin, Inc. Built with Docusaurus.`,
        },

        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
            additionalLanguages: ['bash', 'json', 'yaml', 'python', 'javascript', 'typescript'],
        },

        // Table of contents
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5,
        },

        // Docs sidebar
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
        },
    },

    plugins: [
        // Add additional plugins here as needed
    ],

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/getjavelin/documentation/tree/main/',
                    routeBasePath: '/',
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: false,
                    // Add edit links
                    editCurrentVersion: true,
                },
                blog: false,
                pages: {
                    remarkPlugins: [],
                    rehypePlugins: [],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
                // PostHog analytics will be added via head tags
            },
        ],
        [
            'redocusaurus',
            {
                config: path.join(__dirname, 'redocly.yaml'),
                specs: [{
                    route: '/api',
                    spec: 'api/openapi.yaml',
                    id: 'main-api',
                }],
                theme: {
                    primaryColor: '#0e2e31',
                    redocOptions: {
                        hideDownloadButton: false,
                        disableSearch: false,
                        noAutoAuth: false,
                    },
                },
            },
        ],
    ],

    // Custom fields for additional configuration
    customFields: {
        // Add any custom fields here if needed in the future
    },

    // Markdown configuration
    markdown: {
        // mermaid: true, // Enable when @docusaurus/theme-mermaid is installed
    },
    // themes: ['@docusaurus/theme-mermaid'], // Enable when installed

    // i18n configuration (for future internationalization)
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    // Client modules for additional functionality
    clientModules: [
        require.resolve('./src/clientModules/copyCodeButton.js'),
        require.resolve('./src/clientModules/posthog.js'),
    ],
};
