# Listing Templates
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-api-key: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/processors/dp/templates"
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin List Templates Example"
  showLineNumbers>
  {`from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
    Template
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
config = JavelinConfig(
    base_url="https://api-dev.javelin.live",
    javelin_api_key=javelin_api_key,
    llm_api_key=llm_api_key
)
client = JavelinClient(config)

# print out the list of templates, for async use \`await client.alist_templates()\`
print(client.list_templates())
`}
</CodeBlock>

</TabItem>

</Tabs>
