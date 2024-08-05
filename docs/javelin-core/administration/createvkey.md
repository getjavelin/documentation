# Creating Virtual Key
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="Using the API:">

```shell
curl -X POST \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "api_key": "openai-vkey1",
        "api_key_secret_name": "name for the secret key",
        "api_key_secret_key": "secret key",
        "provider_name": "openai",
        "header_key": "",
        "query_param_key": "",
        "group": "demo",
        "enabled": true
}' \
"https://api-dev.javelin.live/v1/admin/providers/openai/keyvault/openai-vkey1"

```

</TabItem>

<TabItem value="py" label="In Python:">

```py
from javelin_sdk import (
    JavelinClient,
    Secret
)

import os
    
# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
client = JavelinClient(base_url="https://api-dev.javelin.live",
                       javelin_api_key=javelin_api_key,
) 

secret_data = {

}

secret = Provider.parse_obj(secret_data)

# create the secret, for async use `await client.acreate_secret(secret)`
client.create_secret(secret)
 

```

</TabItem>

</Tabs>
