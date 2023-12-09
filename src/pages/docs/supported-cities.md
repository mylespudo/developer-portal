---
title: Supported cities
description: Fetch list of supported cities.
url: /docs/supported-cities
---

Fetch Supported Cities.

---

## API endpoint

```shell
GET /v1/cities
```

### Headers

```shell
{ X-Myles-Api-Key: string }
```

### Params

```shell
{ region?: string }
```

### Data Structure

```shell
City {
  id: string;
	code: string;
	name: string;
	region: Region;
	description: string | null;
	status: "ACTIVE" | "DEACTIVATED";
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
{ status: boolean; data: Array<City> }
```

### 401: Unauthorized

```shell
{ message: string; code: number }
```


### 400: Bad Request

```shell
{ message: string; code: number }
```
