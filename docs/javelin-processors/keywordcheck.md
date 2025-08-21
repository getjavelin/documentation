# Competitor & Restricted Keyword Check

To configure Javelin's Competitor & Restricted Keyword Check Processor, you need to define actions to be taken upon detection of restricted keywords. By customizing these settings, you can tailor the processor to your application's specific requirements and threat landscape. Keywords may be any reserved keyword including competitor names, sensitive project names or other restricted keywords that you want to monitor.

## Configuration Options

Reserved Keywords can be enabled by using Javelin's Data Protection settings. Make sure to add the `dlp_gcp_processor` in the Javelin Request Chain under Processors (Gateway level). You can also enable the processor at the Route level under the Route configuration.
Note: Keyword detection is enabled by default at the Gateway level.

### Settings

Data protection settings allow for creating standalone strategies that include Reserved Keywords. If you configure the strategy to `mask`, `redact`, `replace`, `inspect` or `anonymization` the request, the processor will log the attempt or reject the request based on whether the input is flagged as a potential restricted keyword. You can customize these settings based on your application's security requirements.

The strategy actions are as follows:  
`mask` - masks the restricted keyword in the request with "#"  
`redact` - redacts the restricted keyword in the request with ""  
`replace` - replaces the restricted keyword in the request with "TYPE" for instance [EMAIL], [PHONE], [CREDIT_CARD]  
`inspect` - inspects the restricted keyword in the request and logs the attempt. The `inspect` strategy also allows for a Reject action that will reject the request with a 403 Forbidden if a restricted keyword is detected.  
`anonymization` - Transforms the matched infotype while preserving its original format and structure. This approach maintains critical semantic and grammatical cues, allowing downstream systems including LLMs to function accurately without exposing sensitive information.


### Processor Telemetry

Whenever Data Protection is enabled for a Route, the processor logs any detections, including the input text, the detection result, and the action taken. This telemetry data can be used for monitoring and analysis to enhance security measures.

Processor telemetry is always enabled by default and it is passed back to the calling client application under a `"javelin"` json object in the response. For example, you will see a response similar to the following if data masking was carried out based on matching restricted keywords:

```json
      "request.chain.dlp_gcp_processor_20240916074544.028397518": {
        "duration": "376.770311ms",
        "sensitive_data_masked": "true"
      },
```

This telemetry is also available in the Javelin Chronicle for detailed analysis and tracking of sensitive data violations. You can browse to the Route configuration section of the Javelin WebApp to view the telemetry data for each request.

Usage Note: Keywords checks can currently only be used in the Request path. If you want to use it in the Response path, please contact the Javelin team.

### Security Metrics

Restricted Keyword Processor is designed to provide security metrics for trust & safety violations. Any violations are captured as metrics & telemetry and presented in Analytics & Security dashboards on the Javelin console.
