module.exports = {  
  docsSidebar: {
    'Core Concepts': [
      'javelin-architecture/javelin-architecture',
      {
        type: 'category',
        label: 'Gateways',
        items: [
          'javelin-core/gatewayconfiguration',
        ]
      },
       {
        type: 'category',
        label: 'Applications',
        items: [
          'javelin-core/application-overview',
          'javelin-core/application-configuration',
          'javelin-core/application-policy-configuration',
        ]
      },
      {
        type: 'category',
        label: 'Routes',
        items: [
          'javelin-core/route-configuration',
        ]
      },
      {
        type: 'category',
        label: 'Providers',
        items: [
          'javelin-core/providerconfiguration',
        ]
      },
    ],
    'Features': [
      {
        type: 'category',
        label: 'Model Reliability',
        items: [
          'javelin-core/features/retries',
          'javelin-core/features/ratelimits',
          'javelin-core/features/loadbalancing',
          'javelin-core/features/javelinproxy',
          'javelin-core/features/guardrailbypass',

          /*
          'javelin-core/features/caching',
          */
        ]
      },      
      {
        type: 'category',
        label: 'Model Routing',
        items: [
          'javelin-core/fallbackrouting/overview',
          'javelin-core/features/automaticllm',
        ]
      },                  
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
        label: 'Compliance & Monitoring',
        items: [
          'javelin-core/features/auditarchive',
          'javelin-webapp/threat-alerts/overview',
          'javelin-admin/alerts/overview',
        ]
      },
    ],
    'Security & Guardrails': [
      'javelin-processors/processors-overview',
      {
        type: 'category',
        label: 'Prompt Injection & Jailbreak Detection',
        items: [
          'javelin-processors/prompt-injection',
          'javelin-processors/promptinjectionusage',
        ]
      },
      {
        type: 'category',
        label: 'Sensitive Data Protection',
        items: [
          'javelin-processors/privacyredaction',
          'javelin-processors/infotypes',
          'javelin-processors/infotypes-reference',
          {
            type: 'category',
            label: 'Usage Examples',
            items: [
              'javelin-processors/piiphi',
              'javelin-processors/secretsandcredentials',
            ]
          }
        ]
      },            
      {
        type: 'category',
        label: 'Trust & Safety',
        items: [
          'javelin-processors/trustsafety',      
          'javelin-processors/contentmoderation',
          'javelin-processors/trustsafetyusage',
        ]
      },
      {
        type: 'category',
        label: 'Content Filtering', 
        items: [
          'javelin-processors/keywordfilter',
          'javelin-processors/keywordcheck',
          'javelin-processors/regex',          
        ]
      },      
      {
        type: 'category',
        label: 'Security Filters',
        items: [
          'javelin-processors/securityfilters',
          'javelin-processors/malware',
          {
            type: 'category',
            label: 'Usage Examples',
            items: [
              'javelin-processors/codedetectionusage',
              'javelin-processors/garbagedetectionusage',
              'javelin-processors/languagedetectionusage',
              'javelin-processors/malwareusage',            
            ]
          }
        ]
      },       
      {
        type: 'category',
        label: 'Custom Guardrails',
        items: [
          'javelin-processors/javascript',      
        ]
      },
    ],
    'Javelin RedTeam': [
      'javelin-redteam/overview',
      'javelin-redteam/configuration',
      'javelin-redteam/architecture',
      {
        type: 'category',
        label: 'Categories',
        items: [
          'javelin-redteam/categories/overview',
        ]
      },
      {
        type: 'category',
        label: 'Engines',
        items: [
          'javelin-redteam/engines/overview',
          'javelin-redteam/engines/single-turn',
          'javelin-redteam/engines/multi-turn',
        ]
      },
      {
        type: 'category',
        label: 'Guides',
        items: [
          'javelin-redteam/guides/getting-started',
          'javelin-redteam/guides/understanding-reports',
        ]
      }
    ],    
    'Features': [
      {
        type: 'category',
        label: 'Model Reliability',
        items: [
          'javelin-core/features/retries',
          'javelin-core/features/ratelimits',
          'javelin-core/features/loadbalancing',
          'javelin-core/features/javelinproxy',
          'javelin-core/features/guardrailbypass',

          /*
          'javelin-core/features/caching',
          */
        ]
      },      
      {
        type: 'category',
        label: 'Model Routing',
        items: [
          'javelin-core/features/automaticllm',
          'javelin-core/fallbackrouting/overview',
        ]
      },                  
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
        label: 'Compliance & Monitoring',
        items: [
          'javelin-core/features/auditarchive',
          'javelin-webapp/threat-alerts/overview',
          'javelin-admin/alerts/overview',
        ]
      },
    ],
    'Developer Toolkit': [
      'javelin-core/integration-new',
      'javelin-core/supported-llms',
      'javelin-core/model-scan',
      'javelin-core/playground/playground',
      'javelin-core/3rdpartyintegrations',
      {
        type: 'category',
        label: 'Python SDK',
        items: [
          'javelin-python/python-quickstart',
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
            label: 'CLI Reference',
            items: [
              'javelin-python/cli'
            ]
          },
        ]
      },
    ],
    /*
    'API Reference': [
      {
        type: 'category',
        label: 'Gateway Management',
        items: [
          'javelin-core/administration/creategateway',
          'javelin-core/administration/getgateway',
          'javelin-core/administration/listgateways',
          'javelin-core/administration/updategateway',
          'javelin-core/administration/deletegateway',
        ]
      },
      {
        type: 'category',
        label: 'Provider Management',
        items: [
          'javelin-core/administration/createprovider',
          'javelin-core/administration/getprovider',
          'javelin-core/administration/listproviders',
          'javelin-core/administration/updateprovider',
          'javelin-core/administration/deleteprovider',
        ]
      },
      {
        type: 'category',
        label: 'Route Management',
        items: [
          'javelin-core/administration/create-route',
          'javelin-core/administration/getroute',
          'javelin-core/administration/listroutes',
          'javelin-core/administration/updateroute',
          'javelin-core/administration/deleteroute'
        ]
      },
      {
        type: 'category',
        label: 'Secrets Management',
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
        label: 'Data Protection Templates',
        items: [
          'javelin-core/dataprotectionconfiguration',
          'javelin-core/administration/createtemplate',
          'javelin-core/administration/gettemplate',
          'javelin-core/administration/listtemplates',
          'javelin-core/administration/updatetemplate',
          'javelin-core/administration/deletetemplate',
        ]
      },
    ],
    */
    'Resources': [
      'security',
      'changelog',
      'contributing/style-guide'
    ],
  },
};
