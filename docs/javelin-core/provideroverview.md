---
id: provider-overview
title: Provider Overview
description: Overview of Javelin Providers and their role in the AI infrastructure
sidebar_label: Overview
---

# Provider Overview

In Javelin, **providers** define the external AI services that power your routes. They act as the bridge between your application logic and the underlying AI models—whether commercial APIs like OpenAI and Anthropic, open-source models, or fully custom endpoints hosted in your environment.

Providers centralize the configuration needed to authenticate, connect, and communicate with different model sources, making it easy to manage and switch across multiple services.

## Why Use Providers?

- **Multi-Model Support:** Connect to a wide variety of LLMs from different vendors (or self-hosted) under a unified framework.
- **Centralized Configuration:** Manage API credentials, endpoints, and model parameters in one place for all your routes.
- **Avoid Vendor Lock-in:** Build a resilient AI stack by supporting multiple providers, reducing reliance on a single vendor.
- **Custom Deployment Ready:** Seamlessly integrate with open-source, local, or enterprise-hosted models via configurable custom endpoints.

## How Providers Work

1. **Define a Provider:** Each provider configuration includes a name, provider vendor (e.g., OpenAI, Amazon, Custom), API base URL.
2. **Use in Routes:** When defining a route, you associate it with a specific provider and its models. This determines how requests are processed.
3. **Swap Without Code Changes:** Providers are decoupled from application logic—allowing you to update, switch, or experiment with models without touching your application code.

Providers are a foundational component in Javelin’s architecture, enabling a modular, pluggable approach to AI infrastructure. By abstracting model configuration and connectivity, they make it easier to scale, experiment, and optimize your AI applications.
