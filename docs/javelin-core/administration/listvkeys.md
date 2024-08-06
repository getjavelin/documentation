# Listing Virtual Keys
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/providers/keyvault/keys"
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin List Secrets Example"
  showLineNumbers>
  {`from javelin_sdk import (
    JavelinClient,
    Secret
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
client = JavelinClient(base_url="https://api-dev.javelin.live",
                       javelin_api_key=javelin_api_key,
) 

# print out the list of secrets, for async use \`await client.alist_secrets()\`
print(client.list_secrets())
`}
</CodeBlock>

</TabItem>

</Tabs>
