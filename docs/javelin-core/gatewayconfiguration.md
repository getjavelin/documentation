---
sidebar_label: Configuration
---

# Gateway Configuration
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

Javelin offers configuration options to setup Model Gateways. You can easily connect your applications to route all Generative AI traffic through Javelin.

# Gateway Object
When represented as json, the gateway object has the following structure:
<CodeBlock
  language="python">
  {`{
    "name": "name of the gateway",
    "type": "this could be \`development\`, \`production\` etc.,",
    "config": {
      "buid": "kensho",
      "base_url": "https://your-api-domain.com",
      "api_key_value": "",
      "organization_id": "",
      "system_namespace": ""
    }
  }`}
</CodeBlock>


## Gateway Fields
These configuration settings are all defined per `gateway`, they are not global and are applied individually on each gateway. 

| Field | Description | 
| --------------- | --------------- | 
| `name`    | Identifies the name of the gateway within the business. This should be a unique identifier or title that clearly distinguishes the gateway from others. The name could reflect the service, business unit, or functionality, facilitating easy identification and configuration management. It enables administrators and users to quickly reference and access the specific settings or capabilities associated with that gateway. | 
| `type`    | Specifies the environment or usage context of the gateway. This could be values like development, production, staging, etc., which help in identifying and segregating different instances of the gateway based on their purpose. | 

### Config
| Field               | Description                                                                  | 
| --------------------| ---------------------------------------------------------------------------- | 
| `buid`          | Business Unit ID (BUID) uniquely identifies the business unit associated with this gateway configuration. It ensures that the gateway’s settings and usage are correctly aligned with the organizational structure. | 
| `base_url`          | The foundational URL where all API requests are directed. It acts as the root from which endpoint paths are extended. For example, if you're integrating with a weather data API, you might have a base URL like `https://api.weather.com/v1`. This URL is crucial as it forms the starting point for all API calls, ensuring they are directed to the correct server and service. | 
| `api_key_value`       | The API key used for authenticating requests to the API endpoints specified by the base_url. This key is essential for securing access and ensuring that only authorized applications can make API requests. | 
| `organization_id`      | The identifier for the organization using this gateway. This ensures that the gateway’s settings are correctly associated with the organization, facilitating better management and access control. | 
| `system_namespace`   | A unique namespace within the system to prevent naming conflicts and to organize resources logically. It helps in managing the scope and accessibility of the configurations and resources within the gateway. | 
