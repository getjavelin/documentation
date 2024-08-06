# Integration Overview
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

Javelin offers a variety of configuration options to setup policies, cost guardrails and traffic shaping. You can easily connect your applications to route all LLM traffic through Javelin. 

# Route Object
When represented as json, the route object has the following structure:
<CodeBlock
  language="python">
  {`{
    "name": "name of the route",
    "type": "this could be \`chat\`, \`completions\`, \`embeddings\` etc.,",
    "models": [ 
      {
        "name": "name of the model to use, like text-davinci-003",
        "provider": "name of the llm provider - openai",
        "suffix": "/chat/completions"
      } 
    ],
    "config": {
      "rate_limit": 3,
      "archive": true,
      "retries": 3
    }
  }`}
</CodeBlock>


## Route Fields
These configuration settings are all defined per `route`, they are not global and are applied individually on each route. 

| Field | Description | 
| --------------- | --------------- | 
| `name`    | This field specifies the unique identifier or name for the route within the gateway. It is used to direct requests to the correct endpoint or service, facilitating organized management and routing of API calls. The name should be descriptive enough to indicate its purpose or the nature of the requests it handles, such as forwarding queries to the LLM for processing. | 
| `type`    | Indicates the specific functionality of the LLM endpoint that the route targets. The options include: | 
|           | - **chat**: Routes targeting this type are designed to handle interactive, conversational queries, utilizing the LLM's capabilities to generate responses in a chat-like format. This is typically used for building chatbots or conversational agents. |
|           | - **completions**: This type is aimed at generating text completions or responses based on prompts provided in the requests. It's suitable for applications requiring content generation, creative writing assistance, code generation, etc. |
|           | 	- **embeddings**: Routes of this type are focused on generating numerical representations (embeddings) of the input text, which can be used for tasks such as semantic similarity comparison, clustering, or search applications. |

### Model 
| Field | Description | 
| --------------- | --------------- | 
| `name`     | Specifies the identifier or name of the model you intend to use for your application. This name is critical for ensuring that requests are routed to the correct model, particularly when a gateway or service offers access to multiple models. It should match the model name as defined by the LLM provider. | 
| `provider` | Identifies the LLM provider. This field allows you to specify the source of the LLM, such as `openai` for models like GPT-3, `cohere`, `anthropic`, or `huggingface`. Each provider has its own set of models, capabilities, and API structures, so specifying the provider is crucial for correctly interfacing with their service. | 
| `suffix`   | This field is particularly useful when working with customizable or specific versions of models, especially on platforms like Hugging Face. It allows you to append a custom path or identifier to the model URL endpoint, enabling access to custom or fine-tuned models that may not be directly available through the standard API endpoints. This customization can be crucial for applications requiring highly specialized model behavior or training on specific datasets. | 

### Config
| Field | Description | 
| --------------- | --------------- | 
| `rate_limit` | 	Specifies the maximum number of requests per second (RPS) that can be sent through this route. Setting a rate limit is crucial for preventing overloading the LLM provider's API, which can lead to request denials or additional charges. It ensures that your application stays within the operational limits of the LLM service and maintains a good standing with the provider. | 
| `archive`    | A boolean setting (true or false) that determines whether interactions (both requests to and responses from) with the LLMs should be archived. Enabling this feature (true) is important for record-keeping, compliance, and analysis purposes. It allows organizations to review historical data for insights, audit interactions for compliance with regulations, or debug issues. | 
| `retries`    | Indicates the number of retry attempts the gateway will make in the event of receiving a 503 (Service Unavailable) response from the LLM. This is critical for enhancing the reliability of the service, ensuring that temporary issues with the LLM provider do not immediately result in failures for end-users. By automatically retrying, the system can often overcome transient issues without manual intervention. | 


