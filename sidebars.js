/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  someSidebar: {
    'Getting Started': [
      'javelin-core/overview', 
      'javelin-core/quickstart',
      'javelin-core/supported-llms',
    ],
    'Python API Reference': [
      'javelin-python/quickstart',      
      'javelin-python/api-reference',
    ],
    'Typescript API Reference': [
      'javelin-js/quickstart',
      'javelin-js/api-reference'
    ],
    'Advanced': [
      'javelin-core/advanced',
      'javelin-core/ratelimits'
    ],
    'Changelog': [
      'changelog'
    ],
  },
};