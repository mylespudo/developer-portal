---
title: Supported countries
description: Fetch list of supported countries.
url: /docs/supported-countries
---

Fetch Supported Countries.

---

## API endpoint

```shell
GET /v1/countries
```

### Headers

```shell
{ X-Myles-Api-Key: string }
```

### Data Structure

```shell
Country {
	id: string;
	code: string;
	name: string;
	description: string | null;
	status: ACTIVE | DEACTIVATED;
	activatedAt: Date | null;
	deactivatedAt: Date | null;
	createdAt: Date;
	updatedAt: Date;
}
```

---

## Responses

Below are the error and success responses you can expect when accessing this endpoint.

### 200: Success

```shell
{ status: boolean; data: Array<Country> }
```

### 401: Unauthorized

```shell
{ message: string; code: number }
```

### 422: Unprocessable Content - Your Input is Wrong/Inaccurate

```shell
{ message: string; code: number }
```

### 400: Bad Request

```shell
{ message: string; code: number }
```

### 429: Too Many Requests

```shell
{ message: string; code: number }
```
