# Quickstart  

With your LangChain environment, you can use Javelin by changing the API base and adding Javelin headers

```shell<!--
pip install langchain
pip install langchain-openai
```

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

import os

javelin_api_key = os.getenv('JAVELIN_API_KEY')
llm_api_key = os.getenv("OPENAI_API_KEY")
javelin_headers = {
                    "x-api-key": javelin_api_key,      # Javelin API key from admin
                    "x-javelin-route": "sample_route1" # Javelin route to use
                  }

llm = ChatOpenAI(
    openai_api_base="https://api.javelin.live/v1/query",
    openai_api_key=llm_api_key,
    model_kwargs={
      "extra_headers": javelin_headers
    },
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "Hello, you are a helpful scientific assistant."),
    ("user", "{input}")
])

output_parser = StrOutputParser()

chain = prompt | llm | output_parser

print(chain.invoke({"input": "What is the chemical composition of sugar?"}))
```

