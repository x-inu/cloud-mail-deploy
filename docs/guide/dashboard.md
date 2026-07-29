# Dashboard Deployment

Deploy Cloud Mail directly from the Cloudflare Dashboard by importing your GitHub repository.

## Step 1: Fork the Repository

1. Go to [github.com/maillab/cloud-mail](https://github.com/maillab/cloud-mail)
2. Click **Fork** to copy it to your GitHub account

## Step 2: Create a New Worker

1. Open the [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Click **Create Application** → **Worker**
4. Choose **Import from GitHub**

## Step 3: Configure the Worker

1. Select your forked repository
2. Set the directory to **`mail-worker`**
3. Click **Deploy**

## Step 4: Set Environment Variables

Go to your Worker's **Settings → Variables** and add:

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `domain` | ✅ | Email domain(s) as JSON array | `["example.com"]` |
| `admin` | ✅ | Admin email address | `admin@example.com` |
| `jwt_secret` | ✅ | Random string for JWT tokens | `my-secret-key-123` |

> **Note:** `jwt_secret` must not contain special characters.

## Step 5: Bind Databases

### Create KV Namespace
1. Go to **Workers & Pages → KV**
2. Click **Create Namespace**
3. Name it (e.g., `cloud-mail-kv`)
4. Go back to your Worker → **Settings → Variables → KV Namespace Bindings**
5. Add binding with **Variable name: `kv`**

### Create D1 Database
1. Go to **Workers & Pages → D1**
2. Click **Create Database**
3. Name it (e.g., `cloud-mail-db`)
4. Go back to your Worker → **Settings → Variables → D1 Database Bindings**
5. Add binding with **Variable name: `db`**

## Step 6: Configure Email Routing (Receive Emails)

1. Go to **Email → Email Routing** in Cloudflare Dashboard
2. Enable Email Routing for your domain
3. Go to **Email → Email Routing → Routes**
4. Create a catch-all route pointing to your Worker
5. Select your Worker as the destination

## Step 7: Initialize the Database

1. Open your Worker URL in a browser:
   ```
   https://<your-worker>.workers.dev/api/init/<your-jwt_secret>
   ```
2. You should see a success message

## Step 8: Log In

1. Navigate to your Worker URL
2. Click **Register** and create the admin account
3. Sign in with your admin credentials

🎉 **Done!** Your Cloud Mail service is now live.

## Next Steps

- Add more users and domains
- Configure custom domain for the Worker
- Set up R2 for attachment storage
