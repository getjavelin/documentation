"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1915],{30532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>n,toc:()=>d});let n=JSON.parse('{"id":"javelin-core/administration/updatetemplate","title":"Updating Template","description":"<CodeBlock","source":"@site/docs/javelin-core/administration/updatetemplate.md","sourceDirName":"javelin-core/administration","slug":"/javelin-core/administration/updatetemplate","permalink":"/javelin-core/administration/updatetemplate","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-core/administration/updatetemplate.md","tags":[],"version":"current","frontMatter":{}}');var r=a(74848),l=a(28453),i=a(74235),o=a(15947),s=a(78667);let u={},c="Updating Template",p={},d=[];function m(e){let t={h1:"h1",header:"header",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"updating-template",children:"Updating Template"})}),"\n","\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"shell",label:"Using the API:",children:(0,r.jsx)(s.A,{language:"python",children:`
curl -X PUT \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
  "name": "InspectPII",
  "description": "Inspect sensitive data",
  "type": "inspect",
  "enabled": true,
  "config": {
    "notify": true,
    "reject": false,
    "infoTypes": [
      {
        "name": "EMAIL_ADDRESS"
      },
      {
        "name": "STREET_ADDRESS"
      },
      {
        "name": "PHONE_NUMBER"
      }
    ],
    "likelihood": "Likely"
  }
}
' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/InspectPII"

`})}),(0,r.jsx)(o.A,{value:"py",label:"In Python:",children:(0,r.jsx)(s.A,{language:"python",title:"Javelin Update Template Example",showLineNumbers:!0,children:`from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
    Template
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

# get the template (to see what we need to change)
template_name = "InspectPII"
template = client.get_template(template_name)

# make the necessary template changes

# update the template, for async use \`await client.aupdate_template(template)\`
client.update_template(template)
`})})]})]})}function h(e={}){let{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},15947:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(74848);a(96540);var r=a(18215);function l({children:e,hidden:t,className:a}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)("tabItem_Ymn6",a),hidden:t,children:e})}},74235:(e,t,a)=>{a.d(t,{A:()=>g});var n=a(74848),r=a(96540),l=a(18215),i=a(52204),o=a(56347),s=a(13321),u=a(57641),c=a(73094),p=a(57237);function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m({value:e,tabValues:t}){return t.some(t=>t.value===e)}var h=a(12075);function f({className:e,block:t,selectedValue:a,selectValue:r,tabValues:o}){let s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{let t=e.currentTarget,n=o[s.indexOf(t)].value;n!==a&&(u(t),r(n))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{let a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},e),children:o.map(({value:e,label:t,attributes:r})=>(0,n.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{s.push(e)},onKeyDown:p,onClick:c,...r,className:(0,l.A)("tabs__item","tabItem_LNqP",r?.className,{"tabs__item--active":a===e}),children:t??e},e))})}function v({lazy:e,children:t,selectedValue:a}){let i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===a);return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function b(e){let t=function(e){let{defaultValue:t,queryString:a=!1,groupId:n}=e,l=function(e){let{values:t,children:a}=e;return(0,r.useMemo)(()=>{let e=t??d(a).map(({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n})),n=(0,c.XI)(e,(e,t)=>e.value===t.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,a])}(e),[i,h]=(0,r.useState)(()=>(function({defaultValue:e,tabValues:t}){if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let a=t.find(e=>e.default)??t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:t,tabValues:l})),[f,v]=function({queryString:e=!1,groupId:t}){let a=(0,o.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,u.aZ)(n),(0,r.useCallback)(e=>{if(!n)return;let t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})},[n,a])]}({queryString:a,groupId:n}),[b,g]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[a,n]=(0,p.Dv)(t);return[a,(0,r.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),j=(()=>{let e=f??b;return m({value:e,tabValues:l})?e:null})();return(0,s.A)(()=>{j&&h(j)},[j]),{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!m({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);h(e),v(e),g(e)},[v,g,l]),tabValues:l}}(e);return(0,n.jsxs)("div",{className:(0,l.A)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(f,{...t,...e}),(0,n.jsx)(v,{...t,...e})]})}function g(e){let t=(0,h.A)();return(0,n.jsx)(b,{...e,children:d(e.children)},String(t))}}}]);