# Listing Routes
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/routes"
`}
</CodeBlock>

</TabItem>
<TabItem value="py" label="In Python:">

<CodeBlock
  language="python">
  {`from javelin_sdk import (
    JavelinClient,
    Route
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# Create Javelin client
client = JavelinClient(base_url="https://api.javelin.live",
                       javelin_api_key=javelin_api_key) 

# Print out the list of routes, for async use 'await client.alist_routes()'
print(client.list_routes())`}
</CodeBlock>


</TabItem>
</Tabs>
