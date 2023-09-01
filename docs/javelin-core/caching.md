# Caching

Javelin provides an optional semantic cache that allows Applications to slash your LLM costs by 10x and boost speed by 100x. 

ChatGPT and many other large language models (LLMs) are impressively versatile, facilitating the creation of diverse applications. Yet, as applications gains traction and sees more traffic, the costs associated with LLM API usage can mount significantly. Moreover, LLM services can sometimes lag in response, especially during high demand periods.

To address these concerns, Javelin cache can be enabled on a route. Enabling caching will force Javelin to lookup the cache for answers to previously queried requests and present the answer if present in the cache. If there is a cache miss, the LLM will be queried. 



