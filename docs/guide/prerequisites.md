# Prerequisites

Before deploying Cloud Mail, make sure you have the following ready.

## 1. Cloudflare Account

Register (or log in) at [dash.cloudflare.com](https://dash.cloudflare.com/).

You'll need access to:
- **Workers & Pages** — to run the application
- **D1** — SQLite database
- **KV** — key-value cache
- **R2** — file/attachment storage
- **Email Routing** — to receive emails

## 2. Domain Name

You need a domain name added to Cloudflare (with nameservers pointing to Cloudflare). This is required for:

- **Custom Worker Domain** — so users can access the dashboard
- **Email Routing** — to receive emails at your custom domain

## 3. Resend Account

Cloud Mail uses [Resend](https://resend.com) to send outgoing emails.

- Sign up for a free Resend account
- Verify your domain in Resend
- Get your API key

**Free tier** allows 100 emails/day — enough for testing and light use.

## 4. GitHub Account

You need a GitHub account to fork the repository.

[https://github.com/maillab/cloud-mail](https://github.com/maillab/cloud-mail)

---

Once you have all of the above, proceed to:

- [Dashboard Deployment](/guide/dashboard) — for manual setup
- [GitHub Actions Deployment](/guide/action) — for automated deployment
