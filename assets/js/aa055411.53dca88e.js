"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3641],{34949:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>h});let t=JSON.parse('{"id":"javelin-core/integration-new","title":"Integrating Applications","description":"Complete guide to integrating your LLM applications with Javelin\'s unified endpoints architecture for secure and monitored AI interactions","source":"@site/docs/javelin-core/integration-new.md","sourceDirName":"javelin-core","slug":"/javelin-core/integration-new","permalink":"/javelin-core/integration-new","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-core/integration-new.md","tags":[],"version":"current","frontMatter":{"id":"integration-new","title":"Integrating Applications","description":"Complete guide to integrating your LLM applications with Javelin\'s unified endpoints architecture for secure and monitored AI interactions","sidebar_label":"Integration"},"sidebar":"docsSidebar","previous":{"title":"Understanding Reports","permalink":"/javelin-redteam/guides/understanding-reports"},"next":{"title":"Gateway Configuration","permalink":"/javelin-core/gatewayconfiguration"}}');var r=i(74848),s=i(28453),o=i(74235),a=i(15947),l=i(78667);let d={id:"integration-new",title:"Integrating Applications",description:"Complete guide to integrating your LLM applications with Javelin's unified endpoints architecture for secure and monitored AI interactions",sidebar_label:"Integration"},c="Integrating Applications",p={},h=[{value:"Routes &amp; Unified Endpoints",id:"routes--unified-endpoints",level:2},{value:"Overview",id:"overview",level:2},{value:"Getting Started with Javelin Integration",id:"getting-started-with-javelin-integration",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Leveraging the Javelin Platform",id:"leveraging-the-javelin-platform",level:2},{value:"Unified Endpoints Architecture",id:"unified-endpoints-architecture",level:2},{value:"Key Benefits",id:"key-benefits",level:3},{value:"Endpoint Types Overview",id:"endpoint-types-overview",level:3},{value:"Endpoint Breakdown",id:"endpoint-breakdown",level:2},{value:"1. OpenAI-Compatible Endpoints",id:"1-openai-compatible-endpoints",level:3},{value:"Available Endpoints",id:"available-endpoints",level:4},{value:"Example: Chat Completions",id:"example-chat-completions",level:4},{value:"Provider Compatibility",id:"provider-compatibility",level:4},{value:"2. Azure OpenAI API Endpoints",id:"2-azure-openai-api-endpoints",level:3},{value:"Available Endpoints",id:"available-endpoints-1",level:4},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Example: Azure Chat Completions",id:"example-azure-chat-completions",level:4},{value:"3. AWS Bedrock API Endpoints",id:"3-aws-bedrock-api-endpoints",level:3},{value:"Available Endpoints",id:"available-endpoints-2",level:4},{value:"Path Parameters",id:"path-parameters-1",level:4},{value:"Example: AWS Bedrock Model Request",id:"example-aws-bedrock-model-request",level:4},{value:"4. Query Endpoints",id:"4-query-endpoints",level:3},{value:"Available Endpoints",id:"available-endpoints-3",level:4},{value:"Path Parameters",id:"path-parameters-2",level:4},{value:"Example: Query Route",id:"example-query-route",level:4},{value:"SDK Integration Examples",id:"sdk-integration-examples",level:2},{value:"Python",id:"python",level:3},{value:"JavaScript/TypeScript",id:"javascripttypescript",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Javelin Headers",id:"javelin-headers",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3}];function u(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"integrating-applications",children:"Integrating Applications"})}),"\n",(0,r.jsx)(n.h2,{id:"routes--unified-endpoints",children:"Routes & Unified Endpoints"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Javelin provides a powerful routing system that allows you to seamlessly integrate your LLM applications with various AI providers while adding security, monitoring, and guardrails. This guide explains how to integrate your applications with Javelin and leverage its unified endpoint architecture."}),"\n",(0,r.jsx)("img",{className:"img-responsive",src:i(18217).A,alt:"Javelin Integration"}),"\n",(0,r.jsx)(n.h2,{id:"getting-started-with-javelin-integration",children:"Getting Started with Javelin Integration"}),"\n",(0,r.jsx)(n.p,{children:"Integrating your applications with Javelin involves three simple steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configure Javelin Routes"}),": Set up routes in your Javelin gateway to direct traffic to specific models and providers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Update API Endpoints"}),": Change your application's API endpoints to point to Javelin instead of directly to providers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Add Authentication"}),": Include your Javelin API key alongside your provider API keys."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before you begin integration, ensure you have:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A Javelin account with API access"}),"\n",(0,r.jsx)(n.li,{children:"Your Javelin API key"}),"\n",(0,r.jsx)(n.li,{children:"API keys for the LLM providers you plan to use (OpenAI, Azure, etc.)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"leveraging-the-javelin-platform",children:"Leveraging the Javelin Platform"}),"\n",(0,r.jsx)(n.p,{children:"The core usage of Javelin is to define routes, and then to define what to do at each route. Rather than having your LLM Applications (like Co-Pilot apps, chatbots, etc.) individually and directly point to the LLM Vendor & Model (like OpenAI, Gemini, etc.), configure the provider/model endpoint to be your Javelin endpoint."}),"\n",(0,r.jsx)(n.p,{children:"This architecture ensures that all applications that leverage AI Models will route their requests through the Javelin gateway, providing:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Centralized security and access control"}),"\n",(0,r.jsx)(n.li,{children:"Consistent monitoring and observability"}),"\n",(0,r.jsx)(n.li,{children:"Standardized guardrails and safety measures"}),"\n",(0,r.jsx)(n.li,{children:"Simplified provider switching and fallback options"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Javelin supports all the ",(0,r.jsx)(n.a,{href:"/javelin-core/supported-llms",children:"latest models and providers"}),", so you don't have to make any changes to your application or how requests to models are sent."]}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/javelin-core/administration/create-route",children:"Javelin Configuration"})," section for details on how to set up routes on the gateway to different models and providers."]}),"\n",(0,r.jsxs)(n.p,{children:["For programmatic integration, see the ",(0,r.jsx)(n.a,{href:"/javelin-python/quickstart",children:"Python SDK"})," documentation for details on how you can easily embed Javelin within your AI applications."]}),"\n",(0,r.jsx)(n.h2,{id:"unified-endpoints-architecture",children:"Unified Endpoints Architecture"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Unified Endpoints"})," provide a consistent API interface that abstracts the provider-specific details of various AI services. This standardization offers several key benefits:"]}),"\n",(0,r.jsx)(n.h3,{id:"key-benefits",children:"Key Benefits"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Single Entry Points"}),': Instead of routing to different URLs for each provider, you call standardized "unified" endpoints with specific route parameters or path segments.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consistent Request/Response Shapes"}),": All requests follow a uniform structure (for example, a JSON object with a ",(0,r.jsx)(n.code,{children:"prompt"}),", ",(0,r.jsx)(n.code,{children:"messages"}),", or ",(0,r.jsx)(n.code,{children:"input"})," for embeddings). The service then translates it to each provider's specific API format as needed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Provider Flexibility"}),": Switch between providers without changing your application code."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Simplified Authentication"}),": Use a consistent authentication pattern across all providers."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"endpoint-types-overview",children:"Endpoint Types Overview"}),"\n",(0,r.jsx)(n.p,{children:"Javelin supports four main types of endpoints:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Endpoint Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Use Case"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OpenAI-Compatible"}),(0,r.jsx)(n.td,{children:"Standard OpenAI API format"}),(0,r.jsx)(n.td,{children:"General text generation, chat, and embeddings"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Azure OpenAI"}),(0,r.jsx)(n.td,{children:"Azure-specific deployment model"}),(0,r.jsx)(n.td,{children:"Enterprise Azure OpenAI deployments"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AWS Bedrock"}),(0,r.jsx)(n.td,{children:"AWS-specific model routing"}),(0,r.jsx)(n.td,{children:"AWS Bedrock model access"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Query"}),(0,r.jsx)(n.td,{children:"Generic route-based access"}),(0,r.jsx)(n.td,{children:"Custom routing configurations"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"endpoint-breakdown",children:"Endpoint Breakdown"}),"\n",(0,r.jsx)(n.h3,{id:"1-openai-compatible-endpoints",children:"1. OpenAI-Compatible Endpoints"}),"\n",(0,r.jsx)(n.p,{children:"These endpoints mirror the standard OpenAI API methods. They allow you to perform common AI tasks such as generating text completions, handling chat-based requests, or producing embeddings."}),"\n",(0,r.jsx)(n.h4,{id:"available-endpoints",children:"Available Endpoints"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Endpoint"}),(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/completions"})}),(0,r.jsx)(n.td,{children:"POST"}),(0,r.jsx)(n.td,{children:"Request text completions from the provider"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/chat/completions"})}),(0,r.jsx)(n.td,{children:"POST"}),(0,r.jsx)(n.td,{children:"Request chat-based completions (ideal for conversational interfaces)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/embeddings"})}),(0,r.jsx)(n.td,{children:"POST"}),(0,r.jsx)(n.td,{children:"Generate embeddings for provided text data"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-chat-completions",children:"Example: Chat Completions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://your-javelin-domain.com/v1/chat/completions" \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer $LLM_API_KEY" \\\n  -H "X-Javelin-apikey: $JAVELIN_API_KEY" \\\n  -H "X-Javelin-route: $JAVELIN_ROUTE_OPENAI_COMPATIBLE" \\\n  -d \'{\n    "model": "gpt-3.5-turbo",\n    "messages": [\n      {"role": "system", "content": "You are a helpful assistant."},\n      {"role": "user", "content": "Tell me about Javelin."}\n    ],\n    "temperature": 0.7,\n    "max_tokens": 150\n  }\'\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": Replace ",(0,r.jsx)(n.code,{children:"your-javelin-domain.com"})," with your actual Javelin API domain, and insert your actual API keys."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"provider-compatibility",children:"Provider Compatibility"}),"\n",(0,r.jsx)(n.p,{children:"You can use these endpoints with any OpenAI-compatible provider by specifying the appropriate model name. Supported providers include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OpenAI"}),"\n",(0,r.jsx)(n.li,{children:"Azure OpenAI"}),"\n",(0,r.jsx)(n.li,{children:"Mistral AI"}),"\n",(0,r.jsx)(n.li,{children:"Anthropic (Claude)"}),"\n",(0,r.jsx)(n.li,{children:"Cohere"}),"\n",(0,r.jsx)(n.li,{children:"DeepSeek"}),"\n",(0,r.jsx)(n.li,{children:"And more"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-azure-openai-api-endpoints",children:"2. Azure OpenAI API Endpoints"}),"\n",(0,r.jsx)(n.p,{children:"For providers using Azure's deployment model, endpoints include additional parameters for deployment management."}),"\n",(0,r.jsx)(n.h4,{id:"available-endpoints-1",children:"Available Endpoints"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Endpoint"}),(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/openai/deployments/{deployment}/completions"})}),(0,r.jsx)(n.td,{children:"POST"}),(0,r.jsx)(n.td,{children:"Request text completions from Azure deployment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/openai/deployments/{deployment}/chat/completions"})}),(0,r.jsx)(n.td,{children:"POST"}),(0,r.jsx)(n.td,{children:"Request chat-based completions from Azure deployment"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/openai/deployments/{deployment}/embeddings"})}),(0,r.jsx)(n.td,{children:"POST"}),(0,r.jsx)(n.td,{children:"Generate embeddings from Azure deployment"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"providername"}),": The Azure OpenAI provider identifier"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"deployment"}),": The deployment ID configured in Azure"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-azure-chat-completions",children:"Example: Azure Chat Completions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://your-javelin-domain.com/v1/openai/deployments/my-deployment/chat/completions?api-version=2024-02-15-preview" \\\n  -H "Content-Type: application/json" \\\n  -H "api-key: $AZURE_OPENAI_API_KEY" \\\n  -H "X-Javelin-apikey: $JAVELIN_API_KEY" \\\n  -H "X-Javelin-route: $JAVELIN_ROUTE_AZURE_OPENAI" \\\n  -d \'{\n    "messages": [\n      {"role": "user", "content": "Tell me a story"}\n    ],\n    "max_tokens": 50\n  }\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"3-aws-bedrock-api-endpoints",children:"3. AWS Bedrock API Endpoints"}),"\n",(0,r.jsx)(n.p,{children:"For AWS Bedrock\u2013style providers, the endpoints use a slightly different URL pattern to accommodate model versioning and extended routing."}),"\n",(0,r.jsx)(n.h4,{id:"available-endpoints-2",children:"Available Endpoints"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Endpoint"}),(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/model/{model-id}/{apivariation}"})}),(0,r.jsx)(n.td,{children:"POST"}),(0,r.jsx)(n.td,{children:"Route requests to a specific AWS Bedrock model and API variation"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"path-parameters-1",children:"Path Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"model-id"}),": The model-id (identifies a specific AWS Bedrock model)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"apivariation"}),': A parameter to indicate the API variation ("Invoke", "Invoke-Stream", "Invoke-With-Response-Stream", "Converse", "Converse-Stream") or version']}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-aws-bedrock-model-request",children:"Example: AWS Bedrock Model Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://your-javelin-domain.com/v1/model/anthropic.claude-3-sonnet-20240229-v1:0/invoke" \\\n  -H "Content-Type: application/json" \\\n  -H "X-Javelin-apikey: $JAVELIN_API_KEY" \\\n  -H "X-Javelin-route: $JAVELIN_ROUTE_BEDROCK" \\\n  -d \'{\n    "anthropic_version": "bedrock-2023-05-31",\n    "max_tokens": 100,\n    "messages": [\n      {\n        "content": "What is the capital of France?",\n        "role": "user"\n      }\n    ]\n  }\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"4-query-endpoints",children:"4. Query Endpoints"}),"\n",(0,r.jsx)(n.p,{children:"These endpoints allow direct querying of predefined routes, bypassing provider-specific names when a generic and customizable route configuration is desired."}),"\n",(0,r.jsx)(n.h4,{id:"available-endpoints-3",children:"Available Endpoints"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Endpoint"}),(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/query/{routename}"})}),(0,r.jsx)(n.td,{children:"POST"}),(0,r.jsx)(n.td,{children:"Execute a query against a specific route"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"path-parameters-2",children:"Path Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"routename"}),": The route with one or more models based on the configured policies and route configurations"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-query-route",children:"Example: Query Route"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(a.A,{value:"curl",label:"curl",children:[(0,r.jsxs)(n.p,{children:["First, create a route as shown in the ",(0,r.jsx)(n.a,{href:"/javelin-core/administration/create-route",children:"Create Route"})," section."]}),(0,r.jsx)(n.p,{children:"Once you have created a route, you can query it using the following curl command:"}),(0,r.jsx)(l.A,{language:"bash",children:`curl 'https://your-api-domain.com/v1/query/your_route_name' \\
  -H 'Content-Type: application/json' \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -H "X-Javelin-apikey: $JAVELIN_API_KEY" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "user", "content": "SANFRANCISCO is located in?"}
    ],
    "temperature": 0.8
  }'`})]}),(0,r.jsxs)(a.A,{value:"python",label:"Python Requests",children:[(0,r.jsxs)(n.p,{children:["First, create a route as shown in the ",(0,r.jsx)(n.a,{href:"/javelin-core/administration/create-route",children:"Create Route"})," section."]}),(0,r.jsx)(n.p,{children:"Once you have created a route, you can query it using Python requests:"}),(0,r.jsx)(l.A,{language:"python",children:`import requests
