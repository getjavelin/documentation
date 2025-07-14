# PII/PHI Detection

PII/PHI detection in Javelin automatically identifies and protects personally identifiable information (PII) and protected health information (PHI) in your AI interactions. This processor scans incoming requests and outgoing responses for sensitive data types like names, social security numbers, credit cards, and medical information. You'll learn to configure detection rules, transformation actions, and information types to ensure compliance with privacy regulations like GDPR and HIPAA.

## Configuration Options

PII/PHI infotype matching can be enabled by using Javelin's Data Protection settings. Make sure to add the `dlp_gcp_processor` in the Javelin Request Chain under Processors (Gateway level). You can also enable the processor at the Route level under the Route configuration.
Note: Infotype matching is enabled by default at the Gateway level.

### Settings

Data protection settings allow for creating standalone strategies that include Infotype matching. If you configure the strategy to `mask`, `redact`, `replace` or `inspect` the request, the processor will log the attempt or reject the request based on whether the input is flagged as a potential infotype match. You can customize these settings based on your application's security requirements.

The following security, PII/PHI infotypes are supported:

#### Personally Identifiable Information (PII)

PERSON_NAME  
FIRST_NAME  
LAST_NAME  
MARITAL_STATUS  
AGE  
US_DRIVERS_LICENSE_NUMBER  
US_SOCIAL_SECURITY_NUMBER  
DATE_OF_BIRTH  
EMAIL_ADDRESS  
GENDER  
STREET_ADDRESS  
CREDIT_CARD_NUMBER  
PASSPORT  
LOCATION  
LOCATION_COORDINATES  
COUNTRY_DEMOGRAPHIC  
HTTP_COOKIE  
ADVERTISING_ID  

#### Protected Health Information (PHI)

MEDICAL_RECORD_NUMBER  
US_MEDICARE_BENEFICIARY_ID_NUMBER  
US_HEALTHCARE_NPI  
MEDICAL_TERM  
FDA_CODE  
US_DEA_NUMBER  
ICD9_CODE  
ICD10_CODE  

#### Financial Information

SWIFT_CODE  
AMERICAN_BANKERS_CUSIP_ID  
US_BANK_ROUTING_MICR  
US_INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER  
IBAN_CODE  

The strategy actions are as follows:  
`mask` - masks the matched infotype in the request with "#"  
`redact` - redacts the matched infotype in the request with ""  
`replace` - replaces the matched infotype in the request with "[Restricted]" for matches  
`inspect` - inspects the matched infotype in the request and logs the attempt. The `inspect` strategy also allows for a Reject action that will reject the request with a 403 Forbidden if a restricted keyword is detected.  

### Processor Telemetry

Whenever Data Protection is enabled for a Route, the processor logs any detections, including the input text, the detection result, and the action taken. This telemetry data can be used for monitoring and analysis to enhance security measures.

Processor telemetry is always enabled by default and it is passed back to the calling client application under a `"javelin"` json object in the response. For example, you will see a response similar to the following if data masking was carried out based on a infotype match:

```json
      "request.chain.dlp_gcp_processor_20240916074544.028397518": {
        "duration": "376.770311ms",
        "sensitive_data_masked": "true"
      },
```

This telemetry is also available in the Javelin Chronicle for detailed analysis and tracking of sensitive data violations. You can browse to the Route configuration section of the Javelin WebApp to view the telemetry data for each request.

Usage Note: PII/PHI infotype checks can currently only be used in the Request path. If you want to use it in the Response path, please contact the Javelin team.
