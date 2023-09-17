---
title: Create order
description: Order creation for your shop.
url: /docs/orders
---

Create Order.

Create an order with us using this endpoint.

---

## API endpoint

```shell
/v1/orders
```

### Parameters

```shell
params { apiKey: string }
```

### Request Body

```shell
body {
  type: PICKUP | DIRECT
  business?: string
  customerName: string
  customerEmail: string
  customerPhone?: string
  customerRegion?: string
  customerCity?: string
  customerAddress?: string
  customerLatitude?: number
  customerLongitude?: number
  weight: number
  volume: number
  notesOnDelivery?: string
  billingPackage: string
}
```

{% callout title="Note:" %}
When the type is "PICKUP," provide the business parameter.
When the type is "DIRECT," provide the customerRegion, customerCity, customerLatitude, and customerLongitude parameters.
weight: Total weight of the package.
volume: Total volume of the package.
{% /callout %}

### Data Structure

```shell
Order {
  amount: number
  code: string
  createdAt: Date
  customerAddress: string | null
  customerEmail: string
  customerName: string
  customerPhone: string | null
  id: string
  notesOnDelivery: string | null
  updatedAt: Date
}
```

---

## Responses

Below are the error and success responses you can expect when accessing this endpoint.

### 200: Success

```shell
{ status: boolean; data: Order}
```

### 400: Bad Request

```shell
{ status: boolean; errorMessage: string }
```
