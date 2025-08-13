---
title: Javelin-Redteam
sidebar_label: Overview
slug: /javelin-redteam
---

# Javelin RedTeam

Javelin RedTeam is a cutting-edge AI security platform designed to proactively identify and assess vulnerabilities in LLM-based applications through automated red teaming. Built with modular agents and powered by state-of-the-art adversarial techniques, it provides comprehensive security assessments for your application.

## Key Features

### 🎯 **Automated Red-teaming Flow**
Generate attacks to discover vulnerabilities in target applications automatically using AI-driven attack generation and execution.

### 🔧 **Modular Agent Architecture**
A suite of agents working together to conduct comprehensive security assessments.

### 🚀 **Multiple AI Engines**
Support for various sophisticated attack enhancement engines based on published research and established techniques.

### 🏗️ **Production-Ready API**
FastAPI server with Redis-backed queue system for asynchronous red-teaming operations, enabling scalable and distributed testing workflows.

### 📊 **Comprehensive Reporting**
Detailed vulnerability assessment reports with:
- Severity classifications
- Attack vectors and examples
- Remediation recommendations
- Compliance mapping (OWASP LLM Top 10)

## Why Choose Javelin RedTeam?

### **Proactive Security**
Identify vulnerabilities before they make it to production through systematic adversarial testing.

### **Research-Backed Techniques**
Implements state-of-the-art adversarial techniques from leading research institutions including Microsoft, Meta, and academic publications.

### **Comprehensive Coverage**
Tests across 15 vulnerability categories and 80+ specific vulnerability types covering:
- Data Privacy & PII Leakage
- Prompt Injection & Jailbreaks  
- Bias & Toxicity
- Security Vulnerabilities
- Brand Protection
- Regulatory Compliance

### **Enterprise-Grade Architecture**
Built for production with features like:
- Horizontal scaling through worker processes
- Async execution with queue management
- PostgreSQL and Redis integration for high performance and enterprise data management

### **Flexible Integration**
Test any target through:
- HTTP API endpoints
- Direct model access (coming soon)
- Custom Python implementations

## How It Works

Javelin RedTeam follows a systematic approach to red teaming:

1. User can configure the target application to scan, together with brief description about what the application does, and the endpoint it exposes in javelin UI

2. Select scan configurations to tailor the scan to your needs.

3. Start the scan, and wait for the reports to be generated.

Behind the scenes, redteam framework will spin up a suit of agents that exectue a scan workflow:

1. **Planning Agent**: The Planner Agent generates a detailed attack strategy based on target application and selected vulnerability categories.

2. **Attack Generation**: Base attack prompts are retrieved from vector database and enhanced using various engines. (prompt injection, maths engine, adversarial techniques, etc.)

3. **Execution**: Attack prompts are sent to target applications through configurable interfaces.

4. **Evaluation**: Responses are analyzed by LLM as judge models to identify potential vulnerabilities and security issues.

5. **Reporting**: Comprehensive reports are generated with findings, severity levels, and remediation guidance.

## Vulnerability Taxonomy

Javelin RedTeam uses a comprehensive vulnerability taxonomy with 15 categories covering all major security domains:

### **Core Categories**
- **Data Privacy**: PII leakage, prompt disclosure
- **Responsible AI**: Bias, toxicity, machine ethics  
- **Security**: Unauthorized access, injection attacks
- **Brand Image**: Misinformation, competitor mentions
- **Illegal Risks**: Harmful content, safety violations

### **OWASP LLM Top 10 2025**
Complete coverage of OWASP LLM security categories with dynamic attack generation using specialized engines.
- **prompt_injection**
- **sensitive_information_disclosure**
- **supply_chain**
- **data_and_model_poisoning**
- **improper_output_handling**
- **excessive_agency**
- **system_prompt_leakage**
- **vector_and_embedding_weaknesses**
- **misinformation**
- **unbounded_consumption**

:::note
For detailed information about each category, see our [Categories Guide](/docs/javelin-redteam/categories/overview.md).
:::

## Attack Enhancement Engines

Javelin RedTeam uses sophisticated engines to transform base prompts into advanced attacks:

### **Single-Turn Engines**
- **Prompt Injection**: Hidden instruction injection
- **Adversarial**: Gradient-based and suffix attacks  
- **Mathematical**: Abstract problem formulation
- **Hidden Layer**: Role-playing with obfuscation
- **BoN (Best-of-N)**: Multiple variations with selection
- **ROT13/Base64**: Encoding-based obfuscation
- **Direct LLM**: AI-powered prompt enhancement
- **Ascii Art**: Converting the prompt to Ascii Art
- **Task-in_Prompt**: Encoding the injection as a task/puzzle in a prompt

### **Multi-Turn Engines** (Coming Soon)
Advanced conversational attack patterns for sustained vulnerability exploitation.

:::note
For details about the engine module and the supported engines, please see [engines overview](/docs/javelin-redteam/engines/overview.md)
:::

## Getting Started

Ready to secure your AI applications? Start with our [Getting Started Guide](/docs/javelin-redteam/guides/getting-started.md) to run your first red team assessment, or explore our [Configuration Guide](/docs/javelin-redteam/configuration.md) for advanced setup options.

:::tip
For production deployments, see our [Architecture Guide](/docs/javelin-redteam/architecture.md).
:::

## Support & Community

- **Documentation**: Comprehensive guides and references
- **GitHub Issues**: Report bugs and request features
- **Enterprise Support**: Dedicated support for enterprise customers

Transform your AI security posture with Javelin RedTeam - because proactive security is the only security that matters. 