# Configuration

The Javelin RedTeam configuration system provides comprehensive control over scan parameters, target applications, vulnerability categories, and attack engines.

## Configuration Structure

The main configuration consists of several key sections:

```yaml
# Application under test
app_config:
  name: "MyApplication"
  description: "Application description for context"
  endpoint: "https://api.example.com/chat"

# Scan parameters
scan_config:
  parameters:
    maxScenarios: 10
    timeout: 5
    concurrency: 2
    reportFormat: "markdown"
    categories: ["data_privacy", "security"]

# Framework-level settings (optional)
framework:
  database_url: "postgresql://..."
  redis_url: "redis://..."
  max_concurrent_scans: 2
```

## Application Configuration

### Basic Application Settings

```yaml
app_config:
  name: "CustomerChatbot"
  description: "A customer service chatbot that helps users with account inquiries, product information, and technical support."
  endpoint: "https://api.example.com/chat"
  method: "POST"  # Default: POST
  headers:
    Content-Type: "application/json"
    Authorization: "Bearer ${API_TOKEN}"
  payload_template:
    query: "{{query}}"
    user_id: "test_user"
    session_id: "redteam_session"
```

| Field | Type | Description | Default |
|-------|------|-------------|---------|
| `name` | string | Application name for reporting | Required |
| `description` | string | Detailed description of target app for context generation | Required |
| `endpoint` | string | Target HTTP endpoint URL | Required |
| `headers` | object | HTTP headers to include | {} |
| `payload_template` | object | Request payload template with `{{query}}` placeholder | Required |


## Scan Configuration

| Parameter | Type | Permissible Values | Description |
|-----------|------|---------|-------------|
| `maxScenarios` | integer | 1-1000 | Test cases generated per category |
| `timeout` | integer | 1-300 | Maximum scan duration in minutes |
| `concurrency` | integer | 1-10 | Parallel test execution count |
| `reportFormat` | string | markdown, json, pdf, html | Output format |
| `categories`| list | [15 vulnerability categories](./categories/overview#hierarchical-structure) | List of vulnerability categories to test (e.g., data_privacy, security, responsible_ai, prompt_injection) |

### Category Selection

```yaml
scan_config:
  parameters:
    categories:
      # Core vulnerability categories
      - "data_privacy"
      - "responsible_ai"  
      - "security"
      - "brand_image"
      - "illegal_risks"
      
      # OWASP LLM Top 10 categories
      - "prompt_injection"
      - "sensitive_information_disclosure"
      - "supply_chain"
      - "data_and_model_poisoning"
      - "improper_output_handling"
      - "excessive_agency"
      - "system_prompt_leakage"
      - "vector_and_embedding_weaknesses"
      - "misinformation"
      - "unbounded_consumption"
```


## Configuration Validation

Javelin RedTeam validates configuration before execution:

```bash
# Validate configuration
javelin-redteam validate --config conf/config.yaml

# Test connectivity
javelin-redteam test-connection --config conf/config.yaml
```

## Best Practices

1. **Start Simple**: Begin with basic categories and low test counts
2. **Environment Separation**: Use different configs for dev/staging/prod
3. **Incremental Testing**: Gradually increase scope and complexity
4. **Resource Management**: Monitor concurrency and timeouts
5. **Documentation**: Document custom configurations and rationale

## Troubleshooting

Common configuration issues:

- **Invalid Categories**: Ensure category names match supported options
- **Authentication Failures**: Verify API keys and permissions
- **Timeout Issues**: Adjust timeout and concurrency settings
- **Resource Limits**: Check framework limits for your deployment
- **Model Availability**: Ensure specified models are accessible
