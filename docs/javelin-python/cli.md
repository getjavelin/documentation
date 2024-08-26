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
  
- **Create a gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway create --name "example_gateway" --type "development" --enabled true --config '{"buid": "example_buid", "base_url": "https://api.example.com", "organization_id": "example_org_id", "system_namespace": "example_namespace"}'`}
  </CodeBlock>

- **List all gateways**:  
  <CodeBlock language="shell">
  {`javelin gateway list`}
  </CodeBlock>

- **Get a specific gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway get --name "example_gateway"`}
  </CodeBlock>

- **Update a gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway update --name "example_gateway" --type "production" --config '{"buid": "new_buid", "base_url": "https://api.newexample.com"}'`}
  </CodeBlock>

- **Delete a gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway delete --name "example_gateway"`}
  </CodeBlock>

### Provider Management
  
- **Create a provider**:  
  <CodeBlock language="shell">
  {`javelin provider create --name "example_provider" --type "closed" --config '{"api_version": "v1", "deployment_name": "example_deployment", "organization": "example_org"}'`}
  </CodeBlock>

- **List all providers**:  
  <CodeBlock language="shell">
  {`javelin provider list`}
  </CodeBlock>

- **Get a specific provider**:  
  <CodeBlock language="shell">
  {`javelin provider get --name "example_provider"`}
  </CodeBlock>

- **Update a provider**:  
  <CodeBlock language="shell">
  {`javelin provider update --name "example_provider" --config '{"api_base" "https://new-api.provider.com"}'`}
  </CodeBlock>

- **Delete a provider**:  
  <CodeBlock language="shell">
  {`javelin provider delete --name "example_provider"`}
  </CodeBlock>

### Route Management

- **Create a route**:  
  <CodeBlock language="shell">
  {`javelin route create --name "example_route" --type "completion" --enabled true --models '[{"name": "model1", "provider": "provider1", "suffix": "suffix1"}, {"name": "model2", "provider": "provider2", "suffix": "suffix2"}]' --config '{"organization": "example_org", "owner": "owner1", "rate_limit": 1000, "retries": 3, "archive": true, "retention": 30, "budget": {"enabled": true, "weekly": 2500, "currency": "USD"}, "dlp": {"enabled": true, "strategy": "block", "action": "alert"}}'`}
  </CodeBlock>

- **List all routes**:  
  <CodeBlock language="shell">
  {`javelin route list`}
  </CodeBlock>

- **Get a specific route**:  
  <CodeBlock language="shell">
  {`javelin route get --name "example_route"`}
  </CodeBlock>

- **Update a route**:  
  <CodeBlock language="shell">
  {`javelin route update --name "example_route" --config '{"rate_limit": 20, "budget": {"enabled": false}}'`}
  </CodeBlock>

- **Delete a route**:  
  <CodeBlock language="shell">
  {`javelin route delete --name "example_route"`}
  </CodeBlock>

### Secret Management

- **Create a secret**:  
  <CodeBlock language="shell">
  {`javelin secret create --api_key "example_api_key" --api_key_secret_name "example_secret_name" --api_key_secret_key "example_secret_key" --provider_name "example_provider" --query_param_key "example_param_key" --header_key "example_header_key" --group "example_group" --enabled true`}
  </CodeBlock>

- **List all secrets**:  
  <CodeBlock language="shell">
  {`javelin secret list`}
  </CodeBlock>

- **Update a secret**:  
  <CodeBlock language="shell">
  {`javelin secret update --api_key "example_api_key" --api_key_secret_name "example_secret_name" --api_key_secret_key "new_secret_key" --enabled false`}
  </CodeBlock>

- **Delete a secret**:  
  <CodeBlock language="shell">
  {`javelin secret delete --api_key "example_api_key" --provider_name "example_provider"`}
  </CodeBlock>

### Template Management

- **Create a template**:  
  <CodeBlock language="shell">
  {`javelin template create --name "example_template" --description "A template for testing" --type "inspect" --enabled true --models '[{"name": "Sensitive Data Protection", "provider": "Google Cloud", "suffix": ""}]' --config '{"infoTypes": [{"name": "Personal Identifier", "regex": "\\b\\d{3}-\\d{2}-\\d{4}\\b"}], "likelihood": "Likely", "notify": true}'`}
  </CodeBlock>

- **List all templates**:  
  <CodeBlock language="shell">
  {`javelin template list`}
  </CodeBlock>

- **Get a specific template**:  
  <CodeBlock language="shell">
  {`javelin template get --name "example_template"`}
  </CodeBlock>

- **Update a template**:  
  <CodeBlock language="shell">
  {`javelin template update --name "example_template" --description "Updated description"`}
  </CodeBlock>

- **Delete a template**:  
  <CodeBlock language="shell">
  {`javelin template delete --name "example_template"`}
  </CodeBlock>
  
