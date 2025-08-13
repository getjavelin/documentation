---
id: application-configuration
title: Application Configuration
description: Comprehensive guide to configuring Javelin Application with policy
sidebar_label: Configuration
---

# Application Configuration

Applications in Javelin define how requests are scoped, authorized, and governed. Each application is integrated with your route infrastructure and can include advanced policy configurations.

![Add Application Form](/img/application/imgaddApplication.png)

## Application Payload Example

```yaml
app_config:
  name: "demo-app"           # Unique name for your application
  description: "This is a demo app"  # (Optional) Purpose or details
  type: "Assistant"          # One of: Assistant, Agent, Custom
  is_active: true            # Enable or disable the application
```

## Field Descriptions

| Name          | Type     | Required | Default   | Description                                                                                      |
|---------------|----------|----------|-----------|--------------------------------------------------------------------------------------------------|
| `name`        | string   | Yes      | —         | Unique identifier for the application.                                                           |
| `description` | string   | No       | —         | Human-readable description of the application’s purpose.                                         |
| `type`        | string   | Yes      | —         | Defines the behavior: Assistant, Agent, or Custom (see below).                                   |
| `is_active`   | boolean  | No       | true      | Indicates whether the application is enabled and can receive requests.                           |

### Type Field Options

- **Assistant**: Standard LLM assistant behavior.
- **Agent**: Multi-step agent with planning or tool use.
- **Custom**: User-defined logic or integration.
