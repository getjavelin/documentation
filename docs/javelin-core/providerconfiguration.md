---
id: provider-configuration
title: Provider Configuration
description: Configure AI providers such as OpenAI, Anthropic, or custom endpoints for your Javelin routes.
sidebar_label: Configuration
---

# Provider Configuration

Providers represent the external AI services and models that power your Javelin routes, including both open-source and closed-source Large Language Models (LLMs). This guide outlines how to configure provider objects, including endpoint details and API credentials.

![Provider Configuration](/img/provider/addProvider.png)

## Provider Object

```yaml
provider:
  name: "openai"
  reserved_name: "openai"
  config:
    api_base: "https://api.openai.com"
```

## Provider Fields

| Name     | Type   | Required | Default | Description                                                                                   |
|----------|--------|----------|---------|-----------------------------------------------------------------------------------------------|
| `name`   | string | Yes      | —       | Unique identifier for the provider. Typically reflects the vendor or service (e.g., openai). |
| `reserved_name` | object | Yes      | —       |  Identifies the provider vendor (e.g., openai, amazon, cohere) and is used internally by Javelin. |
| `config` | object | Yes      | —       | Connection settings used to interact with the provider. See config fields below.             |

### Config Fields

| Name           | Type   | Required | Default | Description                                                                                   |
|----------------|--------|----------|---------|-----------------------------------------------------------------------------------------------|
| `api_base`     | string | Yes      | —       | Base URL for API requests (e.g., `https://api.openai.com`).                                  |

:::note 
Each provider object is independently defined and referenced within each route's configuration. This allows full flexibility in supporting different providers across different routes.
:::
