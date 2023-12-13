# Integration Overview
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Javelin offers a variety of configuration options to setup policies, cost guardrails and traffic shaping. You can easily connect your applications to route all LLM traffic through Javelin. 

# Route Object
When represented as json, the route object has the following structure:
```shell
  {
    "name": "name of the route",
    "type": "this could be `chat`, `completions`, `embeddings` etc.,",
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
  }
  ```

## Route Fields
These configuration settings are all defined per `route`, they are not global and are applied individually on each route. 

| Field | Description | 
| --------------- | --------------- | 
| `name`    | Name of the Route on the Gateway, through which the request will be sent to the LLM    | 
| `type`    | Type of model endpoint, this can be `chat`, `completions`, `embeddings` | 

### Model 
| Field | Description | 
| --------------- | --------------- | 
| `name`    | Name of the model to be used | 
| `provider`    | Number of llm provider, `openai`, `cohere`, `anthropic`, `huggingface` etc., | 
| `suffix`    | Customize model URL endpoint, useful for custom models on huggingface| 

### Config
| Field | Description | 
| --------------- | --------------- | 
| `rate_limit`    | number of requests per second allowed, any more will be throttled | 
| `archive`    | true if you want to archive all messages to and from LLMs on this route | 
| `retries`    | Number of times the gateway will attempt to retry the request, when an LLM responds with a 503 | 


