# Cloud Mail Deploy

> 📖 Complete deployment guide for **Cloud Mail** — a self-hosted email service on Cloudflare Workers.

This documentation site helps you deploy and manage **Cloud Mail**, a full-featured email service built entirely on Cloudflare's infrastructure. No VPS or dedicated server needed.

🌐 **Live site:** https://cloud-mail-deploy.pages.dev (after deploying to Cloudflare Pages)

## Tech Stack

This documentation is built with:

- **[VitePress](https://vitepress.dev)** — Vue-powered static site generator
- **Deployed on** — Cloudflare Pages

## Pages

- **Home** — Project overview, architecture diagram, tech stack
- **Guide / Introduction** — Deployment method selector
- **Guide / Prerequisites** — What you need before deploying
- **Guide / Dashboard Deployment** — Manual setup via Cloudflare Dashboard
- **Guide / GitHub Actions Deployment** — Automated CI/CD pipeline
- **Features** — Full feature list

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Go to **Cloudflare Dashboard → Workers & Pages → Pages → Connect to Git**
3. Select this repository
4. Set build command: `npm run docs:build`
5. Set output directory: `docs/.vitepress/dist`
6. Click **Save and Deploy**

## Source

Cloud Mail project: [github.com/maillab/cloud-mail](https://github.com/maillab/cloud-mail)
Official docs: [doc.skymail.ink](https://doc.skymail.ink/)

## License

MIT
