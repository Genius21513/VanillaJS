module.exports = {
    title: 'Adobe Analytics Connector',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: true,
    host: 'localhost',
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-footnote'))
        }
    },
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            {
                link: '/getting-started/',
                text: 'Getting Started'
            },
            {
                link: '/options/',
                text: 'Options',
            },
            {
                link: '/what-we-track/',
                text: 'What we track?',
            },
            {
                link: '/changelog/',
                text: 'Changelog ',
            },
        ],
        sidebar: [
            '/getting-started/',
            '/options/',
            '/what-we-track/',
            '/changelog/',
        ],
        lastUpdated: 'Last Updated',
    },
    plugins: [
        '@vuepress/back-to-top',
    ]
}
