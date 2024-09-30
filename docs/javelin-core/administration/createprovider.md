# Creating Provider

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="curl">

<CodeBlock
  language="python">
  {`curl -X POST \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: $JAVELIN_API_KEY" \\
  -d '{
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "type": "inspect",
        "enabled": true,
        "config": {
            "api_base": "https://api.openai.com",
            "api_type": "",
            "api_version": "v1",
            "organization": "",
            "deployment_name": ""
        }
  }' \\
  "https://api.javelin.live/v1/admin/providers/openai"`}
</CodeBlock>


</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Client Example"
  showLineNumbers>
  {`from javelin_sdk import (
    JavelinClient,
    Provider
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')
llm_api_key = os.getenv('LLM_API_KEY')

# Create Javelin configuration
config = JavelinConfig(
    base_url="https://api-dev.javelin.live",
    javelin_api_key=javelin_api_key,
    llm_api_key=llm_api_key
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
        "api_version": "v1",
        "organization": "",
        "deployment_name": ""
    },
}

provider = Provider.parse_obj(provider_data)

# create the provider, for async use \`await client.acreate_provider(provider)\`
client.create_provider(provider)
`}
</CodeBlock>


</TabItem>

</Tabs>
