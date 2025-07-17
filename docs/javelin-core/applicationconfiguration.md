# Application Configuration

Applications in Javelin represent your AI-powered services and systems that connect to the Javelin Gateway. After setting up your gateway and configuring providers, the next step is registering and configuring your applications to leverage Javelin's security, routing, and management capabilities.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock'; 

## Prerequisites

Before registering an application, ensure you have:
- ✅ **Gateway Created**: Your Javelin Gateway is running and accessible
- ✅ **Provider Configured**: At least one AI provider (OpenAI, Anthropic, etc.) is set up
- ✅ **Authentication**: Valid API credentials for Javelin Gateway access

## Register Your Application

### Create Application Configuration

Applications are registered through the Javelin API or web interface. Here's the basic application structure:

<CodeBlock
  language="json">
  {`{
    "name": "my-chatbot-app",
    "description": "Customer service chatbot application",
    "type": "custom",
    "endpoint": "http://javelin-redteam-lab1:8002/v1/redteam/lab1/chat",
    "config": {
      "red_team": {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "payload_template": {
          "query": "{{query}}",
        },
        "request_json": {
          "sample": { "query": "get_product_info(product)" }
        },
        "response_json": {
          "sample": { "response": "umbrella: Sturdy umbrella" }
        }
      }
    }
  }`}
</CodeBlock>

To register a new app:

1. Go to "Applications" section. Click "Create New Application"

   ![Create New Application Button](/img/application/CreateNewApp.png)

2. Fill in application details:
   - Name: my-chatbot-app
   - Select Type of App: Assistant, Agent or Custom
   - Description: Customer service chatbot application
   - Endpoint: ```http://javelin-redteam-lab1:8002/v1/redteam/lab1/chat```

   ![Add Application Form](/img/application/AddApplication.png)

3. Fill in API Request details

   ![API Request Configuration Section](/img/application/APIRequestSection.png)

   :::note
   API request details are required for some features like [javelin-redteam](/docs/javelin-redteam/overview.md), but are not mandatory for registering an app
   :::

4. Click on "SAVE"

## Configuration details

### Application Fields

| Field | Description | Required |
|-------|-------------|----------|
| `name` | Unique identifier for your application within Javelin ecosystem | ✅ |
| `type` | Application type: `Assistant`, `Agent`, `Custom`| ✅ |
| `description` | Human-readable description of the application's purpose | ✅ |

### API Request Fields

| Field | Description | Default |
|-------|-------------|---------|
| `URL` | Your application's API endpoint that will be called (or scanned) | Required |
| `Headers` | Headers that need to be sent along with the request | ```{ "Content-Type":"application/json"}``` |
| `Payload Template` | A template specifying the payload structure when calling the API endpoint specified in URL. Usually there would be a ```{{query}}``` placeholder text where the LLM prompt would be inserted | ```{ "query": "{{query}}", "session_token": "user" }``` |


After registering your application, create routes to connect it with your configured providers.

For detailed route configuration options, see our [Route Configuration Guide](/docs/javelin-core/routeconfiguration.md).

