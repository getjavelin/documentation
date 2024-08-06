# Getting Gateway
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="Using the API:">

```shell
curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api-dev.javelin.live/v1/admin/gateways/corporate"  
```

</TabItem>

<TabItem value="py" label="In Python:">

```py
from javelin_sdk import (
    JavelinClient,
    Gateway
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')
   
# create javelin client
client = JavelinClient(base_url="https://api-dev.javelin.live",
                       javelin_api_key=javelin_api_key,
) 

# gateway name to get is "corporate"
gateway_name = "corporate"

# get the gateway, for async use `await client.aget_gateway(gateway_name)`
print(client.get_gateway(gateway_name))
```

</TabItem>

</Tabs>
