import CodeBlock from '@theme/CodeBlock';

# Quickstart Guide

## Introduction

The Javelin CLI is a tool for interacting with the Javelin SDK. This guide will help you get started with installing and using the CLI to manage gateways, providers, and routes.

## Installation

1. **Ensure Python is Installed**: Python 3.10+ is required.
2. **Install Javelin SDK**:  
   <CodeBlock language="shell">
   {`pip install javelin-sdk`}
   </CodeBlock>

## Environment Setup

Before using the CLI, set up the required environment variables:

<CodeBlock language="shell">
{`export JAVELIN_BASE_URL=your_base_url
export JAVELIN_API_KEY=your_api_key
export JAVELIN_VIRTUALAPIKEY=your_virtual_api_key
export LLM_API_KEY=your_llm_api_key`}
</CodeBlock>

- **JAVELIN_BASE_URL**: Set this to the base URL of your deployment (defaults to https://api-dev.javelin.live).
- **JAVELIN_API_KEY**: Please provide a valid Javelin API Key. When you sign into Javelin, you can find your API Key in the Account -> Developer settings.
- **JAVELIN_VIRTUALAPIKEY**: If applicable, can be found in Routing & Guardrails -> Gateways -> `<Gateway>` -> Secrets.
- **LLM_API_KEY**: This should be set to the API key provided by your LLM (Language Model) provider. You can obtain it from your LLM provider's console.

## Commands Overview

### Gateway Management

- **List Gateways**:  
  <CodeBlock language="shell">
  {`javelin gateway list`}
  </CodeBlock>
  
- **Create a Gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway create --name "example_gateway" --type "development" --enabled true --config '{"buid": "example_buid", "base_url": "https://api.example.com", "organization_id": "example_org_id", "system_namespace": "example_namespace"}'`}
  </CodeBlock>

- **Read a Gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway read --name "example_gateway"`}
  </CodeBlock>

- **Update a Gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway update --name "example_gateway" --type "production" --config '{"buid": "new_buid", "base_url": "https://api.newexample.com"}'`}
  </CodeBlock>

- **Delete a Gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway delete --name "example_gateway"`}
  </CodeBlock>

### Provider Management

- **List Providers**:  
  <CodeBlock language="shell">
  {`javelin provider list`}
  </CodeBlock>
  
- **Create a Provider**:  
  <CodeBlock language="shell">
  {`javelin provider create --name "example_provider" --type "cloud" --api_base "https://api.provider.com" --config '{"api_version": "v1", "deployment_name": "example_deployment", "organization": "example_org"}'`}
  </CodeBlock>

- **Read a Provider**:  
  <CodeBlock language="shell">
  {`javelin provider read --name "example_provider"`}
  </CodeBlock>

- **Update a Provider**:  
  <CodeBlock language="shell">
  {`javelin provider update --name "example_provider" --api_base "https://new-api.provider.com" --config '{"api_version": "v2", "deployment_name": "new_deployment"}'`}
  </CodeBlock>

- **Delete a Provider**:  
  <CodeBlock language="shell">
  {`javelin provider delete --name "example_provider"`}
  </CodeBlock>

### Route Management

- **List Routes**:  
  <CodeBlock language="shell">
  {`javelin route list`}
  </CodeBlock>
  
- **Create a Route**:  
  <CodeBlock language="shell">
  {`javelin route create --name "example_route" --type "chat" --model "gpt-3.5-turbo" --provider "OpenAI" --config '{"rate_limit": 10, "archive": true, "retention": 7, "budget": {"enabled": true, "annual": 50000, "currency": "USD"}, "dlp": {"enabled": true, "strategy": "Inspect", "action": "notify"}}'`}
  </CodeBlock>

- **Read a Route**:  
  <CodeBlock language="shell">
  {`javelin route read --name "example_route"`}
  </CodeBlock>

- **Update a Route**:  
  <CodeBlock language="shell">
  {`javelin route update --name "example_route" --config '{"rate_limit": 20, "budget": {"enabled": false}}'`}
  </CodeBlock>

- **Delete a Route**:  
  <CodeBlock language="shell">
  {`javelin route delete --name "example_route"`}
  </CodeBlock>


