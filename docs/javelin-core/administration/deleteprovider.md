# Deleting Provider
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="curl">

<CodeBlock
  language="python">
  {`
curl -X DELETE -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/providers/openai"  
`}
</CodeBlock>

</TabItem>

<!--

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
client = JavelinClient(base_url="https://api.javelin.live",
                       javelin_api_key=javelin_api_key,
)

# provider name to delete is "openai"
provider_name = "openai"

# delete the provider, for async use `await client.adelete_provider(provider_name)`
client.delete_provider(provider_name) 

```

</TabItem>

-->

</Tabs>