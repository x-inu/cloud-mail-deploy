import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cloud Mail',
  description: 'A simple, responsive email service designed to run on Cloudflare Workers',
  lang: 'en-US',
  base: '/',
  themeConfig: {
    siteTitle: 'Cloud Mail',
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Document', link: '/en/preview/description' },
      { text: 'Sponsor ❤️', link: '/en/support' },
    ],
    sidebar: {
      '/en/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Dashboard Deployment', link: '/en/guide/dashboard' },
            { text: 'GitHub Actions Deployment', link: '/en/guide/action' },
            { text: 'Command Deployment', link: '/en/guide/command' },
            { text: 'Other Variables', link: '/en/guide/environment' },
            { text: 'Project Updates', link: '/en/guide/update' },
          ]
        }
      ],
      '/en/system/': [
        {
          text: 'System',
          items: [
            { text: 'Email Forwarding', link: '/en/system/forward' },
            { text: 'Email Sending', link: '/en/system/sending' },
            { text: 'Turnstile', link: '/en/system/turnstile' },
            { text: 'Object Storage', link: '/en/system/object-storage' },
          ]
        }
      ],
      '/en/api/': [
        {
          text: 'API',
          items: [
            { text: 'API Document', link: '/en/api/api-doc' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maillab/cloud-mail' },
      { icon: 'telegram', link: 'https://t.me/cloud_mail_tg' },
    ],
    footer: {
      message: 'Cloud Mail — MIT License',
      copyright: 'Built with VitePress',
    }
  }
})
