# Dashboard Deployment

## Account Preparation

Register a Cloudflare account at [https://dash.cloudflare.com](https://dash.cloudflare.com/) and add your domain.

![Account](/assets/1.Ceip4Aks.png)

## Create the Project

1. Fork or clone the repository to your own GitHub account: [https://github.com/maillab/cloud-mail](https://github.com/maillab/cloud-mail)

   ![Fork](/assets/0.BgZTtVBn.png)

2. Create a new Worker project

   ![Create Worker](/assets/1.C_OKFTJq.png)

3. Choose **Import from GitHub**

   ![Import](/assets/2.yrULln52.png)

4. Set the directory to `mail-worker` and deploy the project

   ![Deploy](/assets/3.BlAKorP8.png)

## Configure Environment Variables

| Variable Name | Required | Description |
| --- | --- | --- |
| domain | ✅ | Email domain(s). Multiple domains are supported (e.g., `["example.com", "example2.com"]`) |
| admin | ✅ | Administrator email address (e.g., `admin@example.com`) |
| jwt_secret | ✅ | JWT secret key. Use any random string; do not include special characters |

![Variables](/assets/5.CX5wLrGh.png)

## Bind Databases

1. Create the KV and D1 databases

   ![Databases](/assets/4-4.Ddg5IGmI.png)

2. Add bindings. The variable names must be `kv` and `db`

   ![Bindings](/assets/4.d1DzXNm-.png)

## Configure Email Forwarding

![Forwarding 1](/assets/6.B8ZEA4eb.png)
![Forwarding 2](/assets/7.Bm0YMP0b.png)
![Forwarding 3](/assets/8.jfYabKoj.png)

## Log In to the Website

1. Open the following URL in your browser to initialize the database:

   `https://<your_worker_domain>/api/init/<your_jwt_secret>`

   ![Init](/assets/10.DVYtU_xR.png)

2. Open your worker domain in the browser, register the administrator account, and sign in to the website

   ![Login](/assets/9.UpdVuA4A.png)
