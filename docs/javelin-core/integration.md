import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Applications
Its easy to integration the applications that leverage LLMs with Javelin. 

## Leveraging the Gateway
Rather than having your LLM Applications (like Co-Pilot apps etc.,) individually & directly point to the LLM Vendor & Model (like OpenAI, BARD etc.,), configure the provider/model endpoint to be your Javelin endpoint. This ensures that all applications that leverage AI Models will route their requests through the gateway. Javelin supports all the [latest models and providers](supported-llms), so you don't have to make any changes to your application or how requests to models are sent. 

See [Python SDK](../javelin-python/quickstart) for details on how you can easily embed this within your AI Apps. 

See [Javelin Configuration](configuration) section, for details on how to setup routes on the gateway to different models and providers. 

## Querying an LLM
Javelin may send a request to one or more models based on the configured policies and route configurations and return back a response.


<Tabs>
<TabItem value="shell" label="cURL">

```shell
curl -X POST \
-H "Content-Type: application/json" \
-d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant. Tell me who won the 2009 World Cup Soccer?"
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ],
    "temperature":0.8
}' \
"http://localhost:9000/api/v1/routes/test_route_1/query"
```

</TabItem>
<TabItem value="py" label="Python">

```py
    from javelin_sdk import (
        JavelinClient,
        Route
    )

    # create javelin client
    client = JavelinClient(base_url="http://localhost:9000") # replace this with your javelin URL

    # route name to get is "eng_dept"
    route_name = "eng_dept"

    query_data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Hello!"},
        ],
        "temperature": 0.8,
    }

    # now query the route, for async use `await client.aquery_route("test_route_1", query_data)`
    response = client.query_route("test_route_1", query_data)

```

</TabItem>
</Tabs>

## LLM Response
All responses from Javelin are encapsulated in an `llm_response` structure with additional `metadata`. 

For example, a request to OpenAI would look like the following:

<Tabs>
<TabItem value="py" label="Python">

```shell
{
    "model": "gpt-3.5-turbo",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant. Tell me who won the 2009 World Cup Soccer?"
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ],
    "temperature":0.8
}
```

</TabItem>
</Tabs>

And, the response from the model through the gateway would look like the following:
```shell
{
    "llm_response": {
        "choices": [
            {
                "finish_reason": "stop",
                "index": 0,
                "message": {
                    "content": "The winner of the 2009 World Cup Soccer was Spain. They defeated the Netherlands in the final match held on July 11, 2009, with a score of 1-0 after extra time.",
                    "role": "assistant"
                }
            }
        ],
        "created": 1694391463,
        "id": "chatcmpl-7xOuVOzYrGMBUIroHejJyKHpcwSzx",
        "model": "gpt-3.5-turbo-0613",
        "object": "chat.completion",
        "usage": {
            "completion_tokens": 43,
            "prompt_tokens": 31,
            "total_tokens": 74
        }
    },
    "metadata": {
        "route_name": "myusers",
        "input_tokens": 31,
        "output_tokens": 43,
        "total_tokens": 74,
        "model": "gpt-3.5-turbo",
        "usage": 939,
        "archive_enabled": true,
        "retries": 0,
        "throttled": false
    }
}
```

## Metadata Fields
| Field | Description | 
| --------------- | --------------- | 
| `route_name`    | Name of the Route on the Gateway, through which the request was sent to the LLM    | 
| `input_tokens`    | Number of input tokens used in the prompt    | 
| `output_tokens`    | Number of output tokens in the llm response    | 
| `total_tokens`    | Number of tokens in the request + response      | 
| `output_tokens`    | Number of output tokens in the llm response    | 
| `model`    | Name(s) of Model used to query the LLM    | 
| `usage`    | Total tokens used historically on this specific Route    | 
| `archive_enabled`    | true if Archiving was enabled on this Route, false otherwise    | 
| `archive_enabled`    | true if Archiving was enabled on this Route, false otherwise    | 
| `retries`    | Number of times that gateway retried the request towards the LLM (when the LLM responds with a 429)    | 
| `throttled`    | true if too many requests were sent by the applications and the request was throttled    | 

