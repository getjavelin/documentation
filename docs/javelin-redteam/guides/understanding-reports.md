---
id: understanding-reports
title: Understanding and Acting on Reports
sidebar_label: Understanding Reports
---

# Understanding and Acting on Javelin RedTeam Reports

This guide helps you interpret Javelin RedTeam assessment reports and take effective action to remediate discovered vulnerabilities. Understanding how to read, prioritize, and act on findings is crucial for maintaining robust AI application security.


## Report Structure Overview

![Scan Report Overview](../../../static/img/redteam/ScanReport.png)

### Executive Summary Dashboard

The report opens with a comprehensive dashboard showing high-level scan metrics and key performance indicators:

#### Scan Metadata
- **App Endpoint**: Target application URL that was tested
- **Scan ID**: Unique identifier for tracking and reference
- **Scan Date**: When the assessment was executed
- **Max Duration**: Configured timeout limit for the scan
- **User**: Who initiated the scan
- **Run ID**: Specific execution instance identifier
- **Duration**: Actual time taken to complete the scan
- **Max Test Cases per Category**: Configured limit for test cases per vulnerability category
- **Status**: Final scan status (Completed, Failed, Cancelled)
- **Categories Tested**: List of all vulnerability categories included in the assessment

#### Key Performance Metrics
Four summary cards display critical metrics:

| Metric | Description | Visual Indicator |
|--------|-------------|------------------|
| **Total Tests Executed** | Complete count of security tests run | Target/concentric circles icon |
| **Vulnerabilities Found** | Number of failed tests indicating security issues | Red warning triangle |
| **Success Rate** | Percentage of tests that passed | Progress bar with percentage |
| **Scan Duration** | Total execution time | Clock icon |

### Vulnerability Analysis Charts

#### Vulnerability Severity Distribution
A pie chart showing the breakdown of security issues by severity level:
- **Critical**: High-priority vulnerabilities requiring immediate attention
- **High**: Significant security issues that need prompt remediation
- **Medium**: Moderate security concerns for planned fixes
- **Low**: Minor issues for future improvement

#### Vulnerable Categories Analysis
A vertical bar chart displaying categories with the highest test failure rates, helping prioritize remediation efforts across different security domains.

### Category Test Results Overview

#### Radar Chart Visualization
A spider/radar chart provides a comprehensive view of test performance across all vulnerability categories:

- **Green Polygon**: Represents passed tests, showing areas where your application successfully mitigated attacks.
- **Red Polygon**: Represents failed tests, highlighting vulnerability areas that need attention.
- **Vulnerability Categories**: Each axis represents a different category from the list of categories selected for the scan.

This visualization helps quickly identify which security domains are strongest and which require immediate attention.

### Detailed Test Results

#### Individual Category Cards
Each vulnerability category is displayed as a detailed card containing:

- **Category Name & Icon**: Clear identification with visual indicators
- **Description**: Explanation of the vulnerability type and its implications
- **Success Rate**: Horizontal progress bar showing pass/fail ratio
- **Test Results**: "X/Y Succeeded" format showing exact pass/fail counts
- **Severity Breakdown**: Count of vulnerabilities by severity level (Critical, High, Medium, Low)
- **Compliance Tags**: OWASP LLM Top 10 and other relevant standards
- **Show Details**: Expandable section for granular analysis

#### Detailed Test Case Analysis
When clicking "Show Details" for any category, you gain access to:

##### Test Case Information
- **Engine ID**: Specific attack engine used (e.g., "Best-of-N Engine", "Crescendo Engine"), if applicable.
- **Duration**: Individual test case execution time
- **Turn Count**: Number of conversation turns (1 for single-turn, multiple for multi-turn engines)


##### Complete Conversation Log
- **Security Test Prompt**: Exact attack prompt used in the test
- **AI System Response**: Full response from the target application
- **Tool Usage Capture**: Any function calls, API calls, or tool invocations triggered during the test
- **Multi-turn Conversations**: Complete conversation history for multi-turn attack engines

![Tool Usage Capture Example](/img/redteam/ToolUsage.png)
*Javelin RedTeam captures detailed tool usage including function calls, API interactions, and system commands triggered during security tests*

##### Security Analysis Summary
A short explanation, justifying the current evaluation of the response from the application.

##### Mitigation Guidance
For each failed test case we display `Mitigation Advice`, which are specific actions to address the vulnerability


## Severity Level Interpretation
The table below explains the different severity levels assigned to each vulnerabily found.

| Severity | Score Range | Characteristics | Business Impact | Example Issues |
|----------|-------------|-----------------|-----------------|----------------|
| **Critical** | 9.0-10.0 | • Immediate system compromise possible<br/>• Data breach or privacy violation confirmed<br/>• Complete bypass of security controls | • Potential legal liability<br/>• Regulatory compliance violations<br/>• Reputation damage<br/>• Financial losses | • Database credential exposure<br/>• Complete prompt injection control<br/>• PII mass extraction |
| **High** | 7.0-8.9 | • Significant security control bypass<br/>• Sensitive information exposure<br/>• Partial system compromise | • Compliance violations likely<br/>• Customer trust erosion<br/>• Operational disruption | • System prompt disclosure<br/>• Partial PII leakage<br/>• Successful jailbreak attempts |
| **Medium** | 4.0-6.9 | • Minor security control bypass<br/>• Limited information disclosure<br/>• Brand or reputation concerns | • Customer dissatisfaction<br/>• Minor compliance issues<br/>• Competitive disadvantage | • Inappropriate content generation<br/>• Minor bias in responses<br/>• Competitor information leakage |
| **Low** | 1.0-3.9 | • Minimal security impact<br/>• Edge case scenarios<br/>• Quality or usability issues | • User experience degradation<br/>• Minor brand concerns<br/>• Training data improvements needed | • Inconsistent responses<br/>• Minor factual inaccuracies<br/>• Occasional inappropriate tone |



## How to Use Scan Results for Improvement

### 1. Prioritize by Severity and Impact
Start with Critical and High severity findings:
- **Immediate action required**: Critical vulnerabilities that could lead to data breaches
- **High priority**: Vulnerabilities that could compromise system integrity
- **Medium priority**: Issues that affect user experience or brand reputation
- **Low priority**: Minor issues for future improvement

### 2. Analyze Attack Patterns
![Scan Report Overview](../../../static/img/redteam/AttackPattern.png)
Review the spider chart visualization to understand vulnerability distribution across categories:
- **Category Performance**: See which vulnerability categories have the highest failure rates
- **Pass/Fail Ratios**: Identify categories where your application is most vulnerable
- **Coverage Analysis**: Understand which security domains need the most attention
- **Trend Identification**: Look for patterns in failed test cases to identify systemic issues

### 3. Follow Remediation Guidance
![Mitigation Advice Example](../../../static/img/redteam/ReportMitigationAdvice.png)

**Review the remediation section** for each category, for each finding, to understand:
- What specific changes are needed to fix the vulnerability
- Which security controls to implement
- How to test that the fix is effective
- Best practices for preventing similar issues

**Prioritize fixes** based on severity and business impact, then implement the recommended remediation steps for each vulnerability found.