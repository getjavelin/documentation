# Getting Route
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/routes/test_route_1"  
`}
</CodeBlock>

</TabItem>
<TabItem value="py" label="In Python:">

<CodeBlock
  language="python">
  {`from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
    Route
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')
   
# Create Javelin client
config = JavelinConfig(
    base_url="https://api.javelin.live",
    javelin_api_key=javelin_api_key
)
client = JavelinClient(config)

# Route name to get is "test_route_1"
route_name = "test_route_1"

# Get the route, for async use 'await client.aget_route(route_name)'
fetched_route = client.get_route(route_name)
print(fetched_route.model_dump_json(indent=2))`}
</CodeBlock>


</TabItem>
</Tabs>
