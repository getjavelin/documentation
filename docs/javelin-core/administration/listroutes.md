# Listing Routes

Viewing your configured routes helps you understand your current setup and manage your Javelin deployment effectively. This guide shows you how to retrieve and examine all routes in your gateway using both API calls and the Python SDK. You'll learn to list routes to audit configurations, troubleshoot issues, and manage your routing infrastructure.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://your-api-domain.com/v1/admin/routes"
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
    base_url="https://your-api-domain.com",
    javelin_api_key=javelin_api_key
)
client = JavelinClient(config) 

# Print out the list of routes, for async use 'await client.alist_routes()'
routes = client.list_routes()
print(routes.model_dump_json(indent=2))`}
</CodeBlock>


</TabItem>
</Tabs>
