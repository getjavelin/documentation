# Audit Archive

Javelin provides organizations with state-of-the-art archiving capabilities, catering to diverse requirements ranging from compliance to model optimization.
Note: Archiving incurs separate storage costs

- **Fine Grained Control:** Archives are enabled or disabled on a per-route basis, enabling fine grained control over what application requests to LLMs need archiving.  
    - For example, for applications querying LLMs during the development cycle, archiving may not be enabled while on the other hand, applications in production may have archiving enabled for compliance, audits etc., 

- **Semantic Search Enabled:** Archives are automatically embedded and stored by Javelin, this allows fast, relevant, semantic searches on archives. 
    - Audit searches, forensic analysis or human-in-the-loop analysis of archives are always fast, returning semantically relevant results

- **Secure:** Archives are stored in crytographically encrypted Enterprise grade storage repositories for safe & compliant storage & retrieval.

## Use Cases

### Audit & Compliance
For organizations that need rigorous documentation, especially those in regulated industries, archiving is paramount. 

**Configurable Archiving:** Every prompt, LLM request, and response sent on a route can be configured for archiving, offering flexibility based on organizational needs.

**Timestamp Annotations:** Each archived item comes with a timestamp, ensuring clarity about when interactions occurred. This is vital for chronological tracking and regulatory audits.

**Search & Review:** Using an intuitive interface, archived records can be queried and reviewed, ensuring that audits are smooth and hassle-free.

### Model Fine Tuning
To stay at the forefront of AI capabilities, enterprises often need their LLMs to evolve based on real-world interactions.

**Conversational Archiving:** Enterprises can store all conversations or request/response pairs from specific routes, amassing valuable data.

**Metadata Tagging:** Each archived conversation can be tagged with metadata, such as effectiveness or accuracy scores. This granular data is a boon for model developers.

**Training Support:** Using the annotated accuracy scores, developers can optimize models, ensuring they become more precise and reliable over time.

<!--
### Hallucination Detection
Once enabled, Archives can be subsequently searched or tagged with hallucination probabilities. See Hallucination Detection for more details.
-->

## Archive Retention
Ensuring data is stored only as long as necessary is both cost-effective and often a regulatory mandate.

**Route-specific Retention:** The retention policies can be fine-tuned on a per-route basis, ensuring different routes have retention schedules aligned with their importance or regulatory requirements.

**Time-based Purging:** Older records, like those beyond a specified period (e.g., 180 days), can be set for automatic deletion, ensuring efficient use of storage and compliance with data minimization principles.

## Compliance Deletions
In an era where data privacy is a global concern, being compliant with regulations like GDPR and CCPA is non-negotiable.

**Tag & Delete:** Specific records within the archives can be tagged for deletion, ensuring individual data subject requests (like right to erasure) are honored.

**Regular Audits:** The system allows for periodic reviews to ensure that no unauthorized or old data remains in the archive, reinforcing trust with stakeholders and users.