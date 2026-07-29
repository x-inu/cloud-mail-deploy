# API Document

> **TIP:** Some request parameters support fuzzy matching using `%`. Examples: `admin` for exact match, `admin%` for prefix match, `%@example.com` for suffix match, and `%admin%` for contains match.

## Generate Token

**Description:** Generates an authentication token for the Authorization header. Only one global token is active; regenerating it invalidates the previous one.

**Endpoint:** `POST /api/public/genToken`

**Request Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| email | string | Yes | Admin email |
| password | string | Yes | Email password |

**Response Example**

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "9f4e298e-7431-4c76-bc15-4931c3a73984"
  }
}
```

## Email Query

**Endpoint:** `POST /api/public/emailList`

**Request Header**

| Header | Required | Description |
| --- | --- | --- |
| Authorization | Yes | Auth token |

**Request Parameters**

| Parameter | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| toEmail | string | No | | Recipient email, supports fuzzy matching |
| sendName | string | No | | Sender name, supports fuzzy matching |
| sendEmail | string | No | | Sender email, supports fuzzy matching |
| subject | string | No | | Email subject, supports fuzzy matching |
| content | string | No | | Email HTML content, supports fuzzy matching |
| timeSort | string | No | desc | Time sorting (`asc` oldest, `desc` newest) |
| type | integer | No | | Email type (0 = inbox, 1 = sent, empty = all) |
| isDel | integer | No | | Deletion status (0 = normal, 2 = deleted, empty = all) |
| num | integer | No | 1 | Page number |
| size | integer | No | 20 | Items per page |

**Response Example**

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "emailId": 999,
      "sendEmail": "hello@example.com",
      "sendName": "hello",
      "subject": "Hello word",
      "toEmail": "admin@example.com",
      "toName": "admin",
      "createTime": "2099-12-30 23:99:99",
      "type": 0,
      "content": "<div>Hello word</div>",
      "text": "Hello word",
      "isDel": 0
    }
  ]
}
```

## Add User

**Endpoint:** `POST /api/public/addUser`

**Request Header**

| Header | Required | Description |
| --- | --- | --- |
| Authorization | Yes | Auth token |

**Request Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| list | array\<object\> | Yes | Array of users |
| └─ email | string | Yes | Email address |
| └─ password | string | No | Password — auto-generated if empty |
| └─ roleName | string | No | Role name — uses default if empty |

**Response Example**

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```
