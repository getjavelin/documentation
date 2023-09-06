# Quickstart 
Javelin is fully integrated into Langchain to support Apps already built on Langchain to rapidly use the Gateway to leverage all the features & capabilities of Javelin. 

## Installation and Setup
Install `javelin_sdk` to interact with Javelin AI Gateway:

```sh
pip install 'javelin_sdk'
```

Set the Javelin's API key as an environment variable:

```sh
export JAVELIN_API_KEY=...
```

## Completions Example
```python
from langchain.chains import LLMChain
from langchain.llms import JavelinAIGateway
from langchain.prompts import PromptTemplate

route_completions = "eng_dept03"

gateway = JavelinAIGateway(
    gateway_uri="http://localhost:8000", # replace with Javelin endpoint URL
    route=route_completions,
    model_name="text-davinci-003",
)

llmchain = LLMChain(llm=gateway, prompt=prompt)
result = llmchain.run("podcast player")

print(result)

```

## Embeddings Example
```python
from langchain.embeddings import JavelinAIGatewayEmbeddings
from langchain.embeddings.openai import OpenAIEmbeddings

embeddings = JavelinAIGatewayEmbeddings(
    gateway_uri="http://localhost:8000", # replace with Javelin endpoint URL
    route="embeddings",
)

print(embeddings.embed_query("hello"))
print(embeddings.embed_documents(["hello"]))
```

## Chat Example
```python
from langchain.chat_models import ChatJavelinAIGateway
from langchain.schema import HumanMessage, SystemMessage

messages = [
    SystemMessage(
        content="You are a helpful assistant that translates English to French."
    ),
    HumanMessage(
        content="Artificial Intelligence has the power to transform humanity and make the world a better place"
    ),
]

chat = ChatJavelinAIGateway(
    gateway_uri="http://localhost:8000", # replace with Javelin endpoint URL
    route="mychatbot_route",
    model_name="gpt-3.5-turbo"
    params={
        "temperature": 0.1
    }
)

print(chat(messages))

```

