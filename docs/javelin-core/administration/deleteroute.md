# Deleting Route
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="cURL">

```shell
curl -X DELETE -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/routes/test_route_1"  
```

</TabItem>
<TabItem value="py" label="Python">

```py
from javelin_sdk import (
    JavelinClient,
    Route
)
import os
 
# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
client = JavelinClient(base_url="https://api.javelin.live",
                       javelin_api_key=javelin_api_key,
)

# route name to delete is "test_route_1"
route_name = "test_route_1"

# delete the route, for async use `await client.adelete_route(route_name)`
client.delete_route(route_name) 

```

</TabItem>
</Tabs>
