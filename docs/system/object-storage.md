# Object Storage

> **WARNING:** Email attachments are stored in KV by default. Storage can be switched to R2 or any other S3-compatible service.

1. Create an R2 storage bucket.

   ![R2 bucket](/assets/1.DDX40T9J.png)

2. Configure a custom domain for the bucket.

   ![Custom domain](/assets/2.wkBqZxnz.png)

3. Add to Action Secret or Worker Bindings

   | Worker Binding Name | Action Secret | Required | Description |
   | --- | --- | --- | --- |
   | r2 | R2_BUCKET_NAME | ✅ | R2 Bucket Name |

4. Open System Settings and configure object storage.

   ![R2 config](/assets/3.BH3jpxf4.png)
