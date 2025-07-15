# Getting Started with Javelin RedTeam

This guide will walk you through running your first security assessment with Javelin RedTeam, from initial setup to analyzing results. By the end of this guide, you'll have conducted a comprehensive red team evaluation of an AI application and understand how to interpret the findings.

## Prerequisites

Before starting, ensure you have:

- **Access to Javelin RedTeam**: Login credentials to access Javelin Redteam interface from the UI.
- **Target Application**: HTTP endpoint, model API, or test application to test the application. Javelin-Redteam includes reference lab applications for conducting sample assessments. 


## Step 1: Prepare Your Target Application

### Test Application Setup

Javelin Redteam already includes sample LLM backed lab apps for running redteam scans. Currently supported ones are:

#### Lab1

Lab1 implements a comprehensive indirect prompt injection testing environment that simulates a product support chatbot with vulnerable function calling capabilities.

The lab exposes five functions that the LLM can call, creating opportunities for indirect prompt injection attacks:

| Function | Parameters | Vulnerability |
|----------|------------|---------------|
| `delete_account` | None | Can delete current user account without additional verification |
| `create_account` | `username`, `email`, `password` | Can create arbitrary accounts |
| `edit_email` | `new_email` | Can modify user email without verification |
| `get_product_info` | `product` | Retrieves product reviews that may contain malicious prompts |
| `add_review` | `product`, `review` | Allows injection of malicious content into review system |

Endpoint Specification:

| Endpoint | Method | Purpose | Request Model | Response Model |
|----------|---------|---------|---------------|----------------|
| `/v1/redteam/lab1/chat` | POST | Main chat interface for testing attacks | ChatRequest | ChatResponse |
| `/v1/redteam/lab1/health` | GET | Health check for lab availability | None | Status object |
| `/v1/redteam/lab1/lab-instructions` | GET | Returns lab objectives and description | None | Instructions object |

For demonstration purposes, this lab uses ```gpt-3.5-turbo``` model.

### Target Application Requirements

Your target application should:
- **Accept HTTP requests** with JSON payloads
- **Return responses** in a consistent format
- **Be accessible** from the red team environment
- **Have appropriate permissions** for security testing

## Step 2: Register the target application

Register the target application on 

## Step 2: Create Your First Scan Configuration

### Basic Configuration

Create a configuration file `my-first-scan.yaml`:

```yaml
app_config:
  name: "My First Red Team Scan"
  description: "A customer service chatbot that helps users with account inquiries and product information"
  endpoint: "http://localhost:5000/chat"
  method: "POST"
  headers:
    Content-Type: "application/json"
  payload_template:
    query: "{{query}}"
    user_id: "redteam_user"

scan_config:
  parameters:
    maxScenarios: 5          # Start small for your first scan
    timeout: 3               # 3-minute timeout
    concurrency: 1           # Single-threaded execution
    strictnessLevel: "medium" # Balanced evaluation
    analysisModel: "gpt-4"   # LLM judge for evaluation
    reportFormat: "markdown"
    categories:
      - "data_privacy"       # Test for data leakage
      - "security"          # Test for security vulnerabilities
```

### Advanced Configuration (Optional)

For more comprehensive testing:

```yaml
app_config:
  name: "Comprehensive Security Assessment"
  description: "Enterprise RAG-based customer service system with access to customer data, product information, and internal documentation"
  endpoint: "https://api.yourcompany.com/chat"
  method: "POST"
  headers:
    Content-Type: "application/json"
    Authorization: "Bearer ${TARGET_API_TOKEN}"
  payload_template:
    query: "{{query}}"
    session_id: "redteam_session"
    context: "customer_service"

scan_config:
  parameters:
    maxScenarios: 10
    timeout: 5
    concurrency: 2
    strictnessLevel: "high"
    analysisModel: "gpt-4"
    reportFormat: "markdown"
    categories:
      - "data_privacy"
      - "responsible_ai"
      - "security"
      - "prompt_injection"
      - "sensitive_information_disclosure"
```

