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

1. **Route**: Select your deployment route. The model and provider settings will be automatically configured based on your selection.

2. **Provider**: Displays the AI provider (e.g., AWS, Anthropic, OpenAI) associated with your selected route. This field updates automatically based on your route selection.

3. **Model Name**: Shows the specific AI model associated with your selected route (e.g., anthropic.claude-3-5-sonnet-20240620-v1:0). This field updates automatically.

4. **LLM API Key**: Your authentication key for accessing the AI model. This is required for making API calls to the model provider.

5. **Header Key**: The authentication header field name. For OpenAI, this must be set to "Authorization". Each provider has specific requirements for this field.

6. **Max Duration (mins)**: Sets the maximum duration for the security scan. Default is 30 minutes. Increase this value when:
   - Running comprehensive security assessments
   - Testing complex model behaviors
   - Evaluating a large number of probes

7. **Parallel Probe Attempts**: Number of probe attempts to run simultaneously. Default is 5. Adjust this value based on:
   - Available computing resources
   - API rate limits from your provider
   - Desired scan completion time
   Higher values = faster scanning but more resource intensive

8. **Parallel Generator Requests**: Number of generator requests to run simultaneously. Default is 5. Similar to Probe Attempts, adjust based on:
   - Your computing resources
   - Provider's API rate limits
   - Required scan speed
   Higher values = faster processing but increased resource usage

9. **Response JSON Field**: Specifies which field in the response JSON contains the output text. Default is '$.choices[*].message.content'. Special features:
   - Can use JSONPath expressions (starting with '$')
   - Helps parse complex response structures
   - Optional field - only needed for non-standard response formats

### Probes

Probes are the core components of the Model Scan. Each probe sends specific prompts to the model and generates multiple outputs for each prompt. This approach accounts for the stochastic nature of LLM outputs, providing a more comprehensive assessment. Some examples of probes include:

- Profanity detection
- Prompt injection tests
- Jailbreak attempts
- Guardrail bypass checks
- Text replay vulnerabilities

Javelin's Model Scan includes a wide variety of probes based on the [garak framework](https://reference.garak.ai/en/latest/probes.html), including:

#### Security & Jailbreak
Tests that attempt to bypass model safeguards and security measures:
- DAN (Do Anything Now) variants: Probes that test if the model can be tricked into ignoring its safety constraints
- Visual jailbreak attempts: Tests using ASCII art or unicode to bypass filters
- Encoding-based attacks: Attempts to hide malicious content using various text encodings
- Latent injection tests: Subtle attempts to influence model behavior
- Prompt injection attacks: Tests for unauthorized prompt modifications

#### Content & Safety
Probes that check the model's handling of inappropriate or harmful content:
- Real toxicity prompts: Tests using real-world examples of toxic content
- Discriminatory content: Checks for bias and discrimination handling
- Sexual content: Tests boundaries of NSFW content filtering
- Profanity: Evaluates handling of explicit language
- Bullying detection: Tests response to harassment scenarios
- Identity attacks: Probes targeting demographic-based harassment
- Threats: Evaluates response to threatening language

#### Technical Vulnerabilities
Tests focusing on technical exploitation attempts:
- XSS (Cross-site scripting): Tests for code injection vulnerabilities
- Package hallucination: Checks for generation of fake software packages
- File format manipulation: Tests handling of various file formats
- Malware generation attempts: Probes for code that could be malicious
- Suffix-based attacks: Tests using file extensions and technical suffixes

#### Data Quality
Probes that assess the model's output reliability:
- Misleading content: Tests for generation of false information
- Divergence tests: Checks for output consistency
- Information hazards: Tests handling of dangerous information
- Controversial topics: Evaluates response to sensitive subjects
- Factual assertions: Checks accuracy of factual statements

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