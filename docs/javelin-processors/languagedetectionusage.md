# Language Detection

To configure Javelin's Language Detection capabilities, you will need to enable the `securityfilters_processor`.

## Configuration Options

Make sure to add the `securityfilters_processor` in the Javelin Response Chain under Processors (Gateway level). You can also enable the processor at the Route level under the Route configuration.
Note: Security filters is enabled by default at the Gateway level.

### Settings

None

### Processor Telemetry

Processor telemetry is always enabled by default and it is passed back to the calling client application under a `"javelin"` json object in the response. For example, you will see a response similar to the following if data masking was carried out based on matching restricted keywords:

```json
      "request.chain.security_filters_processor_20240916074544.028397518": {
        "duration": "31.73112ms",
        "language_detected" : "french",
        ...
      },
```

This telemetry is also available in the Javelin Chronicle for detailed analysis and tracking of sensitive data violations. You can browse to the Route configuration section of the Javelin WebApp to view the telemetry data for each request.

Usage Note: Keywords checks can currently only be used in the Request path. If you want to use it in the Response path, please contact the Javelin team.

### Security Metrics

SecurityFilters Processor is designed to provide security metrics for specific security filters. Any matches are captured as metrics & telemetry and presented in Analytics & Security dashboards on the Javelin console.
