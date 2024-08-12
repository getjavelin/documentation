# Supported Large Language Models(LLMs)

Javelin is committed to integrating and supporting the most popular models in the industry. From the groundbreaking innovations of OpenAI and Azure OpenAI to the dynamic platforms like HuggingFace and Anthropic, Javelin ensures seamless interfacing with these models. 

Our platform's adaptability allows users to leverage the unique strengths of each model, ensuring optimal results for diverse applications. Javelin Gateway harmoniously brings together the world of popular LLMs, simplifying and amplifying their capabilities for our users.

## Supported Model Providers  
We are always adding support for new models, supported models include those from:  

| LLM                | Endpoint                                 | Suffix                               | Secret                  |
|--------------------|------------------------------------------|--------------------------------------|-------------------------|
| [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models)  | `https://<your-resource-name>.openai.azure.com` | - `/openai/deployments/{deployment-id}/completions`<br/>- `/openai/deployments/{deployment-id}/chat/completions`<br/>- `/openai/deployments/{deployment-id}/embeddings` |                         |
| [OpenAI](https://platform.openai.com/docs/models)             | `https://api.openai.com`                         | - `/v1/completions`<br/>- `/v1/chat/completions`<br/>- `/v1/edits`<br/>- `/v1/embeddings`<br/>- `/images` |                         |
| [Amazon Bedrock](https://aws.amazon.com/bedrock)              | `https://bedrock.<region>.amazonaws.com`            | - `/model-name/invoke`<br/>- `/model-name/input` |                         |
| [Anthropic](https://docs.anthropic.com/claude/docs/models-overview)   | `https://api.anthropic.com`                         | - `/v1/complete`<br/>- `/v1/claude` |                         |
| [Mistral](https://docs.mistral.ai/guides/model-selection/)    | `https://api.mistral.ai`                            | - `/v1/models`<br/>- `/v1/infer` |                         |
| [HuggingFace](https://huggingface.co/models)                  | `https://api-inference.huggingface.co`              | - `/models/{model-id}`<br/>- `/pipeline/{task}` |                         |



[Llama](https://llama.meta.com/)  
[Google Gemini](https://ai.google.dev/models)  
[HuggingFace](https://huggingface.co/models)  
[NVIDIA](https://catalog.ngc.nvidia.com)  
[Inflection](https://inflection.ai/inflection-2-5)  
[Perplexity](https://docs.perplexity.ai/docs/model-cards)  
[Cohere](https://cohere.com/)       
[AnyScale](https://www.anyscale.com/endpoints)     
[TogetherAI](https://www.together.ai/)       
**and more...**

