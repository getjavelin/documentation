---
id: route-overview
title: Route Overview
description: Overview of Javelin Routes and their role in request processing
sidebar_label: Overview
---

# Route Overview

In Javelin, **routes** define how incoming requests from applications are handled—from which model processes the request to what policies, limits, and behaviors are applied. Each route is a modular unit that connects applications to specific providers with granular control over request flow, safety, and performance.

Routes enable intelligent request processing, allowing different parts of your application to use different models, providers, and configurations, all while maintaining clear visibility and control.

## Why Use Routes?

- **Precise Request Routing:** Direct traffic to specific providers and models based on route configuration.
- **Layered Control:** Enforce rate limits, retries, archiving, and safety policies independently at the route level.
- **Isolated Use Cases:** Define dedicated routes for distinct workloads—such as chat, completions, or embeddings—tailored to each use case.
- **Scalable Experimentation:** Easily A/B test models or update configurations without affecting other parts of the system.

## How Routes Work

1. **Create a Route:** Define the route’s name, type (e.g., `chat`, `completion`, `embedding`), and the provider/model it connects to.
2. **Configure Behavior:** Attach policies such as rate limits, retries, archiving, and guardrails directly to the route.
3. **Link to Applications:** Routes are called by applications, ensuring each request follows the intended logic, security, and performance requirements.

## Types of Routes

### Custom Routes

Custom routes allow you to define fully bespoke behavior for a route by specifying a unique payload structure or interacting with custom or internal LLM endpoints. You can control the exact request format, headers, and response parsing logic.

**Use for:** Integrating proprietary models, APIs that don’t follow standard formats, or specialized ML workflows.

### Unified Routes

Unified routes are flexible and abstracted to support multiple model types under one logical route. They allow dynamic routing based on request metadata, model preferences, or business logic.

**Use for:** Centralizing multiple capabilities (e.g., chat + completion) into one route, A/B testing models, or conditional routing to fallback providers.

### Auto-Provisioning

When a provider is created, Javelin automatically provisions a default **unified route** associated with that provider. These are known as **reserved routes** and are designed to work out of the box, eliminating the need for additional manual configuration.

These auto-provisioned routes:
- Serve as default access points for new providers
- Can be edited or extended as needed
- Help accelerate development and testing

## Example Use Cases

- Create separate routes for internal vs. external users with different rate limits and guardrails.
- Set up a low-cost route using open-source models for non-critical requests.
- Apply stricter policies and logging for production routes compared to experimental ones.

Routes are the foundation of Javelin’s traffic control and policy enforcement. They provide the flexibility to scale AI usage safely, efficiently, and with full observability.
