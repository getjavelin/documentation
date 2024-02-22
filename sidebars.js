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
          'javelin-core/secretsvault/virtualkeys',
        ]
      },
      {
        type: 'category',
        label: 'Model Reliability',
        items: [
          'javelin-core/retries',
          'javelin-core/ratelimits',
          'javelin-core/loadbalancing',
          'javelin-core/caching',
          'javelin-core/hallucination',
        ]
      },      
      {
        type: 'category',
        label: 'Sensitive Data Protection',
        items: [
          'javelin-core/privacyredaction',
          'javelin-core/infotypes',
        ]
      },            
      {
        type: 'category',
        label: 'Content Filtering',
        items: [
          'javelin-core/keywordfilter',      
        ]
      },
      {
        type: 'category',
        label: 'Trust & Safety',
        items: [
          'javelin-core/trustsafety',      
        ]
      },
      {
        type: 'category',
        label: 'Model Routing',
        items: [
          'javelin-core/automaticllm',
        ]
      },                  
      {
        type: 'category',
        label: 'Compliance',
        items: [
          'javelin-core/auditarchive',      
        ]
      },
    ],
    'Playground': [
      'javelin-core/playground/playground',
    ],
    'Processors': [
      'javelin-processors/overview',
    ],           
    'Javelin GPTs': [
      'javelin-gpt/overview',
      'javelin-gpt/javelingpt',
      'javelin-gpt/opengpt',
      'javelin-gpt/vercelaisdk'
    ],
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
        label: 'Setting Up Routes',
        items: [
          'javelin-core/routeconfiguration',
          'javelin-core/administration/createroute',
          'javelin-core/administration/getroute',
          'javelin-core/administration/listroutes',
          'javelin-core/administration/updateroute',
          'javelin-core/administration/deleteroute',
        ]
      }
    ],
    'Langchain': [
      'javelin-langchain-python/chain',
    ],
    'Changelog': [
      'changelog'
    ],
  },
};
