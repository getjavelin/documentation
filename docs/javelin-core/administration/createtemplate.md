---
id: createtemplate
title: Creating Templates
description: Learn how to create data protection templates using the Javelin API
sidebar_label: Create Template
---

# Creating Templates

Templates in Javelin define data protection rules that can be reused across multiple routes and policies. They specify which types of sensitive information to detect and how to handle them when found. You can create templates with different transformation methods including inspect, redact, mask, and replace to implement comprehensive data protection strategies.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

## Inspect Template

<Tabs>
<TabItem value="shell" label="Using cURL">

<CodeBlock
  language="bash">
  {`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "enabled": true,
        "type": "inspect",
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
            "likelihood": "Possible",
            "transformation": {
                "method": "Inspect"
            },
            "notify": true,
            "reject": false
        }
}' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/inspect"
`}
</CodeBlock>

</TabItem>

<TabItem value="py" label="Using python SDK">

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
                "method": "Inspect"
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

## Redact Template

<Tabs>
<TabItem value="redact" label="Template with Redact Method">

<CodeBlock
  language="bash">
  {`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "RedactPII",
        "description": "Redact sensitive data",
        "enabled": true,
        "type": "de-identify",
        "config": {
            "infoTypes": [
                {"name": "EMAIL_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "CREDIT_CARD_NUMBER"},
                {"name": "STREET_ADDRESS"},
                {"name": "US_PASSPORT"}
            ],
            "likelihood": "Possible",
            "transformation": {
                "method": "Redact" 
            },
            "notify": true,
            "reject": false
        }
}' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/RedactPII"
`}
</CodeBlock>

</TabItem>
</Tabs>

## Mask Template

<Tabs>
<TabItem value="mask" label="Template with Mask Method">

<CodeBlock
  language="bash">
  {`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "MaskPII",
        "description": "Mask sensitive data",
        "enabled": true,
        "type": "de-identify",
        "config": {
            "infoTypes": [
                {"name": "EMAIL_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "CREDIT_CARD_NUMBER"},
                {"name": "PASSWORD"},
                {"name": "ENCRYPTION_KEY"}
            ],
            "likelihood": "Possible",
            "transformation": {
                "method": "Mask",
                "maskingCharacter": "*",
                "numberToMask": 0
            },
            "notify": true,
            "reject": false
        }
}' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/MaskPII"
`}
</CodeBlock>

</TabItem>
</Tabs>

## Replace Template

<Tabs>
<TabItem value="replace" label="Template with Replace Method">

<CodeBlock
  language="bash">
  {`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "ReplacePII",
        "description": "Replace sensitive data",
        "enabled": true,
        "type": "de-identify",
        "config": {
            "infoTypes": [
                {"name": "EMAIL_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "CREDIT_CARD_NUMBER"},
                {"name": "PASSWORD"},
                {"name": "STREET_ADDRESS"}
            ],
            "likelihood": "Possible",
            "transformation": {
                "method": "Replace",
                "replacementConfig": {
                    "EMAIL_ADDRESS": "[EMAIL]",
                    "PHONE_NUMBER": "[PHONE]",
                    "PERSON_NAME": "[NAME]",
                    "US_SOCIAL_SECURITY_NUMBER": "[SSN]",
                    "CREDIT_CARD_NUMBER": "[CREDIT_CARD]",
                    "PASSWORD": "[PASSWORD]",
                    "STREET_ADDRESS": "[ADDRESS]"
                }
            },
            "notify": true,
            "reject": false
        }
}' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/ReplacePII"
`}
</CodeBlock>

</TabItem>
</Tabs>

## Custom Regex Template

<Tabs>
<TabItem value="regex" label="Template with Custom Regex">

<CodeBlock
  language="bash">
  {`
curl -X POST \\
-H "Content-Type: application/json" \\
-H "x-javelin-apikey: $JAVELIN_API_KEY" \\
-d '{
    "name": "CustomRegexTemplate",
    "description": "Detect sensitive data with custom regex and reserved keywords",
    "enabled": true,
    "type": "inspect",
    "config": {
        "notify": true,
        "reject": false,
        "infoTypes": [
            {
                "name": "OPENAI_API_KEY",
                "regex": "sk-[a-zA-Z0-9]{48}"
            },
            {
                "name": "RESERVED_KEYWORD",
                "dictionary": {
                    "wordList": ["confidential", "secret", "private", "classified", "restricted"]
                }
            }
        ],
        "likelihood": "Possible",
        "rejectPrompt": "Unable to complete request, data protection policy has detected sensitive data leakage or enterprise violations in prompt",
        "transformation": {
            "method": "Inspect"
        }
    }
}' \\
"https://your-api-domain.com/v1/admin/processors/dp/templates/inspect"
`}
</CodeBlock>

</TabItem>

</Tabs>