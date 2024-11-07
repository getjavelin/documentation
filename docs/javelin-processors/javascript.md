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

**Note:** You can add a JavaScript processor to the processor chain using the Javelin console. This processor can be applied to either the Request or Response chain, at both the Gateway and Route levels. Once added, it becomes interactive, allowing you to directly edit the JavaScript code within the webapp directly. Please note that the JavaScript processor only supports native JavaScript, not ES6+.

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

**Note:** Javelin scans the JavaScript processor code for security vulnerabilities before executing it. The JavaScript processor code should be secure and follow best practices to prevent security vulnerabilities.

## Custom Validator

A `custom validator` for LLM (Large Language Model) requests and responses can be built using Javelin's Custom Guardrail to ensure that the inputs (requests) meet certain format, structure, or content criteria, and that the responses follow the expected format and provide valid outputs. For example, you could validate whether the prompt input is structured correctly or whether the model's response adheres to certain business rules or constraints.

```javascript
function process(request) {
  function customValidator(input) {
    var request = JSON.parse(input);
    try {
      if (request.prompt.trim().length < 10) {
        throw new Error("Prompt must be at least 10 characters long.");
      }
      if (request.prompt.length > 500) {
        throw new Error("Prompt must be no longer than 500 characters.");
      }

      return true;
    } catch (error) {
      throw new Error("This is not a valid prompt format.")
    }
  };

  try {
    customValidator(request);
    var output = {
      transformed_body: JSON.stringify(request),
      response_metadata: {},
      response_code: '200',
      response_reason: 'OK'
    };
    return JSON.stringify(output);
  } catch (error) {
    var output = {
      transformed_body: JSON.stringify({
        error: 'Failed in passing custom validation. Reason:' + error.message
      }),
      response_metadata: {},
      response_code: '400',
      response_reason: 'Bad Request'
    };
    return JSON.stringify(output);
  }
}
```

## Prompt Decorator

The Prompt Decorator functionality in `Custom Guardrails` allows users to dynamically modify or enhance the input prompts before they are processed by the language model. This feature enables the injection of additional context, metadata, or specific formatting to the user input, ensuring that the model responds appropriately within the desired guidelines. By applying transformations or augmentations to the original prompt, it provides more control over the output while maintaining flexibility in how prompts are handled in real-time.

```javascript
function process(input) {
  var data = JSON.parse(input);

  function promptDecorator(data) {
    if (data.messages && data.messages.length > 0 && data.messages[1].content === 'What is the capital of country?') {
      data.messages[1].content = 'What is the capital of France?';
    }
  }

  // Modifies the prompt based on the specified condition
  promptDecorator(data);

  var output = {
    transformed_body: JSON.stringify(data),
    response_metadata: {},
    response_code: '200',
    response_reason: 'OK'
  };

  return JSON.stringify(output);
}
```

## Trigger Webhook

The `Trigger Webhook` functionality enables seamless integration between `Custom Guardrails` and external services. When specific conditions are met during the prompt processing or response generation, the webhook is triggered to send data to a designated URL in real-time. This allows for automated workflows, such as logging events, notifying external systems, or initiating further processing based on the model's interaction. The webhook payload can include details about the prompt, response, and any custom parameters defined by the user, ensuring smooth and scalable communication between systems.

**Note:** you can use this Slack webhook guide to test the feature: [Slack Webhooks Guide](https://api.slack.com/messaging/webhooks).

```javascript
function process(input) {
  // Example data
  var data = {
    "text": "Danny Torrence left a 1 star review for your property."
  };

  // Webhook URL
  var webhookUrl = "your_webhook_url_here";

  // Payload
  var payload = JSON.stringify(data);

  // Authentication details, structured to match the expected format in Go
  var authDetails = {
    "authHeader": "your_bearer_token_here",
    "apiKey": "your_api_key_here"
  };

  // Callback function to handle the response or error
  function handleResponse(response) {
    var resp = JSON.parse(response); // Assuming response is a JSON string.
    if (resp.error) {
      console.error("Webhook call failed: " + resp.error);
    } else {
      console.log("Webhook response received: ", resp);
    }
  }

  // Call the webhook with authentication details and handle the response with a callback
  platform.callWebhook(webhookUrl, payload, authDetails, handleResponse);

  var output = {
    transformed_body: input,
    response_metadata: {},
    response_code: '200',
    response_reason: 'OK'
  };

  return JSON.stringify(output);
}
```