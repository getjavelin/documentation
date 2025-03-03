# Deleting Route
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X DELETE -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/routes/test_route_1"  
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
    javelin_api_key=javelin_api_key,
    llm_api_key=llm_api_key
)
client = JavelinClient(config)

# Route name to delete is "test_route_1"
route_name = "test_route_1"

# Delete the route, for async use 'await client.adelete_route(route_name)'
client.delete_route(route_name)`}
</CodeBlock>


</TabItem>
</Tabs>
