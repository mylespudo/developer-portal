---
title: Supported cities
description: Fetch list of supported cities.
url: /docs/supported-cities
---

Fetch Supported Cities.

---

## API endpoint

```shell
/v1/cities
```

### Parameters

```shell
params { apiKey: string, region?: string }
```

### Data Structure

```shell
City {
  id: string
  code: string
  name: string
  region: Region;
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
{ status: boolean; data: Array<City> }
```

### 400: Bad Request

```shell
{ status: boolean; errorMessage: string }
```
