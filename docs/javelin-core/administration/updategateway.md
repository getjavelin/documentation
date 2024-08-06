# Updating Gateway
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="Using the API:">

```shell
curl -X PUT \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "name": "corporate",
        "type": "production",
        "enabled": true,
        "config": {
            "buid": "kensho",
            "base_url": "https://api-dev.javelin.live",
            "organization_id": "org_2gaDm7xK9mDWM4JY8x4so8ndoMt",
            "system_namespace": "javelin-dev"
        }
}' \
"https://api-dev.javelin.live/v1/admin/gateways/corporate"

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

# get the gateway (to see what we need to change)
gateway_name = "corporate"
gateway = client.get_gateway(gateway_name)

# make the necessary gateway changes
gateway.name = "corporate"
gateway.type = "production"
gateway.enabled = True

# update the gateway, for async use `await client.aupdate_gateway(gateway)`
client.update_gateway(gateway)

```

</TabItem>

</Tabs>
