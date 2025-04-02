# Listing Gateways
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
