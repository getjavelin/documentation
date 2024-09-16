# Usage

To configure Javelin's Prompt Injection Processor, you need to define actions to be taken upon detection of prompts or jailbreaks. By customizing these settings, you can tailor the processor to your application's specific requirements and threat landscape.

## Configuration Options

Prompt Injection + Jailbreak Detection can be enabled by using Javelin's PromptInjection detection processor. Make sure to add the `lakera_processor` in the Javelin Request Chain  under Processors (Gateway level). You can also enable the processor at the Route level under the Route configuration. 
Note: Prompt+Jailbreak detection is enabled by default at the Gateway level.

### Settings

The Prompt Injection processor will log the attempt or reject the request based on whether the input is flagged as a potential prompt injection or jailbreak. You can customize these settings based on your application's security requirements. You can configure the processor to block the request if a prompt injection or jailbreak attempt is detected by customizing the processor json as shown below.

```json
{
    "name": "Prompt Injection Detection",
    "reference": "lakera",
    "will_block": true,
    "scope": "system",
    "guard" : {
        "action":"reject"
    }
}
```

Setting the `action` to `reject` will reject the request with a 403 Forbidden if a prompt injection or jailbreak attempt is detected. Alternatively, you can leave out the `guard` section to log the attempt without blocking the request.

### Processor Telemetry

Whenever a prompt injection or jailbreak attempt is detected, the processor logs the details, including the input text, the detection result, and the action taken. This telemetry data can be used for monitoring and analysis to enhance security measures.

Processor telemetry is always enabled by default and it is passed back to the calling client application under a `"javelin"` json object in the response. For example, you will see a response similar to the following:

```json
"request.chain.lakera_processor_20240916043857.268666981": {
    "categories": {
        "jailbreak": false,
        "prompt_injection": true
    },
    "category_scores": {
        "jailbreak": 0,
        "prompt_injection": 0.68
    },
}"
```

This telemetry is also available in the Javelin Chronicle for detailed analysis and tracking of prompt injection attempts. You can browse to the Route configuration section of the Javelin WebApp to view the telemetry data for each request.
