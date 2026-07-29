import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cloud Mail',
  description: 'A simple, responsive email service designed to run on Cloudflare Workers',
  lang: 'en-US',
  base: '/',
  appearance: 'dark',
  themeConfig: {
    siteTitle: 'Cloud Mail',
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/dashboard' },
      { text: 'API', link: '/api/api-doc' },
    ],
    sidebar: [
      {
        text: 'Project Preview',
        collapsed: false,
        items: [
          { text: 'Description', link: '/preview/description' },
        ]
      },
      {
        text: 'Deployment Guide',
        collapsed: false,
        items: [
          { text: 'Dashboard Deployment', link: '/guide/dashboard' },
          { text: 'GitHub Actions', link: '/guide/action' },
          { text: 'Command Deployment', link: '/guide/command' },
          { text: 'Other Variables', link: '/guide/environment' },
          { text: 'Project Updates', link: '/guide/update' },
        ]
      },
      {
        text: 'System Settings',
        collapsed: false,
        items: [
          { text: 'Email Sending', link: '/system/sending' },
          { text: 'Object Storage', link: '/system/object-storage' },
          { text: 'Turnstile', link: '/system/turnstile' },
          { text: 'Email Forwarding', link: '/system/forward' },
        ]
      },
      {
        text: 'Open API',
        collapsed: false,
        items: [
          { text: 'Document', link: '/api/api-doc' },
        ]
      },
      {
        text: 'Support',
        items: [
          { text: 'Sponsor ❤️', link: '/support' },
          { text: 'Contact', link: '/contact' },
        ]
      }
    ],
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
