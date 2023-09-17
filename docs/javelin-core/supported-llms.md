# Supported LLMs
Large Language Models(LLMs), represent the cutting edge of natural language processing (NLP) and machine learning technologies. Rooted in deep learning architectures, these models have been trained on vast amounts of text, empowering them with impressive capabilities. They can generate human-like text, answer questions, assist in software coding, translate languages, and much more. 

Javelin Gateway is committed to integrating and supporting the most popular models in the industry. From the groundbreaking innovations of OpenAI and Azure OpenAI to the dynamic platforms like HuggingFace and Anthropic, Javelin ensures seamless interfacing with these models. 

Our platform's adaptability allows users to leverage the unique strengths of each model, ensuring optimal results for diverse applications. Javelin Gateway harmoniously brings together the world of popular LLMs, simplifying and amplifying their capabilities for our users.

## Supported Model Providers  
**OpenAI**,
**Azure OpenAI**,
**Anthropic**,
**Cohere**,
**Llama2**,
**HuggingFace**,
**Stanford Alpaca**

## Provider Configuration 
```yaml
providers:
  - name: openai
    type: closedsource
    config:
      api_key: ${OPENAI_API_KEY}
      api_base: https://api.openai.com/v1
      api_version: v1
      organization: default
  
  - name: cohere
    type: closedsource
    config:
      api_key: ${COHERE_API_KEY}
      api_base: https://api.cohere.ai/v1
      api_version: v1
      organization: default
  
  - name: anthropic
    type: opensource
    config:
      api_key: ${ANTHROPIC_API_KEY}
      api_base: https://api.anthropic.ai
      api_version: v1
      organization: default
  
  - name: azure_openai
    type: closedsource
    config:
      api_key: ${AZURE_OPENAI_API_KEY}
      api_type: azure
      api_base: https://api.cognitive.microsoft.com
      api_version: v1
      deployment_name: default
      organization: default
      
  - name: ai21
    type: opensource
    config:
      api_key: ${AI21_API_KEY}
      api_base: https://api.ai21.com/studio/v1
      api_version: v1
      deployment_name: default
      organization: default

      ...
```
