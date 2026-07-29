# Email Forwarding

## Forward to Telegram

1. Find this user on Telegram.

   ![Telegram user](/assets/1.COkzfE5i.png)

2. Create a bot and copy the bot token.

   ![Bot token](/assets/2.CYvyMRqP.png)

3. Send a message to the bot.

   ![Send message](/assets/3.DdcugslA.png)

4. Open the following URL in a browser to obtain the `chat_id`:

   `https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates`

   If no result is returned, send a few more messages to the bot and try again.

   ![Chat ID](/assets/4.B5iLeD9z.png)

5. Open System Settings and configure Telegram forwarding.

   ![Telegram config](/assets/5.BvE5wcey.png)

## Forward to Another Email Address

1. Complete email address verification in Cloudflare.

   ![Verification](/assets/6.FvUPZDU2.png)

2. Open System Settings and configure email forwarding.

   ![Email config](/assets/7.BWZlPlip.png)
