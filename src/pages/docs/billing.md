---
title: Billing packages
description: Fetch list of billing packages.
url: /docs/billing
---

Fetch Billing Packages.

These packages have implications on how your order is handled. Use this endpoint to fetch the available billing packages.

---

## API endpoint

```shell
/v1/billing-packages
```

### Parameters

```shell
params { apiKey: string }
```

### Data Structure

```shell
BillingPackage {
  basePrice: number
  code: string
  costPerDimensions: number
  costPerKilometer: number
  costPerWeight: number
  createdAt: Date
  description: string | null
  id: string
  name: string
  status: string
  updatedAt: Date
}
```

---

## Responses

Below are the error and success responses you can expect when accessing this endpoint.

### 200: Success

```shell
{ status: boolean; data: Array<BillingPackage> }
```

### 400: Bad Request

```shell
{ status: boolean; errorMessage: string }
```
