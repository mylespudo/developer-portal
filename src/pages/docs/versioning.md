---
title: Versioning
description: API versioning
---

To ensure a smooth and stable integration process, the Myles API supports versioning. API versioning allows us to make updates and improvements to the API while maintaining backward compatibility for existing integrations. Here's how our versioning strategy works:

---

## Versioning Format

The API version is specified in the base URL to differentiate between different releases. For example:

Version 1 (current version)

```shell
https://api.mylespudo.com/api/v1
```

Future Version 2 (not yet released)

```shell
https://api.mylespudo.com/api/v2
```

## Backward Compatibility

We strive to maintain backward compatibility within a major version (e.g., v1). This means that existing API integrations will continue to function as expected even if we release updates. Minor changes and improvements will be introduced without breaking the existing functionality.

## Deprecated Endpoints

In the event that we introduce significant changes or enhancements that may impact existing integrations, we will deprecate the outdated endpoints. However, deprecated endpoints will still be available for a certain period to allow for a smooth transition to the new version.

## Migration Guide

If we release a new major version (e.g., v2) with substantial changes, we will provide a detailed migration guide to help you seamlessly transition from the older version to the new one. It will include step-by-step instructions and code examples to update your integration.

By following our versioning strategy, you can be confident that your integration with the Myles API will remain stable and future-proof as we continue to evolve the API to meet your needs.
