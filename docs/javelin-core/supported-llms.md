# Supported Large Language Models(LLMs)

Javelin is committed to integrating and supporting the most popular models in the industry. From the groundbreaking innovations of OpenAI and Azure OpenAI to the dynamic platforms like HuggingFace and Anthropic, Javelin ensures seamless interfacing with these models. 

Our platform's adaptability allows users to leverage the unique strengths of each model, ensuring optimal results for diverse applications. Javelin Gateway harmoniously brings together the world of popular LLMs, simplifying and amplifying their capabilities for our users.

## Supported Model Providers  
We are always adding support for new models, supported models include those from:  

| Models             | Base URL                                 | Endpoints                                    | Auth                    |
|--------------------|------------------------------------------|----------------------------------------------|-------------------------|
| [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models)  | `https://<your-resource-name>.openai.azure.com` | - `/openai/deployments/{deployment-id}/completions`<br/>- `/openai/deployments/{deployment-id}/chat/completions`<br/>- `/openai/deployments/{deployment-id}/embeddings` |    https://portal.azure.com/                     |
| [OpenAI](https://platform.openai.com/docs/models)             | `https://api.openai.com`                         | - `/v1/completions`<br/>- `/v1/chat/completions`<br/>- `/v1/embeddings`<br/> |       https://platform.openai.com/api-keys                  |
| [Amazon Bedrock](https://aws.amazon.com/bedrock)              | `https://bedrock.<region>.amazonaws.com`            | - `/model-name/invoke`<br/>- `/model-name/input` |                         |
| [Anthropic](https://docs.anthropic.com/claude/docs/models-overview)   | `https://api.anthropic.com`                         | - `/v1/complete`<br/>- `/v1/claude` |     https://console.anthropic.com/settings/keys                    |
| [Mistral](https://docs.mistral.ai/guides/model-selection/)    | `https://api.mistral.ai`                            | - `/v1/models`<br/>- `/v1/infer` |            https://console.mistral.ai/api-keys/             |
| [HuggingFace](https://huggingface.co/models)                  | `https://api-inference.huggingface.co`              | - `/models/{model-id}`<br/>- `/pipeline/{task}`<br/><br/><br/> Create an endpoint following the instructions here https://huggingface.co/docs/inference-endpoints/guides/create_endpoint |                         |
| [NVIDIA](https://build.nvidia.com/explore/discover) | | [NVIDIA AI Endpoints](https://docs.nvidia.com/nemo/guardrails/user_guides/llm/nvidia_ai_endpoints/index.html)  |  |
| [Llama](https://llama.meta.com/) |                                |                             |                     | 
| [Google Gemini](https://ai.google.dev/models) |                                |                             |                     | 
| [Inflection](https://inflection.ai/inflection-2-5) |                                |                             |                     | 
| [Perplexity](https://docs.perplexity.ai/docs/model-cards) |                                |                             |                     | 
| [Cohere](https://cohere.com/) |                                |                             | https://dashboard.cohere.com/api-keys | 
| [AnyScale](https://www.anyscale.com/endpoints) |                                |                             |                     | 
| [TogetherAI](https://www.together.ai/) |                                |                             |                     | 
| **and more...**             |                                |                             |                     | 


