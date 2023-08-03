---
title: Order Payments
description: Handle your order payments.
---

Ping us when the order is paid for!

---

## API endpoint

```shell
/v1/countries
```

### Parameters

```shell
params { apiKey: string, reference: string }
```

## Responses

Below are the error and success responses you can expect when accessing this endpoint.

### 200: Success

```shell
{ status: boolean; data: true }
```

### 400: Bad Request

```shell
{ status: boolean; errorMessage: string }
```
