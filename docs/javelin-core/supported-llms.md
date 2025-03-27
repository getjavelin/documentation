# Supported Language Models

Javelin is committed to integrating and supporting the most popular models in the industry. From the groundbreaking innovations of OpenAI and Gemini to the dynamic platforms like HuggingFace and Anthropic, Javelin ensures seamless interfacing with these models.

Our platform's adaptability allows users to leverage the unique strengths of each model, ensuring optimal results for diverse applications. Javelin Gateway harmoniously brings together the world of popular LLMs, simplifying and amplifying their capabilities for our users.

## OpenAI Compatibility

| Models             | Base URL                                 | Endpoints                                             |
|--------------------|------------------------------------------|----------------------------------------------------------------------------|
| [OpenAI](https://platform.openai.com/docs/models) | `https://api.openai.com/v1` | - `/completions`<br/>- `/chat/completions`<br/>- `/embeddings`<br/> |
| [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) | `https://<your-resource-name>.openai.azure.com` | - `/openai/deployments/{deployment-name}/completions`<br/>- `/openai/deployments/{deployment-name}/chat/completions`<br/>- `/openai/deployments/{deployment-name}/embeddings` |
| [Google Gemini](https://ai.google.dev/models) | `https://generativelanguage.googleapis.com/v1beta/openai` | - `/chat/completions` |
| [Anthropic](https://docs.anthropic.com/en/docs/about-claude/models/all-models) | `https://api.anthropic.com/v1` | - `/chat/completions`<br/> |
| [Mistral](https://docs.mistral.ai/guides/model-selection/) | `https://api.mistral.ai/v1` | - `/chat/completions`<br/>- `/embeddings`<br/>     |
| [Cohere](https://docs.cohere.com/docs/compatibility-api) | `https://api.cohere.ai/compatibility/v1` | - `/chat/completions`<br/>- `/embeddings`<br/> |
| [Nous Research](https://portal.nousresearch.com/api-docs) | `https://inference-api.nousresearch.com/v1` | - `/completions`<br/>- `/chat/completions`<br/>    |
| [DeepSeek](https://api-docs.deepseek.com/) | `https://api.deepseek.com` | - `/chat/completions`<br/>    |

## Other Supported Models

| Models             | Base URL                                 | Endpoints                                            |
|--------------------|------------------------------------------|----------------------------------------------------------------------------|
| [Amazon Bedrock](https://aws.amazon.com/bedrock) | `https://bedrock.<region>.amazonaws.com` | - `/model/{modelId}/invoke`<br/>- `/model/{modelId}/invoke-with-response-stream`<br/>- `/model/{modelId}/converse`<br/>- `/model/{modelId}/converse-stream`<br/> |
| [Anthropic Claude](https://docs.anthropic.com/claude/docs/models-overview) | `https://api.anthropic.com/v1` | - `/complete`<br/>- `/messages`<br/> |
| [Hugging Face](https://huggingface.co/models) | `https://api-inference.huggingface.co` |  See [HuggingFace Integration](huggingface) for detailed configuration |
| [NVIDIA AI Foundation Models](https://build.nvidia.com/explore/discover) | *(Varies by service)* | [NVIDIA AI Endpoints](https://www.nvidia.com/en-us/ai-data-science/foundation-models/)  |

## More Model Providers

We are always adding support for new models, supported models include those from:  

| Models             | Base URL                                 | Endpoints                                                                  |
|--------------------|------------------------------------------|----------------------------------------------------------------------------|
| [Meta Llama](https://llama.meta.com/) | *(Varies by deployment)*  |                                                                        |
| [Inflection](https://inflection.ai/inflection-2-5) |                                    |                                                  |
| [Perplexity](https://docs.perplexity.ai/docs/model-cards) |                                |                                               |
| [AnyScale](https://www.anyscale.com/endpoints) |                                |                                                          |
| [TogetherAI](https://www.together.ai/) |                                |                                                                  |
| **and more...**             |                                    |                                                                         |

## Fallback Behavior for Unknown Models

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