import os
import dotenv

dotenv.load_dotenv()

javelin_api_key = os.getenv('JAVELIN_API_KEY')
openai_api_key = os.getenv('OPENAI_API_KEY')
route_name = 'your_route_name'

url = f'https://your-api-domain.com/v1/query/{route_name}'

headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Bearer {openai_api_key}',
    'X-Javelin-apikey': javelin_api_key
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
    print(f"Error: {response.status_code}, {response.text}")`})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important"}),": Make sure to replace ",(0,r.jsx)(n.code,{children:"your_route_name"}),", ",(0,r.jsx)(n.code,{children:"OPENAI_API_KEY"}),", and ",(0,r.jsx)(n.code,{children:"JAVELIN_API_KEY"})," with your actual values."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sdk-integration-examples",children:"SDK Integration Examples"}),"\n",(0,r.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(a.A,{value:"py1",label:"Javelin SDK",children:[(0,r.jsx)(l.A,{language:"python",children:`pip install javelin-sdk
`}),(0,r.jsx)(l.A,{language:"python",title:"Query Route with Javelin SDK",showLineNumbers:!0,children:`from javelin_sdk import JavelinClient, JavelinConfig, Route
import os

javelin_api_key = os.getenv('JAVELIN_API_KEY')
llm_api_key = os.getenv("OPENAI_API_KEY")

