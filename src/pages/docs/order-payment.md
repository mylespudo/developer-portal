---
title: Order Payments
description: Handle your order payments.
url: /docs/order-payment
---

Ping us when the order is paid for.

---

## API endpoint

```shell
PATCH /v1/orders/:orderId/pay
```

### Headers

```shell
{ X-Myles-Api-Key: string }
```


### Request Body

```shell
{ 
    # Payment reference number. This will help us track payments later on.
    reference: string
}
```

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

