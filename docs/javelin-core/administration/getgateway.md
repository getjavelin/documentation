# Getting Gateway
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api-dev.javelin.live/v1/admin/gateways/corporate"  
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python">
  {`from javelin_sdk import (
    JavelinClient,
    Gateway
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# Create Javelin client
client = JavelinClient(base_url="https://api-dev.javelin.live",
                       javelin_api_key=javelin_api_key)

# Gateway name to get is "corporate"
gateway_name = "corporate"

# Get the gateway, for async use 'await client.aget_gateway(gateway_name)'
print(client.get_gateway(gateway_name))`}
</CodeBlock>


</TabItem>

</Tabs>
