module.exports = {
  someSidebar: {
    'Getting Started': [
      'javelin-core/overview', 
      'javelin-core/supported-llms',
    ],
    'Features': [
      'javelin-core/retries',
      'javelin-core/ratelimits',
      'javelin-core/loadbalancing',
      'javelin-core/caching',
      'javelin-core/auditarchive',
      'javelin-core/hallucination',
      'javelin-core/privacyredaction',
      'javelin-core/automaticllm',
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
      }
    ],
    'Langchain': [
      'javelin-langchain-python/quickstart',
    ],
    'Changelog': [
      'changelog'
    ],
  },
};
