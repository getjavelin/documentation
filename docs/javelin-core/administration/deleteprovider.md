# Deleting Provider
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="curl">

```shell
curl -X DELETE -H "x-api-key: $JAVELIN_API_KEY" "https://api-dev.javelin.live/v1/admin/providers/openai"  
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

# provider name to delete is "openai"
provider_name = "openai"

# delete the provider, for async use `await client.adelete_provider(provider_name)`
client.delete_provider(provider_name) 

```

</TabItem>

</Tabs>
