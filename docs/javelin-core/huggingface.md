# HuggingFace Integration

HuggingFace offers flexible integration options through their router API. Here's how to configure it:

## Router API Configuration

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

This configuration example gives you a way to access various models through HuggingFace's unified API interface while maintaining compatibility with Javelin's guardrails and processing features.