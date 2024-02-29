# Getting Virtual Key
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="curl">

```shell
curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/providers/openai/keyvault/openai-vkey1"  
```

</TabItem>

<!--
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
client = JavelinClient(base_url="https://api.javelin.live",
                       javelin_api_key=javelin_api_key,
) 

# secret name to get is "openai-vkey1"
secret_name = "openai-vkey1"

# get the secret, for async use `await client.aget_provider(secret_name)`
print(client.get_secret(secret_name))
```

</TabItem>

-->

</Tabs>