# Create Javelin configuration
config = JavelinConfig(
    base_url="https://your-api-domain.com",
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
print(response.model_dump_json(indent=2))`})]}),(0,r.jsxs)(a.A,{value:"py2",label:"OpenAI",children:[(0,r.jsx)(l.A,{language:"python",children:`pip install openai
`}),(0,r.jsx)(l.A,{language:"python",title:"Query and Stream Responses with OpenAI",showLineNumbers:!0,children:`from openai import OpenAI
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
openai_client = OpenAI(
  api_key=openai_api_key,
)
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
    print(chunk.choices[0].delta.content or "", end="")`})]}),(0,r.jsxs)(a.A,{value:"py3",label:"Azure OpenAI",children:[(0,r.jsx)(l.A,{language:"shell",children:"pip install openai"}),(0,r.jsx)(l.A,{language:"python",title:"Query and Stream Responses with AzureOpenAI",showLineNumbers:!0,children:`from openai import AzureOpenAI
import os

# Javelin Headers
javelin_headers = {
    "X-Javelin-apikey": javelin_api_key  # Javelin API key from admin
}

# Define the Javelin route as a variable
javelin_route = "sampleroute1"  # Example route

client = JavelinClient(config) # Create Javelin Client

# Create Azure OpenAI Client
openai_client = AzureOpenAI(
    api_version="2023-07-01-preview",
    azure_endpoint="https://javelinpreview.openai.azure.com", # Azure Endpoint
    api_key=azure_openai_api_key
)

client.register_azureopenai(openai_client, route_name=javelin_route) # Register Azure OpenAI Client with Javelin


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
    print(chunk.choices[0].delta.content or "", end="")`})]}),(0,r.jsxs)(a.A,{value:"py4",label:"Anthropic",children:[(0,r.jsx)(l.A,{language:"shell",children:`pip install javelin-sdk
  `}),(0,r.jsx)(l.A,{language:"python",title:"Query Claude Model with Anthropic via Javelin",showLineNumbers:!0,children:`import os
import json
from typing import Dict, Any
from javelin_sdk import JavelinClient, JavelinConfig
from dotenv import load_dotenv

load_dotenv()

# Helper for pretty print
def print_response(provider: str, response: Dict[str, Any]) -> None:
    print(f"=== Response from {provider} ===")
    print(json.dumps(response, indent=2))

# Javelin client config
config = JavelinConfig(
    base_url=os.getenv("JAVELIN_BASE_URL"),
    javelin_api_key=os.getenv("JAVELIN_API_KEY"),
    llm_api_key=os.getenv("ANTHROPIC_API_KEY"),
    timeout=120,
)
client = JavelinClient(config)

# Proper headers (must match Anthropic's expectations)
custom_headers = {
    "Content-Type": "application/json",
    "x-javelin-route": "anthropic_univ",
    "x-javelin-model": "claude-3-5-sonnet-20240620",
    "x-javelin-provider": "https://api.anthropic.com/v1",
    "x-api-key": os.getenv("ANTHROPIC_API_KEY"),
    "anthropic-version": "2023-06-01",
}
client.set_headers(custom_headers)

# Claude-compatible messages format
query_body = {
    "model": "claude-3-5-sonnet-20240620",
    "max_tokens": 300,
    "temperature": 0.7,
    "system": "You are a helpful assistant.",
    "messages": [
        {
            "role": "user",
            "content": [{"type": "text", "text": "What are the three primary colors?"}]
        }
    ],
}

# Invoke
try:
    response = client.query_unified_endpoint(
        provider_name="anthropic",
        endpoint_type="messages",
        query_body=query_body,
    )
    print_response("Anthropic", response)
except Exception as e:
    print(f"Anthropic query failed: {str(e)}")
`})]}),(0,r.jsxs)(a.A,{value:"py5",label:"LangChain",children:[(0,r.jsx)(l.A,{language:"shell",children:`pip install langchain
pip install langchain-openai`}),(0,r.jsx)(l.A,{language:"python",title:"LangChain with OpenAI Example",showLineNumbers:!0,children:`from langchain_openai import ChatOpenAI
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
    "X-Javelin-apikey": javelin_api_key  # Javelin API key from admin
}

