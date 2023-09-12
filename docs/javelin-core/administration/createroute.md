# Creating Routes
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="cURL">

```shell
curl -X POST \
-H "Content-Type: application/json" \
-d '{
        "name": "test_route_1",
        "type": "chat",
        "model": {
            "name": "text-davinci-003",
            "provider": "openai",
            "suffix": "/chat/completions"
        },
        "config": {
            "rate_limit": 3,
            "archive": true,
            "retries": 3
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

    route_data = {
            "name": "test_route_1",
            "type": "chat",
            "model": {
                "name": "gpt-3.5-turbo",
                "provider": "openai",
                "suffix": "/chat/completions",
            },
            "config": {
                "archive": True,
                "organization": "myusers",
                "retries": 3,
                "rate_limit": 7,
            },
        }

    route = Route.parse_obj(route_data)

    # create the route, for async use `await client.acreate_route(route)`
    client.create_route(route)
 

```

</TabItem>
</Tabs>
