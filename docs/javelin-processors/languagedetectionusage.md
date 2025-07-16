# Language Detection

To configure Javelin's Language Detection capabilities, you will need to enable the `lang_detector_processor`.

## Configuration Options

Make sure to add the `lang_detector_processor` in the Javelin Response Chain under Processors (Gateway level). You can also enable the processor at the Route level under the Route configuration.

### Settings

Enable the language detection toggle from the policy settings.

### Processor Telemetry

Processor telemetry is always enabled by default and it is passed back to the calling client application under a `"javelin"` json object in the response. For example, you will see a response similar to the following if data masking was carried out based on matching restricted keywords:

```json
      "request.chain.lang_detector_20250716111701.028397518": {
        "duration": "31.73112ms",
        "non_english_detected" : true,
        ...
      },
```

This telemetry is also available in the Javelin Chronicle for detailed analysis and tracking of sensitive data violations. You can browse to the Route configuration section of the Javelin WebApp to view the telemetry data for each request.