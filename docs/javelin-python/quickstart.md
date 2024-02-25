# Quickstart Guide

The Javelin client is a Python library for interacting with the Javelin API. This guide provides a basic overview of setting up and using the Javelin client.

## 1. Installation

To install the Javelin client, use pip:

```python
pip install javelin_sdk
```

## 2. Setup

Before making any API calls, initialize the client:

**Setting up the Python Client**
```python
from javelin_sdk import (
    JavelinClient,
    Route
)

import os

try:
    javelin_api_key = os.getenv('JAVELIN_API_KEY')
    llm_api_key = os.getenv("OPENAI_API_KEY")

    client = JavelinClient(javelin_api_key=javelin_api_key,
                           llm_api_key=llm_api_key)

except NetworkError as e:
    print("Failed to create client: Network Error")
    sys.exit()
```

## 3. Making Requests
With the client set up, you can make requests to the Javelin API:
```python

# Create a route object
route_data = {
    "name": "test_route_1",
    "type": "chat",
    "models": [
        {
            "name": "gpt-3.5-turbo",
            "enabled": True,
            "provider": "openai",
            "suffix": "/v1/chat/completions",
        }
    ],
    "config": {
        "archive": True,
        "organization": "myusers",
        "retries": 3,
        "rate_limit": 7,
    },
}

# serialize
route = Route.parse_obj(route_data)

# create a route
try:
    client.create_route(route)
except NetworkError as e:
    print("Failed to create route: Network Error")
```

### Fetching Data:
You can get configurations and other settings from Javelin through the SDK:

**Fetching configurations from Javelin**
```python
try:
    client.get_route(route.name)
except RouteNotFoundError as e:
    print("Failed to get route: Route Not Found")
```

### Making an LLM Request: 
Once Javelin has been setup, its easy to route your LLM calls through Javelin. Javelin supports both streaming and non-streaming responses to requests to popular LLMs. 

**Making a request to an LLM through Javelin**
```python

# create the object for the LLM request 
query_data = {
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"},
    ],
    "temperature": 0.8,
}

# query the LLM through the gateway
try:
    response = client.query_route("test_route_1", query_data)
    print(response)
except UnauthorizedError as e:
    print("Failed to query route: Unauthorized")
except NetworkError as e:
    print("Failed to query route: Network Error")
except RouteNotFoundError as e:
    print("Failed to query route: Route Not Found")

```

## 4. Error Handling
With the python SDK, handling errors is as easy as catching the appropriate exception. There are a number of helpful exceptions that the SDK throws for catching different error scenarios for robust client-side error handling. For example:

**Creating a Route with Error Handling**
```python

try:
    client.create_route(route)

except UnauthorizedError as e:
    print("Failed to create route: Unauthorized")

except NetworkError as e:
    print("Failed to create route: Network Error")

```

## 5. Further Reading
