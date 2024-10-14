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

To initiate a Model Scan, navigate to the Model Assessments page in the Javelin platform at `https://dev.javelin.live/gateways/corporate/workbench/model-assessments`. You'll find a form with several input parameters:

### Input Parameters

1. **Route**: Select the specific route you want to scan. This determines which model and configuration will be tested.

2. **Provider**: This field automatically populates based on the selected route. It indicates the LLM provider (e.g., OpenAI, Anthropic) associated with the chosen route.

3. **Model Name**: Specify the name of the model you want to scan (e.g., gpt-3.5-turbo, claude-2).

4. **LLM API Key**: Choose the API key to be used for the scan. This should be a valid key with appropriate permissions for the selected model.

5. **Max Duration (min)**: Set the maximum duration for the scan in minutes. This helps control the length and resource usage of the scan.

6. **Probes**: Select the specific probes you want to run during the scan. Probes are predefined tests designed to identify different types of vulnerabilities or undesired behaviors.

### Probes

Probes are the core components of the Model Scan. Each probe sends specific prompts to the model and generates multiple outputs for each prompt. This approach accounts for the stochastic nature of LLM outputs, providing a more comprehensive assessment. Some examples of probes include:

- Profanity detection
- Prompt injection tests
- Jailbreak attempts
- Guardrail bypass checks
- Text replay vulnerabilities

After selecting your desired configuration, click the "RUN NOW" button to initiate the scan.

## Canceling a Scan

To cancel an ongoing scan:

1. Navigate to the scan details page.
2. Look for a "Cancel" or "Stop" button.
3. Click this button to terminate the scan process.

Note that any results collected up to that point may be saved, depending on the system's configuration.

## Success and Failures

The Model Scan uses a combination of probes and detectors to determine the success or failure of each test. Here's how it works:

1. Probes generate multiple outputs for each prompt.
2. Detectors analyze these outputs for specific patterns, keywords, or behaviors.
3. If a detector registers a "hit," that particular attempt is marked as failing.
4. The system calculates a success/failure rate for each probe and detector combination.

A typical result might look like this:

lmrc.Profanity riskywords.SurgeProfanityAnimalReferences: PASS ok on 20/20
lmrc.Profanity riskywords.SurgeProfanityMentalDisability: FAIL ok on 17/20 (failure rate: 15%)


In this example:
- The first test passed all 20 attempts.
- The second test failed 3 out of 20 attempts, resulting in a 15% failure rate.

## Scan Limitations

While Model Scan is a powerful tool, it's important to understand its limitations:

1. **Model Compatibility**: Not all LLMs may be compatible with every probe. Ensure your selected model is supported by the chosen probes.

2. **False Positives/Negatives**: Like any automated testing tool, Model Scan may occasionally produce false positives or negatives. Always review results critically and consider additional manual testing for critical applications.

3. **Resource Intensity**: Comprehensive scans can be resource-intensive and time-consuming, especially for larger models or extensive probe sets.

4. **API Rate Limits**: Be aware of any API rate limits imposed by the LLM provider. Exceeding these limits may cause scan failures or incomplete results.

5. **Evolving Threats**: The field of LLM security is rapidly evolving. While Model Scan covers many known vulnerabilities, new threats may emerge that are not yet included in the current probe set.

6. **Context Sensitivity**: Some vulnerabilities may be context-dependent and might not be caught by generalized probes. Consider supplementing Model Scan with targeted, application-specific testing.

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