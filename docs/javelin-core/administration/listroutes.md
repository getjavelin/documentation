# Listing Routes
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="cURL">

```shell
curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/routes"
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

# print out the list of routes, for async use `await client.alist_routes()`
print(client.list_routes())

```

</TabItem>
</Tabs>
