# Updating Route
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="Using the API:">

```shell
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

```

</TabItem>
<TabItem value="py" label="In Python:">

```py
from javelin_sdk import (
    JavelinClient,
    Route
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
client = JavelinClient(base_url="https://api-dev.javelin.live",
                       javelin_api_key=javelin_api_key,
) 

# get the route (to see what we need to change)
route_name = "test_route_1"
route = client.get_route(route_name)

# make the necessary route changes
route.models[0].name = "gpt-4"    
route.config.retries = 5      
route.config.rate_limit = 3   

# update the route, for async use `await client.aupdate_route(route)`
client.update_route(route)

```

</TabItem>
</Tabs>
