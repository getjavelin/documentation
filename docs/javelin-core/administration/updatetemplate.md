# Updating Template
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="curl">

```shell
curl -X PUT \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "type": "inspect",
        "enabled": true,
        "config": {
            "notify": true,
            "reject": false,
            "infoTypes": [
                {
                    "name": "EMAIL_ADDRESS"
                },
                {
                    "name": "STREET_ADDRESS"
                },
                {
                    "name": "PHONE_NUMBER"
                },
            ],
            "likelihood": "Likely"
        }
}' \
"https://api.javelin.live/v1/admin/processors/dp/templates/InspectPII"

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

# get the provider (to see what we need to change)
template_name = "InspectPII"
template = client.get_template(template_name)

# make the necessary template changes

# update the template, for async use `await client.aupdate_template(template)`
client.update_template(template)

```

</TabItem>

-->

</Tabs>