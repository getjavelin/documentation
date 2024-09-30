# Creating Route
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
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "name": "test_route_1",
        "type": "chat",
        "enabled": true,
        "models": [ 
            {
                "name": "gpt-3.5-turbo",
                "provider": "openai",
                "suffix": "/chat/completions"
            }
        ],
        "config": {
            "rate_limit": 3,
            "retries": 3,
            "archive": true,
            "retention": 7,
            "budget": {
                "enabled": true,
                "annual": 100000,
                "currency": "USD"
            },
            "dlp": {
                "enabled": false 
            }
        }
}' \
"https://api.javelin.live/v1/admin/routes/test_route_1"
`}
</CodeBlock>

</TabItem>
<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Route Example"
  showLineNumbers>
  {`from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
    Route
)

import os
    
# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
config = JavelinConfig(
    base_url="https://api-dev.javelin.live",
    javelin_api_key=javelin_api_key,
    llm_api_key=llm_api_key
)
client = JavelinClient(config)

route_data = {
    "name": "test_route_1",
    "type": "chat",
    "enabled": True,
    "models": [
        {
            "name": "gpt-3.5-turbo",
            "provider": "openai",
            "suffix": "/chat/completions",
        }
    ],
    "config": {
        "rate_limit": 7,
        "retries": 3,
        "archive": True,
        "retention": 7,
        "budget": {
            "enabled": True,
            "annual": 100000,
            "currency": "USD",
        },
        "dlp": {
            "enabled": False,
        },
    },
}

route = Route.parse_obj(route_data)

# create the route, for async use \`await client.acreate_route(route)\`
client.create_route(route)
`}
</CodeBlock>


</TabItem>
</Tabs>
