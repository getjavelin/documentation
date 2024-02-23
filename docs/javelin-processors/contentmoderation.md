# Content Moderation
In the era of digital communication and user-generated content, content moderation has become crucial for maintaining the integrity, safety, and user-friendliness of online platforms. As platforms grow in size and complexity, manual moderation becomes increasingly challenging, necessitating the integration of advanced AI technologies. 

Javelin Processors, integrated with AI capabilities, present a sophisticated solution for automating content moderation tasks, ensuring that online environments remain safe, respectful, and compliant with platform policies and societal norms.

Javelin providers a safety risk taxonomy associated with interacting with AI agents. The taxonomy covers a set of potential legal and policy risks that can be applicable to a number of developer use cases.

## How it works
Javelin uses an internal LLM-based input-output safeguard model, fine-tuned on data labeled according to this taxonomy. The processor includes the applicable taxonomy as the input and uses instruction tasks for classification. This allows users to customize the model input in order to adapt to other taxonomies appropriate for their use case with zero-shot or few-shot prompting. 

## Supported Taxonomies
**Violence & Hate** encompasses statements that encourage or could help people plan or engage in violence.
Similarly, statements that advocate discrimination, contain slurs, or voice hateful sentiments against
people based on their sensitive personal characteristics (ex: race, color, religion, national origin, sexual
orientation, gender, gender identity, or disability) would also be considered inappropriate under this
category.

**Sexual Content** encompasses statements encouraging someone (who could be underage) to engage
in specific sex acts. Similarly, sexually explicit (i.e., erotic) statements would also be considered
inappropriate under this category.

**Guns & Illegal Weapons** encompasses statements that specifically encourage, condone, or could help
people plan or execute specific crimes involving the illegal acquisition, creation, or use of guns or illegal
weapons (ex: explosives, biological agents, or chemical weapons), including instructions on how to create
or use them.

**Regulated or Controlled Substances** encompasses statements that specifically encourage or could help
people to illegally produce, transfer, or consume regulated or controlled substances like illegal drugs,
tobacco, alcohol, or cannabis.

**Suicide & Self Harm** encompasses statements that encourage, condone, or enable people to harm
themselves (ex: by providing instructions or information on methods of self-harm). When people express
or imply an intent to harm themselves, any response other than one that provides links to appropriate
health resources would be considered inappropriate (even if entirely supportive).

**Criminal Planning** encompasses miscellaneous statements that encourage, condone, or could help people
plan or execute specific criminal activities, like arson, kidnapping, or theft. Items should only be
considered harmful under this category when they could not be read as violating any of the other harm
types above (ex: statements that encourage violence should be considered violating under Violence &
Hate rather than this category).

## Integrating with Content Moderation Services
Javelin processors may also be used to easily intergate with external content moderation endpoints from providers such as:
- [OpenAI Content Moderation](https://platform.openai.com/docs/guides/moderation), 
- [Azure AI Content Safety](https://azure.microsoft.com/en-us/products/ai-services/ai-content-safety/) or 
- [Lakera Content Moderation](https://www.lakera.ai) etc., 

These services can be used to provide a comprehensive suite of tools for detecting and preventing harmful content. These services include real-time analysis, pattern matching, and anomaly detection, enabling you to safeguard your applications from harmful content.