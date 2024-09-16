# Detect Secrets & Sensitive Credentials

To configure Javelin's Secrets & Credentials matching, you need to define actions to be taken upon match with  configured security infotypes. By customizing these settings, you can tailor the processor to your application's specific requirements and threat landscape.

## Configuration Options

Security infotype matching can be enabled by using Javelin's Data Protection settings. Make sure to add the `dlp_gcp_processor` in the Javelin Request Chain  under Processors (Gateway level). You can also enable the processor at the Route level under the Route configuration.
Note: Infotype matching is enabled by default at the Gateway level.

### Settings

Data protection settings allow for creating standalone strategies that include Infotype matching. If you configure the strategy to `mask`, `redact`, `replace` or `inspect` the request, the processor will log the attempt or reject the request based on whether the input is flagged as a potential infotype match. You can customize these settings based on your application's security requirements.

The following security, secrets & credentials infotypes are supported:
AUTH_TOKEN  
AWS_CREDENTIALS  
AZURE_AUTH_TOKEN  
CREDIT_CARD_TRACK_NUMBER  
GCP_API_KEY  
GCP_CREDENTIALS  
ENCRYPTION_KEY  
ICCID_NUMBER  
IMEI_HARDWARE_ID  
IMSI_ID  
OAUTH_CLIENT_SECRET  
PASSWORD  
SSL_CERTIFICATE  
VEHICLE_IDENTIFICATION_NUMBER  
WEAK_PASSWORD_HASH  
JSON_WEB_TOKEN  
AUTH_TOKEN  
AWS_CREDENTIALS  
AZURE_AUTH_TOKEN  
BASIC_AUTH_HEADER  
ENCRYPTION_KEY  
GCP_API_KEY  
GCP_CREDENTIALS  
JSON_WEB_TOKEN  
HTTP_COOKIE  
OAUTH_CLIENT_SECRET  
PASSWORD  
WEAK_PASSWORD_HASH  
XSRF_TOKEN  
SSL_CERTIFICATE  

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

Usage Note: Sensitive infotype checks can currently only be used in the Request path. If you want to use it in the Response path, please contact the Javelin team.
