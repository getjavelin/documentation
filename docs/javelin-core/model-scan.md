---
id: model-scan
title: Model Scan
sidebar_label: Model Scan
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Model Scan

## Introduction

Model Scan is a powerful feature designed to assess and identify potential vulnerabilities in Large Language Models (LLMs). Similar to security tools like nmap or metasploit for traditional network security, Model Scan aims to discover situations where a language model might generate undesired outputs. This tool is crucial for maintaining the integrity and safety of LLM deployments.

## Starting/Configuring a Scan

To initiate a Model Scan, navigate to the Model Assessments page in the Javelin platform at `https://dev.javelin.live/gateways/{your_gateway}/workbench/model-assessments`. You'll find a form with several input parameters:

### Input Parameters

1. **Route**: Select the specific route you want to scan. This determines which model and configuration will be tested.

2. **Provider**: This field automatically populates based on the selected route. It indicates the LLM provider (e.g., OpenAI, Anthropic) associated with the chosen route.

3. **Model Name**: Specify the name of the model you want to scan (e.g., gpt-3.5-turbo, claude-2).

4. **Max Duration (min)**: Set the maximum duration for the scan in minutes. This helps control the length and resource usage of the scan.

5. **Parallel Probe Attempts**: Number of parallel probe attempts to run simultaneously.

6. **Parallel Generator Requests**: Number of parallel generator requests to run simultaneously.

7. **Response JSON**: Boolean indicating whether the response is in JSON format.

8. **Response JSON Field**: (Optional) Specifies which field of the response JSON should be used as the output string. Default is 'text'. Can also be a JSONPath value - if the field starts with '$', it will be interpreted as a JSONPath expression.

### Probes

Probes are the core components of the Model Scan. Each probe sends specific prompts to the model and generates multiple outputs for each prompt. This approach accounts for the stochastic nature of LLM outputs, providing a more comprehensive assessment. Some examples of probes include:

- Profanity detection
- Prompt injection tests
- Jailbreak attempts
- Guardrail bypass checks
- Text replay vulnerabilities

Javelin's Model Scan includes a wide variety of probes based on the [garak framework](https://reference.garak.ai/en/latest/probes.html), including:

#### Security & Jailbreak
- DAN (Do Anything Now) variants
- Visual jailbreak attempts
- Encoding-based attacks
- Latent injection tests
- Prompt injection attacks

#### Content & Safety
- Real toxicity prompts
- Discriminatory content
- Sexual content
- Profanity
- Bullying detection
- Identity attacks
- Threats

#### Technical Vulnerabilities
- XSS (Cross-site scripting)
- Package hallucination
- File format manipulation
- Malware generation attempts
- Suffix-based attacks

#### Data Quality
- Misleading content
- Divergence tests
- Information hazards
- Controversial topics
- Factual assertions

After selecting your desired configuration, click the "RUN NOW" button to initiate the scan.

## Success and Failures

The Model Scan uses a combination of detectors and probes to determine the success or failure of each test. Results are displayed in a table format with the following columns:

### Results Table Columns

1. **Detector**: Shows the specific detector used for the test (e.g., detector.toxicity.ToxicCommentModel)
2. **Probe**: Indicates the probe type used (e.g., atkgen.Tox)
3. **Status**: Displays either "Pass" or "Fail" for each test
4. **Tests**: Shows the ratio of successful tests to total attempts (e.g., 22/25)
5. **Failure Rate**: Displays the percentage of failed attempts with a visual indicator

### Understanding Results

Each row in the results table represents a specific detector-probe combination. For example:

```text
Detector: detector.toxicity.ToxicCommentModel
Probe: atkgen.Tox
Status: Fail
Tests: 22/25
Failure Rate: 12%
```

## Best Practices

To get the most out of Model Scan:

1. **Regular Scanning**: Conduct scans regularly, especially after model updates or changes in your application's use of the LLM.

2. **Comprehensive Probe Selection**: Use a wide range of probes to test for various vulnerabilities.

3. **Result Analysis**: Carefully analyze scan results and investigate any failures or unexpected behaviors.

4. **Iterative Improvement**: Use scan results to improve your prompts, fine-tune your models, or adjust your application's interaction with the LLM.

5. **Combine with Other Tools**: Use Model Scan in conjunction with other security practices and tools for a comprehensive security approach.

## Conclusion

Model Scan is a vital tool in ensuring the safe and responsible use of LLMs in your applications. By regularly using this feature and understanding its results, you can significantly enhance the security and reliability of your AI-powered systems.

For any questions or issues regarding Model Scan, please contact Javelin support at support@getjavelin.io.