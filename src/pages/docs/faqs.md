---
title: FAQs
description: Here are some frequently asked questions about our API.
---

Please note that if you have any further questions or need more clarifications, don't hesitate to reach out to our support team for assistance.

---

## How do I obtain the API Key for authentication?

To obtain the API Key for authentication, you need to retrieve it from your retailer account settings page. The API Key serves as a unique identifier to grant access to the API functionalities. Once you have the API Key, you can include it in the request headers while making API calls to authenticate and access the available endpoints.

## What's the difference between "PICKUP" and "DIRECT" order types?

The "PICKUP" order type is used when you want to schedule a pickup of your package by providing the business parameter, representing the pickup spot or courier service. On the other hand, the "DIRECT" order type is for direct delivery to the customer's location. In this case, you should provide additional details like customerRegion, customerCity, customerLatitude, and customerLongitude to specify the delivery destination.
