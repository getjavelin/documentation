# Creating Bedrock Routes

This guide explains how to create an Universal Bedrock route in Javelin.

## Route Naming and Configuration

You can go ahead and create a route with the app name which is going to use javelin. 
Something like `marketing-app` or `sales-app` or `customer-support-app` or `bedrock` etc.

This is how you would set the rest of the route configuration. 
![Request Chain Processors showing archive, cost, and sensitive data protection processors](/img/routes/bedrockRoute.png)


## Usecase

After creating the routes, you can use the examples in the [integration](../integration.md#python) section to test the models. 

When making API calls, instead of using the AWS Bedrock endpoint directly, you'll need to use your Javelin endpoint. Replace the endpoint in your API calls with your Javelin URL:

```
https://your-javelin-domain.com/v1
```

For example, if your Javelin instance is hosted at `api.example.com`, your endpoint would be:

```
https://api.example.com/v1
```

All model interactions will be routed through this endpoint using the route naming convention described above. 

