# Creating Provider

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="curl">

```shell
curl -X POST \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "name": "openai",
        "type": "closed",
        "enabled": true,
        "config": {
            "api_base": "https://api.openai.com",
            "api_type": "",
            "api_version": "v1",
            "organization": "",
            "deployment_name": ""
        }
}' \
"https://api-dev.javelin.live/v1/admin/providers/openai"

```

</TabItem>

<TabItem value="py" label="Python">

```py
from javelin_sdk import (
    JavelinClient,
    Provider
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
client = JavelinClient(base_url="https://api-dev.javelin.live",
                       javelin_api_key=javelin_api_key,
)

provider_data = {
    "name": "openai",
    "type": "closed",
    "enabled": True,
    "config": {
        "api_base": "https://api.openai.com",
        "api_type": "",
        "api_version": "v1",
        "organization": "",
        "deployment_name": ""
    },
}

provider = Provider.parse_obj(provider_data)

# create the provider, for async use `await client.acreate_provider(provider)`
client.create_route(provider)


```

</TabItem>

</Tabs>
