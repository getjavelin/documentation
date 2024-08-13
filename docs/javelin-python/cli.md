import CodeBlock from '@theme/CodeBlock';

# Quickstart Guide

## Introduction

The Javelin CLI is a powerful tool for interacting with the Javelin SDK. This guide will help you get started with installing and using the CLI to manage gateways, providers, and routes.

## Installation

1. **Ensure Python is Installed**: Python 3.8+ is required.
2. **Install Javelin SDK**:  
   <CodeBlock language="shell">
   {`pip install javelin-sdk`}
   </CodeBlock>

## Environment Setup

Before using the CLI, set up the required environment variables:

<CodeBlock language="shell">
{`export JAVELIN_API_KEY=your_api_key
export JAVELIN_VIRTUALAPIKEY=your_virtual_api_key
export LLM_API_KEY=your_llm_api_key
export JAVELIN_BASE_URL=your_base_url (optional, defaults to https://api-dev.javelin.live)`}
</CodeBlock>

## Commands Overview

- **List Gateways**:  
  <CodeBlock language="shell">
  {`javelin gateway list`}
  </CodeBlock>
  
- **Create a Gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway create --name your_gateway_name --type development`}
  </CodeBlock>

- **Update a Gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway update --name your_gateway_name --type production`}
  </CodeBlock>

- **Delete a Gateway**:  
  <CodeBlock language="shell">
  {`javelin gateway delete --name your_gateway_name`}
  </CodeBlock>


