# Creating Template
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="Using the API:">

```shell
curl -X POST \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "type": "inspect",
        "enabled": true,
        "models": [
            {
                "name": "Sensitive Data Protection",
                "provider": "Google Cloud",
                "suffix": "",
                "weight": 0
            }
        ]
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
                },
                {
                    "name": "VEHICLE_IDENTIFICATION_NUMBER"
                },
                {
                    "name": "ADVERTISING_ID"
                },
                {
                    "name": "PERSON_NAME"
                },
                {
                    "name": "US_DRIVERS_LICENSE_NUMBER"
                },
                {
                    "name": "PASSPORT"
                },
                {
                    "name": "US_SOCIAL_SECURITY_NUMBER"
                },
                {
                    "name": "US_INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER"
                },
                {
                    "name": "MAC_ADDRESS_LOCAL"
                },
                {
                    "name": "EMAIL_ADDRESS"
                },
                {
                    "name": "STREET_ADDRESS"
                },
                {
                    "name": "PHONE_NUMBER"
                },
                {
                    "name": "VEHICLE_IDENTIFICATION_NUMBER"
                },
                {
                    "name": "ADVERTISING_ID"
                },
                {
                    "name": "PERSON_NAME"
                },
                {
                    "name": "US_DRIVERS_LICENSE_NUMBER"
                },
                {
                    "name": "PASSPORT"
                },
                {
                    "name": "US_SOCIAL_SECURITY_NUMBER"
                },
                {
                    "name": "US_INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER"
                },
                {
                    "name": "FDA_CODE"
                },
                {
                    "name": "ICD10_CODE"
                },
                {
                    "name": "ICD9_CODE"
                },
                {
                    "name": "MEDICAL_RECORD_NUMBER"
                },
                {
                    "name": "MEDICAL_TERM"
                },
                {
                    "name": "US_MEDICARE_BENEFICIARY_ID_NUMBER"
                },
                {
                    "name": "US_HEALTHCARE_NPI"
                },
                {
                    "name": "AUTH_TOKEN"
                },
                {
                    "name": "AWS_CREDENTIALS"
                },
                {
                    "name": "AZURE_AUTH_TOKEN"
                },
                {
                    "name": "BASIC_AUTH_HEADER"
                },
                {
                    "name": "GCP_API_KEY"
                },
                {
                    "name": "GCP_CREDENTIALS"
                },
                {
                    "name": "HTTP_COOKIE"
                },
                {
                    "name": "JSON_WEB_TOKEN"
                },
                {
                    "name": "ENCRYPTION_KEY"
                },
                {
                    "name": "OAUTH_CLIENT_SECRET"
                },
                {
                    "name": "PASSWORD"
                },
            ],
            "likelihood": "Likely"
        }
}' \
"https://api-dev.javelin.live/v1/admin/processors/dp/templates/inspect"

```

</TabItem>

<TabItem value="py" label="In Python:">

```py
from javelin_sdk import (
    JavelinClient,
    Template
)

import os
    
# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
client = JavelinClient(base_url="https://api-dev.javelin.live",
                       javelin_api_key=javelin_api_key,
) 

template_data = {

}

template = Provider.parse_obj(template_data)

# create the template, for async use `await client.acreate_template(template)`
client.create_template(template)
 
```

</TabItem>

</Tabs>
