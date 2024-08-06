import CodeBlock from '@theme/CodeBlock';

# Quickstart  

With your LangChain environment, you can use Javelin by changing the API base and adding Javelin headers

<CodeBlock
  language="python">
  {`pip install langchain
pip install langchain-openai
`}
</CodeBlock>

<CodeBlock
  language="python"
  title="ChatOpenAI Configuration Example"
  showLineNumbers>
  {`# Code snippet

llm = ChatOpenAI(
    openai_api_base="https://api-dev.javelin.live/v1/query",
    openai_api_key=openai_api_key, # OpenAI API key
    model_kwargs={
      "extra_headers":{
        "x-api-key": f"{JAVELIN_API_KEY}", # Javelin API key from admin
        "x-javelin-route": "sample_route1" # Javelin route to use
      }
    },
    openai_api_base="https://api-dev.javelin.live/v1/query",
)
`}
</CodeBlock>

Below is a sample code to use Javelin with LangChain:
<CodeBlock
  language="python"
  title="Simple Chat Prompt Example"
  showLineNumbers>
  {`# Example of a simple chat prompt
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
import openai, os

prompt = ChatPromptTemplate.from_template("tell me a short joke about {topic}")

# model = ChatOpenAI(model="gpt-4")
model = ChatOpenAI(
    openai_api_key=os.getenv("OPENAI_API_KEY"),
    openai_api_base="https://api-dev.javelin.live/v1/query",
    model_kwargs={
        "extra_headers":{
        "x-api-key": f"{os.getenv('JAVELIN_API_KEY')}",
        "x-javelin-route": "sample_route1", # Javelin route to use
        }
    }
)

output_parser = StrOutputParser()

chain = prompt | model | output_parser

response = chain.invoke({"topic": "ice cream"})
print(response)
`}
</CodeBlock>
