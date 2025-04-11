# Creating Route
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Creating Route

This guide explains how to create routes with different safety configurations.

<Tabs>
<TabItem value="curl" label="Using cURL">

<CodeBlock
  language="bash">
  {`curl -X POST \\
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
`}
</CodeBlock>

</TabItem>
<TabItem value="python" label="Using Python SDK">

<CodeBlock
  language="python"
  title="Javelin Route Example"
  showLineNumbers>
  {`from javelin_sdk import (
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
`}
</CodeBlock>

</TabItem>
<TabItem value="inspect" label="Route in Inspect Mode">

<CodeBlock
  language="bash">
  {`curl -X POST \\
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
`}
</CodeBlock>

</TabItem>
<TabItem value="trust-safety" label="Route with Trust & Safety Reject">

<CodeBlock
  language="bash">
  {`curl -X POST \\
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
`}
</CodeBlock>

</TabItem>
<TabItem value="prompt-safety" label="Route with Prompt Safety Reject">

<CodeBlock
  language="bash">
  {`curl -X POST \\
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
`}
</CodeBlock>

</TabItem>
</Tabs>

## Configuration Options

### Basic Settings
```json
{
    "archive": true,
    "retention": 7,
    "rate_limit": 0,
    "retries": 5
}
```

### DLP (Data Loss Prevention)
Data Loss Prevention configuration helps protect sensitive information:
```json
"dlp": {
    "enabled": true,
    "strategy": "promptfoo_dlp"
}
```

### Content Filter (Trust & Safety)
Content filtering allows you to reject requests based on content types:
```json
"content_filter": {
    "enabled": true,
    "error_code": 200,
    "content_types": [
        {
            "operator": "greater_than",
            "restriction": "sexual",
            "probability_threshold": 0.25 // Threshold can be set to 0.25, 0.5, 0.75 or 1
        }
    ],
    "reject_prompt": "Unable to complete request, trust & safety violation detected"
}
```

Available content restrictions:
- sexual
- violence
- hate_speech
- profanity
- crime

### Prompt Safety
Prompt safety helps prevent prompt injection and jailbreak attempts:
```json
"prompt_safety": {
    "enabled": true,
    "error_code": 200,
    "content_types": [
        {
            "operator": "greater_than",
            "restriction": "prompt_injection",
            "probability_threshold": 0.25 // Threshold can be set to 0.25, 0.5, 0.75 or 1
        },
        {
            "operator": "greater_than",
            "restriction": "jailbreak",
            "probability_threshold": 0.25 // Threshold can be set to 0.25, 0.5, 0.75 or 1
        }
    ],
    "reject_prompt": "Rejected from prompt safety policy."
}
```

### Security Filters
Additional security filters can be enabled:
```json
"security_filters": {
    "enabled": true,
    "content_types": []
}
```

All safety features support an inspect mode configuration that enables detection of various content types including language patterns, code/markdown syntax, and non-ASCII characters. The SecurityFilters Processor tracks and provides metrics for these security filter matches to help monitor and analyze potential security concerns.
