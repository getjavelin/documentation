# Overview

## Introduction
Fallback routing is a mechanism designed to provide resilience in model invocation workflows. When invoking Large Language Models(LLM), the primary model may occasionally fail or return an undesired status code. Fallback routing ensures that if a primary model fails or returns one of the predefined status codes, a backup or secondary model is triggered to continue the operation seamlessly. This helps to improve the robustness of the system, providing redundancy without manual intervention.


## Description
In fallback routing for LLMs, you define a primary and a backup LLM model. Both models are typically from the same provider (e.g., OpenAI, Azure OpenAI) but have different configurations, such as versions or deployment settings (suffixes). The routing is driven by predefined fallback status codes that dictate when the backup model should be triggered if the primary model fails or returns one of these codes.

To configure fallback routing, the following parameters are required:

1. **Primary LLM**: The initial LLM model invoked for processing a user prompt. This model is defined by:

   - **Name**: The name or version of the model (e.g., `chatgpt-4`, `gpt-3.5`).
   - **Suffix**: The unique URL where the model can be accessed (e.g., `/v1/engines/gpt-4/completions`).

2. **Fallback Codes**: A set of predefined status codes (such as HTTP response codes) that indicate when the fallback model should be triggered. For example, status codes like 500 (internal server error) or 503 (service unavailable) are commonly used as fallback triggers.

3. **Backup LLM**: A secondary LLM that is invoked when the primary model fails or returns a status code present in the fallback list. The backup LLM is usually from the same provider but with a different version or configuration:

   - **Name**: A different LLM name or version (e.g., `gpt-3.5` if the primary is chatgpt-4).
   - **Suffix**: The URL where the backup model can be accessed (e.g., `/v1/engines/gpt-3.5/completions`).
  
## Usage
In practice, fallback routing ensures that user prompts are processed even if the primary LLM encounters issues. Here’s how the process works step by step:

1. A prompt is sent to the <b>primary LLM</b> (e.g., `chatgpt-4` with the suffix production).
2. The primary LLM processes the request and returns a response.
   - If the response is successful (e.g., status code 200), the request completes without invoking the fallback model.
   - If the response returns a fallback status code (e.g., 500, 502), the fallback mechanism activates.
3. The fallback routing automatically triggers the backup LLM (e.g., `gpt-3.5` with the suffix <b>backup</b>).
   - The same prompt is sent to the backup LLM, which processes it and returns a response.
4. The user receives the response from the backup LLM, ensuring minimal disruption.

### Sample Workflow
- **Step 1**: The user sends a prompt to the `gpt-4` model via its URL (`https://api.openai.com/v1/engines/gpt-4/completions`).
- **Step 2**: The primary model returns a 502 error code (bad gateway).
- **Step 3**: The system checks the fallback codes list, detects the 502 error, and reroutes the request to the backup model `gpt-3.5` via its URL (`https://api.openai.com/v1/engines/gpt-3.5/completions`).
- **Step 4**: The backup model processes the prompt and returns the result.
- **Step 5**: The user receives the response from the backup model, ensuring continuity.