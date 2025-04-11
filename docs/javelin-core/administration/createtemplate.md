# Creating Template
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
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "enabled": true,
        "type": "inspect",
        "models": [
            {
                "name": "Sensitive Data Protection",
                "provider": "Google Cloud",
                "suffix": "",
                "weight": 0
            }
        ],
        "config": {
            "infoTypes": [
                {"name": "MAC_ADDRESS_LOCAL"},
                {"name": "EMAIL_ADDRESS"},
                {"name": "STREET_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "VEHICLE_IDENTIFICATION_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_DRIVERS_LICENSE_NUMBER"},
                {"name": "PASSPORT"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "US_INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "MEDICAL_RECORD_NUMBER"},
                {"name": "MEDICAL_TERM"},
                {"name": "US_MEDICARE_BENEFICIARY_ID_NUMBER"},
                {"name": "US_HEALTHCARE_NPI"},
                {"name": "AUTH_TOKEN"},
                {"name": "AWS_CREDENTIALS"},
                {"name": "AZURE_AUTH_TOKEN"},
                {"name": "BASIC_AUTH_HEADER"},
                {"name": "GCP_API_KEY"},
                {"name": "GCP_CREDENTIALS"},
                {"name": "HTTP_COOKIE"},
                {"name": "JSON_WEB_TOKEN"},
                {"name": "ENCRYPTION_KEY"},
                {"name": "OAUTH_CLIENT_SECRET"},
                {"name": "PASSWORD"},
                {"name": "SSL_CERTIFICATE"},
                {"name": "STORAGE_SIGNED_POLICY_DOCUMENT"},
                {"name": "STORAGE_SIGNED_URL"},
                {"name": "WEAK_PASSWORD_HASH"},
                {"name": "XSRF_TOKEN"},
                {"name": "CREDIT_CARD_TRACK_NUMBER"},
                {"name": "US_EMPLOYER_IDENTIFICATION_NUMBER"},
                {"name": "US_ADOPTION_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "US_PREPARER_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "US_DEA_NUMBER"},
                {"name": "US_PASSPORT"},
                {"name": "CREDIT_CARD_NUMBER"}
            ],
            "likelihood": "Likely",
            "transformation": {
                "method": "Inspect" // method can be set to: inspect, mask, redact, or replace.
            },
            "notify": true,
            "reject": false
        }
}' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/inspect"
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="In Python:">

<CodeBlock
  language="python"
  title="Javelin Template Example"
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

template_data = {
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "enabled": True,
        "type": "inspect",
        "models": [
            {
                "name": "Sensitive Data Protection",
                "provider": "Google Cloud",
                "suffix": "",
                "weight": 0
            }
        ],
        "config": {
            "infoTypes": [
                {"name": "MAC_ADDRESS_LOCAL"},
                {"name": "EMAIL_ADDRESS"},
                {"name": "STREET_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "VEHICLE_IDENTIFICATION_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_DRIVERS_LICENSE_NUMBER"},
                {"name": "PASSPORT"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "US_INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "MEDICAL_RECORD_NUMBER"},
                {"name": "MEDICAL_TERM"},
                {"name": "US_MEDICARE_BENEFICIARY_ID_NUMBER"},
                {"name": "US_HEALTHCARE_NPI"},
                {"name": "AUTH_TOKEN"},
                {"name": "AWS_CREDENTIALS"},
                {"name": "AZURE_AUTH_TOKEN"},
                {"name": "BASIC_AUTH_HEADER"},
                {"name": "GCP_API_KEY"},
                {"name": "GCP_CREDENTIALS"},
                {"name": "HTTP_COOKIE"},
                {"name": "JSON_WEB_TOKEN"},
                {"name": "ENCRYPTION_KEY"},
                {"name": "OAUTH_CLIENT_SECRET"},
                {"name": "PASSWORD"},
                {"name": "SSL_CERTIFICATE"},
                {"name": "STORAGE_SIGNED_POLICY_DOCUMENT"},
                {"name": "STORAGE_SIGNED_URL"},
                {"name": "WEAK_PASSWORD_HASH"},
                {"name": "XSRF_TOKEN"},
                {"name": "CREDIT_CARD_TRACK_NUMBER"},
                {"name": "US_EMPLOYER_IDENTIFICATION_NUMBER"},
                {"name": "US_ADOPTION_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "US_PREPARER_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "US_DEA_NUMBER"},
                {"name": "US_PASSPORT"},
                {"name": "CREDIT_CARD_NUMBER"}
            ],
            "likelihood": "Likely",
            "transformation": {
                "method": "Inspect" // method can be set to: inspect, mask, redact, or replace.
            },
            "notify": True,
            "reject": False
        }
}

template = Template.model_validate(template_data)

# create the template, for async use \`await client.acreate_template(template)\`
client.create_template(template)
`}
</CodeBlock>


</TabItem>

</Tabs>