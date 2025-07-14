"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[110],{56066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});let a=JSON.parse('{"id":"javelin-core/administration/updateroute","title":"Updating Route","description":"<CodeBlock","source":"@site/docs/javelin-core/administration/updateroute.md","sourceDirName":"javelin-core/administration","slug":"/javelin-core/administration/updateroute","permalink":"/javelin-core/administration/updateroute","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-core/administration/updateroute.md","tags":[],"version":"current","frontMatter":{}}');var n=r(74848),i=r(28453),o=r(74235),l=r(15947),u=r(78667);let s={},c="Updating Route",d={},p=[];function h(e){let t={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"updating-route",children:"Updating Route"})}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{value:"shell",label:"Using the API:",children:(0,n.jsx)(u.A,{language:"python",children:`
curl -X PUT \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "test_route_1",
        "type": "chat",
        "models": [
            {
                "name": "gpt-4",
                "provider": "openai",
                "suffix": "/chat/completions"
            }
        ],
        "config": {
            "rate_limit": 3,
            "retries": 5
        }
}' \
"https://your-api-domain.com/v1/admin/routes/test_route_1"

`})}),(0,n.jsx)(l.A,{value:"py",label:"In Python:",children:(0,n.jsx)(u.A,{language:"python",children:`from javelin_sdk import (
    JavelinClient,
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

# Get the route (to see what we need to change)
route_name = "test_route_1"
route = client.get_route(route_name)

# Make the necessary route changes
route.models[0].name = "gpt-4"
route.config.retries = 5
route.config.rate_limit = 3

# Update the route, for async use 'await client.aupdate_route(route)'
client.update_route(route)`})})]})]})}function m(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},15947:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(74848);r(96540);var n=r(18215);function i({children:e,hidden:t,className:r}){return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",r),hidden:t,children:e})}},74235:(e,t,r)=>{r.d(t,{A:()=>b});var a=r(74848),n=r(96540),i=r(18215),o=r(52204),l=r(56347),u=r(13321),s=r(57641),c=r(73094),d=r(57237);function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h({value:e,tabValues:t}){return t.some(t=>t.value===e)}var m=r(12075);function f({className:e,block:t,selectedValue:r,selectValue:n,tabValues:l}){let u=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.a_)(),c=e=>{let t=e.currentTarget,a=l[u.indexOf(t)].value;a!==r&&(s(t),n(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1]}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:n})=>(0,a.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>{u.push(e)},onKeyDown:d,onClick:c,...n,className:(0,i.A)("tabs__item","tabItem_LNqP",n?.className,{"tabs__item--active":r===e}),children:t??e},e))})}function v({lazy:e,children:t,selectedValue:r}){let o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===r);return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function g(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:a}=e,i=function(e){let{values:t,children:r}=e;return(0,n.useMemo)(()=>{let e=t??p(r).map(({props:{value:e,label:t,attributes:r,default:a}})=>({value:e,label:t,attributes:r,default:a})),a=(0,c.XI)(e,(e,t)=>e.value===t.value);if(a.length>0)throw Error(`Docusaurus error: Duplicate values "${a.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,r])}(e),[o,m]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:t}){if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[f,v]=function({queryString:e=!1,groupId:t}){let r=(0,l.W6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,s.aZ)(a),(0,n.useCallback)(e=>{if(!a)return;let t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})},[a,r])]}({queryString:r,groupId:a}),[g,b]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,a]=(0,d.Dv)(t);return[r,(0,n.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:a}),j=(()=>{let e=f??g;return h({value:e,tabValues:i})?e:null})();return(0,u.A)(()=>{j&&m(j)},[j]),{selectedValue:o,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);m(e),v(e),b(e)},[v,b,i]),tabValues:i}}(e);return(0,a.jsxs)("div",{className:(0,i.A)("tabs-container","tabList__CuJ"),children:[(0,a.jsx)(f,{...t,...e}),(0,a.jsx)(v,{...t,...e})]})}function b(e){let t=(0,m.A)();return(0,a.jsx)(g,{...e,children:p(e.children)},String(t))}}}]);