# Supported Language Models

Javelin is committed to integrating and supporting the most popular models in the industry. From the groundbreaking innovations of OpenAI and Azure OpenAI to the dynamic platforms like HuggingFace and Anthropic, Javelin ensures seamless interfacing with these models. 

Our platform's adaptability allows users to leverage the unique strengths of each model, ensuring optimal results for diverse applications. Javelin Gateway harmoniously brings together the world of popular LLMs, simplifying and amplifying their capabilities for our users.

## Supported Model Providers  
We are always adding support for new models, supported models include those from:  

| Models             | Base URL                                 | Endpoints (text & embeddings)                                              | 
|--------------------|------------------------------------------|----------------------------------------------------------------------------|
| [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) | `https://<your-resource-name>.openai.azure.com` | - `/openai/deployments/{deployment-name}/completions`<br/>- `/openai/deployments/{deployment-name}/chat/completions`<br/>- `/openai/deployments/{deployment-name}/embeddings` |
| [OpenAI](https://platform.openai.com/docs/models) | `https://api.openai.com/v1` | - `/completions`<br/>- `/chat/completions`<br/>- `/embeddings`<br/> |
| [Amazon Bedrock](https://aws.amazon.com/bedrock) | `https://bedrock.<region>.amazonaws.com` | - `/model/{modelId}/invoke`<br/>- `/model/{modelId}/invoke-with-response-stream`<br/>- `/model/{modelId}/converse`<br/>- `/model/{modelId}/converse-stream`<br/> |
| [Google Gemini](https://ai.google.dev/models) | `https://generativelanguage.googleapis.com` | `/v1beta/openai/chat/completions` |
| [HuggingFace](https://huggingface.co/models) | `https://api-inference.huggingface.co` |  See [HuggingFace Integration](#huggingface-integration) section below for detailed configuration |
| [NVIDIA](https://build.nvidia.com/explore/discover) | | [NVIDIA AI Endpoints](https://docs.nvidia.com/nemo/guardrails/user_guides/llm/nvidia_ai_endpoints/index.html)  |
| [Llama](https://llama.meta.com/) |                                                      |                             |
| [Anthropic](https://docs.anthropic.com/claude/docs/models-overview) | `https://api.anthropic.com/v1` |  |
| [Mistral](https://docs.mistral.ai/guides/model-selection/) | `https://api.mistral.ai/v1` |  |
| [Inflection](https://inflection.ai/inflection-2-5) |                                    |                             |
| [Perplexity](https://docs.perplexity.ai/docs/model-cards) |                                |                             | 
| [Cohere](https://cohere.com/) |                                |                             |
| [AnyScale](https://www.anyscale.com/endpoints) |                                |                             |
| [TogetherAI](https://www.together.ai/) |                                |                             |
| **and more...**             |                                |                             |

## HuggingFace Integration

HuggingFace offers flexible integration options through their router API. Here's how to configure it:

### Router API Configuration

1. **Finding the Router URL**:
   - Visit the model page on HuggingFace (e.g., https://huggingface.co/deepseek-ai/DeepSeek-R1)
   - Click on "Use this model" and select "Inference API"
   - In the curl example, you can find the router URL being used. Here is an example for the DeepSeek-R1 model with nebius provider: [DeepSeek-R1 Router URL](https://huggingface.co/deepseek-ai/DeepSeek-R1?inference_provider=nebius&language=curl&inference_api=true)

2. **Required Parameters**:
   - `provider`: The specific provider route (e.g., nebius)
   - `model`: The model identifier (e.g., deepseek-ai/DeepSeek-R1)
   - `Authorization`: HuggingFace API token as Bearer token

3. **Endpoint Configuration**:
   - Chat completions: `/chat/completions`
   - Text completions: `/completions`
   - Embeddings: `/embeddings`

### Example Configuration

To use a specific model through HuggingFace's router:

1. Set the provider URL:
   ```
   provider: "https://router.huggingface.co/nebius/v1"
   ```

2. Configure the route:
   ```
   route:
     modelname: "deepseek-ai/DeepSeek-R1-fast"
     suffix: "chat/completions"
   ```

3. Add your HuggingFace token as a secret in your configuration:
   ```
   secrets:
     hf_token: "your_huggingface_token"
   ```

This configuration allows you to access various models through HuggingFace's unified API interface while maintaining compatibility with Javelin's guardrails and processing features.

# Fallback Behavior for Unknown Models

When encountering unknown model types or custom provider combinations, Javelin implements the following fallback behavior:

1. **Provider-Specific Schema Defaults**: Javelin now maintains a comprehensive set of default specifications for different providers, including:
   - Provider-specific API endpoints and variations (chat, streaming, embeddings)
   - Authorization methods and parameters
   - Request/response path mappings for proper data extraction
   - Playground templates for testing
   - Model-specific configurations

2. **Schema Resolution Process**:
   - Javelin first attempts to match the provider with known default specifications
   - If found, uses provider-specific request/response formats and endpoints
   - Falls back to OpenAI-compatible schema if no specific match is found

3. **Response Handling**:
   - Provider-specific formats: Processed using corresponding path mappings
   - Default formats: Processed using OpenAI-compatible schema
   - Custom formats: Direct proxy without modification
