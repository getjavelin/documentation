---
draft: true
---

# Listing Gateways

Viewing your configured gateways helps you understand your deployment structure and manage multiple environments or business units effectively. This guide shows you how to retrieve and examine all gateways in your organization using both API calls and the Python SDK. You'll learn to list gateways to audit your infrastructure, manage access controls, and organize your Javelin deployment.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://your-api-domain.com/v1/admin/gateways"
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python">
  {`from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
    Gateway
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

# Print out the list of gateways, for async use 'await client.alist_gateways()'
gateways = client.list_gateways()
print(gateways.model_dump_json(indent=2))`}
</CodeBlock>


</TabItem>

</Tabs>
