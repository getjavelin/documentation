# Overview

The secret vault is a security mechanism designed to store, manage, and provision access to sensitive information such as API keys, database credentials, and other secrets necessary for various operations within software applications. The vault ensures that sensitive information is not hard-coded into source code or exposed in configuration files, thereby reducing the risk of leaks and breaches.

## Key Features
#### Secure Storage: 
The vault encrypts all secrets at rest and in transit, ensuring that sensitive information is always protected.

#### Access Control: 
Fine-grained access control policies allow administrators to define who can access specific secrets, under what conditions, and with what permissions (read, write, delete).

#### Audit Logging: 
Every access to the vault and every operation on a secret is logged, providing a trail that can be audited for security and compliance purposes.

#### API Key Virtualization: 
A unique feature where the vault provides a virtual API key to applications. This virtual key is mapped to the actual API key within the vault, and the substitution is made transparently when the application makes a request.

## Using Javelin Secrets
You can use Javelin's secret vault to store and manage LLM provider keys. The vault provides a secure and convenient way to manage API keys, ensuring that they are not exposed in application code or configuration files.

Secrets can be managed using the Javelin Console or programmatically using the Javelin SDK. The vault is designed to be developer-friendly, allowing for easy integration with existing applications and workflows.

