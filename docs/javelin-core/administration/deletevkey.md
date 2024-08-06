# Deleting Virtual Key
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X DELETE -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/providers/openai/keyvault/openai-vkey1"  
`}
</CodeBlock>

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
client = JavelinClient(base_url="https://api.javelin.live",
                       javelin_api_key=javelin_api_key,
)

# secret name to delete is "openai-vkey1"
secret_name = "openai-vkey1"

# delete the secret, for async use `await client.adelete_secret(secret_name)`
client.delete_secret(secret_name) 

```

</TabItem>

</Tabs>
