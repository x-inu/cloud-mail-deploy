# Cloud Mail Deploy

> A simple, responsive email service designed to run on Cloudflare Workers 🎉

This documentation will guide you through deploying **Cloud Mail** — a full-featured email service — entirely on Cloudflare's infrastructure. No VPS or dedicated server required.

## Quick Start

Choose your deployment method:

- [**Dashboard Deployment**](/guide/dashboard) — Manual setup via Cloudflare Dashboard
- [**GitHub Actions Deployment**](/guide/action) — Automated CI/CD pipeline

## Prerequisites

Before starting, you'll need:

| Requirement | Description |
|-------------|-------------|
| Cloudflare Account | Free account at [dash.cloudflare.com](https://dash.cloudflare.com) |
| Domain Name | For email routing & custom worker domain |
| Resend Account | [resend.com](https://resend.com) for sending emails (free tier available) |
| GitHub Account | To fork the repository |

## Live Demo

Check out the live demo: [skymail.ink](https://skymail.ink/)

## Quick Overview

```
┌─────────────────────────────────────────────┐
│         Cloudflare Workers (Edge)            │
│  ┌──────────────┐     ┌──────────────────┐   │
│  │  mail-worker  │────▶│   mail-vue       │   │
│  │  (Hono/JS)    │     │  (Vue 3 + EP)    │   │
│  │  — API Layer  │     │  — Dashboard UI  │   │
│  │  — Auth/JWT   │     │  — Admin Panel   │   │
│  │  — Email Proc │     │  — Login/Regis   │   │
│  └──────┬───────┘     └──────────────────┘   │
│         │                                     │
└─────────┼─────────────────────────────────────┘
          │
     ┌────┴──────────────────────────────┐
     │  Cloudflare Infrastructure        │
     │  ├─ D1 Database (SQLite)          │
     │  ├─ KV Cache                      │
     │  ├─ R2 Storage (Attachments)      │
     │  └─ Email Routing (RX email)      │
     └───────────────────────────────────┘
```

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Platform | Cloudflare Workers |
| Web Framework | Hono |
| ORM | Drizzle |
| Frontend | Vue 3 + Element Plus |
| Database | Cloudflare D1 (SQLite) |
| Cache | Cloudflare KV |
| File Storage | Cloudflare R2 |
| Email Sending | Resend |
| CAPTCHA | Cloudflare Turnstile |

## Source Code

- GitHub: [github.com/maillab/cloud-mail](https://github.com/maillab/cloud-mail)
- Documentation: [doc.skymail.ink](https://doc.skymail.ink/)
