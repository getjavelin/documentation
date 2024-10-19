import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Applications
Its easy to integrate applications that leverage LLMs with Javelin. We have made it easy to seamlessly connect your applications to route all LLM traffic through Javelin with minimal code changes.

## Leveraging the Javelin Platform
The core usage of Javelin is to define routes, and then to define what to do at each route. Rather than having your LLM Applications (like Co-Pilot apps etc.,) individually & directly point to the LLM Vendor & Model (like OpenAI, Gemini etc.,), configure the provider/model endpoint to be your Javelin endpoint. This ensures that all applications that leverage AI Models will route their requests through the gateway. Javelin supports all the [latest models and providers](supported-llms), so you don't have to make any changes to your application or how requests to models are sent. 

See [Javelin Configuration](routeconfiguration) section, for details on how to setup routes on the gateway to different models and providers. 

See [Python SDK](../javelin-python/quickstart) for details on how you can easily embed this within your AI Apps. 

## Querying an LLM
Javelin may send a request to one or more models based on the configured policies and route configurations and return back a response.

### REST API
<Tabs>
<TabItem value="curl" label="curl">

First, create a route as shown in the [Create Route](../javelin-core/administration/createroute) section.

Once you have created a route, you can query it using the following curl command:

<CodeBlock
  language="bash">
  {`curl 'https://api-dev.javelin.live/v1/query/your_route_name' \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer YOUR_OPENAI_API_KEY' \\
  -H 'x-api-key: YOUR_JAVELIN_API_KEY' \\
  --data-raw '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "user", "content": "SANFRANCISCO is located in?"}
    ],
    "temperature": 0.8
  }'`}
</CodeBlock>

Make sure to replace `your_route_name`, `YOUR_OPENAI_API_KEY`, and `YOUR_JAVELIN_API_KEY` with your actual values.

</TabItem>
<TabItem value="python" label="Python Requests">

First, create a route as shown in the [Create Route](../javelin-core/administration/createroute) section.

Once you have created a route, you can query it using Python requests:

<CodeBlock
  language="python">
  {`import requests
import os
import dotenv

dotenv.load_dotenv()

javelin_api_key = os.getenv('JAVELIN_API_KEY')
openai_api_key = os.getenv('OPENAI_API_KEY')
route_name = 'your_route_name'

url = f'https://api-dev.javelin.live/v1/query/{route_name}'

headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {openai_api_key}',
    'x-api-key': javelin_api_key
}

data = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {"role": "user", "content": "SANFRANCISCO is located in?"}
    ],
    "temperature": 0.8
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code}, {response.text}")`}
</CodeBlock>

Make sure to replace `your_route_name` with your actual route name and set the `JAVELIN_API_KEY` and `OPENAI_API_KEY` environment variables.

</TabItem>
</Tabs>

### Python
<Tabs>
<TabItem value="py1" label="Javelin SDK">

<CodeBlock
  language="python">
  {`pip install javelin-sdk
`}
</CodeBlock>

<CodeBlock
  language="python"
  title="Query Route with Javelin SDK"
  showLineNumbers>
  {`from javelin_sdk import JavelinClient, JavelinConfig, Route
import os

javelin_api_key = os.getenv('JAVELIN_API_KEY')
llm_api_key = os.getenv("OPENAI_API_KEY")

# Create Javelin configuration
config = JavelinConfig(
    base_url="https://api-dev.javelin.live",
    javelin_api_key=javelin_api_key,
    llm_api_key=llm_api_key
)

# Create Javelin client
client = JavelinClient(config)

# Route name to get is {routename} e.g., sampleroute1
query_data = {
    "messages": [ 
        {
            "role": "system",
            "content": "Hello, you are a helpful scientific assistant."
        },
        {
            "role": "user",
            "content": "What is the chemical composition of sugar?"
        }
    ],
    "temperature": 0.8
}

# Now query the route, for async use 'await client.aquery_route("sampleroute1", query_data)'
response = client.query_route("sampleroute1", query_data)
print(response.model_dump_json(indent=2))`}
</CodeBlock>

</TabItem>

<TabItem value="py2" label="OpenAI">

