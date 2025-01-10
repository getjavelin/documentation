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
| [Google Gemini](https://ai.google.dev/models) |                                         |                             |
| [HuggingFace](https://huggingface.co/models) | `https://api-inference.huggingface.co` |  Create an endpoint following the instructions here https://huggingface.co/docs/inference-endpoints/guides/create_endpoint |
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

# Fallback Behavior for Unknown Models

When encountering unknown model types or custom provider combinations, Javelin implements the following fallback behavior:

1. **OpenAI Schema Compatibility**: By default, Javelin will attempt to use OpenAI model specifications as a fallback for handling unknown provider/model combinations. This means:
   - If your custom provider matches OpenAI's chat endpoint schema, Javelin's guardrails will continue to function
   - The system expects request/response formats similar to OpenAI's chat completion endpoints

2. **Guardrail Behavior**:
   - For compatible schemas: All configured guardrails and processors will function normally
   - For incompatible schemas: Requests will be proxied directly to the provider without guardrail processing

3. **Response Handling**:
   - Compatible formats: Full processing and guardrail application
   - Incompatible formats: Direct proxy of provider responses without modification

This fallback mechanism ensures basic functionality while we work on expanding native support for more provider-specific schemas. For optimal guardrail functionality, we recommend using supported model providers or ensuring your custom implementation follows OpenAI-compatible schemas.

Note: Future updates will expand native support for diverse provider schemas and custom model specifications. We are actively tracking and working on enhanced model specification handling.


