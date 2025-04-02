# Creating Gateway

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "corporate",
        "type": "development",
        "enabled": true,
        "config": {
            "buid": "kensho",
            "base_url": "https://your-api-domain.com",
            "organization_id": "org_2gaDm7xK9mDWM4JY8x4so8ndoMt",
            "system_namespace": "javelin-dev"
        }
}' \
"https://your-api-domain.com/v1/admin/gateways/corporate"`}
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

# Create Javelin client
config = JavelinConfig(
    base_url="https://your-api-domain.com",
    javelin_api_key=javelin_api_key
)
client = JavelinClient(config)

gateway_data = {
    "name": "corporate",
    "type": "development",
    "enabled": True,
    "config": {
        "buid": "kensho",
        "base_url": "https://your-api-domain.com",
        "organization_id": "org_2gaDm7xK9mDWM4JY8x4so8ndoMt",
        "system_namespace": "javelin-dev"
    }
}

gateway = Gateway.model_validate(gateway_data)

# Create the gateway, for async use 'await client.acreate_gateway(gateway)'
client.create_gateway(gateway)`}
</CodeBlock>


</TabItem>

</Tabs>
