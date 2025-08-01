# Updating Virtual Key
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
        "api_key": "openai-vkey1",
        "api_key_secret_name": "new name for your secret",
        "api_key_secret_key": "new key",
        "enabled": true,
        "organization": ""
}' \
"https://your-api-domain.com/v1/admin/providers/openai/keyvault/openai-vkey1"

`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Update Secret Example"
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
    base_url="https://your-api-domain.com",
    javelin_api_key=javelin_api_key
)
client = JavelinClient(config)

# get the secret (to see what we need to change)


# make the necessary changes


# update the secret, for async use \`await client.aupdate_secret(secret)\`
client.update_secret(secret)
`}
</CodeBlock>

</TabItem>

</Tabs>