<CodeBlock
  language="python">
  {`pip install openai
`}
</CodeBlock>

<CodeBlock
  language="python"
  title="Query and Stream Responses with OpenAI"
  showLineNumbers>
  {`from openai import OpenAI
import os

javelin_api_key = os.environ['JAVELIN_API_KEY']
llm_api_key = os.environ["OPENAI_API_KEY"]

# Javelin Headers
javelin_headers = {
    "x-api-key": javelin_api_key,       # Javelin API key from admin
    "x-javelin-route": "sampleroute1"  # Javelin route to use
}

# Create OpenAI Client
client = OpenAI(api_key=llm_api_key,
                base_url="https://api-dev.javelin.live/v1/query", # Set Javelin's API base URL for query
                default_headers=javelin_headers)

# Query the model
completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "Hello, you are a helpful scientific assistant"},
    {"role": "user", "content": "What is the chemical composition of sugar?"}
  ]
)

print(completion.model_dump_json(indent=2))

# Streaming Responses
stream = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system", "content": "Hello, you are a helpful scientific assistant."},
      {"role": "user", "content": "What is the chemical composition of sugar?"}
    ],
    stream=True
)

for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")`}
</CodeBlock>


</TabItem>

<TabItem value="py3" label="Azure OpenAI">

<CodeBlock
  language="shell">
  {`pip install openai`}
</CodeBlock>

<CodeBlock
  language="python"
  title="Query and Stream Responses with AzureOpenAI"
  showLineNumbers>
  {`from openai import AzureOpenAI
import os

# Javelin Headers
javelin_api_key = os.environ['JAVELIN_API_KEY']
llm_api_key = os.environ["AZURE_OPENAI_API_KEY"]

javelin_headers = {
    "x-api-key": javelin_api_key,     # Javelin API key from admin
    "x-javelin-route": "sampleroute1" # Javelin route to use
}

client = AzureOpenAI(api_key=llm_api_key,
                     base_url="https://api-dev.javelin.live/v1/query", # Set Javelin's API base URL for query
                     default_headers=javelin_headers,
                     api_version="2023-07-01-preview")

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "Hello, you are a helpful scientific assistant."},
    {"role": "user", "content": "What is the chemical composition of sugar?"}
  ]
)

print(completion.model_dump_json(indent=2))

# Streaming Responses
stream = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system", "content": "Hello, you are a helpful scientific assistant."},
      {"role": "user", "content": "What is the chemical composition of sugar?"}
    ],
    stream=True
)

for chunk in stream:
  if chunk.choices:
    print(chunk.choices[0].delta.content or "", end="")`}
</CodeBlock>


</TabItem>

<TabItem value="py4" label="LangChain">

<CodeBlock
  language="shell">
  {`pip install langchain
pip install langchain-openai`}
</CodeBlock>


<CodeBlock
  language="python"
  title="LangChain with OpenAI Example"
  showLineNumbers>
  {`from langchain_openai import ChatOpenAI
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
    openai_api_base="https://api-dev.javelin.live/v1/query", # Set Javelin's API base URL for query
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
`}
</CodeBlock>

</TabItem>

<TabItem value="py5" label="DSPy">

