import CodeBlock from '@theme/CodeBlock';

# Chain Integration 
Javelin is fully integrated into Langchain to support Apps already built on Langchain to rapidly use the Gateway to leverage all the features & capabilities of Javelin.  

**DEPRECATION NOTE:** Chain integration is currently **deprecated** and will be removed in the future.

## Installation and Setup
Install `javelin_sdk` to interact with Javelin AI Gateway:

<CodeBlock
  language="python">
  {`pip install 'javelin_sdk'
`}
</CodeBlock>

Set the Javelin's API key as an environment variable:

<CodeBlock
  language="python">
  {`export JAVELIN_API_KEY=...
`}
</CodeBlock>

## Completions Example
<CodeBlock
  language="python"
  title="LangChain Example with JavelinAIGateway"
  showLineNumbers>
  {`from langchain.chains import LLMChain
from langchain.llms import JavelinAIGateway
from langchain.prompts import PromptTemplate

route_completions = "eng_dept03"

gateway = JavelinAIGateway(
    gateway_uri="https://api.javelin.live/v1", 
    route=route_completions,
    model_name="text-davinci-003",
)

llmchain = LLMChain(llm=gateway, prompt=prompt)
result = llmchain.run("podcast player")

print(result)
`}
</CodeBlock>

## Embeddings Example
<CodeBlock
  language="python"
  title="LangChain JavelinAIGatewayEmbeddings Example"
  showLineNumbers>
  {`from langchain.embeddings import JavelinAIGatewayEmbeddings
from langchain.embeddings.openai import OpenAIEmbeddings

embeddings = JavelinAIGatewayEmbeddings(
    gateway_uri="https://api.javelin.live/v1", 
    route="embeddings",
)

print(embeddings.embed_query("hello"))
print(embeddings.embed_documents(["hello"]))
`}
</CodeBlock>

## Chat Example
<CodeBlock
  language="python"
  title="LangChain ChatJavelinAIGateway Example"
  showLineNumbers>
  {`from langchain.chat_models import ChatJavelinAIGateway
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
    gateway_uri="https://api.javelin.live/v1", 
    route="mychatbot_route",
    model_name="gpt-3.5-turbo",
    params={
        "temperature": 0.1
    }
)

print(chat(messages))
`}
</CodeBlock>


