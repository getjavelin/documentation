# Creating Virtual Key
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="curl">

<CodeBlock
  language="python">
  {`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "api_key": "openapi-vkey1",
        "api_key_secret_name": "name for the secret key",
        "api_key_secret_key": "secret key",
        "provider_name": "openai",
        "header_key": "",
        "query_param_key": "",
        "group": "demo",
        "enabled": true
}' \
"https://api.javelin.live/v1/admin/providers/openai/keyvault/openai-vkey1"
`}
</CodeBlock>

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

secret_data = {

}

secret = Provider.parse_obj(secret_data)

# create the secret, for async use `await client.acreate_secret(secret)`
client.create_secret(secret)
 

```

</TabItem>

-->

</Tabs>