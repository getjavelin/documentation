import CodeBlock from '@theme/CodeBlock';

# Quickstart Guide

The Javelin client is a Python library for interacting with the Javelin API. This guide provides a basic overview of setting up and using the Javelin client.

## 1. Installation

To install the Javelin client, use pip:

<CodeBlock
  language="python"
  title="">
  {`pip install javelin_sdk`}
</CodeBlock>

## 2. Setup

Before making any API calls, initialize the client:

**Setting up the Python Client**

<CodeBlock
language="python"
title=""
>
{`from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
    Route,
    NetworkError,
    RouteNotFoundError,
    UnauthorizedError
)

import os, sys

try:
    javelin_api_key = os.getenv('JAVELIN_API_KEY')
    llm_api_key = os.getenv("OPENAI_API_KEY")

    # Update the base_url to point to your dev, staging, or production environments
    config = JavelinConfig(
        base_url="https://api.javelin.live",   # Use appropriate environment URL
        javelin_api_key=javelin_api_key,       # API key for Javelin authentication
        llm_api_key=llm_api_key,               # API key for LLM provider (e.g., OpenAI)   
    )
    client = JavelinClient(config)

    print('sucessfully connected to Javelin Client')

except NetworkError as e:
    print("Failed to create client: Network Error")
    sys.exit()
`}
</CodeBlock>

## 3. Making Requests

With the client set up, you can make requests to the Javelin API:

<CodeBlock
language="python"
title=""
>
{`# Define route configuration data
route_data = {
    "name": "test_route_1",                   # Unique name for the route
    "type": "chat",                           # Route type (e.g., chat, completion, etc.)
    "models": [
        {
            "name": "gpt-3.5-turbo",          # Model name to be used
            "enabled": True,                  # Enable/disable this route
            "provider": "openai",             # Model provider
            "suffix": "/chat/completions",    # API endpoint suffix
        }
    ],
    "config": {
        "archive": True,                      # Archive the request/responses for this route
        "organization": "myusers",            # Organization associated with this route
        "retries": 3,                         # Number of retry attempts in case of failure
        "rate_limit": 7,                      # Maximum requests per second allowed for this route
    },
}

# Validate and create a Route object from the route configuration data dictionary
route = Route.model_validate(route_data)

# create a route
try:
    client.create_route(route)
except NetworkError as e:
    print("Failed to create route: Network Error")
`}
</CodeBlock>

### Fetching Data:

You can get configurations and other settings from Javelin through the SDK:

**Fetching configurations from Javelin**

<CodeBlock
language="python"
title=""
>
{`try:
    fetched_route = client.get_route(route.name)
    print(fetched_route.model_dump_json(indent=2))
except RouteNotFoundError as e:
    print("Failed to get route: Route Not Found")
`}
</CodeBlock>

### Making an LLM Request:

Once Javelin has been setup, its easy to route your LLM calls through Javelin. Javelin supports both streaming and non-streaming responses to requests to popular LLMs.

**Making a request to an LLM through Javelin**

<CodeBlock
language="python"
title=""
>
{`# create the object for the LLM request
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
    print("Failed to query route: Route Not Found")`}
</CodeBlock>

## 4. Error Handling

With the python SDK, handling errors is as easy as catching the appropriate exception. There are a number of helpful exceptions that the SDK throws for catching different error scenarios for robust client-side error handling. For example:

**Creating a Route with Error Handling**

<CodeBlock
language="python"
>
{`try:
    client.create_route(route)

except UnauthorizedError as e:
    print("Failed to create route: Unauthorized")

except NetworkError as e:
    print("Failed to create route: Network Error")`}
</CodeBlock>
