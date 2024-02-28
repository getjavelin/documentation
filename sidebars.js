module.exports = {
  someSidebar: {
    'Getting Started': [
      'javelin-core/overview', 
      'javelin-core/supported-llms',
    ],
    'Integrating Applications': [
      'javelin-core/integration',
    ],
    'Langchain': [
      'javelin-langchain-python/quickstart',
      'javelin-langchain-python/chain',
    ],
    'Playground': [
      'javelin-core/playground/overview',
      'javelin-core/playground/playground',
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
    ],   
    /*        
    'Javelin GPTs': [
      // 'javelin-gpt/overview',
      // 'javelin-gpt/javelingpt',
      // 'javelin-gpt/opengpt',
      // 'javelin-gpt/vercelaisdk'
    ],
    */
    'Python API Reference': [
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
        label: 'Setting Up Providers',
        items: [
          'javelin-core/providerconfiguration',
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
        label: 'Setting Up Data Protection',
        items: [
          'javelin-core/dataprotectionconfiguration',
        ]
      },
      {
        type: 'category',
        label: 'Setting Up Secrets',
        items: [
          'javelin-core/secretsconfiguration',
        ]
      },
    ],
    'Changelog': [
      'changelog'
    ],
  },
};
