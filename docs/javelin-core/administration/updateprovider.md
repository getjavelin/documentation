# Updating Provider
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X PUT \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "name": "openai",
        "type": "closedsource",
        "config": {
            "api_base": "https://api.openai.com",
            "api_type": "",
            "api_version": "v1",
            "organization": "sales",
            "deployment_name": ""
        }
}' \
"https://api-dev.javelin.live/v1/admin/providers/openai"

`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

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

# get the provider (to see what we need to change)
provider_name = "openai"
provider = client.get_provider(provider_name)

# make the necessary route changes
provider.name = "openai"
provider.type = "closedsource"
provider.enabled = True

# update the provider, for async use `await client.aupdate_provider(provider)`
client.update_provider(provider)

```

</TabItem>

</Tabs>
