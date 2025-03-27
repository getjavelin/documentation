# Getting Virtual Key
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/providers/openai/keyvault/openai-vkey1"  
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Get Secret Example"
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
    javelin_api_key=javelin_api_key,
    llm_api_key=llm_api_key
)
client = JavelinClient(config)

# secret name to get is "openai-vkey1"
secret_name = "openai-vkey1"

# get the secret, for async use \`await client.aget_secret(secret_name)\`
fetched_secret = client.get_secret(secret_name)
print(fetched_secret.model_dump_json(indent=2))
`}
</CodeBlock>

</TabItem>

</Tabs>