llm = ChatOpenAI(
    openai_api_key=openai_api_key,
    openai_api_base="https://your-api-domain.com/v1/openai",
    default_headers={
        "X-Javelin-apikey": javelin_api_key,
        "X-Javelin-route": route_name,
        "X-Javelin-provider": "https://api.openai.com/v1",
        "X-Javelin-model":model_choice
        
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


`})]}),(0,r.jsx)(a.A,{value:"py8",label:"OpenAI-Compatible Query Example",children:(0,r.jsx)(l.A,{language:"python",title:"OpenAI-Compatible Model Adapters Example",showLineNumbers:!0,children:`
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
    print(f"=== Response from {provider} ===")
    print(json.dumps(response, indent=2))

# Setup client configuration
config = JavelinConfig(
    base_url="https://your-api-domain.com",
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
    
"""
=== Response from OpenAI ===
{
  "id": "chatcmpl-123abc",
  "object": "chat.completion",
  "created": 1677858242,
  "model": "gpt-3.5-turbo",
  "choices": [
    {
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "The three primary colors are red, blue, and yellow. These colors are considered primary because they cannot be created by mixing other colors together.",
        "refusal": null,
        "role": "assistant"
      }
    }
  ],
  "usage": {
    "completion_tokens": 28,
    "completion_tokens_details": {
      "accepted_prediction_tokens": 0,
      "audio_tokens": 0,
      "reasoning_tokens": 0,
      "rejected_prediction_tokens": 0
    },
    "prompt_tokens": 24,
    "prompt_tokens_details": {
      "audio_tokens": 0,
      "cached_tokens": 0
    },
    "total_tokens": 52
  }
}
"""
# 2. Query Bedrock route (using same OpenAI format)
try:
    bedrock_response = client.chat.completions.create(
        route="claude",  # Route configured for Bedrock
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
  "choices": [
    {
      "message": {
        "content": [
          "The three primary colors are: 1. Red 2. Blue 3. Yellow. These colors are considered primary because they cannot be created by mixing other colors together. Instead, they are the basic colors from which all other colors can be derived by mixing them in various combinations."
        ]
      },
      "finish_reason": "end_turn"
    }
  ],
  "usage": {
    "prompt_tokens": 21,
    "completion_tokens": 60
  }
}
"""

# Example using text completions with Llama
try:
    llama_response = client.completions.create(
        route="bedrock_llama",  # Route configured for Bedrock Llama
        prompt="Write a haiku about programming:",
        max_tokens=50,
        temperature=0.7,
        top_p=0.9,
    )
    print_response("Llama", llama_response)
except Exception as e:
    print(f"Llama query failed: {str(e)}")

"""
=== Response from Llama ===
{
  "id": "bedrock-comp-123xyz",
  "object": "text_completion",
  "created": 1677858244,
  "model": "meta.llama2-70b",
  "choices": [
    {
      "message": {
        "content": "** **Code, a dance of ones** **And zeroes, a symphony** **Logic's sweet delight**  **Write a haiku about a favorite hobby:** **Guitar, my trusted friend** **Fingers dance upon the** **"
      }
    }
  ],
  "usage": {
    "prompt_tokens": 7,
    "completion_tokens": 50
  }
}
"""

`})}),(0,r.jsxs)(a.A,{value:"py6",label:"DSPy",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Introduction:"})," ",(0,r.jsx)(n.a,{href:"https://towardsdatascience.com/intro-to-dspy-goodbye-prompting-hello-programming-4ca1c6ce3eb9",children:"DSPy: Goodbye Prompting, Hello Programming!"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"Documentation:"})," ",(0,r.jsx)(n.a,{href:"https://dspy-docs.vercel.app/",children:"DSPy Docs"})]}),(0,r.jsx)(l.A,{language:"shell",children:"pip install dspy-ai"}),(0,r.jsx)(l.A,{language:"py",title:"Using DSPY with Javelin",showLineNumbers:!0,children:`import dspy
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

        self.base_url = "https://your-api-domain.com/v1/query/your_route_name" # Set Javelin's API base URL for query
        self.javelin_headers = {
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer { api_key }",
                    "X-Javelin-apikey": javelin_api_key,
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
print(response)`})]}),(0,r.jsxs)(a.A,{value:"py7",label:"Bedrock",children:[(0,r.jsx)(l.A,{language:"shell",children:"pip install boto3"}),(0,r.jsx)(l.A,{language:"python",title:"AWS Bedrock Integration Example - Boto3",showLineNumbers:!0,children:`import boto3
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

`}),(0,r.jsx)(l.A,{language:"python",title:"AWS Bedrock Integration Example - LangChain",showLineNumbers:!0,children:`# Example using Langchain 

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

`})]}),(0,r.jsx)(a.A,{value:"py9",label:"...",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.llamaindex.ai/",children:"LlamaIndex"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.datastax.com/en/ragstack/docs/index.html",children:"DataStax RAGStack"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://useinstructor.lovable.app/",children:"Instructor, Generating Structure from LLMs"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://microsoft.github.io/promptflow/index.html#",children:"Microsoft Prompt flow"})}),"\n"]}),"\n"]})})]}),"\n",(0,r.jsx)(n.h3,{id:"javascripttypescript",children:"JavaScript/TypeScript"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(a.A,{value:"js1",label:"OpenAI",children:[(0,r.jsx)(l.A,{language:"python",children:`npm install openai
`}),(0,r.jsx)(l.A,{language:"js",title:"OpenAI API Integration Example",showLineNumbers:!0,children:`import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://your-api-domain.com/v1/query/{your_route_name}",
  defaultHeaders: {
    "X-Javelin-apikey": \`\${process.env.JAVELIN_API_KEY}\`
  },
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();`})]}),(0,r.jsxs)(a.A,{value:"js2",label:"Langchain",children:[(0,r.jsx)(l.A,{language:"python",children:`npm install @langchain/openai
`}),(0,r.jsx)(l.A,{language:"js",title:"LangChain OpenAI Integration Example",showLineNumbers:!0,children:`import { ChatOpenAI } from '@langchain/openai';

const llm = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    configuration: {
        basePath: "https://your-api-domain.com/v1/query/{your_route_name}",
        defaultHeaders: {
          "X-Javelin-apikey": \`\${process.env.JAVELIN_API_KEY}\`
        },
    },
});

async function main() {
  const response = await llm.invoke("tell me a joke?");
  console.log(response);
}

main();`})]}),(0,r.jsx)(a.A,{value:"js3",label:"Bedrock",children:(0,r.jsx)(l.A,{language:"js",title:"AWS Bedrock Integration Example",showLineNumbers:!0,children:`import { BedrockRuntimeClient, InvokeModelCommand, InvokeModelWithResponseStreamCommand } from "@aws-sdk/client-bedrock-runtime";

const customHeaders = {
  'X-Javelin-apikey': JAVELIN_API_KEY
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

`})}),(0,r.jsxs)(a.A,{value:"js4",label:"...",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://sdk.vercel.ai/docs",children:"Vercel AI SDK"})," -> ",(0,r.jsx)(n.a,{href:"https://vercel.com/blog/ai-integrations",children:"AI Integrations on Vercel"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/huggingface/chat-ui",children:"Hugging Face ChatUI"})," -> ",(0,r.jsx)(n.a,{href:"https://github.com/huggingface/chat-ui?tab=readme-ov-file#running-your-own-models-using-a-custom-endpoint",children:"Running using a custom endpoint"})]}),"\n"]}),"\n"]}),(0,r.jsxs)(n.p,{children:["We have worked on the integrations. Please contact: ",(0,r.jsx)(n.a,{href:"mailto:support@getjavelin.io",children:"support@getjavelin.io"})," if you would like to use this feature."]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsx)(n.p,{children:"All requests to Javelin endpoints require authentication using:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Javelin API Key"}),": Passed in the ",(0,r.jsx)(n.code,{children:"X-Javelin-apikey"})," header"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Model Provider API Key"}),": Passed in the ",(0,r.jsx)(n.code,{children:"Authorization"})," header (",(0,r.jsx)(n.strong,{children:"mostly"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST "https://your-javelin-domain.com/v1/chat/completions" \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer $PROVIDER_API_KEY" \\\n  -H "X-Javelin-apikey: $JAVELIN_API_KEY" \\\n  -d \'{ ... }\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"javelin-headers",children:"Javelin Headers"}),"\n",(0,r.jsx)(n.p,{children:"When integrating with Javelin, you can customize behavior and routing by using the following custom headers in your requests:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Header"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-Javelin-apikey"})}),(0,r.jsx)(n.td,{children:"\u2705 Yes"}),(0,r.jsx)(n.td,{children:"Your Javelin API key. Used to authenticate requests to the Javelin platform."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-Javelin-virtualapikey"})}),(0,r.jsx)(n.td,{children:"Optional"}),(0,r.jsxs)(n.td,{children:["A ",(0,r.jsx)(n.strong,{children:"secure placeholder"})," for provider API keys. Instead of exposing real provider credentials, you can pass a virtual key ID; Javelin will resolve it to the real secret stored in your vault. This adds security, supports credential rotation, and simplifies integration."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-Javelin-route"})}),(0,r.jsx)(n.td,{children:"\u2705 Yes (for unified endpoints)"}),(0,r.jsx)(n.td,{children:"Specifies the Javelin route name to determine model, provider, fallback policies, and guardrails."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-Javelin-model"})}),(0,r.jsx)(n.td,{children:"Optional"}),(0,r.jsx)(n.td,{children:"Allows overriding the default model at runtime (e.g., gpt-4, claude-3-sonnet) for OpenAI-compatible or Bedrock-like APIs."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"X-Javelin-provider"})}),(0,r.jsx)(n.td,{children:"Optional"}),(0,r.jsxs)(n.td,{children:["Use this to override or specify a provider URL (e.g., ",(0,r.jsx)(n.a,{href:"https://api.openai.com/v1",children:"https://api.openai.com/v1"}),"). Useful in cases where your route supports multiple backends."]})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u26A0\uFE0F Some headers are optional depending on the type of endpoint (OpenAI-compatible, Bedrock, Azure, etc.), but using ",(0,r.jsx)(n.code,{children:"X-Javelin-apikey"})," and ",(0,r.jsx)(n.code,{children:"X-Javelin-route"})," is standard for most integrations."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsx)(n.p,{children:"Javelin returns standard HTTP status codes and error messages. Common errors include:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status Code"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Common Causes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Bad Request"}),(0,r.jsx)(n.td,{children:"Invalid request format or parameters"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"401"}),(0,r.jsx)(n.td,{children:"Unauthorized"}),(0,r.jsx)(n.td,{children:"Missing or invalid API keys"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Not Found"}),(0,r.jsx)(n.td,{children:"Endpoint or route doesn't exist"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"429"}),(0,r.jsx)(n.td,{children:"Too Many Requests"}),(0,r.jsx)(n.td,{children:"Rate limit exceeded"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Internal Server Error"}),(0,r.jsx)(n.td,{children:"Server-side issue"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Example error response:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "error": {\n    "code": "401",\n    "message": "Invalid request: model parameter is required"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Use Environment Variables"}),": Store API keys in environment variables, not in code."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Implement Retry Logic"}),": Add retry mechanisms for transient errors."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Set Timeouts"}),": Configure appropriate timeouts for your application needs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Monitor Usage"}),": Use Javelin's monitoring features to track usage and costs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Test Thoroughly"}),": Test your integration with different providers and models."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Authentication Errors"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify both provider and Javelin API keys are correct"}),"\n",(0,r.jsx)(n.li,{children:"Check that keys are passed in the correct headers"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Endpoint Not Found"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Confirm the endpoint URL is correct"}),"\n",(0,r.jsx)(n.li,{children:"Verify the route exists in your Javelin configuration"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Request Format Errors"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure your JSON payload matches the expected format"}),"\n",(0,r.jsx)(n.li,{children:"Check for required fields specific to the model you're using"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Rate Limiting"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Implement exponential backoff for retries"}),"\n",(0,r.jsx)(n.li,{children:"Consider adjusting your request patterns"}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},15947:(e,n,i)=>{i.d(n,{A:()=>s});var t=i(74848);i(96540);var r=i(18215);function s({children:e,hidden:n,className:i}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)("tabItem_Ymn6",i),hidden:n,children:e})}},74235:(e,n,i)=>{i.d(n,{A:()=>g});var t=i(74848),r=i(96540),s=i(18215),o=i(52204),a=i(56347),l=i(13321),d=i(57641),c=i(73094),p=i(57237);function h(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function u({value:e,tabValues:n}){return n.some(n=>n.value===e)}var m=i(12075);function j({className:e,block:n,selectedValue:i,selectValue:r,tabValues:a}){let l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{let n=e.currentTarget,t=a[l.indexOf(n)].value;t!==i&&(d(n),r(t))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{let i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},e),children:a.map(({value:e,label:n,attributes:r})=>(0,t.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:e=>{l.push(e)},onKeyDown:p,onClick:c,...r,className:(0,s.A)("tabs__item","tabItem_LNqP",r?.className,{"tabs__item--active":i===e}),children:n??e},e))})}function v({lazy:e,children:n,selectedValue:i}){let o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===i);return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:i=!1,groupId:t}=e,s=function(e){let{values:n,children:i}=e;return(0,r.useMemo)(()=>{let e=n??h(i).map(({props:{value:e,label:n,attributes:i,default:t}})=>({value:e,label:n,attributes:i,default:t})),t=(0,c.XI)(e,(e,n)=>e.value===n.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[n,i])}(e),[o,m]=(0,r.useState)(()=>(function({defaultValue:e,tabValues:n}){if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let i=n.find(e=>e.default)??n[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:s})),[j,v]=function({queryString:e=!1,groupId:n}){let i=(0,a.W6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,d.aZ)(t),(0,r.useCallback)(e=>{if(!t)return;let n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})},[t,i])]}({queryString:i,groupId:t}),[x,g]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[i,t]=(0,p.Dv)(n);return[i,(0,r.useCallback)(e=>{n&&t.set(e)},[n,t])]}({groupId:t}),y=(()=>{let e=j??x;return u({value:e,tabValues:s})?e:null})();return(0,l.A)(()=>{y&&m(y)},[y]),{selectedValue:o,selectValue:(0,r.useCallback)(e=>{if(!u({value:e,tabValues:s}))throw Error(`Can't select invalid tab value=${e}`);m(e),v(e),g(e)},[v,g,s]),tabValues:s}}(e);return(0,t.jsxs)("div",{className:(0,s.A)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(j,{...n,...e}),(0,t.jsx)(v,{...n,...e})]})}function g(e){let n=(0,m.A)();return(0,t.jsx)(x,{...e,children:h(e.children)},String(n))}},18217:(e,n,i)=>{i.d(n,{A:()=>t});let t=i.p+"assets/images/javelin_integration_new-ca5b01c8ff9168eafdd9272c5b32729e.png"}}]);