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

## Javelin Headers
# Define Javelin headers with the API key
config = JavelinConfig(
  javelin_api_key=javelin_api_key,
)

# Define the Javelin route as a variable
javelin_route = "sampleroute1"  # Define your universal route

client = JavelinClient(config)

# Register the OpenAI client with Javelin using the route name
client.register_openai(openai_client, route_name=javelin_route)


# Query the model
# --- Call OpenAI Endpoints ---

print("OpenAI: 1 - Chat completions")
chat_completions = openai_client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "What is machine learning?"}],
)
print(completion.model_dump_json(indent=2))

# Streaming Responses
stream = openai_client.chat.completions.create(
    messages=[
        {"role": "user", "content": "Say this is a test"}
    ],
    model="gpt-4o",
    stream=True,
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
javelin_headers = {
    "x-api-key": javelin_api_key  # Javelin API key from admin
}

# Define the Javelin route as a variable
javelin_route = "sampleroute1"  # Example route

client = JavelinClient(config) # Create Javelin Client
client.register_azureopenai(openai_client, route_name=javelin_route) # Register Azure OpenAI Client with Javelin

# Create Azure OpenAI Client
openai_client = AzureOpenAI(
    api_version="2023-07-01-preview",
    azure_endpoint="https://javelinpreview.openai.azure.com", # Azure Endpoint
    api_key=azure_openai_api_key
)


completion = openai_client.chat.completions.create(
    model="gpt-4",  # e.g. gpt-3.5-turbo
    messages=[
        {
            "role": "user",
            "content": "How do I output all files in a directory using Python?",
        },
    ],
)

print(completion.model_dump_json(indent=2))

# Streaming Responses
stream = openai_client.chat.completions.create(
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

# Retrieve API keys from environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')
llm_api_key = os.getenv("OPENAI_API_KEY")

model_choice = "gpt-3.5-turbo"  # For example, change to "gpt-4"

# Define the Javelin route as a variable
route_name = "sampleroute1"

# Define Javelin headers with the API key
javelin_headers = {
    "x-api-key": javelin_api_key  # Javelin API key from admin
}

llm = ChatOpenAI(
    openai_api_key=openai_api_key,
    openai_api_base="https://api-dev.javelin.live/v1/openai",
    default_headers={
        "x-api-key": javelin_api_key,
        "x-javelin-route": route_name,
        "x-javelin-provider": "https://api.openai.com/v1",
        "x-javelin-model":model_choice
        
    }
)


# Define a simple prompt template
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("user", "{input}")
])

# Use a simple output parser (string output)
output_parser = StrOutputParser()

# Create the processing chain (prompt -> LLM -> parser)
chain = prompt | llm | output_parser

def ask_question(question: str) -> str:
    return chain.invoke({"input": question})

# Example usage:
if __name__ == "__main__":
    question = "What is the chemical composition of water?"
    answer = ask_question(question)
    print("Answer:", answer)


`}
</CodeBlock>

</TabItem>

<TabItem value="py7" label="OpenAI-Compatible Query Example">
<CodeBlock
  language="python"
  title="OpenAI-Compatible Model Adapters Example"
  showLineNumbers>
  {`
#This example demonstrates how Javelin uses OpenAI's schema as a standardized interface for different LLM providers. 
#By adopting OpenAI's widely-used request/response format, Javelin enables seamless integration with various LLM providers 
#(like Anthropic, Bedrock, Mistral, etc.) while maintaining a consistent API structure. This allows developers to use the 
#same code pattern regardless of the underlying model provider, with Javelin handling the necessary translations and adaptations behind the scenes.

from javelin_sdk import JavelinClient, JavelinConfig
import os
from typing import Dict, Any
import json

# Helper function to pretty print responses
def print_response(provider: str, response: Dict[str, Any]) -> None:
    print(f"\n=== Response from {provider} ===")
    print(json.dumps(response, indent=2))

# Setup client configuration
config = JavelinConfig(
    base_url="https://api-dev.javelin.live",
    javelin_api_key=os.getenv('JAVELIN_API_KEY'),
    llm_api_key=os.getenv('OPENAI_API_KEY')
)
client = JavelinClient(config)

# Example messages in OpenAI format
messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "What are the three primary colors?"}
]

# 1. Query OpenAI route
try:
    openai_response = client.chat.completions.create(
        route="openai_route",  # Route configured for OpenAI
        messages=messages,
        temperature=0.7,
        max_tokens=150
    )
    print_response("OpenAI", openai_response)
except Exception as e:
    print(f"OpenAI query failed: {str(e)}")
    
=== Response from OpenAI ===
"""
{
  "id": "chatcmpl-123abc",
  "object": "chat.completion",
  "created": 1677858242,
  "model": "gpt-3.5-turbo",
  "usage": {
    "prompt_tokens": 42,
    "completion_tokens": 38,
    "total_tokens": 80
  },
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "The three primary colors are red, blue, and yellow."
      },
      "finish_reason": "stop",
      "index": 0
    }
  ]
}
"""
# 2. Query Bedrock route (using same OpenAI format)
try:
    bedrock_response = client.chat.completions.create(
        route="bedrock_route",  # Route configured for Bedrock
        messages=messages,
        temperature=0.7,
        max_tokens=150
    )
    print_response("Bedrock", bedrock_response)
except Exception as e:
    print(f"Bedrock query failed: {str(e)}")
