"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8430],{53087:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>t,toc:()=>p});let t=JSON.parse('{"id":"javelin-core/administration/createvkey","title":"Creating Virtual Key","description":"<CodeBlock","source":"@site/docs/javelin-core/administration/createvkey.md","sourceDirName":"javelin-core/administration","slug":"/javelin-core/administration/createvkey","permalink":"/javelin-core/administration/createvkey","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-core/administration/createvkey.md","tags":[],"version":"current","frontMatter":{}}');var n=a(74848),i=a(28453),l=a(74235),o=a(15947),s=a(78667);let u={},c="Creating Virtual Key",d={},p=[];function h(e){let r={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"creating-virtual-key",children:"Creating Virtual Key"})}),"\n","\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(o.A,{value:"shell",label:"Using the API:",children:(0,n.jsx)(s.A,{language:"python",children:`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "api_key": "openai-vkey1",
        "api_key_secret_key": "secret key",
        "provider_name": "openai",
        "header_key": "Authorization",
        "query_param_key": "",
        "enabled": true
}' \
"https://your-api-domain.com/v1/admin/providers/openai/keyvault/openai-vkey1"
`})}),(0,n.jsx)(o.A,{value:"py",label:"In Python:",children:(0,n.jsx)(s.A,{language:"python",title:"Javelin Secret Example",showLineNumbers:!0,children:`from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
    Secret
)

import os

# Retrieve environment variables
javelin_api_key = os.getenv('JAVELIN_API_KEY')

# create javelin client
config = JavelinConfig(
    base_url="https://your-api-domain.com",
    javelin_api_key=javelin_api_key
)
client = JavelinClient(config)

secret_data = {
  # Add your secret data here
  "api_key": "openai-vkey1",
  "api_key_secret_key": "<OPENAI_API_KEY>",
  "provider_name": "openai", # Change this to your provider name (e.g., 'anthropic', 'mistral')
  "header_key": "Authorization",
  "query_param_key": "",
  "enabled": True,
}

secret = Secret.model_validate(secret_data)

# create the secret, for async use \`await client.acreate_secret(secret)\`
client.create_secret(secret)
`})})]})]})}function m(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},15947:(e,r,a)=>{a.d(r,{A:()=>i});var t=a(74848);a(96540);var n=a(18215);function i({children:e,hidden:r,className:a}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",a),hidden:r,children:e})}},74235:(e,r,a)=>{a.d(r,{A:()=>b});var t=a(74848),n=a(96540),i=a(18215),l=a(52204),o=a(56347),s=a(13321),u=a(57641),c=a(73094),d=a(57237);function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h({value:e,tabValues:r}){return r.some(r=>r.value===e)}var m=a(12075);function v({className:e,block:r,selectedValue:a,selectValue:n,tabValues:o}){let s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{let r=e.currentTarget,t=o[s.indexOf(r)].value;t!==a&&(u(r),n(t))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let a=s.indexOf(e.currentTarget)+1;r=s[a]??s[0];break}case"ArrowLeft":{let a=s.indexOf(e.currentTarget)-1;r=s[a]??s[s.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},e),children:o.map(({value:e,label:r,attributes:n})=>(0,t.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{s.push(e)},onKeyDown:d,onClick:c,...n,className:(0,i.A)("tabs__item","tabItem_LNqP",n?.className,{"tabs__item--active":a===e}),children:r??e},e))})}function f({lazy:e,children:r,selectedValue:a}){let l=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=l.find(e=>e.props.value===a);return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a}))})}function y(e){let r=function(e){let{defaultValue:r,queryString:a=!1,groupId:t}=e,i=function(e){let{values:r,children:a}=e;return(0,n.useMemo)(()=>{let e=r??p(a).map(({props:{value:e,label:r,attributes:a,default:t}})=>({value:e,label:r,attributes:a,default:t})),t=(0,c.XI)(e,(e,r)=>e.value===r.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[r,a])}(e),[l,m]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:r}){if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:i})),[v,f]=function({queryString:e=!1,groupId:r}){let a=(0,o.W6)(),t=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,u.aZ)(t),(0,n.useCallback)(e=>{if(!t)return;let r=new URLSearchParams(a.location.search);r.set(t,e),a.replace({...a.location,search:r.toString()})},[t,a])]}({queryString:a,groupId:t}),[y,b]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[a,t]=(0,d.Dv)(r);return[a,(0,n.useCallback)(e=>{r&&t.set(e)},[r,t])]}({groupId:t}),_=(()=>{let e=v??y;return h({value:e,tabValues:i})?e:null})();return(0,s.A)(()=>{_&&m(_)},[_]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),b(e)},[f,b,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.A)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(v,{...r,...e}),(0,t.jsx)(f,{...r,...e})]})}function b(e){let r=(0,m.A)();return(0,t.jsx)(y,{...e,children:p(e.children)},String(r))}}}]);