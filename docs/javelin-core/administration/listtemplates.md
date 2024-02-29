# Listing Templates
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="curl">

```shell
curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/processors/dp/templates"
```

</TabItem>

<!--

<TabItem value="py" label="Python">

```py
from javelin_sdk import (
    JavelinClient,
    Template
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
client = JavelinClient(base_url="https://api.javelin.live",
                       javelin_api_key=javelin_api_key,
) 

# print out the list of templates, for async use `await client.alist_templates()`
print(client.list_templates())

```

</TabItem>

-->

</Tabs>
