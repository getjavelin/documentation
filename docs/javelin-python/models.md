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

### `Dlp`
**Fields**:

- `enabled`: Enable/Disable Data Loss Prevention(DLP).
- `strategy`: Data Loss Prevention strategy inspect or de-identify.

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

### `QueryResponse`
**Fields**:

- `choices`: List of choices.
- `created`: Creation timestamp.
- `id`: Unique identifier of the response.
- `model`: Model associated with the response.
- `object`: Object type like chat.completion.
- `system_fingerprint`: System fingerprint if available.
- `usage`: Metrics or data about the computational resources used.
- `javelin`: Processing data & metrics.