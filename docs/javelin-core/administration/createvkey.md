# Creating Virtual Key
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "api_key": "openai-vkey1",
        "api_key_secret_name": "name for the secret key",
        "api_key_secret_key": "secret key",
        "provider_name": "openai",
        "header_key": "",
        "query_param_key": "",
        "group": "demo",
        "enabled": true
}' \
"https://your-api-domain.com/v1/admin/providers/openai/keyvault/openai-vkey1"
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Secret Example"
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

secret_data = {
    // Add your secret data here
}

secret = Secret.model_validate(secret_data)

# create the secret, for async use \`await client.acreate_secret(secret)\`
client.create_secret(secret)
`}
</CodeBlock>


</TabItem>

</Tabs>
