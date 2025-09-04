---
id: mcp-configuration
title: MCP Configuration Guide
sidebar_label: Configuration
description:
  Learn how to configure and manage MCP servers, tools, and security policies in
  the Javelin application.
---

# MCP Configuration Guide

## Overview

In Javelin, **MCP registries** define how your gateway connects to external [Model Context Protocol (MCP)](mcp-overview) servers and exposes their tools to applications.  
Each registry includes connection details, authentication credentials, and baseline policy controls. You can also selectively enable tools on a per-registry basis to safely extend application capabilities.

![Register MCP](/img/mcp/registerMCP.png)

## MCP Registry Payload Example

```yaml
mcp_registry:
  name: "deepwiki"                                # Unique server key
  description: "Deepwiki MCP server"              # Optional description
  type: "streamable-http"                         # MCP server transport/type
  endpoint: "https://mcp.deepwiki.com/mcp"        # MCP server endpoint URL
  is_active: true                                 # Enable/disable the registry
  config:
    authorization_token: "<SECRET_TOKEN>"         # Optional. Token used by MCP server, if needed
  policy:
    dlp:
      enabled: false
      strategy: ""
    prompt_safety:
      enabled: false
      content_types: []
      reject_prompt: ""
    indirect_prompt_safety:
      enabled: false
      content_types: []
      reject_prompt: ""
```

## Field Descriptions

| Name                                 | Type     | Required | Default | Description |
|--------------------------------------|----------|----------|---------|-------------|
| `name`                               | string   | Yes      | —       | Unique key for this MCP server (e.g., `deepwiki`). |
| `description`                        | string   | No       | —       | Human-readable description. |
| `type`                               | string   | Yes      | —       | MCP server type/transport (e.g., `streamable-http`). |
| `endpoint`                           | string   | Yes      | —       | Base URL for the MCP server. |
| `is_active`                          | boolean  | No       | true    | Whether the MCP registry is enabled. |
| `config.authorization_token`         | string   | No       | —       | Optional. Credential used to authenticate with the MCP server, if needed. |


## Policy Fields

| Name                     | Type   | Required | Default | Description                                                                                                                         |
|--------------------------|--------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------|
| `dlp`                    | object | No       | —       | Detects and prevents the exposure of sensitive information such as personally identifiable data, credentials, or confidential terms in model interactions. |
| `prompt_safety`          | object | No       | —       | Protects against manipulation attempts like prompt injections or jailbreaks that try to bypass model restrictions or redirect behavior. |
| `indirect_prompt_safety` | object | No       | —       | Detects and blocks common security threats in MCP tool usage, such as command injection, path traversal, secrets leakage, and SQL injection. |

## Tool Enable/Disable Payload

Use this payload to enable or disable a specific tool for an MCP server.

```yaml
tool:
  enabled: true
```

| Name      | Type    | Required | Description |
|-----------|---------|----------|-------------|
| `enabled` | boolean | Yes      | Whether the tool is enabled for this MCP server. |

## Policy Precedence

- If a request uses a gateway key (X-Javelin-Apikey), the MCP registry policy is applied.
- If a request uses an application key (X-Javelin-Apikey), the application policy is applied.