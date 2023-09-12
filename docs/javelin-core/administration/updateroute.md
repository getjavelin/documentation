# Updating Routes
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="cURL">

```shell
curl -X PUT \
-H "Content-Type: application/json" \
-d '{
        "name": "test_route_1",
        "type": "chat",
        "model": {
            "name": "gpt-4",
            "provider": "openai",
            "suffix": "/chat/completions"
        },
        "config": {
            "rate_limit": 3,
            "retries": 5
        }
}' \
"http://localhost:9000/api/v1/routes/test_route_1"

```

</TabItem>
<TabItem value="py" label="Python">

```py
    from javelin_sdk import (
        JavelinClient,
        Route
    )

    # create javelin client
    client = JavelinClient(base_url="http://localhost:9000") # replace this with your javelin URL

    # get the route (to see what we need to change)
    route_name = "test_route_1"
    route = client.get_route(route_name)

    # make the necessary route changes
    route.model.name = "gpt-4"    
    route.config.retries = 5      
    route.config.rate_limit = 3   

    # update the route, for async use `await client.aupdate_route(route)`
    client.update_route(route)

```

</TabItem>
</Tabs>
