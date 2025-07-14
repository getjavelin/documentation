"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9717],{76303:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>t,toc:()=>h});let t=JSON.parse('{"id":"javelin-langchain-python/quickstart","title":"Quickstart","description":"With your LangChain environment, you can use Javelin by changing the API base and adding Javelin headers","source":"@site/docs/javelin-langchain-python/quickstart.md","sourceDirName":"javelin-langchain-python","slug":"/javelin-langchain-python/quickstart","permalink":"/javelin-langchain-python/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-langchain-python/quickstart.md","tags":[],"version":"current","frontMatter":{}}');var i=n(74848),o=n(28453),r=n(78667);let p={},s="Quickstart",l={},h=[];function c(e){let a={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,i.jsx)(a.p,{children:"With your LangChain environment, you can use Javelin by changing the API base and adding Javelin headers"}),"\n",(0,i.jsx)(r.A,{language:"python",children:`pip install langchain
pip install langchain-openai
`}),"\n",(0,i.jsx)(r.A,{language:"python",title:"ChatOpenAI Configuration Example",showLineNumbers:!0,children:`# Code snippet

llm = ChatOpenAI(
    openai_api_base="https://your-api-domain.com/v1/query/{your_route_name}",
    openai_api_key=openai_api_key, # OpenAI API key
    model_kwargs={
      "extra_headers":{
        "x-javelin-apikey": f"{JAVELIN_API_KEY}", # Javelin API key from admin
      }
    },
    openai_api_base="https://your-api-domain.com/v1/query",
)
`}),"\n",(0,i.jsx)(a.p,{children:"Below is a sample code to use Javelin with LangChain:"}),"\n",(0,i.jsx)(r.A,{language:"python",title:"Simple Chat Prompt Example",showLineNumbers:!0,children:`# Example of a simple chat prompt
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
import openai, os

prompt = ChatPromptTemplate.from_template("tell me a short joke about {topic}")

# model = ChatOpenAI(model="gpt-4")
model = ChatOpenAI(
    openai_api_key=os.getenv("OPENAI_API_KEY"),
    openai_api_base="https://your-api-domain.com/v1/query/{your_route_name}",
    model_kwargs={
        "extra_headers":{
        "x-javelin-apikey": f"{os.getenv('JAVELIN_API_KEY')}"
        }
    }
)

output_parser = StrOutputParser()

chain = prompt | model | output_parser

response = chain.invoke({"topic": "ice cream"})
print(response)
`})]})}function u(e={}){let{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);