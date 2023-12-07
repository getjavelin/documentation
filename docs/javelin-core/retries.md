# Retries

Javelin comes equipped with a robust mechanism that offers built-in support for retrying interactions with any Large Language Model (LLM). 

This retry feature becomes particularly useful when an LLM provider returns a "503 Service Unavailable" error. Instead of immediately failing, Javelin will automatically attempt to reconnect, ensuring that temporary issues do not disrupt the user experience. 

This proactive approach aids in maintaining a smoother and more resilient interaction with the LLMs, even when faced with occasional service hiccups. Retries can be setup in the route configuration:

**Setup a Route with retries enabled**
```python

from javelin_sdk import (
    JavelinClient,
    Route
)

route_data = {
    "routes": [
        {
        "name": "eng_dept",
        "type": "chat",
        "models": [ 
            {
                "name": "gpt-4-32k",
                "provider": "openai",
                "suffix": "/chat/completions"
            }
        ]
        "config": {
            "retries": 3,  # setting retries to 3
        },
    }
  ]
}

route = Route.parse_obj(route_data)

# update the route, enable retries
try:
    await client.acreate_route(route)
except NetworkError as e:
    print("Failed to create route: Network Error")

```