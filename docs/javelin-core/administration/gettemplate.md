# Getting Template
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X GET -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://api.javelin.live/v1/admin/processors/dp/templates/InspectPII"  
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Get Template Example"
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
    base_url="https://api.javelin.live",
    javelin_api_key=javelin_api_key
)
client = JavelinClient(config)

# template name to get is "InspectPII"
template_name = "InspectPII"

# get the template, for async use \`await client.aget_template(template_name)\`
fetched_template = client.get_template(template_name)
print(fetched_template.model_dump_json(indent=2))
`}
</CodeBlock>

</TabItem>

</Tabs>
