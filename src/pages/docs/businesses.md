---
title: Businesses
description: Fetch list of businesses.
url: /docs/businesses
---

Fetch Businesses.

These are pickup spots/courier services mainly handling deliveries for orders/packages Use this endpoint to fetch the Businesses.

---

## API endpoint

```shell
GET /v1/businesses
```

### Headers

```shell
{ X-Myles-Api-Key: string }
```

### Parameters

```shell
{ region: string, city: string }
```

### Data Structure

```shell
Business {
    id: string;
	address: string;
	city: string;
	openedAt: Date | null;
	closedAt: Date | null;
	contactEmail: string;
	contactName: string;
	contactPhone: string;
	createdAt: Date;
	hours: string | null;
	latitude: number;
	longitude: number;
	name: string;
	region: string;
	socialMediaLinks: string | null;
	type: DROPOFF_POINT | COMMUNITY
}
```

---

## Responses

Below are the error and success responses you can expect when accessing this endpoint.

### 200: Success

```shell
{ status: boolean; data: Array<Pudo> }
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
