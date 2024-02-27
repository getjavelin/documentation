# Integration Overview
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Javelin offers configuration options to setup open and closed soure Large Language Models(LLMs) Providers. You can easily connect your applications to route all LLM traffic through Javelin. 

# Provider Object
When represented as json, the provider object has the following structure:
```shell
  {
    "name": "name of the provider",
    "type": "this could be `open`, `closed` etc.,",
    "config": {
        "api_base": "https://api.openai.com",
        "api_type": "",
        "api_version": "v1",
        "organization": "",
        "deployment_name": ""
    }
  }
  ```

## Provider Fields
These configuration settings are all defined per `provider`, they are not global and are applied individually on each route. 

| Field | Description | 
| --------------- | --------------- | 
| `name`    | Name of the Provider on the Gateway | 
| `type`    | Type of model endpoint, this can be `open`, `closed` | 

### Config
| Field | Description | 
| --------------------| ------------------------------------------- | 
| `api_base`          |                                             | 
| `api_type`          |                                             | 
| `api_version`       |                                             | 
| `organization`      |                                             | 
| `deployment_name`   |                                             | 


