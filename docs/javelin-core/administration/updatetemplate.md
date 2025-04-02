# Updating Template

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
  "name": "InspectPII",
  "description": "Inspect sensitive data",
  "type": "inspect",
  "enabled": true,
  "config": {
    "notify": true,
    "reject": false,
    "infoTypes": [
      {
        "name": "EMAIL_ADDRESS"
      },
      {
        "name": "STREET_ADDRESS"
      },
      {
        "name": "PHONE_NUMBER"
      }
    ],
    "likelihood": "Likely"
  }
}
' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/InspectPII"

`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Update Template Example"
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

# get the template (to see what we need to change)
template_name = "InspectPII"
template = client.get_template(template_name)

# make the necessary template changes

# update the template, for async use \`await client.aupdate_template(template)\`
client.update_template(template)
`}
</CodeBlock>

</TabItem>

</Tabs>
