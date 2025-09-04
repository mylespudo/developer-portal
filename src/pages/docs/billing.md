---
title: Billing packages
description: Fetch list of billing packages.
url: /docs/billing
---

Fetch Billing Packages.

These packages have implications on how your order is handled and how it's priced. Use this endpoint to fetch the available billing packages.

---

## API endpoint

```shell
GET /v1/billing-packages
```

### Headers

```shell
{ X-Myles-Api-Key: string }
```

### Data Structure

```shell
BillingPackage {
    activatedAt: Date | null;
	basePrice: number;
	code: string;
	costPerDimensions: number;
	costPerKilometer: number;
	costPerWeight: number;
	createdAt: Date;
	deactivatedAt: null;
	description: string | null;
	id: string;
	name: string;
	status: string;
	updatedAt: Date;
}
```

---

## Responses

Below are the error and success responses you can expect when accessing this endpoint.

### 200: Success

```shell
{ status: boolean; data: Array<BillingPackage> }
```
### 201: Created

```shell
{ message: string; code: number }
```

### 204: No Content

```shell
{ message: string; code: number }
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
