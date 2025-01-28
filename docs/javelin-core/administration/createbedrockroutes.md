# Creating Bedrock Routes

This guide explains how to create routes for AWS Bedrock models in Javelin. Each route follows a specific naming convention that combines the model identifier with an interaction type.

## Route Naming Convention

The route name consists of two parts:
1. The AWS Bedrock model identifier (e.g., `anthropic.claude-v2`)
2. The interaction type (e.g., `invoke`)

Combined format: `<model-identifier>.<interaction-type>`

## Available Interaction Types

There are four interaction types available:
- `invoke`: For single-turn, synchronous responses
- `invoke-with-response-stream`: For single-turn, streaming responses
- `converse`: For multi-turn, synchronous conversations
- `converse-stream`: For multi-turn, streaming conversations

## Example Route Configuration

Let's look at how to create routes for two common Bedrock models:

### Route Examples

For each Bedrock model, you'll create routes by combining the model identifier with each interaction type. Here are examples for common models:

#### Anthropic Claude V2
```
anthropic.claude-v2.invoke
anthropic.claude-v2.invoke-with-response-stream
anthropic.claude-v2.converse
anthropic.claude-v2.converse-stream
```

#### Amazon Titan Text Express
```
amazon.titan-text-express-v1.invoke
amazon.titan-text-express-v1.invoke-with-response-stream
amazon.titan-text-express-v1.converse
amazon.titan-text-express-v1.converse-stream
```

Each route follows the pattern: `<model-identifier>.<interaction-type>`

This is how you would set the rest of the route configuration. 
![Request Chain Processors showing archive, cost, and sensitive data protection processors](/img/routes/bedrockRoute.png)


## Usecase

After creating the routes, you can use the examples in the [integration](../integration.md) section to test the models. 

When making API calls, instead of using the AWS Bedrock endpoint directly, you'll need to use your Javelin endpoint. Replace the endpoint in your API calls with your Javelin URL:

```
https://your-javelin-domain.com/v1
```

For example, if your Javelin instance is hosted at `api.example.com`, your endpoint would be:

```
https://api.example.com/v1
```

All model interactions will be routed through this endpoint using the route naming convention described above. 

