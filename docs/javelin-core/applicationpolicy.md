---
id: application-policy-configuration
title: Policy Configuration
description: Guide to configuring policy settings for a Javelin application
sidebar_label: Policy Configuration
---

# Policy Configuration

Policies in Javelin define safety, moderation, and compliance behavior at the application level.  
They allow you to enforce organizational standards for data protection, content moderation, and secure usage of language models. By configuring policies, you can ensure that all requests made through your applications adhere to compliance requirements, prevent misuse, and maintain the integrity of your AI systems.

![Policy Form Part 1](/img/application/policyTab.png)

## Policy Configuration Structure

```yaml
policy:
  enabled: true
  archive:
    enabled: true
    retention: 7
  dlp:
    enabled: true
    strategy: "test"
  prompt_safety:
    enabled: true
    content_types: []
    reject_prompt: ""
  content_filter:
    enabled: true
    content_types: []
    reject_prompt: ""
  ...
```

## Policy Fields

| Name               | Type    | Required | Default  | Description                                                                                                                         |
|--------------------|---------|----------|----------|-------------------------------------------------------------------------------------------------------------------------------------|
| `enabled`          | boolean | Yes      | true     | Activates policy enforcement at the application level. Always true.                                                                 |
| `archive`          | object  | No       | —        | Archives request and response data for traceability and audit.                                                                      |
| `dlp`              | object  | No       | —        | Detects and prevents the exposure of sensitive information such as personally identifiable data, credentials, or confidential terms in model interactions. |
| `content_filter`   | object  | No       | —        | Filters harmful or unsafe content including misinformation, violence, or other policy-violating categories to ensure model output remains trustworthy. |
| `prompt_safety`    | object  | No       | —        | Protects against manipulation attempts like prompt injections or jailbreaks that try to bypass model restrictions or redirect behavior. |
| `language`         | object  | No       | —        | Applies restrictions on unsupported or disallowed languages, ensuring the model communicates only in approved languages.            |
| `checkphish`       | object  | No       | —        | Identifies and blocks phishing attempts by detecting suspicious or malicious URLs within prompts or outputs.                        |
| `security_filters` | object  | No       | —        | Detects and blocks potentially unsafe input patterns such as code blocks, non-ASCII payloads, or invisible characters that could impact model behavior or system integrity. |

:::Note
The top-level `enabled: true` field is **always set to true** for application-level policies.  
This ensures application-level policy overrides route-level policies, enforcing guardrails regardless of individual route settings.
:::

## Policy Precedence

- If the **route policy is disabled**, the application policy is enforced.
- If the **route policy is enabled**, the route policy is enforced.
- This ensures that route-specific requirements can override application-wide defaults when needed, but application-level guardrails are always in place if no route policy is active.


### `content_types` Rules

Each rule object can include:

```yaml
  operator: greater_than      # For most restrictions; use 'equals' for checkphish
  restriction: sexual         # The type of content to restrict
  probability_threshold: 0.25 # 0.25, 0.5, 0.75 (for checkphish: 0 or 1)
```

| Name                    | Type   | Required | Description                                                                                     |
|-------------------------|--------|----------|-------------------------------------------------------------------------------------------------|
| `operator`              | string | Yes      | `greater_than` for most restrictions; `equals` for `checkphish`.                               |
| `restriction`           | string | Yes      | The type of content to restrict (e.g., `hate_speech`, `jailbreak`, `checkphish`).              |
| `probability_threshold` | float  | Yes      | Thresholds: 0.25, 0.5, 0.75. For `checkphish`, values are 0 or 1. Omit the rule if threshold is 0. |


For detailed explanations of each policy and processor, see [Processors Overview](/docs/javelin-processors/processors-overview).
