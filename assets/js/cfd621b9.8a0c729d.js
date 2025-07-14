"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4450],{39591:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>t,toc:()=>p});let t=JSON.parse('{"id":"javelin-core/administration/updateprovider","title":"Updating Provider","description":"<CodeBlock","source":"@site/docs/javelin-core/administration/updateprovider.md","sourceDirName":"javelin-core/administration","slug":"/javelin-core/administration/updateprovider","permalink":"/javelin-core/administration/updateprovider","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-core/administration/updateprovider.md","tags":[],"version":"current","frontMatter":{}}');var n=a(74848),i=a(28453),o=a(74235),l=a(15947),s=a(78667);let u={},c="Updating Provider",d={},p=[];function v(e){let r={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"updating-provider",children:"Updating Provider"})}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{value:"shell",label:"Using the API:",children:(0,n.jsx)(s.A,{language:"python",children:`
curl -X PUT \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "openai",
        "type": "closedsource",
        "config": {
            "api_base": "https://api.openai.com",
            "api_type": "",
            "api_version": "v1"
        }
}' \
"https://your-api-domain.com/v1/admin/providers/openai"
`})}),(0,n.jsx)(l.A,{value:"py",label:"In Python:",children:(0,n.jsx)(s.A,{language:"python",title:"Javelin Update Provider Example",showLineNumbers:!0,children:`from javelin_sdk import (
    JavelinClient,
    JavelinConfig
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

# get the provider (to see what we need to change)
provider_name = "openai"
provider = client.get_provider(provider_name)

# make the necessary route changes
provider.name = "openai"
provider.type = "closed"
provider.enabled = True

# update the provider, for async use \`await client.aupdate_provider(provider)\`
client.update_provider(provider)
`})})]})]})}function h(e={}){let{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},15947:(e,r,a)=>{a.d(r,{A:()=>i});var t=a(74848);a(96540);var n=a(18215);function i({children:e,hidden:r,className:a}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)("tabItem_Ymn6",a),hidden:r,children:e})}},74235:(e,r,a)=>{a.d(r,{A:()=>g});var t=a(74848),n=a(96540),i=a(18215),o=a(52204),l=a(56347),s=a(13321),u=a(57641),c=a(73094),d=a(57237);function p(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function v({value:e,tabValues:r}){return r.some(r=>r.value===e)}var h=a(12075);function m({className:e,block:r,selectedValue:a,selectValue:n,tabValues:l}){let s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{let r=e.currentTarget,t=l[s.indexOf(r)].value;t!==a&&(u(r),n(t))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let a=s.indexOf(e.currentTarget)+1;r=s[a]??s[0];break}case"ArrowLeft":{let a=s.indexOf(e.currentTarget)-1;r=s[a]??s[s.length-1]}}r?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},e),children:l.map(({value:e,label:r,attributes:n})=>(0,t.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{s.push(e)},onKeyDown:d,onClick:c,...n,className:(0,i.A)("tabs__item","tabItem_LNqP",n?.className,{"tabs__item--active":a===e}),children:r??e},e))})}function f({lazy:e,children:r,selectedValue:a}){let o=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===a);return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a}))})}function b(e){let r=function(e){let{defaultValue:r,queryString:a=!1,groupId:t}=e,i=function(e){let{values:r,children:a}=e;return(0,n.useMemo)(()=>{let e=r??p(a).map(({props:{value:e,label:r,attributes:a,default:t}})=>({value:e,label:r,attributes:a,default:t})),t=(0,c.XI)(e,(e,r)=>e.value===r.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[r,a])}(e),[o,h]=(0,n.useState)(()=>(function({defaultValue:e,tabValues:r}){if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!v({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let a=r.find(e=>e.default)??r[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:r,tabValues:i})),[m,f]=function({queryString:e=!1,groupId:r}){let a=(0,l.W6)(),t=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,u.aZ)(t),(0,n.useCallback)(e=>{if(!t)return;let r=new URLSearchParams(a.location.search);r.set(t,e),a.replace({...a.location,search:r.toString()})},[t,a])]}({queryString:a,groupId:t}),[b,g]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[a,t]=(0,d.Dv)(r);return[a,(0,n.useCallback)(e=>{r&&t.set(e)},[r,t])]}({groupId:t}),j=(()=>{let e=m??b;return v({value:e,tabValues:i})?e:null})();return(0,s.A)(()=>{j&&h(j)},[j]),{selectedValue:o,selectValue:(0,n.useCallback)(e=>{if(!v({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);h(e),f(e),g(e)},[f,g,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.A)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(m,{...r,...e}),(0,t.jsx)(f,{...r,...e})]})}function g(e){let r=(0,h.A)();return(0,t.jsx)(b,{...e,children:p(e.children)},String(r))}}}]);