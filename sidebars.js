module.exports = {  
  docsSidebar: {
    'Core Concepts': [
      'javelin-architecture/javelin-architecture',
      'javelin-core/application-overview',
      'javelin-core/provider-overview',
      'javelin-core/route-overview',
      'javelin-core/mcp-overview',
    ],
    'Features': [
      'javelin-core/features/ratelimits',
      'javelin-core/features/retries',
      'javelin-core/fallbackrouting/overview',
      'javelin-core/features/loadbalancing',
      'javelin-core/features/javelinproxy',
      'javelin-core/features/guardrailbypass',
      'javelin-core/features/automaticllm',
      'javelin-core/features/auditarchive',
      'javelin-core/supported-llms',
      'javelin-core/model-scan',
      'javelin-core/playground/playground',
      {
        type: 'category',
        label: 'Secrets Vault',
        items: [
          'javelin-core/secretsvault/overview',
          'javelin-core/secretsvault/virtualkeys',
        ]
      },
      'javelin-core/3rdpartyintegrations',
    ],
    'Security & Guardrails': [
      'javelin-webapp/threat-alerts/overview',
      'javelin-admin/alerts/overview',
      'javelin-processors/processors-overview',
      {
        type: 'category',
        label: 'Keyword Filter',
        items: [
          'javelin-processors/keywordfilter',
          'javelin-processors/keywordcheck',
        ]
      },
      {
        type: 'category',
        label: 'Privacy Redaction',
        items: [
          'javelin-processors/privacyredaction',
          'javelin-processors/infotypes',
          'javelin-processors/infotypes-reference',
          'javelin-processors/piiphi',
          'javelin-processors/secretsandcredentials',
        ]
      },
      {
        type: 'category',
        label: 'Prompt Injection',
        items: [
          'javelin-processors/prompt-injection',
          'javelin-processors/promptinjectionusage',
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
      'javelin-processors/regex',  
      'javelin-processors/securityfilters',    
      {
        type: 'category',
        label: 'Malware Detection',
        items: [
          'javelin-processors/malware',
          'javelin-processors/malwareusage',            
        ]
      },
      'javelin-processors/standalone-guardrails',
      {
        type: 'category',
        label: 'Other Processors',
        items: [
          'javelin-processors/codedetectionusage',
          'javelin-processors/garbagedetectionusage',
          'javelin-processors/languagedetectionusage',
          'javelin-processors/javascript',      
        ]
      }
    ],
    'RedTeam': [
      'javelin-redteam/overview',
      'javelin-redteam/architecture',
      'javelin-redteam/configuration',
      'javelin-redteam/target-applications',
      'javelin-redteam/categories/overview',
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
          'javelin-redteam/guides/scan-management',
          'javelin-redteam/guides/understanding-reports',
        ]
      }
    ],
    'Developer Toolkit': [
      'javelin-core/integration-new',
      'javelin-core/gatewayconfiguration',
      {
        type: 'category',
        label: 'Application Configuration',
        items: [
          'javelin-core/application-configuration',
          'javelin-core/application-policy-configuration',
           'javelin-core/application-usage-guides',
        ]
      },
      {
        type: 'category',
        label: 'Provider Configuration',
        items: [
          'javelin-core/provider-configuration',
          'javelin-core/provider-usage-guide'
        ]
      },
      {
        type: 'category',
        label: 'Route Configuration',
        items: [
          'javelin-core/route-configuration',
          'javelin-core/route-usage-guide',
          /*
          'javelin-core/administration/create-route',
          */
        ]
      },
      {
        type: 'category',
        label: 'MCP Configuration',
        items: [
          'javelin-core/mcp-configuration',
          'javelin-core/mcp-usage-guides',
        ]
      },
      {
        type: 'category',
        label: 'Python SDK',
        items: [
          'javelin-python/python-quickstart',
          'javelin-python/models',
          'javelin-python/javelinclient',
          'javelin-python/exceptions',
          'javelin-python/cli'
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

    /*
    'Resources': [
      'security',
      'changelog',
      'contributing/style-guide'
    ],
    */
  },
};
