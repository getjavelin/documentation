# Listing Routes
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="cURL">

```shell
curl -X GET "http://localhost:9000/api/v1/routes"
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

    # print out the list of routes, for async use `await client.alist_routes()`
    print(client.list_routes())

```

</TabItem>
</Tabs>
