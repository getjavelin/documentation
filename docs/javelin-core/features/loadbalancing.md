# Load Balancing
Organizations have several use cases that drive their load balancing needs. 

## Use Cases

### Traffic Load Shaping
Organizations may want to strike a balance between inference accuracy, cost and latency by setting up a load shaping mix that shapes traffic towards multiple LLMs. 

For instance, an example traffic shape could be setup for using OpenAI GPT3.5 Turbo for 70% of the traffic and OpenAI GPT4 for 30% of the traffic. 

### LLM Fallback
One way to manage inference costs is to setup LLM fallbacks when specific routes have exhausted their budgets. 

For instance, the route may be defined to use OpenAI GPT3.5 Turbo with a Google BARD fallback when the cost or policy budgets are exceeded. 

### Credential Harvesting
Many model providers enforce rate limiting on each of their credentials provisioned. As Application inference needs continually expand, they find that it may be beneficial to spread their load evenly across multiple credentials (or keys). 

For instance, the Application may choose to spread an anticipated load of 100 queries/second across 10 credential keys each with 10 queries/sec towards a specific model. 

Please contact: support@getjavelin.io if you would like to use this feature. 