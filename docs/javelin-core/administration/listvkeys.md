# Listing Virtual Keys
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="curl">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/providers/keyvault/keys"
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

# print out the list of virtual keys, for async use `await client.alist_secrets()`
print(client.list_secrets())

```

</TabItem>

-->

</Tabs>
