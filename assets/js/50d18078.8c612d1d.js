"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9624],{56411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>p});let r=JSON.parse('{"id":"javelin-core/administration/updatevkey","title":"Updating Virtual Key","description":"<CodeBlock","source":"@site/docs/javelin-core/administration/updatevkey.md","sourceDirName":"javelin-core/administration","slug":"/javelin-core/administration/updatevkey","permalink":"/javelin-core/administration/updatevkey","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-core/administration/updatevkey.md","tags":[],"version":"current","frontMatter":{}}');var n=a(74848),i=a(28453),l=a(74235),o=a(15947),s=a(78667);let u={},c="Updating Virtual Key",d={},p=[];function h(e){let t={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"updating-virtual-key",children:"Updating Virtual Key"})}),"\n","\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(o.A,{value:"shell",label:"Using the API:",children:(0,n.jsx)(s.A,{language:"python",children:`
curl -X PUT \
-H "Content-Type: application/json" \
-H "x-api-key: $JAVELIN_API_KEY" \
-d '{
        "api_key": "openai-vkey1",
        "api_key_secret_name": "new name for your secret",
        "api_key_secret_key": "new key",
        "enabled": true,
        "organization": ""
}' \
"https://your-api-domain.com/v1/admin/providers/openai/keyvault/openai-vkey1"

`})}),(0,n.jsx)(o.A,{value:"py",label:"In Python:",children:(0,n.jsx)(s.A,{language:"python",title:"Javelin Update Secret Example",showLineNumbers:!0,children:`from javelin_sdk import (
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

# get the secret (to see what we need to change)


# make the necessary changes


# update the secret, for async use \`await client.aupdate_secret(secret)\`
client.update_secret(secret)
`})})]})]})}function m(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},15947:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(74848);a(96540);var n=a(18215);function i({children:e,hidden:t,className:a}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",a),hidden:t,children:e})}},74235:(e,t,a)=>{a.d(t,{A:()=>b});var r=a(74848),n=a(96540),i=a(18215),l=a(52204),o=a(56347),s=a(13321),u=a(57641),c=a(73094),d=a(57237);function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h({value:e,tabValues:t}){return t.some(t=>t.value===e)}var m=a(12075);function v({className:e,block:t,selectedValue:a,selectValue:n,tabValues:o}){let s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{let t=e.currentTarget,r=o[s.indexOf(t)].value;r!==a&&(u(t),n(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{let a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1]}}t?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e),children:o.map(({value:e,label:t,attributes:n})=>(0,r.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{s.push(e)},onKeyDown:d,onClick:c,...n,className:(0,i.A)("tabs__item","tabItem_LNqP",n?.className,{"tabs__item--active":a===e}),children:t??e},e))})}function f({lazy:e,children:t,selectedValue:a}){let l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=l.find(e=>e.props.value===a);return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function y(e){let t=function(e){let{defaultValue:t,queryString:a=!1,groupId:r}=e,i=function(e){let{values:t,children:a}=e;return(0,n.useMemo)(()=>{let e=t??p(a).map(({props:{value:e,label:t,attributes:a,default:r}})=>({value:e,label:t,attributes:a,default:r})),r=(0,c.XI)(e,(e,t)=>e.value===t.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,a])}(e),[l,m]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:t}){if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:i})),[v,f]=function({queryString:e=!1,groupId:t}){let a=(0,o.W6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,u.aZ)(r),(0,n.useCallback)(e=>{if(!r)return;let t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})},[r,a])]}({queryString:a,groupId:r}),[y,b]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[a,r]=(0,d.Dv)(t);return[a,(0,n.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:r}),g=(()=>{let e=v??y;return h({value:e,tabValues:i})?e:null})();return(0,s.A)(()=>{g&&m(g)},[g]),{selectedValue:l,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),f(e),b(e)},[f,b,i]),tabValues:i}}(e);return(0,r.jsxs)("div",{className:(0,i.A)("tabs-container","tabList__CuJ"),children:[(0,r.jsx)(v,{...t,...e}),(0,r.jsx)(f,{...t,...e})]})}function b(e){let t=(0,m.A)();return(0,r.jsx)(y,{...e,children:p(e.children)},String(t))}}}]);