# Getting Template
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="Using the API:">

```shell
curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api-dev.javelin.live/v1/admin/processors/dp/templates/InspectPII"  
```

</TabItem>

<TabItem value="py" label="In Python:">

```py
from javelin_sdk import (
    JavelinClient,
    Template
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')
   
# create javelin client
client = JavelinClient(base_url="https://api-dev.javelin.live",
                       javelin_api_key=javelin_api_key,
) 

# template name to get is "InspectPII"
template_name = "InspectPII"

# get the template, for async use `await client.aget_template(template_name)`
print(client.get_template(template_name))
```

</TabItem>

</Tabs>
