# Getting Provider
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`curl -X GET -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/providers/openai"  
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Get Provider Example"
  showLineNumbers>
  {`from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
    Provider
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')
llm_api_key = os.getenv('LLM_API_KEY')

# Create Javelin configuration
config = JavelinConfig(
    base_url="https://api.javelin.live",
    javelin_api_key=javelin_api_key,
    llm_api_key=llm_api_key
)

# Create Javelin client
client = JavelinClient(config)

# provider name to get is "openai"
provider_name = "openai"

# get the provider, for async use \`await client.aget_provider(provider_name)\`
fetched_provider = client.get_provider(provider_name)
print(fetched_provider.model_dump_json(indent=2))
`}
</CodeBlock>

</TabItem>

</Tabs>