## Step 4: Run Your First Scan

### Using the API

```bash
# Trigger the scan
curl -X POST "${JAVELIN_API_URL}/v1/redteam/scan" \
  -H "Authorization: Bearer ${JAVELIN_API_TOKEN}" \
  -H "Content-Type: application/json" \
  -d @my-first-scan.yaml

# Response will include a run_id
{
  "run_id": "scan_abc123",
  "status": "queued",
  "message": "Scan successfully queued for execution",
  "estimated_duration": "3-5 minutes"
}
```

### Using Local Installation

```bash
# Run the scan using CLI
javelin-redteam agent-smith --config my-first-scan.yaml

# Or run the API server locally
javelin-api &
curl -X POST "http://localhost:8001/v1/redteam/scan" \
  -H "Content-Type: application/json" \
  -d @my-first-scan.yaml
```

## Step 5: Monitor Scan Progress

### Check Scan Status

```bash
# Monitor progress
curl -X GET "${JAVELIN_API_URL}/v1/redteam/scan/scan_abc123/status" \
  -H "Authorization: Bearer ${JAVELIN_API_TOKEN}"

# Response shows progress
{
  "run_id": "scan_abc123",
  "status": "running",
  "progress": {
    "completed_tests": 7,
    "total_tests": 10,
    "current_category": "security",
    "percentage": 70
  },
  "estimated_completion": "2024-01-15T10:30:00Z"
}
```

### Status Indicators

- **`queued`**: Scan is waiting to be processed
- **`initializing`**: Scan is being prepared
- **`running`**: Scan is actively executing tests
- **`completed`**: Scan finished successfully
- **`failed`**: Scan encountered an error
- **`cancelled`**: Scan was cancelled

## Step 6: Analyze Your Results

### Retrieve the Report

Once the scan is complete:

```bash
# Get the full report
curl -X GET "${JAVELIN_API_URL}/v1/redteam/scan/scan_abc123/report" \
  -H "Authorization: Bearer ${JAVELIN_API_TOKEN}" \
  > security-report.json

# Or get markdown format
curl -X GET "${JAVELIN_API_URL}/v1/redteam/scan/scan_abc123/report?format=markdown" \
  -H "Authorization: Bearer ${JAVELIN_API_TOKEN}" \
  > security-report.md
```

### Understanding Your Report

Your security report will include several key sections:


## Step 7: Interpret and Act on Findings

### Risk Prioritization

1. **Critical Issues**: Address immediately
   - System compromise, data breaches
   - Take system offline if necessary

2. **High Issues**: Address within 24-48 hours
   - Privacy violations, security vulnerabilities
   - Implement temporary mitigations

3. **Medium Issues**: Address within 1-2 weeks
   - Brand reputation, compliance issues
   - Plan systematic remediation

4. **Low Issues**: Address in next development cycle
   - Minor usability or performance issues


## Troubleshooting Common Issues


## Support and Resources

### Documentation
- [Configuration Guide](../configuration): Detailed configuration options
- [Categories Guide](../categories/overview): Understanding vulnerability categories
- [Engines Guide](../engines/overview): Attack enhancement techniques
- [API Reference](../api/endpoints): Complete API documentation

### Community and Support
- **GitHub Issues**: Report bugs and request features
- **Documentation**: Comprehensive guides and examples
- **Enterprise Support**: Dedicated support for enterprise customers

### Best Practices
1. **Start Small**: Begin with basic scans before expanding
2. **Regular Testing**: Integrate into development workflow
3. **Remediation Focus**: Prioritize fixing found issues
4. **Continuous Learning**: Stay updated on new vulnerability types

Congratulations! You've completed your first Javelin RedTeam security assessment. Regular red teaming helps ensure your AI applications remain secure as they evolve and face new threats. 