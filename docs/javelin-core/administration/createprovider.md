# Creating Provider

Providers in Javelin represent the external AI services and models that your routes connect to, such as OpenAI, Anthropic, or local models. This guide walks you through creating and configuring providers to establish connections with your preferred AI services. You'll learn how to set up provider credentials, API endpoints, and configuration parameters to integrate with various model providers.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="curl">

<CodeBlock
  language="python">
  {`curl -X POST \\
  -H "Content-Type: application/json" \\
  -H "x-javelin-apikey: $JAVELIN_API_KEY" \\
  -d '{
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "type": "inspect",
        "enabled": true,
        "config": {
            "api_base": "https://api.openai.com",
            "api_type": "",
            "api_version": "v1"
        }
  }' \\
  "https://your-api-domain.com/v1/admin/providers/openai"`}
</CodeBlock>


</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Client Example"
  showLineNumbers>
  {`from javelin_sdk import (
    JavelinClient,
    Provider,
    JavelinConfig
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# Create Javelin configuration
config = JavelinConfig(
    base_url="https://your-api-domain.com",
    javelin_api_key=javelin_api_key
)

# Create Javelin client
client = JavelinClient(config)

provider_data = {
    "name": "openai",
    "type": "closed",
    "enabled": True,
    "config": {
        "api_base": "https://api.openai.com",
        "api_type": "",
        "api_version": "v1"
    },
}

provider = Provider.model_validate(provider_data)

# create the provider, for async use \`await client.acreate_provider(provider)\`
client.create_provider(provider)
`}
</CodeBlock>


</TabItem>

</Tabs>
