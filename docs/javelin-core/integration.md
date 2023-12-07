import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Applications
Its easy to integration the applications that leverage LLMs with Javelin. 

## Leveraging the Gateway
Rather than having your LLM Applications (like Co-Pilot apps etc.,) individually & directly point to the LLM Vendor & Model (like OpenAI, BARD etc.,), configure the provider/model endpoint to be your Javelin endpoint. This ensures that all applications that leverage AI Models will route their requests through the gateway. Javelin supports all the [latest models and providers](supported-llms), so you don't have to make any changes to your application or how requests to models are sent. 

See [Python SDK](../javelin-python/quickstart) for details on how you can easily embed this within your AI Apps. 

See [Javelin Configuration](settinguproutes) section, for details on how to setup routes on the gateway to different models and providers. 

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
"https://api.javelin.live/v1/admin/routes/test_route_1/query"
```

</TabItem>
<TabItem value="py" label="Python">

```py
    from javelin_sdk import (
        JavelinClient,
        Route
    )

    import os

    # Retrieve environment variables
    javelin_api_key = os.getenv('JAVELIN_API_KEY')
    javelin_virtualapikey = os.getenv('JAVELIN_VIRTUALAPIKEY')
    llm_api_key = os.getenv('LLM_API_KEY')

    # create javelin client
    client = JavelinClient(base_url="https://api.javelin.live",
                        javelin_api_key=javelin_api_key,
                        javelin_virtualapikey=javelin_virtualapikey,
                        llm_api_key=llm_api_key
    )

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
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "content": "Sugar, commonly known as table sugar or sucrose, has the chemical formula C12H22O11. It is composed of carbon (C), hydrogen (H), and oxygen (O) atoms.",
        "role": "assistant"
      }
    }
  ],
  "created": 1701927969,
  "id": "chatcmpl-8T1V3dUI2jXbaiaAbBWDR0NQmuhYS",
  "model": "gpt-3.5-turbo-0613",
  "object": "chat.completion",
  "system_fingerprint": null,
  "usage": {
    "completion_tokens": 41,
    "prompt_tokens": 24,
    "total_tokens": 65
  }
}
```


