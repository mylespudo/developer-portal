---
title: Create Order
description: Order creation for your shop.
url: /docs/orders
---


Create an order with us using this endpoint.

---

## API endpoint

```shell
POST /v1/orders
```

### Headers

```shell
{ X-Myles-Api-Key: string }
```

### Request Body

```shell
{
  type: PICKUP | DIRECT;
  business?: UUID;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerRegion?: string;
  customerCity?: string;
  customerAddress?: string;
  customerLatitude?: number;
  customerLongitude?: number;
  notesOnDelivery?: string;
  billingPackage: UUID;
  products: Array<{
    name: string;
    description?: string;
    amount: number;
    weight?: number;
    volume?: number;
    image?: string;
    # This helps users tracking orders on our system view your products 
    # directly on your website.
    productLink?: string;
    quantity: number;
  }>
}
```

{% callout title="Note:" %}
- When the type is "PICKUP," provide the business parameter.
- When the type is "DIRECT," provide the customerRegion, customerCity, customerLatitude, and customerLongitude parameters.
- If you already have a delivery business on myles and you want to handle your own deliveries, you can use your business id.
- On myles, we deal with pesewas so convert your product prices into pesewas. (You can do that by multiplying by 100).
{% /callout %}

### Data Structure

```shell
Order {
  deliveryFee: number # Pesewa equivalent
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
{ status: boolean; data: Array<City> }
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
