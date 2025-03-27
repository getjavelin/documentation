# Listing Virtual Keys
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/providers/keyvault/keys"
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
    JavelinConfig,
    Secret
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
config = JavelinConfig(
    base_url="https://api.javelin.live",
    javelin_api_key=javelin_api_key
)
client = JavelinClient(config)

# print out the list of secrets, for async use \`await client.alist_secrets()\`
secrets = client.list_secrets()
print(secrets.model_dump_json(indent=2))
`}
</CodeBlock>

</TabItem>

</Tabs>
