---
sidebar_label: Regex Filter
---

# Regex Matching 

To configure Javelin's Regex processing, you need to define actions to be taken upon match with a configured regex pattern. By customizing these settings, you can tailor the processor to your application's specific requirements and threat landscape.

## Configuration Options

Regex matching can be enabled by using Javelin's Data Protection settings. Make sure to add the `dlp_gcp_processor` in the Javelin Request Chain  under Processors (Gateway level). You can also enable the processor at the Route level under the Route configuration.
Note: Regex matching is enabled by default at the Gateway level.

### Settings

Data protection settings allow for creating standalone strategies that include Regex matching. If you configure the strategy to `mask`, `redact`, `replace` or `inspect` the request, the processor will log the attempt or reject the request based on whether the input is flagged as a potential regex match. You can customize these settings based on your application's security requirements.

The strategy actions are as follows:  
`mask` - masks the matched regex in the request with "#"  
`redact` - redacts the matched regex in the request with ""  
`replace` - replaces the matched regexd in the request with "[Restricted]" for matches  
`inspect` - inspects the matched regex in the request and logs the attempt. The `inspect` strategy also allows for a Reject action that will reject the request with a 403 Forbidden if a restricted keyword is detected.  

### Processor Telemetry

Whenever Data Protection is enabled for a Route, the processor logs any detections, including the input text, the detection result, and the action taken. This telemetry data can be used for monitoring and analysis to enhance security measures.

Processor telemetry is always enabled by default and it is passed back to the calling client application under a `"javelin"` json object in the response. For example, you will see a response similar to the following if data masking was carried out based on a regex match:

```json
      "request.chain.dlp_gcp_processor_20240916074544.028397518": {
        "duration": "376.770311ms",
        "sensitive_data_masked": "true"
      },
```

This telemetry is also available in the Javelin Chronicle for detailed analysis and tracking of sensitive data violations. You can browse to the Route configuration section of the Javelin WebApp to view the telemetry data for each request.

Usage Note: Regex checks can currently only be used in the Request path. If you want to use it in the Response path, please contact the Javelin team.

### Security Metrics

Regex Processor is designed to provide security metrics for trust & safety violations. Any violations are captured as metrics & telemetry and presented in Analytics & Security dashboards on the Javelin console.
