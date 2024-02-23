# Virtual Keys

The Virtual API Key feature is designed to enhance security and convenience for developers integrating with Large Language Model (LLM) providers. This feature allows for the secure storage of LLM provider API keys within a dedicated secret vault. Applications can use a virtual API key, which acts as a placeholder for the actual API keys. 

The gateway automatically substitutes the virtual API key with the corresponding real API key stored in the secret vault when a request is made. This mechanism minimizes the exposure and potential leak of sensitive credentials, providing an added layer of security.

## Key Benefits
#### Enhanced Security:
By minimizing direct exposure of provider API keys, the risk of credential leaks is significantly reduced.  

#### Simplified Credential Management:
Developers can manage API keys more efficiently, with the ability to update or rotate keys without altering application code.  

#### Seamless Integration:
The virtual API key seamlessly integrates with existing applications, requiring minimal changes to implement.  

## Using Javelin Virtual Keys
The Javelin Console provides a user-friendly interface to manage virtual keys, allowing developers to create, update, and delete virtual keys. The Javelin SDK also offers programmatic access to manage virtual keys, enabling integration with existing workflows and applications.

Virtual keys can be used in conjunction with the Javelin Python SDK to seamlessly route LLM traffic through the gateway. This approach ensures that all requests to LLM providers are routed through the gateway, providing a centralized point for managing and securing LLM traffic.

For more information on using virtual keys, refer to the [Javelin Secrets Vault documentation](secretsvault/overview).