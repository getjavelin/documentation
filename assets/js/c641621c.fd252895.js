"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5585],{34846:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>E,contentTitle:()=>c,default:()=>_,frontMatter:()=>m,metadata:()=>n,toc:()=>p});let n=JSON.parse('{"id":"javelin-core/administration/createtemplate","title":"Creating Templates","description":"Learn how to create data protection templates using the Javelin API","source":"@site/docs/javelin-core/administration/createtemplate.md","sourceDirName":"javelin-core/administration","slug":"/javelin-core/administration/createtemplate","permalink":"/javelin-core/administration/createtemplate","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-core/administration/createtemplate.md","tags":[],"version":"current","frontMatter":{"id":"createtemplate","title":"Creating Templates","description":"Learn how to create data protection templates using the Javelin API","sidebar_label":"Create Template"}}');var i=t(74848),r=t(28453),l=t(74235),s=t(15947),o=t(78667);let m={id:"createtemplate",title:"Creating Templates",description:"Learn how to create data protection templates using the Javelin API",sidebar_label:"Create Template"},c="Creating Templates",E={},p=[{value:"Inspect Template",id:"inspect-template",level:2},{value:"Redact Template",id:"redact-template",level:2},{value:"Mask Template",id:"mask-template",level:2},{value:"Replace Template",id:"replace-template",level:2},{value:"Custom Regex Template",id:"custom-regex-template",level:2}];function d(e){let a={h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"creating-templates",children:"Creating Templates"})}),"\n",(0,i.jsx)(a.p,{children:"Templates in Javelin define data protection rules that can be reused across multiple routes and policies. They specify which types of sensitive information to detect and how to handle them when found. You can create templates with different transformation methods including inspect, redact, mask, and replace to implement comprehensive data protection strategies."}),"\n","\n",(0,i.jsx)(a.h2,{id:"inspect-template",children:"Inspect Template"}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(s.A,{value:"shell",label:"Using cURL",children:(0,i.jsx)(o.A,{language:"bash",children:`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "enabled": true,
        "type": "inspect",
        "config": {
            "infoTypes": [ 
                {"name": "MAC_ADDRESS_LOCAL"},
                {"name": "EMAIL_ADDRESS"},
                {"name": "STREET_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "VEHICLE_IDENTIFICATION_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_DRIVERS_LICENSE_NUMBER"},
                {"name": "PASSPORT"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "US_INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "MEDICAL_RECORD_NUMBER"},
                {"name": "MEDICAL_TERM"},
                {"name": "US_MEDICARE_BENEFICIARY_ID_NUMBER"},
                {"name": "US_HEALTHCARE_NPI"},
                {"name": "AUTH_TOKEN"},
                {"name": "AWS_CREDENTIALS"},
                {"name": "AZURE_AUTH_TOKEN"},
                {"name": "BASIC_AUTH_HEADER"},
                {"name": "GCP_API_KEY"},
                {"name": "GCP_CREDENTIALS"},
                {"name": "HTTP_COOKIE"},
                {"name": "JSON_WEB_TOKEN"},
                {"name": "ENCRYPTION_KEY"},
                {"name": "OAUTH_CLIENT_SECRET"},
                {"name": "PASSWORD"},
                {"name": "SSL_CERTIFICATE"},
                {"name": "STORAGE_SIGNED_POLICY_DOCUMENT"},
                {"name": "STORAGE_SIGNED_URL"},
                {"name": "WEAK_PASSWORD_HASH"},
                {"name": "XSRF_TOKEN"},
                {"name": "CREDIT_CARD_TRACK_NUMBER"},
                {"name": "US_EMPLOYER_IDENTIFICATION_NUMBER"},
                {"name": "US_ADOPTION_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "US_PREPARER_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "US_DEA_NUMBER"},
                {"name": "US_PASSPORT"},
                {"name": "CREDIT_CARD_NUMBER"}
            ],
            "likelihood": "Possible",
            "transformation": {
                "method": "Inspect"
            },
            "notify": true,
            "reject": false
        }
}' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/inspect"
`})}),(0,i.jsx)(s.A,{value:"py",label:"Using python SDK",children:(0,i.jsx)(o.A,{language:"python",title:"Javelin Template Example",showLineNumbers:!0,children:`from javelin_sdk import (
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

template_data = {
        "name": "InspectPII",
        "description": "Inspect sensitive data",
        "enabled": True,
        "type": "inspect",
        "config": {
            "infoTypes": [
                {"name": "MAC_ADDRESS_LOCAL"},
                {"name": "EMAIL_ADDRESS"},
                {"name": "STREET_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "VEHICLE_IDENTIFICATION_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_DRIVERS_LICENSE_NUMBER"},
                {"name": "PASSPORT"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "US_INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "MEDICAL_RECORD_NUMBER"},
                {"name": "MEDICAL_TERM"},
                {"name": "US_MEDICARE_BENEFICIARY_ID_NUMBER"},
                {"name": "US_HEALTHCARE_NPI"},
                {"name": "AUTH_TOKEN"},
                {"name": "AWS_CREDENTIALS"},
                {"name": "AZURE_AUTH_TOKEN"},
                {"name": "BASIC_AUTH_HEADER"},
                {"name": "GCP_API_KEY"},
                {"name": "GCP_CREDENTIALS"},
                {"name": "HTTP_COOKIE"},
                {"name": "JSON_WEB_TOKEN"},
                {"name": "ENCRYPTION_KEY"},
                {"name": "OAUTH_CLIENT_SECRET"},
                {"name": "PASSWORD"},
                {"name": "SSL_CERTIFICATE"},
                {"name": "STORAGE_SIGNED_POLICY_DOCUMENT"},
                {"name": "STORAGE_SIGNED_URL"},
                {"name": "WEAK_PASSWORD_HASH"},
                {"name": "XSRF_TOKEN"},
                {"name": "CREDIT_CARD_TRACK_NUMBER"},
                {"name": "US_EMPLOYER_IDENTIFICATION_NUMBER"},
                {"name": "US_ADOPTION_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "US_PREPARER_TAXPAYER_IDENTIFICATION_NUMBER"},
                {"name": "US_DEA_NUMBER"},
                {"name": "US_PASSPORT"},
                {"name": "CREDIT_CARD_NUMBER"}
            ],
            "likelihood": "Likely",
            "transformation": {
                "method": "Inspect"
            },
            "notify": True,
            "reject": False
        }
}

template = Template.model_validate(template_data)

# create the template, for async use \`await client.acreate_template(template)\`
client.create_template(template)
`})})]}),"\n",(0,i.jsx)(a.h2,{id:"redact-template",children:"Redact Template"}),"\n",(0,i.jsx)(l.A,{children:(0,i.jsx)(s.A,{value:"redact",label:"Template with Redact Method",children:(0,i.jsx)(o.A,{language:"bash",children:`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "RedactPII",
        "description": "Redact sensitive data",
        "enabled": true,
        "type": "de-identify",
        "config": {
            "infoTypes": [
                {"name": "EMAIL_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "CREDIT_CARD_NUMBER"},
                {"name": "STREET_ADDRESS"},
                {"name": "US_PASSPORT"}
            ],
            "likelihood": "Possible",
            "transformation": {
                "method": "Redact" 
            },
            "notify": true,
            "reject": false
        }
}' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/RedactPII"
`})})}),"\n",(0,i.jsx)(a.h2,{id:"mask-template",children:"Mask Template"}),"\n",(0,i.jsx)(l.A,{children:(0,i.jsx)(s.A,{value:"mask",label:"Template with Mask Method",children:(0,i.jsx)(o.A,{language:"bash",children:`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "MaskPII",
        "description": "Mask sensitive data",
        "enabled": true,
        "type": "de-identify",
        "config": {
            "infoTypes": [
                {"name": "EMAIL_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "CREDIT_CARD_NUMBER"},
                {"name": "PASSWORD"},
                {"name": "ENCRYPTION_KEY"}
            ],
            "likelihood": "Possible",
            "transformation": {
                "method": "Mask",
                "maskingCharacter": "*",
                "numberToMask": 0
            },
            "notify": true,
            "reject": false
        }
}' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/MaskPII"
`})})}),"\n",(0,i.jsx)(a.h2,{id:"replace-template",children:"Replace Template"}),"\n",(0,i.jsx)(l.A,{children:(0,i.jsx)(s.A,{value:"replace",label:"Template with Replace Method",children:(0,i.jsx)(o.A,{language:"bash",children:`
curl -X POST \
-H "Content-Type: application/json" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-d '{
        "name": "ReplacePII",
        "description": "Replace sensitive data",
        "enabled": true,
        "type": "de-identify",
        "config": {
            "infoTypes": [
                {"name": "EMAIL_ADDRESS"},
                {"name": "PHONE_NUMBER"},
                {"name": "PERSON_NAME"},
                {"name": "US_SOCIAL_SECURITY_NUMBER"},
                {"name": "CREDIT_CARD_NUMBER"},
                {"name": "PASSWORD"},
                {"name": "STREET_ADDRESS"}
            ],
            "likelihood": "Possible",
            "transformation": {
                "method": "Replace",
                "replacementConfig": {
                    "EMAIL_ADDRESS": "[EMAIL]",
                    "PHONE_NUMBER": "[PHONE]",
                    "PERSON_NAME": "[NAME]",
                    "US_SOCIAL_SECURITY_NUMBER": "[SSN]",
                    "CREDIT_CARD_NUMBER": "[CREDIT_CARD]",
                    "PASSWORD": "[PASSWORD]",
                    "STREET_ADDRESS": "[ADDRESS]"
                }
            },
            "notify": true,
            "reject": false
        }
}' \
"https://your-api-domain.com/v1/admin/processors/dp/templates/ReplacePII"
`})})}),"\n",(0,i.jsx)(a.h2,{id:"custom-regex-template",children:"Custom Regex Template"}),"\n",(0,i.jsx)(l.A,{children:(0,i.jsx)(s.A,{value:"regex",label:"Template with Custom Regex",children:(0,i.jsx)(o.A,{language:"bash",children:`
curl -X POST \\
-H "Content-Type: application/json" \\
-H "x-javelin-apikey: $JAVELIN_API_KEY" \\
-d '{
    "name": "CustomRegexTemplate",
    "description": "Detect sensitive data with custom regex and reserved keywords",
    "enabled": true,
    "type": "inspect",
    "config": {
        "notify": true,
        "reject": false,
        "infoTypes": [
            {
                "name": "OPENAI_API_KEY",
                "regex": "sk-[a-zA-Z0-9]{48}"
            },
            {
                "name": "RESERVED_KEYWORD",
                "dictionary": {
                    "wordList": ["confidential", "secret", "private", "classified", "restricted"]
                }
            }
        ],
        "likelihood": "Possible",
        "rejectPrompt": "Unable to complete request, data protection policy has detected sensitive data leakage or enterprise violations in prompt",
        "transformation": {
            "method": "Inspect"
        }
    }
}' \\
"https://your-api-domain.com/v1/admin/processors/dp/templates/inspect"
`})})})]})}function _(e={}){let{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},15947:(e,a,t)=>{t.d(a,{A:()=>r});var n=t(74848);t(96540);var i=t(18215);function r({children:e,hidden:a,className:t}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_Ymn6",t),hidden:a,children:e})}},74235:(e,a,t)=>{t.d(a,{A:()=>I});var n=t(74848),i=t(96540),r=t(18215),l=t(52204),s=t(56347),o=t(13321),m=t(57641),c=t(73094),E=t(57237);function p(e){return i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function d({value:e,tabValues:a}){return a.some(a=>a.value===e)}var _=t(12075);function u({className:e,block:a,selectedValue:t,selectValue:i,tabValues:s}){let o=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.a_)(),c=e=>{let a=e.currentTarget,n=s[o.indexOf(a)].value;n!==t&&(m(a),i(n))},E=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{let t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1]}}a?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},e),children:s.map(({value:e,label:a,attributes:i})=>(0,n.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>{o.push(e)},onKeyDown:E,onClick:c,...i,className:(0,r.A)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":t===e}),children:a??e},e))})}function A({lazy:e,children:a,selectedValue:t}){let l=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){let e=l.find(e=>e.props.value===t);return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==t}))})}function R(e){let a=function(e){let{defaultValue:a,queryString:t=!1,groupId:n}=e,r=function(e){let{values:a,children:t}=e;return(0,i.useMemo)(()=>{let e=a??p(t).map(({props:{value:e,label:a,attributes:t,default:n}})=>({value:e,label:a,attributes:t,default:n})),n=(0,c.XI)(e,(e,a)=>e.value===a.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`);return e},[a,t])}(e),[l,_]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:a}){if(0===a.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!d({value:e,tabValues:a}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=a.find(e=>e.default)??a[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:a,tabValues:r})),[u,A]=function({queryString:e=!1,groupId:a}){let t=(0,s.W6)(),n=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,m.aZ)(n),(0,i.useCallback)(e=>{if(!n)return;let a=new URLSearchParams(t.location.search);a.set(n,e),t.replace({...t.location,search:a.toString()})},[n,t])]}({queryString:t,groupId:n}),[R,I]=function({groupId:e}){let a=e?`docusaurus.tab.${e}`:null,[t,n]=(0,E.Dv)(a);return[t,(0,i.useCallback)(e=>{a&&n.set(e)},[a,n])]}({groupId:n}),T=(()=>{let e=u??R;return d({value:e,tabValues:r})?e:null})();return(0,o.A)(()=>{T&&_(T)},[T]),{selectedValue:l,selectValue:(0,i.useCallback)(e=>{if(!d({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);_(e),A(e),I(e)},[A,I,r]),tabValues:r}}(e);return(0,n.jsxs)("div",{className:(0,r.A)("tabs-container","tabList__CuJ"),children:[(0,n.jsx)(u,{...a,...e}),(0,n.jsx)(A,{...a,...e})]})}function I(e){let a=(0,_.A)();return(0,n.jsx)(R,{...e,children:p(e.children)},String(a))}}}]);