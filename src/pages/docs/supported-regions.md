---
title: Supported regions
description: Fetch list of supported regions.
---

Fetch Supported Regions.

---

## API endpoint

```shell
/v1/regions
```

### Parameters

```shell
params { apiKey: string, country?: string }
```

### Data Structure

```shell
Region {
  id: string
  code: string
  name: string
  country: Country
  description: string | null
  status: ACTIVE | DEACTIVATE"
  createdAt: Date
  updatedAt: Date
}
```

---

## Responses

Below are the error and success responses you can expect when accessing this endpoint.

### 200: Success

```shell
{ status: boolean; data: Array<Region> }
```

### 400: Bad Request

```shell
{ status: boolean; errorMessage: string }
```
