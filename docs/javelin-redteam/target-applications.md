---
title: Target Applications
sidebar_label: Target Applications
slug: /javelin-redteam/target-applications
---

# Target Applications

Target applications are the AI-powered systems, APIs, or services that Javelin RedTeam evaluates for security vulnerabilities. This guide covers how to prepare, configure, and register target applications for comprehensive security assessments.

## Overview

Javelin RedTeam can test a wide variety of AI applications and services, including:

- **Chatbots and Conversational AI**: Customer service bots, virtual assistants (COMING SOON)
- **LLM APIs**: Direct model access, API endpoints, and model services
- **AI-Powered Applications**: Applications with embedded AI functionality
- **Function-Calling Systems**: Applications with tool/function calling capabilities (COMING SOON)

## Target Application Requirements

### Technical Requirements

Your target application should meet these basic requirements:

- **HTTP Accessibility**: Must accept HTTP requests (GET/POST)
- **JSON Support**: Should handle JSON request/response formats
- **Network Access**: Must be accessible from the Javelin RedTeam environment
- **Stable Endpoint**: Should maintain consistent API behavior during testing
- **Appropriate Permissions**: Must allow security testing activities

### Security Testing Considerations

- **Test Environment**: Use dedicated test environments, not production systems
- **Data Safety**: Ensure test data doesn't contain sensitive information
- **Rate Limiting**: Be aware of any rate limits that might affect testing
- **Authentication**: Provide valid test credentials if authentication is required

## Reference Lab Applications

Javelin RedTeam bundles pre-built reference applications for learning and testing purposes. These labs demonstrate common vulnerability patterns and provide safe environments for understanding red team assessments. Currently, we bundle lab1 application for demoing redteam scan capabilities.

:::tip Try Our Interactive Labs
Experience our lab applications firsthand! Visit our [**DAMN VULNERABLE OWASP LABS**](https://javelin-redteam-labs.onrender.com/) to interact directly with vulnerable applications and test different LLM vulnerabilities including:

- **LLM01: Prompt Injection** - Direct prompt injection attacks
- **LLM01: Indirect Prompt Injection** - Multi-turn conversation attacks  
- **LLM02: Sensitive Information Disclosure** - Data leakage vulnerabilities
- **LLM03: Supply Chain** - Third-party dependency risks
- **LLM04: Data and Model Poisoning** - Training data manipulation
- **LLM05: Improper Output Handling** - Response filtering bypass
- **LLM06: Excessive Agency** - Overprivileged function calling
- **LLM07: System Prompt Leakage** - Internal prompt exposure
- **LLM08: Vector and Embedding Weaknesses** - Semantic attack vectors
- **LLM09: Misinformation** - False information generation
- **LLM10: Unbounded Consumption** - Resource exhaustion attacks

These interactive labs provide hands-on experience with real vulnerability patterns and help you understand how Javelin RedTeam identifies and exploits these security issues.
:::

### Lab1: Indirect Prompt Injection Testing

Lab1 implements an indirect prompt injection testing environment that simulates a product support e-commerce chatbot with vulnerable function calling capabilities. It also exposes different end-points backed by different LLM providers for testing against different LLMs.

#### Lab1 Overview

This lab exposes five functions that the LLM can call, creating opportunities for indirect prompt injection attacks:

| Function | Parameters | Vulnerability |
|----------|------------|---------------|
| `delete_account` | None | Can delete current user account without additional verification |
| `create_account` | `username`, `email`, `password` | Can create arbitrary accounts |
| `edit_email` | `new_email` | Can modify user email without verification |
| `get_product_info` | `product` | Retrieves product reviews that may contain malicious prompts |
| `add_review` | `product`, `review` | Allows injection of malicious content into review system |

#### API Endpoints

| Endpoint | Method | Purpose |
|----------|---------|---------|
| `/v1/redteam/lab1/chat` | POST | Main chat endpoint for testing attacks that uses OpenAI models |
| `/v1/redteam/lab1/chat-azure` | POST | Chat endpoint that uses Azure OpenAI models |
| `/v1/redteam/lab1/chat-bedrock` | POST | Chat endpoint that uses Bedrock models |
| `/v1/redteam/lab1/health` | GET | Health check for lab availability |
| `/v1/redteam/lab1/lab-instructions` | GET | Returns lab objectives and description with all endpoints |
| `/v1/redteam/lab1/authenticated-chat` | POST | Chat endpoint that requires authentication and uses OpenAI models |

#### Technical Details

#### Request/Response Format

**Chat Request:**
```json
{
  "query": "give me info about your products"
}
```

**Chat Response:**
```json
{
    "response": "Sure, I can provide you with information about our products. Could you please specify which product you are interested in learning more about?",
    "executed_actions": [],
    "error": null
}
```

## Next Steps

1. **Create and Run Red Team Assessment**: Follow the [Getting Started Guide](guides/getting-started.md)
2. **Analyze Results**: Review findings in the [Understanding Reports Guide](guides/understanding-reports.md)

## Support and Resources

- **Configuration Guide**: [RedTeam Configuration](configuration.md)
- **Categories**: [Vulnerability Categories](categories/overview.md)
- **Engines**: [Attack Enhancement Engines](engines/overview.md)
- **Architecture**: [System Architecture](architecture.md)
