---
id: application-overview
title: Application Overview
description: Overview of Javelin Application and how it interacts with routes and providers
sidebar_label: Application Overview
---

# Application Overview

In Javelin, **Applications** are a core concept that allow you to interface with your configured routes and providers. Every request to a route must be made through an application, ensuring secure, scoped, and auditable usage of the system.

Applications represent logical clients that interact with Javelin infrastructure. Whether you're integrating with OpenAI, Anthropic, a local model, or a custom endpoint, your queries are always tied to a specific application that governs access and usage.

## How Applications Work

To interact with any route in Javelin:

1. **Create an Application** in Javelin.
2. **Generate a developer key** (API key) associated with that application.
3. **Send a request** to the Javelin API, specifying the route and payload.
4. **Include the developer key** in the request headers to authenticate the application.

Each request is scoped to the application identified by the developer key. This enables granular tracking, rate-limiting, and policy enforcement on a per-application basis.

## Why Use Applications?

- **Access Control**: Developer keys map to specific applications for scoped access.
- **Security**: Isolates access across teams, projects, or clients.
- **Archiving**: All traffic is attributed to a specific application, enabling detailed monitoring and usage analysis.
- **Guardrails**: Enforce safety and compliance by filtering harmful, unsafe, or policy-violating content at the application level.

Applications are the core access point for leveraging your provider and route configurations in Javelin. They enable flexible, secure, and controlled use of your AI infrastructure.