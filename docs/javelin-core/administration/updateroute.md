# Updating Route
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X PUT \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "name": "test_route_1",
        "type": "chat",
        "models": [
            {
                "name": "gpt-4",
                "provider": "openai",
                "suffix": "/chat/completions"
            }
        ],
        "config": {
            "rate_limit": 3,
            "retries": 5
        }
}' \
"https://api-dev.javelin.live/v1/admin/routes/test_route_1"

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
llm_api_key = os.getenv('LLM_API_KEY')

# Create Javelin configuration
config = JavelinConfig(
    base_url="https://api-dev.javelin.live",
    javelin_api_key=javelin_api_key,
    llm_api_key=llm_api_key
)

# Create Javelin client
client = JavelinClient(config)

# Get the route (to see what we need to change)
route_name = "test_route_1"
route = client.get_route(route_name)

# Make the necessary route changes
route.models[0].name = "gpt-4"
route.config.retries = 5
route.config.rate_limit = 3

# Update the route, for async use 'await client.aupdate_route(route)'
client.update_route(route)`}
</CodeBlock>


</TabItem>
</Tabs>
