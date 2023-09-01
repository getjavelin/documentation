# Rate Limits

Javelin is designed with protective measures to ensure that Large Language Model (LLM) endpoints aren't unintentionally overloaded. 

This safeguard mechanism comes in the form of rate limits, which can be customized per route. By configuring these rate limits, Applications can define how frequently the system sends requests to the LLM endpoints, thereby ensuring a balanced interaction. 

Not only does this protect the LLM from being overwhelmed, but it also optimizes the application user experience by reducing the risk of errors or slow responses due to high traffic.

Rate limits can be setup in the route configuration. Configured rate limits have a per second resolution:

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
        "model": {
         "name": "gpt-4-32k",
         "provider": "openai",
         "suffix": "/chat/completions"
        "config": {
            "rate_limit": 7,  # route will be rate limited to 7 queries/second
        },
    }
  ]
}

route = Route.parse_obj(route_data)

# update the route, enable rate limit
try:
    await client.acreate_route(route)
except NetworkError as e:
    print("Failed to create route: Network Error")

```