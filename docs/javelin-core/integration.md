import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Applications
Its easy to integration the applications that leverage LLMs with Javelin. We have made it easy to seamlessly connect your applications to route all LLM traffic through Javelin with zero code change.

## Leveraging the Javelin Platform
Rather than having your LLM Applications (like Co-Pilot apps etc.,) individually & directly point to the LLM Vendor & Model (like OpenAI, Gemini etc.,), configure the provider/model endpoint to be your Javelin endpoint. This ensures that all applications that leverage AI Models will route their requests through the gateway. Javelin supports all the [latest models and providers](supported-llms), so you don't have to make any changes to your application or how requests to models are sent. 

See [Python SDK](../javelin-python/quickstart) for details on how you can easily embed this within your AI Apps. 

See [Javelin Configuration](routeconfiguration) section, for details on how to setup routes on the gateway to different models and providers. 

## Querying an LLM
Javelin may send a request to one or more models based on the configured policies and route configurations and return back a response.


<Tabs>
<TabItem value="shell" label="curl">

```shell
curl -X POST \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-H "Authorization : Bearer $OPENAI_API_KEY" \
-d '{
  "messages": [
    {
      "role": "system",
      "content": "Hello, you are a helpful scientific assistant"
    },
    {
      "role": "user",
      "content": "What is the chemical composition of sugar?"
    }
  ],
  "temperature": 0.8
}' \
"https://api.javelin.live/v1/query/{routename}"
```

</TabItem>

<TabItem value="py1" label="OpenAI">

```shell
pip install openai
```

```py
from openai import OpenAI
import os

'''
# With OpenAI
client = OpenAI(api_key=openai_key)
'''

# With Javelin
javelin_api_key = os.environ['JAVELIN_API_KEY']
llm_api_key = os.environ["OPENAI_API_KEY"]
javelin_headers = {
                    "x-javelin-route": "sampleroute1", # route name configured for OpenAI
                    "x-api-key": javelin_api_key       # virtual API Key for LLM provider keys
                  }

client = OpenAI(api_key=llm_api_key,
                base_url="https://api.javelin.live/v1/query",
                default_headers=javelin_headers
          )
completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "Hello, you are a helpful scientific assistant"},
    {"role": "user", "content": "What is the chemical composition of sugar?"}
  ]
)

print(completion.choices[0].message)

```

</TabItem>

<TabItem value="py2" label="Mistral">

```shell
pip install mistralai
```

```py
from mistralai.client import MistralClient
from mistralai.models.chat_completion import ChatMessage
import os

'''
# With Mistral
api_key = os.environ["MISTRAL_API_KEY"]
model = "mistral-large-latest"
client = MistralClient(api_key=api_key)
'''

'''
# With Javelin 
javelin_api_key = os.environ['JAVELIN_API_KEY']
llm_api_key = os.environ["MISTRAL_API_KEY"]

# Mistral SDK does not currently support setting headers https://github.com/mistralai/client-python/blob/main/src/mistralai/client.py
javelin_headers= { 
                    "x-javelin-route": "sampleroute2", # route name configured for Mistral
                     "x-api-key": javelin_api_key,     # virtual API Key for LLM provider keys
                  }

client = MistralClient(api_key=llm_api_key,
                       endpoint="https://api.javelin.live/v1/query",
                       headers=javelin_headers
         )
chat_response = client.chat(
  model="mistral-large-latest",
  messages=[
    {"role": "system", "content": "Hello, you are a helpful scientific assistant"},
    {"role": "user", "content": "What is the chemical composition of sugar?"}
  ]
)

print(chat_response.choices[0].message)
'''

```

</TabItem>

<TabItem value="py3" label="JavelinSDK">

```shell
pip install javelin-sdk
```

```py
from javelin_sdk import (
    JavelinClient,
    Route
)

import os

javelin_api_key = os.getenv('JAVELIN_API_KEY')
llm_api_key = os.getenv("OPENAI_API_KEY")

# create javelin client
client = JavelinClient(javelin_api_key=javelin_api_key, 
                       llm_api_key=llm_api_key)

# route name to get is {routename} e.g., sampleroute1
query_data = {
    "messages": [ 
        {
            "role": "system",
            "content": "Hello, you are a helpful scientific assistant"
        },
        {
            "role": "user",
            "content": "What is the chemical composition of sugar?"
        }
    ],
    "temperature": 0.8,
}

# now query the route, for async use `await client.aquery_route("sampleroute1", query_data)`
response = client.query_route("sampleroute1", query_data)
print(response)

```

</TabItem>
</Tabs>

<!--

## LLM Response
All responses from Javelin are encapsulated in OpenAI response format. For example, a request to OpenAI would look like the following:

```shell
{
  "choices":[
    {
      "finish_reason":"stop",
      "index":0,
      "logprobs":null,
      "message":{
        "content":"Sugar, also known as sucrose, has a chemical composition of C12H22O11. This means that each molecule of sucrose contains 12 carbon atoms, 22 hydrogen atoms, and 11 oxygen atoms.",
        "role":"assistant"
      }
    }
  ],
  "created":1708638149,
  "id":"chatcmpl-8vB7lwjUgoJoWxkMSpvmikxrpzIrZ",
  "model":"gpt-3.5-turbo-0125",
  "object":"chat.completion",
  "system_fingerprint":"fp_cbdb91ce3f",
  "usage":{
    "completion_tokens":45,
    "prompt_tokens":27,
    "total_tokens":72
  }
}
```

-->


