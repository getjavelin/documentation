# Provider Configuration

Providers represent the external AI services and models that power your Javelin routes, including both open source and closed source Large Language Models (LLMs). This guide covers all provider configuration options including API credentials, endpoints, model specifications, and connection settings. You'll learn to configure providers for various AI services like OpenAI, Anthropic, local models, and custom endpoints to build a robust multi-provider infrastructure.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock'; 

# Provider Object
When represented as json, the provider object has the following structure:
<CodeBlock
  language="json">
  {`{
    "name": "name of the provider",
    "type": "this could be \`open\`, \`closed\` etc.,",
    "config": {
        "api_base": "https://api.openai.com",
        "api_type": "",
        "api_version": "v1"
    }
  }`}
</CodeBlock>


## Provider Fields
These configuration settings are all defined per `provider`, they are not global and are applied individually on each route. 

| Field | Description | 
| --------------- | --------------- | 
| `name`    | Identifies the name of the provider within the gateway's ecosystem. This should be a unique identifier or title that clearly distinguishes the provider from others in the system. The name could reflect the provider's service, company, or functionality, facilitating easy identification and configuration management. It enables administrators and users to quickly reference and access the specific settings or capabilities associated with that provider. | 
| `type`    | Indicates the source availability of the provider's models. An open type signifies that the provider's models are open source, allowing users and developers to access, review, and modify the model's source code under the terms of its license. A closed type indicates that the models are closed source, meaning the source code is proprietary, and access to the internal workings of the model is restricted to the provider. This classification helps users and administrators understand the level of transparency, flexibility, and control they have over the models integrated into the system. Type of model endpoint, this can be `open`, `closed`. | 

### Config
| Field               | Description                                                                  | 
| --------------------| ---------------------------------------------------------------------------- | 
| `api_base`          | The foundational URL where all API requests are directed. It acts as the root from which endpoint paths are extended. For example, if you're integrating with a weather data API, you might have a base URL like `https://api.weather.com/v1`. This URL is crucial as it forms the starting point for all API calls, ensuring they are directed to the correct server and service. | 
| `api_type`          | This field categorizes the API according to its protocol or design philosophy, such as REST, SOAP, GraphQL, etc. The type of API can influence how requests are made, the structure of the requests, and how responses are handled. Understanding the API type is essential for correctly utilizing its capabilities and for implementing the appropriate request and response handling mechanisms in your application. | 
| `api_version`       | APIs often evolve, leading to different versions that might introduce new features, improvements, or deprecations of old features. This field specifies the version of the API you're targeting, which is crucial for ensuring compatibility and understanding the specific functionalities available to you. API versions are often indicated in the URL path (e.g., /v1) but can also be specified in headers or request parameters.                                           | 

