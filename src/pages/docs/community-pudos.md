---
title: Community pudo
description: Fetch list of community pudo points.
---

Fetch Community Pudos.

These are pickup spots/courier services mainly handling deliveries for orders/packages Use this endpoint to fetch the Pickup Dropoff Businesses (Pudos).

---

## API endpoint

```shell
/v1/pudos
```

### Parameters

```shell
params { apiKey: string, region: string, city: string }
```

### Data Structure

```shell
Pudo {
  id: string
  address: string
  city: string
  openedAt: Date | null
  closedAt: Date | null
  contactEmail: string
  contactName: string
  contactPhone: string
  createdAt: Date
  hours: string | null
  latitude: number
  longitude: number
  name: string
  region: string
  socialMediaLinks: string | null
  type: DROPOFF_POINT | COMMUNITY
}
```

{% callout title="Note:" %}
Avoid using the "type" field for delivery-related configurations in the Pudo Point. It serves a different purpose and may cause unexpected behavior. Instead, use appropriate fields or methods designed for handling delivery options to ensure accurate processing of orders or shipments. Refer to the documentation for correct usage and avoid any confusion.
{% /callout %}

---

## Responses

Below are the error and success responses you can expect when accessing this endpoint.

### 200: Success

```shell
{ status: boolean; data: Array<Pudo> }
```

### 400: Bad Request

```shell
{ status: boolean; errorMessage: string }
```
