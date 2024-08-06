# Creating Gateway

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="Using the API:">

```shell
curl -X POST \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "name": "corporate",
        "type": "development",
        "enabled": true,
        "config": {
            "buid": "kensho",
            "base_url": "https://api-dev.javelin.live",
            "api_key_value": "A17MR3tN8jr7B6IVLzoA2HTWEHB_wSFHZ_zvPt8NMQf09rwh4Q0KlG0QialcMtpIwqXg8OFthr9tmOGwIbOxbdVoRTdJ_S1iHb",
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

gateway_data = {
    "name": "corporate",
    "type": "development",
    "enabled": True,
    "config": {
        "buid": "kensho",
        "base_url": "https://api-dev.javelin.live",
        "api_key_value": "A17MR3tN8jr7B6IVLzoA2HTWEHB_wSFHZ_zvPt8NMQf09rwh4Q0KlG0QialcMtpIwqXg8OFthr9tmOGwIbOxbdVoRTdJ_S1iHb",
        "organization_id": "org_2gaDm7xK9mDWM4JY8x4so8ndoMt",
        "system_namespace": "javelin-dev"
    },
}

gateway = Gateway.parse_obj(gateway_data)

# create the gateway, for async use `await client.acreate_gateway(gateway)`
client.create_gateway(gateway)


```

</TabItem>

</Tabs>
