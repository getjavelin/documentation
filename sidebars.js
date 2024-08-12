module.exports = {  
  someSidebar: {
    'Getting Started': [
      'javelin-core/overview', 
      'javelin-core/supported-llms',
    ],
    'Integrating Applications': [
      'javelin-core/integration',
    ],
    'Features': [
      {
        type: 'category',
        label: 'Secrets Vault',
        items: [
          'javelin-core/secretsvault/overview',
          'javelin-core/secretsvault/virtualkeys',
        ]
      },
      {
        type: 'category',
        label: 'Model Reliability',
        items: [
          'javelin-core/features/retries',
          'javelin-core/features/ratelimits',
          'javelin-core/features/loadbalancing',
          'javelin-core/features/caching',
        ]
      },      
      {
        type: 'category',
        label: 'Model Routing',
        items: [
          'javelin-core/features/automaticllm',
        ]
      },                  
      {
        type: 'category',
        label: 'Compliance',
        items: [
          'javelin-core/features/auditarchive',      
        ]
      },
    ],
    'Guardrails Processors': [
      'javelin-processors/overview',
      'javelin-processors/promptinjection',
      {
        type: 'category',
        label: 'Sensitive Data Protection',
        items: [
          'javelin-processors/privacyredaction',
          'javelin-processors/infotypes',
        ]
      },            
      {
        type: 'category',
        label: 'Trust & Safety',
        items: [
          'javelin-processors/trustsafety',      
          'javelin-processors/contentmoderation',
          'javelin-processors/malware'
        ]
      },
      {
        type: 'category',
        label: 'Content Filtering', 
        items: [
          'javelin-processors/keywordfilter',      
        ]
      },      
      'javelin-processors/hallucination',
      {
        type: 'category',
        label: 'Custom Guardrails',
        items: [
          'javelin-processors/custom',      
        ]
      },
    ],  
    'Playground': [
      'javelin-core/playground/overview',
      'javelin-core/playground/playground',
    ],
    'Python SDK': [
      'javelin-python/quickstart',
      {
        type: 'category',
        label: 'API Reference',
        items: [
          'javelin-python/models',
          'javelin-python/javelinclient',
          'javelin-python/exceptions'
        ]
      },
      {
        type: 'category',
        label: 'Setting Up Gateways',
        items: [
          'javelin-core/gatewayconfiguration',
          'javelin-core/administration/creategateway',
          'javelin-core/administration/getgateway',
          'javelin-core/administration/listgateways',
          'javelin-core/administration/updategateway',
          'javelin-core/administration/deletegateway',
        ]
      },
      {
        type: 'category',
        label: 'Setting Up Providers',
        items: [
          'javelin-core/providerconfiguration',
          'javelin-core/administration/createprovider',
          'javelin-core/administration/getprovider',
          'javelin-core/administration/listproviders',
          'javelin-core/administration/updateprovider',
          'javelin-core/administration/deleteprovider',
        ]
      },
      {
        type: 'category',
        label: 'Setting Up Routes',
        items: [
          'javelin-core/routeconfiguration',
          'javelin-core/administration/createroute',
          'javelin-core/administration/getroute',
          'javelin-core/administration/listroutes',
          'javelin-core/administration/updateroute',
          'javelin-core/administration/deleteroute',
        ]
      },
      {
        type: 'category',
        label: 'Setting Up Secrets',
        items: [
          'javelin-core/secretsconfiguration',
          'javelin-core/administration/createvkey',
          'javelin-core/administration/getvkey',
          'javelin-core/administration/listvkeys',
          'javelin-core/administration/updatevkey',
          'javelin-core/administration/deletevkey',
        ]
      },
      {
        type: 'category',
        label: 'Setting Up Data Protection',
        items: [
          'javelin-core/dataprotectionconfiguration',
          'javelin-core/administration/createtemplate',
          'javelin-core/administration/gettemplate',
          'javelin-core/administration/listtemplates',
          'javelin-core/administration/updatetemplate',
          'javelin-core/administration/deletetemplate',
        ]
      },
      {
        type: 'category',
        label: 'CLI Reference',
        items: [
          'javelin-python/cli'
        ]
      },
    ],
    'LangChain': [
      'javelin-langchain-python/quickstart',
      'javelin-langchain-python/chain',
    ],
    'Changelog': [
      'changelog'
    ],
  },
};