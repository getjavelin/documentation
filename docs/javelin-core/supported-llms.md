# Supported Large Language Models(LLMs)

Javelin is committed to integrating and supporting the most popular models in the industry. From the groundbreaking innovations of OpenAI and Azure OpenAI to the dynamic platforms like HuggingFace and Anthropic, Javelin ensures seamless interfacing with these models. 

Our platform's adaptability allows users to leverage the unique strengths of each model, ensuring optimal results for diverse applications. Javelin Gateway harmoniously brings together the world of popular LLMs, simplifying and amplifying their capabilities for our users.

## Supported Model Providers  
We are always adding support for new models, supported models include those from:  

| Models             | Base URL                                 | API Endpoints                                                                  |
|--------------------|------------------------------------------|----------------------------------------------------------------------------|
| [Meta Llama](https://llama.meta.com/) | *(Varies by deployment)*  |                                                                        |
| [Inflection](https://inflection.ai/inflection-2-5) | https://layercake.pubwestus3.inf7ks8.com/external/api/inference                                    | https://developers.inflection.ai/api                                                 |
| [Perplexity](https://docs.perplexity.ai/docs/model-cards) | https://api.perplexity.ai                               | https://docs.perplexity.ai/api-reference/chat-completions                                              |
| [AnyScale](https://www.anyscale.com/endpoints) | https://docs.anyscale.com/examples/deploy-ray-serve-llms                               |                                                          |
| [TogetherAI](https://www.together.ai/) | https://api.together.xyz                               | https://docs.together.ai/reference/                                                                 |
| **and more...**             |                                    |                                                                         |

## HuggingFace Integration

HuggingFace offers flexible integration options through their router API. Here's how to configure it:

### HF Router API Configuration

1. **Finding the HF Router URL**:
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

This configuration example gives you a way to access various models through HuggingFace's unified API interface while maintaining compatibility with Javelin's guardrails and processing features.

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