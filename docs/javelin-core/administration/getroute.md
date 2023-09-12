# Getting Route
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="cURL">

```shell
curl -X GET "http://localhost:9000/api/v1/routes/cohere"  
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

    # route name to get is "eng_dept"
    route_name = "eng_dept"

    # get the route, for async use `await client.aget_route(route_name)`
    print(client.get_route(route_name))
```

</TabItem>
</Tabs>
