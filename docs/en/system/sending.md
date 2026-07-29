# Email Sending

> **WARNING:** Cloudflare does not currently support sending emails. Port 25 is blocked, so a third-party email service must be used.

1. Register at [https://resend.com](https://resend.com/), add your domain, and complete DNS verification.

   ![Resend](/assets/1.DwYi9syY.png)

2. Create an API key and copy it.

   ![API key](/assets/3.C6CYekPc.png)

3. Add the status callback URL:

   `https://worker-custom-domain/api/webhooks`

   ![Callback](/assets/2.FAyxtFE4.png)

4. Select the appropriate options.

   ![Options](/assets/4.B6iEcvcq.png)

5. Open System Settings and configure the email sending service.

   ![Sending config](/assets/5.DXbq-DgO.png)
