"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[263],{30058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>n,toc:()=>d});let n=JSON.parse('{"id":"javelin-core/administration/create-route","title":"Creating Route","description":"Step-by-step guide to creating routes with safety configurations, DLP, content filtering, and security settings","source":"@site/docs/javelin-core/administration/createroute.md","sourceDirName":"javelin-core/administration","slug":"/javelin-core/administration/create-route","permalink":"/javelin-core/administration/create-route","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-core/administration/createroute.md","tags":[],"version":"current","frontMatter":{"id":"create-route","title":"Creating Route","description":"Step-by-step guide to creating routes with safety configurations, DLP, content filtering, and security settings","sidebar_label":"Create Route"},"sidebar":"docsSidebar","previous":{"title":"Guides","permalink":"/javelin-core/route-usage-guide"},"next":{"title":"Overview","permalink":"/javelin-core/mcp-overview"}}');var a=r(74848),i=r(28453),o=r(74235),s=r(15947),l=r(78667);let c={id:"create-route",title:"Creating Route",description:"Step-by-step guide to creating routes with safety configurations, DLP, content filtering, and security settings",sidebar_label:"Create Route"},u="Creating Route",p={},d=[{value:"Configuration Options",id:"configuration-options",level:2},{value:"Basic Settings",id:"basic-settings",level:3},{value:"DLP (Data Loss Prevention)",id:"dlp-data-loss-prevention",level:3},{value:"Content Filter (Trust &amp; Safety)",id:"content-filter-trust--safety",level:3},{value:"Prompt Safety",id:"prompt-safety",level:3},{value:"Security Filters",id:"security-filters",level:3}];function h(e){let t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"creating-route",children:"Creating Route"})}),"\n","\n",(0,a.jsx)(t.h1,{id:"creating-route-1",children:"Creating Route"}),"\n",(0,a.jsx)(t.p,{children:"Routes in Javelin define how incoming requests are processed and which providers handle them. This guide shows you how to create and configure routes to control request routing, apply security policies, and manage fallback behaviors. You'll learn to set up routes with safety configurations, data loss prevention (DLP), content filtering, and other security settings."}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(s.A,{value:"curl",label:"Using cURL",children:(0,a.jsx)(l.A,{language:"bash",children:`curl -X POST \\
-H "Content-Type: application/json" \\
-H "x-javelin-apikey: $JAVELIN_API_KEY" \\
-d '{
    "name": "test_route_1",
    "type": "chat",
    "enabled": true,
    "models": [ 
        {
            "name": "gpt-3.5-turbo",
            "provider": "openai",
            "suffix": "/chat/completions"
        }
    ],
    "config": {
        "rate_limit": 3,
        "retries": 3,
        "archive": true,
        "retention": 7,
        "dlp": {
            "enabled": false 
        }
    }
}' \\
"https://your-api-domain.com/v1/admin/routes/test_route_1"
`})}),(0,a.jsx)(s.A,{value:"python",label:"Using Python SDK",children:(0,a.jsx)(l.A,{language:"python",title:"Javelin Route Example",showLineNumbers:!0,children:`from javelin_sdk import (
    JavelinClient,
    JavelinConfig,
    Route
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

# Example of a route with all safety features enabled
route_data = {
    "name": "test_route_1",
    "type": "chat",
    "enabled": True,
    "models": [
        {
            "name": "gpt-3.5-turbo",
            "provider": "openai",
            "suffix": "/chat/completions",
        }
    ],
    "config": {
        "rate_limit": 3,
        "retries": 3,
        "archive": True,
        "retention": 7,
        "dlp": {
            "enabled": False
        }
    }
}

route = Route.model_validate(route_data)

# create the route, for async use \`await client.acreate_route(route)\`
client.create_route(route)
`})}),(0,a.jsx)(s.A,{value:"inspect",label:"Route in Inspect Mode",children:(0,a.jsx)(l.A,{language:"bash",children:`curl -X POST \\
-H "Content-Type: application/json" \\
-H "x-javelin-apikey: $JAVELIN_API_KEY" \\
-d '{
    "name": "test_route_1",
    "type": "chat",
    "enabled": true,
    "models": [ 
        {
            "name": "gpt-3.5-turbo",
            "provider": "OpenAI",
            "suffix": "/chat/completions",
            "fallback_enabled": false
        }
    ],
    "config": {
        "dlp": {
            "enabled": true,
            "strategy": "promptfoo_dlp"
        },
        "archive": true,
        "retries": 5,
        "retention": 7,
        "rate_limit": 0,
        "prompt_safety": {
            "enabled": true,
            "error_code": 200,
            "content_types": [],
            "reject_prompt": "Rejected from prompt safety policy."
        },
        "content_filter": {
            "enabled": true,
            "error_code": 200,
            "content_types": [],
            "reject_prompt": "Unable to complete request, trust & safety violation detected"
        },
        "security_filters": {
            "enabled": true,
            "content_types": [],
            "reject_prompt": "Rejected from security filters policy."
        }
    }
}' \\
"https://your-api-domain.com/v1/admin/routes/test_route_1"
`})}),(0,a.jsx)(s.A,{value:"trust-safety",label:"Route with Trust & Safety Reject",children:(0,a.jsx)(l.A,{language:"bash",children:`curl -X POST \\
-H "Content-Type: application/json" \\
-H "x-javelin-apikey: $JAVELIN_API_KEY" \\
-d '{
    "name": "test_route_1",
    "type": "chat",
    "enabled": true,
    "models": [ 
        {
            "name": "gpt-3.5-turbo",
            "provider": "OpenAI",
            "suffix": "/chat/completions",
            "fallback_enabled": false
        }
    ],
    "config": {
        "dlp": {
            "enabled": true,
            "strategy": "promptfoo_dlp"
        },
        "archive": true,
        "retries": 5,
        "retention": 7,
        "rate_limit": 0,
        "prompt_safety": {
            "enabled": true,
            "error_code": 200,
            "content_types": [],
            "reject_prompt": "Rejected from prompt safety policy."
        },
        "content_filter": {
            "enabled": true,
            "error_code": 200,
            "content_types": [
                {
                    "operator": "greater_than",
                    "restriction": "sexual",
                    "probability_threshold": 0.25
                },
                {
                    "operator": "greater_than",
                    "restriction": "violence",
                    "probability_threshold": 0.25
                },
                {
                    "operator": "greater_than",
                    "restriction": "hate_speech",
                    "probability_threshold": 0.25
                },
                {
                    "operator": "greater_than",
                    "restriction": "profanity",
                    "probability_threshold": 0.25
                },
                {
                    "operator": "greater_than",
                    "restriction": "crime",
                    "probability_threshold": 0.25
                }
            ],
            "reject_prompt": "Unable to complete request, trust & safety violation detected"
        },
        "security_filters": {
            "enabled": true,
            "content_types": [],
            "reject_prompt": "Rejected from security filters policy."
        }
    }
}' \\
"https://your-api-domain.com/v1/admin/routes/test_route_1"
`})}),(0,a.jsx)(s.A,{value:"prompt-safety",label:"Route with Prompt Safety Reject",children:(0,a.jsx)(l.A,{language:"bash",children:`curl -X POST \\
-H "Content-Type: application/json" \\
-H "x-javelin-apikey: $JAVELIN_API_KEY" \\
-d '{
    "name": "test_route_1",
    "type": "chat",
    "enabled": true,
    "models": [ 
        {
            "name": "gpt-3.5-turbo",
            "provider": "OpenAI",
            "suffix": "/chat/completions",
            "fallback_enabled": false
        }
    ],
    "config": {
        "dlp": {
            "enabled": true,
            "strategy": "promptfoo_dlp"
        },
        "archive": true,
        "retries": 5,
        "retention": 7,
        "rate_limit": 0,
        "prompt_safety": {
            "enabled": true,
            "error_code": 200,
            "content_types": [
                {
                    "operator": "greater_than",
                    "restriction": "prompt_injection",
                    "probability_threshold": 0.25
                },
                {
                    "operator": "greater_than",
                    "restriction": "jailbreak",
                    "probability_threshold": 0.25
                }
            ],
            "reject_prompt": "Rejected from prompt safety policy."
        },
        "content_filter": {
            "enabled": true,
            "error_code": 200,
            "content_types": [
                {
                    "operator": "greater_than",
                    "restriction": "sexual",
                    "probability_threshold": 0.25
                },
                {
                    "operator": "greater_than",
                    "restriction": "violence",
                    "probability_threshold": 0.25
                },
                {
                    "operator": "greater_than",
                    "restriction": "hate_speech",
                    "probability_threshold": 0.25
                },
                {
                    "operator": "greater_than",
                    "restriction": "profanity",
                    "probability_threshold": 0.25
                },
                {
                    "operator": "greater_than",
                    "restriction": "crime",
                    "probability_threshold": 0.25
                }
            ],
            "reject_prompt": "Unable to complete request, trust & safety violation detected"
        },
        "security_filters": {
            "enabled": true,
            "content_types": [],
            "reject_prompt": "Rejected from security filters policy."
        }
    }
}' \\
"https://your-api-domain.com/v1/admin/routes/test_route_1"
`})})]}),"\n",(0,a.jsx)(t.h2,{id:"configuration-options",children:"Configuration Options"}),"\n",(0,a.jsx)(t.h3,{id:"basic-settings",children:"Basic Settings"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n    "archive": true,\n    "retention": 7,\n    "rate_limit": 0,\n    "retries": 5\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"dlp-data-loss-prevention",children:"DLP (Data Loss Prevention)"}),"\n",(0,a.jsx)(t.p,{children:"Data Loss Prevention configuration helps protect sensitive information:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'"dlp": {\n    "enabled": true,\n    "strategy": "promptfoo_dlp"\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"content-filter-trust--safety",children:"Content Filter (Trust & Safety)"}),"\n",(0,a.jsx)(t.p,{children:"Content filtering allows you to reject requests based on content types:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'"content_filter": {\n    "enabled": true,\n    "error_code": 200,\n    "content_types": [\n        {\n            "operator": "greater_than",\n            "restriction": "sexual",\n            "probability_threshold": 0.25 // Threshold can be set to 0.25, 0.5, 0.75 or 1\n        }\n    ],\n    "reject_prompt": "Unable to complete request, trust & safety violation detected"\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Available content restrictions:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"sexual"}),"\n",(0,a.jsx)(t.li,{children:"violence"}),"\n",(0,a.jsx)(t.li,{children:"hate_speech"}),"\n",(0,a.jsx)(t.li,{children:"profanity"}),"\n",(0,a.jsx)(t.li,{children:"crime"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"prompt-safety",children:"Prompt Safety"}),"\n",(0,a.jsx)(t.p,{children:"Prompt safety helps prevent prompt injection and jailbreak attempts:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'"prompt_safety": {\n    "enabled": true,\n    "error_code": 200,\n    "content_types": [\n        {\n            "operator": "greater_than",\n            "restriction": "prompt_injection",\n            "probability_threshold": 0.25 // Threshold can be set to 0.25, 0.5, 0.75 or 1\n        },\n        {\n            "operator": "greater_than",\n            "restriction": "jailbreak",\n            "probability_threshold": 0.25 // Threshold can be set to 0.25, 0.5, 0.75 or 1\n        }\n    ],\n    "reject_prompt": "Rejected from prompt safety policy."\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"security-filters",children:"Security Filters"}),"\n",(0,a.jsx)(t.p,{children:"Additional security filters can be enabled:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'"security_filters": {\n    "enabled": true,\n    "content_types": []\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"All safety features support an inspect mode configuration that enables detection of various content types including language patterns, code/markdown syntax, and non-ASCII characters. The SecurityFilters Processor tracks and provides metrics for these security filter matches to help monitor and analyze potential security concerns."})]})}function f(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},15947:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(74848);r(96540);var a=r(18215);function i({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)("tabItem_Ymn6",r),hidden:t,children:e})}},74235:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(74848),a=r(96540),i=r(18215),o=r(52204),s=r(56347),l=r(13321),c=r(57641),u=r(73094),p=r(57237);function d(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h({value:e,tabValues:t}){return t.some(t=>t.value===e)}var f=r(12075);function m({className:e,block:t,selectedValue:r,selectValue:a,tabValues:s}){let l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{let t=e.currentTarget,n=s[l.indexOf(t)].value;n!==r&&(c(t),a(n))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{let r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},e),children:s.map(({value:e,label:t,attributes:a})=>(0,n.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>{l.push(e)},onKeyDown:p,onClick:u,...a,className:(0,i.A)("tabs__item","tabItem_LNqP",a?.className,{"tabs__item--active":r===e}),children:t??e},e))})}function b({lazy:e,children:t,selectedValue:r}){let o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===r);return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function y(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,i=function(e){let{values:t,children:r}=e;return(0,a.useMemo)(()=>{let e=t??d(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})),n=(0,u.XI)(e,(e,t)=>e.value===t.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[t,r])}(e),[o,f]=(0,a.useState)(()=>(function({defaultValue:e,tabValues:t}){if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=t.find(e=>e.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:t,tabValues:i})),[m,b]=function({queryString:e=!1,groupId:t}){let r=(0,s.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c.aZ)(n),(0,a.useCallback)(e=>{if(!n)return;let t=new URLSearchParams(r.location.search);t.set(n,e),r.replace({...r.location,search:t.toString()})},[n,r])]}({queryString:r,groupId:n}),[y,_]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,p.Dv)(t);return[r,(0,a.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),g=(()=>{let e=m??y;return h({value:e,tabValues:i})?e:null})();return(0,l.A)(()=>{g&&f(g)},[g]),{selectedValue:o,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);f(e),b(e),_(e)},[b,_,i]),tabValues:i}}(e);return(0,n.jsxs)("div",{className:(0,i.A)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(m,{...t,...e}),(0,n.jsx)(b,{...t,...e})]})}function _(e){let t=(0,f.A)();return(0,n.jsx)(y,{...e,children:d(e.children)},String(t))}}}]);