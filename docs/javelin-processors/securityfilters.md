# Filters

Security filters are a critical component of the Javelin platform, providing a robust mechanism for enforcing security policies and protecting sensitive data. These filters are designed to intercept, analyze incoming and outgoing data streams, ensuring that only authorized and secure information is exchanged between the platform and external systems.

## Security Filter Types

Javelin offers a range of security filters to address various security concerns and compliance requirements. These filters include:

### Garbage & Non-Ascii Character Detection

Identifies and flags garbage and non-ASCII characters from the input data, ensuring that only valid and sanitized data is processed.

### Language Detection

Identifies and handles content not in the primary supported language(s). This allows application policy to be localized to support regional languages or disallow non-english interactions. When the lang_detector processor is added to your request chain, Javelin will identify the language of the request prompt. If the prompt is written in a language other than English, and your policy is configured to restrict non-English content, the request will be automatically blocked.


### Code/Markdown Detection

Identifies code snippets and markdown content in the input data, allowing for specialized processing and validation.

### Invisible Character Detection

 Detects hidden or obfuscated text often used in adversarial prompt injections or evasion attempts. Always enabled by default. You can configure it to block requests if any violations are detected. If your request prompt or the model’s response contains invisible or non-printable characters, Javelin will automatically detect and block the request to prevent potential abuse or evasion tactics.

