# Updating Virtual Key
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="curl">

```shell
curl -X PUT \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "api_key": "openai-vkey1",
        "api_key_secret_name": "new name for your secret",
        "api_key_secret_key": "new key",
        "group": "",
        "enabled": true,
        "organization": ""
}' \
"https://api-dev.javelin.live/v1/admin/providers/openai/keyvault/openai-vkey1"

```

</TabItem>

<TabItem value="py" label="Python">

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

# get the secret (to see what we need to change)


# make the necessary changes


# update the secret, for async use `await client.aupdate_secret(secret)`
client.update_secret(secret)

```

</TabItem>

</Tabs>
