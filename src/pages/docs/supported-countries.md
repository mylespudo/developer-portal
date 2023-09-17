---
title: Supported countries
description: Fetch list of supported countries.
url: /docs/supported-countries
---

Fetch Supported Countries.

---

## API endpoint

```shell
/v1/countries
```

### Parameters

```shell
params { apiKey: string }
```

### Data Structure

```shell
Country {
  id: string
  code: string
  name: string
  description: string | null
  status: ACTIVE | DEACTIVATED
  createdAt: Date
  updatedAt: Date
}
```

---

## Responses

Below are the error and success responses you can expect when accessing this endpoint.

### 200: Success

```shell
{ status: boolean; data: Array<Country> }
```

### 400: Bad Request

```shell
{ status: boolean; errorMessage: string }
```
