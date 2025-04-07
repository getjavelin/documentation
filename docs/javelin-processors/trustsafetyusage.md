# Usage

To configure Javelin's Trust & Safety Processor, you need to enable the trust & safety processors.

## Configuration Options

Trust & Safety for models can be enabled by using Javelin's trust & safety processors. Make sure to add the `lakera_processor` or `trustsafety_processor` in the Javelin Response Chain under Processors (Gateway level). You can also enable the processor at the Route level under the Route configuration.
Note: Trust & safety is enabled by default at the Gateway level.

### Settings

Trust & safety settings allow for creating standalone strategies for content filtering, trust & safety filtering. Whenever trust & safety processors are enabled for a Route, the processor logs any detections, including the input text, the detection result, and the action taken. This telemetry data can be used for monitoring and analysis to enhance security measures. Trust & safety processor does not supress the model response if it identifies any sensitive content - instead it passes the information in telemetry back to the calling application and allows the application to take action.

```json
{
    "name": "Trust & Safety",
    "reference": "trustsafety",
    "will_block": true,
    "inputs": {
      "engine": "lakera"
    },
    "scope": "system",
}
```

Alternatively, you can also configure other trust & safety processor engines for example llama-guard3. You can configure the processor to block the request if a trust & safety violation is detected by customizing the processor json as shown below.

```json
{
    "name": "LlamaGuard Trust & Safety",
    "reference": "llama_guard",
    "will_block": true,
    "scope": "system",
}
```

### Processor Telemetry

Processor telemetry is always enabled by default and it is passed back to the calling client application under a `"javelin"` json object in the response. For example, you will see a response similar to the following if data masking was carried out based on matching restricted keywords:

```json
      "request.chain.trustsafety_processor_20241009064443.938388837": {
        "flagged": false,
        "payload": {},
        "duration": "312.079037ms",
        "categories": {
          "hate": false,
          "crime": false,
          "sexual": false,
          "weapons": false,
          "violence": false,
          "profanity": false
        },
        "category_scores": {
          "hate": 0.001,
          "crime": 0.001,
          "sexual": 0,
          "weapons": 0.001,
          "violence": 0.001,
          "profanity": 0
        }
      }
```

This telemetry is also available in the Javelin Chronicle for detailed analysis and tracking of sensitive data violations. You can browse to the Route configuration section of the Javelin WebApp to view the telemetry data for each request.

Usage Note: Keywords checks can currently only be used in the Request path. If you want to use it in the Response path, please contact the Javelin team.

### Security Metrics

Trust & Safety Processor is designed to provide security metrics for trust & safety violations. Any violations are captured as metrics & telemetry and presented in Analytics & Security dashboards on the Javelin console.
