# GitHub Actions Deployment

Set up an automated CI/CD pipeline with GitHub Actions. Every push to the main branch automatically builds and deploys to Cloudflare Workers.

## Step 1: Create Cloudflare API Token

1. Go to [Cloudflare Dashboard → Profile → API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Choose the **Edit Cloudflare Workers** template
4. Configure permissions:
   - **Account → Workers Scripts → Edit**
   - **Account → D1 → Edit**
   - **Account → KV → Edit**
5. Click **Continue to Summary** → **Create Token**
6. **Copy the token and save it securely** — you won't see it again

## Step 2: Copy Account ID

1. In Cloudflare Dashboard, scroll to find your **Account ID** in the right sidebar
2. Copy it (it's a 32-character hex string)

## Step 3: Fork the Repository

1. Go to [github.com/maillab/cloud-mail](https://github.com/maillab/cloud-mail)
2. Click **Fork**

## Step 4: Set GitHub Secrets

Go to your forked repo → **Settings → Secrets and variables → Actions → New repository secret**.

Add these secrets:

| Secret Name | Required | Description |
|-------------|----------|-------------|
| `CLOUDFLARE_API_TOKEN` | ✅ | API token from Step 1 |
| `CLOUDFLARE_ACCOUNT_ID` | ✅ | Account ID from Step 2 |
| `CUSTOM_DOMAIN` | ✅ | Custom domain for Worker (e.g., `mail.example.com`) |
| `DOMAIN` | ✅ | Email domains as JSON array (e.g., `["example.com"]`) |
| `ADMIN` | ✅ | Admin email (e.g., `admin@example.com`) |
| `JWT_SECRET` | ✅ | JWT secret (random string, no special chars) |
| `NAME` | ❌ | Worker project name (optional) |
| `D1_DATABASE_ID` | ❌ | D1 database ID (optional, auto-created if omitted) |
| `KV_NAMESPACE_ID` | ❌ | KV namespace ID (optional, auto-created if omitted) |

## Step 5: Run the Workflow

1. Go to your forked repo → **Actions**
2. Select the **Deploy** workflow on the left
3. Click **Run workflow** → **Run workflow**

## Step 6: Wait for Deployment

The workflow will:
- Install dependencies
- Build the Vue frontend
- Deploy the Worker to Cloudflare
- Create KV and D1 databases (if not already created)
- Set environment variables and bindings

Watch the workflow logs for progress.

## Step 7: Configure Email Routing

1. Go to **Email → Email Routing** in Cloudflare Dashboard
2. Enable Email Routing for your domain
3. Add a catch-all route pointing to your Worker

## Step 8: Initialize & Log In

1. Open your custom domain in the browser
2. Visit `https://mail.example.com/api/init/<your-jwt_secret>` to initialize the DB
3. Register your admin account and sign in

🎉 **Done!** Your Cloud Mail is live with automatic deployments.

## Automatic Deploys

From now on, every push to the `main` branch will automatically:
1. Build the latest code
2. Deploy to Cloudflare Workers
3. Your service updates within seconds
