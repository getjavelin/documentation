# Load Balancing
Organizations have several use cases that drive their load balancing needs. 

## Use Cases

### Traffic Load Shaping
Organizations may want to strike a balance between inference accuracy, cost and latency by setting up a load shaping mix that shapes traffic towards multiple LLMs. 

For instance, an example traffic shape could be setup for using OpenAI GPT3.5 Turbo for 70% of the traffic and OpenAI GPT4 for 30% of the traffic. 

**Setup a Route with load shaping enabled**
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
                    "model": {
                        "name": "gpt-4-32k",
                        "provider": "openai",
                        "suffix": "/chat/completions",
                        "weight": 0.7,
                        "config": {
                            "rate_limit": 7
                        }
                    }
                },
                {
                    "model": {
                        "name": "gpt-4-32k",
                        "provider": "openai",
                        "suffix": "/chat/completions",
                        "weight": 0.3,
                        "config": {
                            "rate_limit": 7
                        }
                    }
                }
            ]
        }
    ]
}


route = Route.parse_obj(route_data)

# create the route, enable load balancing with weights
# load shaping can be configured to take effect across models within a provider or across providers
try:
    await client.acreate_route(route)
except NetworkError as e:
    print("Failed to create route: Network Error")

```

### LLM Fallback
One way to manage inference costs is to setup LLM fallbacks when specific routes have exhausted their budgets. 

For instance, the route may be defined to use OpenAI GPT3.5 Turbo with a Google BARD fallback when the cost or policy budgets are exceeded. 

**Setup a Route with fallback enabled**
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
                    "model": {
                        "name": "gpt-3.5-turbo",
                        "provider": "openai",
                        "suffix": "/chat/completions",
                        "config": {
                            "rate_limit": 5
                        }
                    }
                },
                {
                    "model": {
                        "name": "chat-bison-001",
                        "provider": "googlebard",
                        "suffix": "/v1beta2/models/chat-bison-001",
                        "fallback":true,
                        "config": {
                            "rate_limit": 10
                        }
                    }
                }
            ]
        }
    ]
}


route = Route.parse_obj(route_data)

# create the route, enable load balancing with weights
# load shaping can be configured to take effect across models within a provider or across providers
try:
    await client.acreate_route(route)
except NetworkError as e:
    print("Failed to create route: Network Error")

```

### Credential Harvesting
Many model providers enforce rate limiting on each of their credentials provisioned. As Application inference needs continually expand, they find that it may be beneficial to spread their load evenly across multiple credentials (or keys). 

For instance, the Application may choose to spread an anticipated load of 100 queries/second across 10 credential keys each with 10 queries/sec towards a specific model. 
