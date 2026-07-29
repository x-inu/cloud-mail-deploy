import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cloud Mail Deploy',
  description: 'Complete guide to deploy Cloud Mail to Cloudflare Workers',
  lang: 'en-US',
  themeConfig: {
    siteTitle: 'Cloud Mail Deploy',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Features', link: '/features/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Deployment Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Prerequisites', link: '/guide/prerequisites' },
            { text: 'Dashboard Deployment', link: '/guide/dashboard' },
            { text: 'GitHub Actions Deployment', link: '/guide/action' },
          ]
        }
      ],
      '/features/': [
        {
          text: 'Features',
          items: [
            { text: 'All Features', link: '/features/' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maillab/cloud-mail' }
    ],
    footer: {
      message: 'MIT License — Cloud Mail Deployment Guide',
      copyright: `Copyright ${new Date().getFullYear()}`,
    }
  }
})
