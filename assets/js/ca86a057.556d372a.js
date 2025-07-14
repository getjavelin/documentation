"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9910],{88554:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>d});let t=JSON.parse('{"id":"javelin-langchain-python/chain","title":"Chain Integration","description":"Javelin is fully integrated into Langchain to support Apps already built on Langchain to rapidly use the Gateway to leverage all the features & capabilities of Javelin.","source":"@site/docs/javelin-langchain-python/chain.md","sourceDirName":"javelin-langchain-python","slug":"/javelin-langchain-python/chain","permalink":"/javelin-langchain-python/chain","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-langchain-python/chain.md","tags":[],"version":"current","frontMatter":{}}');var i=n(74848),l=n(28453),s=n(78667);let o={},r="Chain Integration",h={},d=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Completions Example",id:"completions-example",level:2},{value:"Embeddings Example",id:"embeddings-example",level:2},{value:"Chat Example",id:"chat-example",level:2}];function p(e){let a={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"chain-integration",children:"Chain Integration"})}),"\n",(0,i.jsx)(a.p,{children:"Javelin is fully integrated into Langchain to support Apps already built on Langchain to rapidly use the Gateway to leverage all the features & capabilities of Javelin."}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"DEPRECATION NOTE:"})," Chain integration is currently ",(0,i.jsx)(a.strong,{children:"deprecated"})," and will be removed in the future."]}),"\n",(0,i.jsx)(a.h2,{id:"installation-and-setup",children:"Installation and Setup"}),"\n",(0,i.jsxs)(a.p,{children:["Install ",(0,i.jsx)(a.code,{children:"javelin_sdk"})," to interact with Javelin AI Gateway:"]}),"\n",(0,i.jsx)(s.A,{language:"python",children:`pip install 'javelin-sdk'
`}),"\n",(0,i.jsx)(a.p,{children:"Set the Javelin's API key as an environment variable:"}),"\n",(0,i.jsx)(s.A,{language:"python",children:`export JAVELIN_API_KEY=...
`}),"\n",(0,i.jsx)(a.h2,{id:"completions-example",children:"Completions Example"}),"\n",(0,i.jsx)(s.A,{language:"python",title:"LangChain Example with JavelinAIGateway",showLineNumbers:!0,children:`from langchain.chains import LLMChain
from langchain.llms import JavelinAIGateway
from langchain.prompts import PromptTemplate

route_completions = "eng_dept03"

gateway = JavelinAIGateway(
    gateway_uri="https://your-api-domain.com/v1", 
    route=route_completions,
    model_name="text-davinci-003",
)

llmchain = LLMChain(llm=gateway, prompt=prompt)
result = llmchain.run("podcast player")

print(result)
`}),"\n",(0,i.jsx)(a.h2,{id:"embeddings-example",children:"Embeddings Example"}),"\n",(0,i.jsx)(s.A,{language:"python",title:"LangChain JavelinAIGatewayEmbeddings Example",showLineNumbers:!0,children:`from langchain.embeddings import JavelinAIGatewayEmbeddings
from langchain.embeddings.openai import OpenAIEmbeddings

embeddings = JavelinAIGatewayEmbeddings(
    gateway_uri="https://your-api-domain.com/v1", 
    route="embeddings",
)

print(embeddings.embed_query("hello"))
print(embeddings.embed_documents(["hello"]))
`}),"\n",(0,i.jsx)(a.h2,{id:"chat-example",children:"Chat Example"}),"\n",(0,i.jsx)(s.A,{language:"python",title:"LangChain ChatJavelinAIGateway Example",showLineNumbers:!0,children:`from langchain.chat_models import ChatJavelinAIGateway
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
    gateway_uri="https://your-api-domain.com/v1", 
    route="mychatbot_route",
    model_name="gpt-3.5-turbo",
    params={
        "temperature": 0.1
    }
)

print(chat(messages))
`})]})}function m(e={}){let{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);