**Introduction:** [DSPy: Goodbye Prompting, Hello Programming!](https://towardsdatascience.com/intro-to-dspy-goodbye-prompting-hello-programming-4ca1c6ce3eb9)  
**Documentation:** [DSPy Docs](https://dspy-docs.vercel.app/)

<CodeBlock
  language="shell">
  {`pip install dspy-ai`}
</CodeBlock>


<CodeBlock
  language="py"
  title="Using DSPY with Javelin"
  showLineNumbers>
  {`import dspy
from dsp import LM
import os
import requests

# Assuming the environment variables are set correctly
javelin_api_key = os.getenv('JAVELIN_API_KEY')
llm_api_key = os.getenv("OPENAI_API_KEY")

class Javelin(LM):
    def __init__(self, model, api_key):
        self.model = model
        self.api_key = api_key
        self.provider = "default"
        self.kwargs = { 
                    "temperature": 1.0, 
                    "max_tokens": 500, 
                    "top_p": 1.0, 
                    "frequency_penalty": 0.0, 
                    "presence_penalty": 0.0, 
                    "stop": None, 
                    "n": 1, 
                    "logprobs": None, 
                    "logit_bias": None,
                    "stream": False
        }

        self.base_url = "https://api-dev.javelin.live/v1/query/" # Set Javelin's API base URL for query
        self.javelin_headers = {
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer { api_key }",
                    "x-javelin-route": "openai", # route name configured for OpenAI
                    "x-api-key": javelin_api_key,
        }

        self.history = []

    def basic_request(self, prompt: str, **kwargs):
        headers = self.javelin_headers

        data = {
            **kwargs,
            "model": self.model,
            "messages": [
                {"role": "user", "content": prompt}
            ]
        }

        response = requests.post(self.base_url, headers=headers, json=data)
        response = response.json()

        self.history.append({
            "prompt": prompt,
            "response": response,
            "kwargs": kwargs,
        })
        return response

    def __call__(self, prompt, only_completed=True, return_sorted=False, **kwargs):
        response = self.request(prompt, **kwargs)
        if 'choices' in response and len(response['choices']) > 0:
            first_choice_content = response['choices'][0]['message']['content']
            completions = [first_choice_content]
            return completions
        else:
            return ["No response found."]

javelin = Javelin(model="gpt-4-1106-preview", api_key=llm_api_key)
dspy.configure(lm=javelin)

# Define a module (ChainOfThought) and assign it a signature (return an answer, given a question).
qa = dspy.ChainOfThought('question -> answer')
response = qa(question="You have 3 baskets. The first basket has twice as many apples as the second basket. The third basket has 3 fewer apples than the first basket. If you have a total of 27 apples, how many apples are in each basket?")
print(response)`}
</CodeBlock>


</TabItem>

<TabItem value="py6" label="...">

- [LlamaIndex](https://www.llamaindex.ai/open-source)

- [DataStax RAGStack](https://docs.datastax.com/en/ragstack/docs/index.html)

- [Instructor, Generating Structure from LLMs](https://jxnl.github.io/instructor/)

- [Microsoft Prompt flow](https://microsoft.github.io/promptflow/index.html#)

</TabItem>

</Tabs>


### JavaScript/TypeScript

<Tabs>
<TabItem value="js1" label="OpenAI">

<CodeBlock
  language="python">
  {`npm install openai
`}
</CodeBlock>

<CodeBlock
  language="js"
  title="OpenAI API Integration Example"
  showLineNumbers>
  {`import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api-dev.javelin.live/v1/query",
  defaultHeaders: {
    "x-api-key": \`\${process.env.JAVELIN_API_KEY}\`,
    "x-javelin-route": "sample_route1",
  },
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();`}
</CodeBlock>


</TabItem>

<TabItem value="js2" label="Langchain">

<CodeBlock
  language="python">
  {`npm install @langchain/openai
`}
</CodeBlock>

<CodeBlock
  language="js"
  title="LangChain OpenAI Integration Example"
  showLineNumbers>
  {`import { ChatOpenAI } from '@langchain/openai';

const llm = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    configuration: {
        basePath: "https://api-dev.javelin.live/v1/query",
        defaultHeaders: {
          "x-api-key": \`\${process.env.JAVELIN_API_KEY}\`,
          "x-javelin-route": "sample_route1",
        },
    },
});

async function main() {
  const response = await llm.invoke("tell me a joke?");
  console.log(response);
}

main();`}
</CodeBlock>

</TabItem>

<TabItem value="js3" label="...">

- [Vercel AI SDK](https://sdk.vercel.ai/docs) -> [AI Integrations on Vercel](https://vercel.com/blog/ai-integrations)

- [Hugging Face ChatUI](https://github.com/huggingface/chat-ui) -> [Running using a custom endpoint](https://github.com/huggingface/chat-ui?tab=readme-ov-file#running-your-own-models-using-a-custom-endpoint)

We have worked on the integrations. Please contact: support@getjavelin.io if you would like to use this feature.

</TabItem>

</Tabs>



