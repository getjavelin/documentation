# Data Model

### `RouteConfig`
A base model class for the Javelin client.

**Fields**:

- `organization`: The organizational unit or company associated with this route.
- `owner`: The individual or entity responsible for this route.
- `rate_limit`: Maximum number of requests allowed for this route in a given time period.
- `retries`: Number of times the request should be retried in case of failures.
- `archive`: Boolean indicating whether route data should be archived.
- `retention`: Data retention period.
- `budget`: Monetary or computational budget allocated for the operations of this route.
- `dlp`: DLP configuration.
---


### `Model`
**Fields**:

- `name`: The name of the LLM model.
- `provider`: Entity or service providing this LLM model.
- `suffix`: Additional descriptive or versioning information for the LLM model.
- `weight`: Weight of the model.

---

### `Route`
**Fields**:

- `name`: The unique identifier for this route.
- `type`: The type `chat`, `completions`, `embeddings` of this route.
- `enabled`: Enable/Disable this route.
- `models`: Associated models for processing or handling requests on this route.
- `config`: Configuration settings, like rate limits, archive, budget associated with this route.

---

### `Routes`
**Fields**:

- `routes`: List of route objects.

---

### `Message`
**Fields**:

- `role`: Role or purpose of the message, e.g., 'error', 'info', 'warning'.
- `content`: The actual content or body of the message.

---

### `ResponseMetaData`
**Fields**:

- `route_name`: Name of the route that produced this response.
- `model`: Model associated with the response.
- `archive_enabled`: Indicates if the archiving feature is enabled for this route.
- `input_tokens`: Number of tokens in the input message or request.
- `output_tokens`: Number of tokens in the output message or response.
- `total_tokens`: Total tokens consumed in the processing.
- `usage`: Metrics or data about the computational resources used.
- `retries`: Number of retries attempted for producing this response.
- `throttled`: Indicates if the request was throttled due to rate limits or other reasons.

---

### `QueryResponse`
**Fields**:

- `llm_response`: The main response or result data.
- `metadata`: Additional metadata about the response, such as processing times and associated models.
