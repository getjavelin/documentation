# Deleting Template
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<Tabs>
<TabItem value="shell" label="Using the API:">

<CodeBlock
  language="python">
  {`
curl -X DELETE -H "x-javelin-apikey: $JAVELIN_API_KEY" "https://your-api-domain.com/v1/admin/processors/dp/templates/InspectPII"  
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Delete Template Example"
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
    base_url="https://your-api-domain.com",
    javelin_api_key=javelin_api_key
)
client = JavelinClient(config)

# template name to delete is "InspectPII"
template_name = "InspectPII"

# delete the template, for async use \`await client.adelete_template(template_name)\`
client.delete_template(template_name) 
`}
</CodeBlock>

</TabItem>

</Tabs>
