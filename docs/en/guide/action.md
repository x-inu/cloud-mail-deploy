# GitHub Actions Deployment

## API Token Creation

1. Create a token using a template.

   ![Token template](/assets/4.C308-3iz.png)

2. Configure the required permissions.

   ![Permissions](/assets/5.DrnTPa3l.png)

3. Copy the generated API token.

   ![Copy token](/assets/6.C1JjJnr0.png)

4. Copy the Cloudflare account ID.

   ![Account ID](/assets/7.DG2icI9U.png)

## Environment Setup

1. Fork the repository: [https://github.com/maillab/cloud-mail](https://github.com/maillab/cloud-mail)

   ![Fork](/assets/0.BgZTtVBn.png)

2. Configure GitHub Actions secrets.

   | Secret Name | Required | Description |
   | --- | --- | --- |
   | CLOUDFLARE_API_TOKEN | ✅ | Cloudflare API token |
   | CLOUDFLARE_ACCOUNT_ID | ✅ | Cloudflare account ID |
   | CUSTOM_DOMAIN | ✅ | Worker custom domain, e.g., `skymail.ink` |
   | DOMAIN | ✅ | Email domains, e.g., `["example.com", "example2.com"]` |
   | ADMIN | ✅ | Administrator email address, e.g., `admin@example.com` |
   | JWT_SECRET | ✅ | JWT secret key (any random string, do not use special characters) |
   | NAME | ❌ | Worker project name (optional) |
   | D1_DATABASE_ID | ❌ | D1 database ID (optional) |
   | KV_NAMESPACE_ID | ❌ | KV namespace ID (optional) |

   ![Secrets](/assets/9.BSzKTXoh.png)

## Deployment

1. Run the GitHub Actions workflow.

   ![Run workflow](/assets/10.D1da10Ql.png)

2. Wait for the workflow to complete.

   ![Complete](/assets/11.BgS0gJ4t.png)

## Configure Email Forwarding

1. Refer to the Dashboard deployment steps: [Configure Email Forwarding](/en/guide/dashboard#configure-email-forwarding)

2. Open the custom domain in a browser and create an admin account to log in.

   ![Login](/assets/9.UpdVuA4A.png)
