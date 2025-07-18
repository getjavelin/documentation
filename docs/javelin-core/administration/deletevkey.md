# Deleting Virtual Key
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X DELETE -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://your-api-domain.com/v1/admin/providers/openai/keyvault/openai-vkey1"  
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Delete Secret Example"
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

# secret name to delete is "openai-vkey1"
secret_name = "openai-vkey1"
provider = "openai"

# delete the secret, for async use \`await client.adelete_secret(secret_name)\`
client.delete_secret(secret_name, provider) 
`}
</CodeBlock>


</TabItem>

</Tabs>
