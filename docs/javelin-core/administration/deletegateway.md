---
draft: true
---

# Deleting Gateway
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X DELETE -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://your-api-domain.com/v1/admin/gateways/corporate"  
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

# Create Javelin client
config = JavelinConfig(
    base_url="https://your-api-domain.com",
    javelin_api_key=javelin_api_key
)
client = JavelinClient(config)

# Gateway name to delete is "corporate"
gateway_name = "corporate"

# Delete the gateway, for async use 'await client.adelete_gateway(gateway_name)'
client.delete_gateway(gateway_name)`}
</CodeBlock>


</TabItem>

</Tabs>
