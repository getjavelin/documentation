# Overview

Javelin's core foundation is built around the notion of bounded functional units. Each function within the platform is encapsulated into independent processing units, referred to as `Processors`. 

These processors are chained together to form Directed Acyclic Graphs (DAGs) — creating structured execution pathways known as processor chains. The structure of these DAGs allows for precise control over the execution flow within the platform, enabling a highly customizable and efficient processing environment.

In Javelin, you can implement Guardrails and build custom extensions and integrations as `Processors`.

## Processor Execution Framework
The processors in Javelin can operate in two distinct modes: asynchronous or synchronous. This operational model is selected during the initialization phase of each processor.

### Synchronous Execution: 
This mode is beneficial for tasks that require immediate processing and feedback. It is often employed for critical operations such as implementing model guardrails, which may involve checking against a trust & safety model or applying content and toxicity filters. While synchronous processing ensures inline execution, care must be used to avoid unnecessary processing overhead in the path of LLM calls. Developers can also configure latency budgets for synchronous processors, ensuring that LLM request processing stays within deterministic pre-established limits.

### Asynchronous Execution: 
In contrast, asynchronous execution allows tasks to be performed without blocking the system, making it ideal for operations in the background. This mode is typically used for triggering events or notifications to enterprise systems, where immediate response is not critical. For example, a custom processor can be written to send a notification to Slack or trigger an event in a Security dashboard when certain data is exchanged with LLMs. Custom processors trigger webhooks, insert data into Data Warehouses, or trigger enterprise workflows.

## Processor Chains
Processor chains are a foundational concept within the Javelin platform, representing a sophisticated mechanism for orchestrating the execution flow for calls.

**Processor Chains** are essentially sequences of processors — self-contained modules designed to perform specific functions — arranged in a DAG structure. This arrangement facilitates complex processing sequences and ensures the execution flow is efficient, logical, and adaptable to various enterprise needs.

Each **processor** within the chain can be developed, tested, and deployed independently, enhancing the platform’s flexibility and responsiveness to changing requirements. Processor chains can be dynamically adjusted to handle varying loads, making them well-suited for enterprises with fluctuating processing demands. The ability to run processors asynchronously also contributes to the platform’s overall efficiency, allowing for non-blocking operations and improved resource utilization.

Processors can be attached to one or more routes in Javelin. For example, you can designate a specific Processor Chain to execute while triggering OpenAI calls and a completely different Processor Chain to trigger a Huggingface model.

### Request Chains
When a request enters the Javelin platform, it can be directed through a specifically designed processor chain configured to analyze, validate, and pre-process the data before it goes to a model. Typical checks here involve filtering or redacting PII/PHI information.

### Response Chains
Once the LLM responds to the application, the response processor chain is triggered to format, enrich, and securely deliver the response back to the application.

