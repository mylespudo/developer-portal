---
title: Supported countries
description: Fetch list of supported countries.
---

Fetch Supported Countries.

---

## API endpoint

```shell
/v1/countries
```

### Parameters

```shell
params { apiKey : string }
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

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### 200: Success

```shell
{ status: boolean; data: Array<Country> }
```

### 400: Bad Request

```shell
{ status: boolean; errorMessage: string }
```
