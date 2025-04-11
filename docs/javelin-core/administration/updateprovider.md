# Updating Provider
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
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "openai",
        "type": "closedsource",
        "config": {
            "api_base": "https://api.openai.com",
            "api_type": "",
            "api_version": "v1"
        }
}' \
"https://your-api-domain.com/v1/admin/providers/openai"
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Update Provider Example"
  showLineNumbers>
  {`from javelin_sdk import (
    JavelinClient,
    JavelinConfig
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

# get the provider (to see what we need to change)
provider_name = "openai"
provider = client.get_provider(provider_name)

# make the necessary route changes
provider.name = "openai"
provider.type = "closed"
provider.enabled = True

# update the provider, for async use \`await client.aupdate_provider(provider)\`
client.update_provider(provider)
`}
</CodeBlock>

</TabItem>

</Tabs>
