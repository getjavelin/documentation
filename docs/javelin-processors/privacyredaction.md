# Data Protection

## Real-time Monitoring

Javelin's Data Protection Engine monitors data in real-time, providing instant alerts for any suspicious activity or potential data breaches.

### Customizable Protection Policies

Administrators can define specific data protection policies based on the organization's unique needs. This includes setting up rules for what constitutes sensitive data and determining the appropriate protective actions based on a large catalog of supported infotype classifiers. 

### Automated Response Actions

Upon detecting a potential breach, Javelin's DLP can take automated actions, such as blocking data transfers, encrypting sensitive data, or notifying administrators.

### Detailed Reporting

Gain insights into potential vulnerabilities and user behaviors with comprehensive DLP reports. These reports can assist in refining data protection strategies and ensuring compliance.

### Integration with LLMs

Given Javelin's focus on Large Language Models, the DLP is intricately integrated to monitor the information flow to and from these models, ensuring that no sensitive data is inadvertently shared.

### Anonymisation With Format Preservation

When Anonymisation transformation is enabled in your Data Protection strategy, Javelin will:
- Detect various sensitive infotypes to anonymize and transform the matched content while preserving its original format and structure.
- Anonymization preserves essential semantic and grammatical cues that the LLM relies on for reasoning. We ensure these cues remain intact during the process.

This is especially useful for PII, PHI and other sensitive information: Format Preservation ensures data protection without breaking downstream processes that expect specific formats.


### Fuzzy Keyword Match

When Fuzzy Matching is enabled in your Data Protection strategy for Reserved Keywords, Javelin will:
- Detect partial or approximate matches to sensitive keywords using intelligent pattern recognition.
- Automatically take the configured protective action, such as blocking or transforming the request even when the keyword is obfuscated, misspelled, or altered.

This ensures robust protection against attempts to bypass exact match rules, maintaining data security even in adversarial scenarios.