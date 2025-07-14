"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[904],{16827:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>a,toc:()=>p});let a=JSON.parse('{"id":"javelin-core/administration/createprovider","title":"Creating Provider","description":"Providers in Javelin represent the external AI services and models that your routes connect to, such as OpenAI, Anthropic, or local models. This guide walks you through creating and configuring providers to establish connections with your preferred AI services. You\'ll learn how to set up provider credentials, API endpoints, and configuration parameters to integrate with various model providers.","source":"@site/docs/javelin-core/administration/createprovider.md","sourceDirName":"javelin-core/administration","slug":"/javelin-core/administration/createprovider","permalink":"/javelin-core/administration/createprovider","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-core/administration/createprovider.md","tags":[],"version":"current","frontMatter":{}}');var n=t(74848),i=t(28453),o=t(74235),l=t(15947),s=t(78667);let u={},c="Creating Provider",d={},p=[];function v(e){let r={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"creating-provider",children:"Creating Provider"})}),"\n",(0,n.jsx)(r.p,{children:"Providers in Javelin represent the external AI services and models that your routes connect to, such as OpenAI, Anthropic, or local models. This guide walks you through creating and configuring providers to establish connections with your preferred AI services. You'll learn how to set up provider credentials, API endpoints, and configuration parameters to integrate with various model providers."}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{value:"shell",label:"curl",children:(0,n.jsx)(s.A,{language:"python",children:`curl -X POST \\
  -H "Content-Type: application/json" \\
  -H "x-javelin-apikey: $JAVELIN_API_KEY" \\
  -d '{
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "type": "inspect",
        "enabled": true,
        "config": {
            "api_base": "https://api.openai.com",
            "api_type": "",
            "api_version": "v1"
        }
  }' \\
  "https://your-api-domain.com/v1/admin/providers/openai"`})}),(0,n.jsx)(l.A,{value:"py",label:"In Python:",children:(0,n.jsx)(s.A,{language:"python",title:"Javelin Client Example",showLineNumbers:!0,children:`from javelin_sdk import (
    JavelinClient,
    Provider,
    JavelinConfig
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# Create Javelin configuration
config = JavelinConfig(
    base_url="https://your-api-domain.com",
    javelin_api_key=javelin_api_key
)

# Create Javelin client
client = JavelinClient(config)

provider_data = {
    "name": "openai",
    "type": "closed",
    "enabled": True,
    "config": {
        "api_base": "https://api.openai.com",
        "api_type": "",
        "api_version": "v1"
    },
}

provider = Provider.model_validate(provider_data)

# create the provider, for async use \`await client.acreate_provider(provider)\`
client.create_provider(provider)
`})})]})]})}function h(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},15947:(e,r,t)=>{t.d(r,{A:()=>i});var a=t(74848);t(96540);var n=t(18215);function i({children:e,hidden:r,className:t}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",t),hidden:r,children:e})}},74235:(e,r,t)=>{t.d(r,{A:()=>b});var a=t(74848),n=t(96540),i=t(18215),o=t(52204),l=t(56347),s=t(13321),u=t(57641),c=t(73094),d=t(57237);function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function v({value:e,tabValues:r}){return r.some(r=>r.value===e)}var h=t(12075);function m({className:e,block:r,selectedValue:t,selectValue:n,tabValues:l}){let s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{let r=e.currentTarget,a=l[s.indexOf(r)].value;a!==t&&(u(r),n(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{let t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1]}}r?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},e),children:l.map(({value:e,label:r,attributes:n})=>(0,a.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>{s.push(e)},onKeyDown:d,onClick:c,...n,className:(0,i.A)("tabs__item","tabItem_LNqP",n?.className,{"tabs__item--active":t===e}),children:r??e},e))})}function f({lazy:e,children:r,selectedValue:t}){let o=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===t);return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t}))})}function g(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:a}=e,i=function(e){let{values:r,children:t}=e;return(0,n.useMemo)(()=>{let e=r??p(t).map(({props:{value:e,label:r,attributes:t,default:a}})=>({value:e,label:r,attributes:t,default:a})),a=(0,c.XI)(e,(e,r)=>e.value===r.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[r,t])}(e),[o,h]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:r}){if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!v({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:i})),[m,f]=function({queryString:e=!1,groupId:r}){let t=(0,l.W6)(),a=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,u.aZ)(a),(0,n.useCallback)(e=>{if(!a)return;let r=new URLSearchParams(t.location.search);r.set(a,e),t.replace({...t.location,search:r.toString()})},[a,t])]}({queryString:t,groupId:a}),[g,b]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[t,a]=(0,d.Dv)(r);return[t,(0,n.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:a}),y=(()=>{let e=m??g;return v({value:e,tabValues:i})?e:null})();return(0,s.A)(()=>{y&&h(y)},[y]),{selectedValue:o,selectValue:(0,n.useCallback)(e=>{if(!v({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);h(e),f(e),b(e)},[f,b,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.A)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(m,{...r,...e}),(0,a.jsx)(f,{...r,...e})]})}function b(e){let r=(0,h.A)();return(0,a.jsx)(g,{...e,children:p(e.children)},String(r))}}}]);