"""
=== Response from Bedrock ===
{
  "id": "bedrock-123xyz",
  "object": "chat.completion",
  "created": 1677858243,
  "model": "anthropic.claude-v2",
  "usage": {
    "prompt_tokens": 42,
    "completion_tokens": 41,
    "total_tokens": 83
  },
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "The three primary colors are red, blue, and yellow. These colors cannot be created by mixing other colors together."
      },
      "finish_reason": "stop",
      "index": 0
    }
  ]
}
"""

# Example using text completions with Llama
try:
    llama_response = client.completions.create(
        route="bedrockllama",  # Route configured for Bedrock Llama
        prompt="Write a haiku about programming:",
        max_tokens=50,
        temperature=0.7,
        top_p=0.9,
    )
    print("=== Llama Text Completion Response ===")
    pretty_print(llama_response)
except Exception as e:
    print(f"Llama query failed: {str(e)}")

"""
=== Llama Text Completion Response ===
{
  "id": "bedrock-comp-123xyz",
  "object": "text_completion",
  "created": 1677858244,
  "model": "meta.llama2-70b",
  "choices": [
    {
      "text": "Code flows like water\\nBugs crawl through silent errors\\nDebugger saves all",
      "index": 0,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 6,
    "completion_tokens": 15,
    "total_tokens": 21
  }
}
"""

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

<TabItem value="py6" label="Bedrock">

<CodeBlock
  language="shell">
  {`pip install boto3`}
</CodeBlock>

<CodeBlock
  language="python"
  title="AWS Bedrock Integration Example - Boto3"
  showLineNumbers>
  {`import boto3
import json
from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
)

# Configure boto3 bedrock-runtime service client
bedrock_runtime_client = boto3.client(
    service_name="bedrock-runtime",
    region_name="us-east-1"
)

# Configure boto3 bedrock service client
bedrock_client = boto3.client(
    service_name="bedrock",
    region_name="us-east-1"
)


# Initialize Javelin Client
config = JavelinConfig(
    base_url=os.getenv('JAVELIN_BASE_URL'),
    javelin_api_key=os.getenv('JAVELIN_API_KEY')
)
client = JavelinClient(config)

# Passing bedrock_client is recommended for optimal error handling
# and request management, though it remains optional.
client.register_bedrock(
  bedrock_runtime_client=bedrock_runtime_client, 
  bedrock_client=bedrock_client, 
  route_name="bedrock" # Universal route for the Amazon Bedrock models
)

# Example using Claude model via Bedrock Runtime
response = bedrock_runtime_client.invoke_model(
    modelId="anthropic.claude-v2:1",
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 100,
        "messages": [
            {
                "content": "What is machine learning?",
                "role": "user"
            }
        ]
    }),
    contentType="application/json"
)
response_body = json.loads(response["body"].read())
print(f"Invoke Response: {json.dumps(response_body, indent=2)}")

`}
</CodeBlock>

Learn more about how to setup Universal Bedrock routes to use this example [here](../javelin-core/administration/createbedrockroutes).



<CodeBlock
  language="python"
  title="AWS Bedrock Integration Example - LangChain"
  showLineNumbers>
  {`# Example using Langchain 

from langchain_community.llms.bedrock import Bedrock as BedrockLLM

llm = BedrockLLM(
    client=bedrock_runtime_client,
    model_id="anthropic.claude-v2:1",
    model_kwargs={
        "max_tokens_to_sample": 256,
        "temperature": 0.7,
    }
)

stream_generator = llm.stream("What is machine learning?")
for chunk in stream_generator:
    print(chunk, end='', flush=True)

`}
</CodeBlock>

Learn more about how to setup Universal Bedrock routes to use this example [here](../javelin-core/administration/createbedrockroutes).


</TabItem>

<TabItem value="py8" label="...">

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


<TabItem value="js3" label="Bedrock">

<CodeBlock
  language="js"
  title="AWS Bedrock Integration Example"
  showLineNumbers>
  {`import { BedrockRuntimeClient, InvokeModelCommand, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime";

const customHeaders = {
  'x-api-key': JAVELIN_API_KEY
};

const client = new BedrockRuntimeClient({
  region: AWS_REGION,
  // Use the javelin endpoint for bedrock
  endpoint: JAVELIN_ENDPOINT,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

// Add custom headers via middleware
client.middlewareStack.add(
  (next, context) => async (args) => {
    args.request.headers = {
      ...args.request.headers,
      ...customHeaders
    };
    return next(args);
  },
  {
    step: "build"
  }
);



// Query the model
const payload = {
  anthropic_version: "bedrock-2023-05-31",
  max_tokens: 1000,
  messages: [
    {
      role: "user",
      content: "What is machine learning?",
    },
  ],
};


const command = new InvokeModelWithResponseStreamCommand({
  contentType: "application/json",
  body: JSON.stringify(payload),
  "anthropic.claude-v2:1",
});

const apiResponse = await client.send(command);

for await (const item of apiResponse.body) {
  console.log(item);
}

`}
</CodeBlock>

Learn more about how to setup Bedrock routes to use these examples [here](../javelin-core/administration/createbedrockroutes).

</TabItem>


<TabItem value="js4" label="...">

- [Vercel AI SDK](https://sdk.vercel.ai/docs) -> [AI Integrations on Vercel](https://vercel.com/blog/ai-integrations)

- [Hugging Face ChatUI](https://github.com/huggingface/chat-ui) -> [Running using a custom endpoint](https://github.com/huggingface/chat-ui?tab=readme-ov-file#running-your-own-models-using-a-custom-endpoint)

We have worked on the integrations. Please contact: support@getjavelin.io if you would like to use this feature.

</TabItem>

</Tabs>



