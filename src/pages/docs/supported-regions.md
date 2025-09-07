---
title: Supported regions
description: Fetch list of supported regions.
url: /docs/supported-regions
---

Fetch Supported Regions.

---

## API endpoint

```shell
GET /v1/regions
```

### Headers

```shell
{ X-Myles-Api-Key: string }
```

### Params

```shell
{ country?: string }
```

### Data Structure

```shell
Region {
	id: string;
	code: string;
	name: string;
	country: Country;
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
{ status: boolean; data: Array<Region> }
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
