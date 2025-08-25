---
id: provider-usage-guide
title: Provider Guide
description: Manage AI model providers and understand their integration in Javelin.
sidebar_label: Guides
---

# Provider Guides

Providers in Javelin act as the bridge between your application and external Large Language Model (LLM) services like OpenAI, Anthropic, Cohere, etc. By configuring providers, you enable routing requests to specific models, control secrets, and manage access in a modular and secure way. Providers also help standardize interactions across different LLM vendors.

## Provider Page Tabs

Each provider page contains the following tabs:

### 1. **Details**
- Displays the provider name and the provider base URL.
- Shows an Example Request (auto-generated unified route curl), which allows you to send requests immediately using the system-reserved route.

![Provider Page](/img/provider/providerPage.png)

### Example Request for OpenAI

When a provider is created in Javelin, the system **automatically provisions a unified route**, also known as a **Reserved Route**. This route allows immediate usage of the provider without additional setup and is visible under the **Unified Routes** tab.

You’ll find a ready-to-use curl command on the **Details** tab of each provider. This command is designed for the system-generated unified route:

```bash
curl -X POST "https://api-dev.javelin.live/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "X-Javelin-apikey: $JAVELIN_API_KEY" \
  -H "X-Javelin-route: openai" \
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Tell me about Javelin."}
    ],
    "temperature": 0.7,
    "max_tokens": 150
  }'
```

:::tip
`$OPENAI_API_KEY` is your LLM provider key from OpenAI, used to authenticate requests to the OpenAI API.
`$JAVELIN_API_KEY` is your application's API key in Javelin, used to authorize requests.
:::

:::note
Replace `$OPENAI_API_KEY` and `$JAVELIN_API_KEY` with actual values. To learn how to generate secrets and retrieve your API keys, see the [Route Guide](./route-usage-guide).
:::

### 2. **Unified Routes**

- This tab lists all **unified routes** associated with the provider.

![Unified Route List](/img/provider/unifiedRouteList.png)

- Now each provider comes with an out-of-the-box, system generated unified route, this is referred to as **"Reserved"** route.

- Like any other unified route, reserved route is also configurable, For more information visit [Unified Route Configuration](./route-configuration#unified-route).

:::Note
Reserved routes are named after the provider (e.g., `openai`, `anthropic`) and are pre-configured with default model settings.
:::

### 3. **Custom Routes**

- This tab lists all **custom routes** associated with the provider.

![Custom Route List](/img/provider/customRouteList.png)

- Unlike unified routes, custom route is associate with a particular model of its provider.

You can define your own routes with custom behavior for more advanced or proprietary use cases.

For a complete guide on Unified and Custom Routes, creating secrets, and using Playground, visit our [guide](./route-usage-guide) on route.