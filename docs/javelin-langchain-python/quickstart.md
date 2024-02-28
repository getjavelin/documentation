# Quickstart  

With your LangChain environment, you can use Javelin by changing the API base and adding Javelin headers

```python
#  Option 1
openai.api_base = "https://api.javelin.live/v1"
llm = ChatOpenAI(
    openai_api_key='<>',
    model_kwargs={
      "extra_headers":{
        "x-api-key": f"{JAVELIN_API_KEY}", # Javelin API key from admin
        "x-javelin-route": "sample_route1" # Javelin route to use
      }
    }
)

# Option 2
llm = ChatOpenAI(
    openai_api_key='<>',
    model_kwargs={
      "extra_headers":{
        "x-api-key": f"{JAVELIN_API_KEY}", # Javelin API key from admin
        "x-javelin-route": "sample_route1" # Javelin route to use
      }
    },
    openai_api_base="https://api.javelin.live/v1",
)
```

