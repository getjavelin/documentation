---
id: understanding-reports
title: Understanding and Acting on Reports
sidebar_label: Understanding Reports
---

# Understanding and Acting on Javelin RedTeam Reports

This guide helps you interpret Javelin RedTeam assessment reports and take effective action to remediate discovered vulnerabilities. Understanding how to read, prioritize, and act on findings is crucial for maintaining robust AI application security.

:::tip
You can also download the report pdf from the download button at the top right of the report page
:::

## Report Structure Overview

### Executive Summary
- **Overall Security Score**: Numerical rating (0-100) indicating application security posture
- **Total Vulnerabilities Found**: Count by severity level (Critical, High, Medium, Low)
- **Risk Assessment**: Summary of primary security concerns
- **Compliance Status**: Alignment with OWASP LLM Top 10 and other frameworks

### Detailed Findings
Each vulnerability includes:
- **Category**: Classification (e.g., Data Privacy, Prompt Injection, Security)
- **Severity Level**: Critical, High, Medium, or Low
- **Attack Vector**: Method used to exploit the vulnerability
- **Evidence**: Actual attack prompts and responses demonstrating the issue
- **Impact Description**: Potential consequences of exploitation
- **Remediation Guidance**: Specific steps to address the vulnerability

### Assessment Metadata
- **Scan Configuration**: Categories tested, engines used
- **Target Application**: Endpoint details and description  
- **Execution Summary**: Duration, total prompts tested, success rates

## Severity Level Interpretation

| Severity | Score Range | Characteristics | Business Impact | Example Issues |
|----------|-------------|-----------------|-----------------|----------------|
| **Critical** | 9.0-10.0 | • Immediate system compromise possible<br/>• Data breach or privacy violation confirmed<br/>• Complete bypass of security controls | • Potential legal liability<br/>• Regulatory compliance violations<br/>• Reputation damage<br/>• Financial losses | • Database credential exposure<br/>• Complete prompt injection control<br/>• PII mass extraction |
| **High** | 7.0-8.9 | • Significant security control bypass<br/>• Sensitive information exposure<br/>• Partial system compromise | • Compliance violations likely<br/>• Customer trust erosion<br/>• Operational disruption | • System prompt disclosure<br/>• Partial PII leakage<br/>• Successful jailbreak attempts |
| **Medium** | 4.0-6.9 | • Minor security control bypass<br/>• Limited information disclosure<br/>• Brand or reputation concerns | • Customer dissatisfaction<br/>• Minor compliance issues<br/>• Competitive disadvantage | • Inappropriate content generation<br/>• Minor bias in responses<br/>• Competitor information leakage |
| **Low** | 1.0-3.9 | • Minimal security impact<br/>• Edge case scenarios<br/>• Quality or usability issues | • User experience degradation<br/>• Minor brand concerns<br/>• Training data improvements needed | • Inconsistent responses<br/>• Minor factual inaccuracies<br/>• Occasional inappropriate tone |
