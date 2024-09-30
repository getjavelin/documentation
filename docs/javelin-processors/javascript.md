# Custom Guardrails

Javelin can be extended with custom guardrails to enable additional functionality. Custom guardrails can be used to perform custom operations on the input data before it is sent to the model or on the output data before it is returned to the user. Custom guardrails can also be used to implement custom data transformations, data validation, data augmentation, and more. 

Javelin executes a processor chain configured as a directed acyclic graph(DAG) of processors. Each processor in the chain is a self-contained module designed to perform a specific function. The processors are arranged in a sequence to facilitate complex processing sequences and ensure the execution flow is efficient, logical, and adaptable to various enterprise needs. 

Custom guardrails can be implemented as JavaScript processors. JavaScript processors are custom processors that are written in JavaScript and executed by the Javelin platform. JavaScript processors can be used to implement custom guardrails, data transformations, data validation, data augmentation, and more.

## Configuration Options

Custom guardrails can be enabled by using Javelin's Javascript processor. Make sure to add the `javascript_processor` in the Javelin Request/Response Chain under Processors (Gateway level). You can also enable the processor at the Route level under the Route configuration.

```json
{
    "name": "Custom Guardrail",
    "reference": "javascript",
    "will_block": true,
    "scope": "local",
    "inputs": {
        "js_code": "..."
    },
}
```

Note: You can use the Javelin console to add a JavaScript processor to the processor chain. The JavaScript processor can be added to the Request or Response chain at the Gateway or Route level. Once its added, it becomes clickable and you can edit the JavaScript code directly in the Javelin console.

## JavaScript Processor Interface

The JavaScript processor interface consists of the following methods:

```javascript
/**
 * The process method is called by the Javelin platform to execute the JavaScript processor.
 * 
 * @param {Object} input - The input data to be processed by the JavaScript processor.
 * @returns {Object} output - The output data processed by the JavaScript processor.
 */
function process(input) 
{ 
    var data = JSON.parse(input); 
    
    if (data.messages && data.messages.length > 0 && data.messages[0].content === 'What is the capital of country?') {
        data.messages[0].content = 'What is the capital of France?'; 
    } 

    var output = { 
        transformed_body: JSON.stringify(data), 
        response_metadata: {}, 
        response_code: '200', 
        response_reason: 'OK' 
    }; 
    
    return JSON.stringify(output); 
}
```

The `process` method is called by the Javelin platform to execute the JavaScript processor. The method takes an input object as a parameter and returns an output object. The input object contains the data to be processed by the JavaScript processor. The output object contains the processed data returned by the JavaScript processor.

The output object should have the following structure:

- `transformed_body`: The transformed data body.
- `response_metadata`: The response metadata.
- `response_code`: The response code.
- `response_reason`: The response reason.

The JavaScript processor can access the input data, process it, and return the processed data. The processed data can be used to implement custom guardrails, data transformations, data validation, data augmentation, and more. Custom Javascript has a 2 second timeout limit - if the processing takes longer than 2 seconds, the processor will be automatically terminated.

Custom guardrails may pass additional metadata such as `"sensitive_data_detected" = true` in metadata. This metadata is propagated into analytics & usage logs in Javelin. 

Note: Javelin scans the JavaScript processor code for security vulnerabilities before executing it. The JavaScript processor code should be secure and follow best practices to prevent security vulnerabilities.
