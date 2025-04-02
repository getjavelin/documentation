# Data Model

<!--
### `Gateways`

**Fields**:

- `gateways`: List of [gateway](./models.md#gateway) objects.

---

### `Gateway`

**Fields**:

- `name`: The unique identifier for this gateway.
- `type`: The type `development`, `staging`, `production` of this gateway.
- `enabled`: Enable/Disable this gateway.
- `config`: [Configuration](./models.md#gatewayconfig) settings, like base_url, api_key_value associated with this gateway.

---

### `GatewayConfig`

**Fields**:

- `base_url`: The foundational URL where all API requests are directed. It acts as the root from which endpoint paths are extended.
- `api_key_value`: The API key used for authenticating requests to the API endpoints specified by the base_url. This key is essential for securing access and ensuring that only authorized applications can make API requests.
- `buid`: Business Unit ID (BUID) uniquely identifies the business unit associated with this gateway configuration.
- `organization_id`: The identifier for the organization using this gateway. This ensures that the gateway’s settings are correctly associated with the organization, facilitating better management and access control.
- `system_namespace`: A unique namespace within the system to prevent naming conflicts and to organize resources logically. It helps in managing the scope and accessibility of the configurations and resources within the gateway.

--- 
-->

### `Provider`

**Fields**:

- `name`: The unique identifier for this provider.
- `type`: Type of the Provider.
- `enabled`: Whether the provider is enabled.
- `vault_enabled`: Whether the secrets vault is enabled.
- `config`: [Configuration](./models.md#providerconfig) for the provider.

---

### `ProviderConfig`

**Fields**:

- `api_base`: Base URL of the API.
- `api_type`: Type of the API.
- `api_version`: Version of the API.
- `deployment_name`: Name of the deployment.
- `organization`: Name of the organization.

---

### `Providers`

**Fields**:

- `providers`: List of [provider](./models.md#provider) objects.

---

### `Route`

**Fields**:

- `name`: The unique identifier for this route.
- `type`: The type `chat`, `completions`, `embeddings` of this route.
- `enabled`: Enable/Disable this route.
- `models`: Associated models for processing or handling requests on this route.
- `config`: [Configuration](./models.md#routeconfig) settings, like rate limits, archive, budget associated with this route.

---

### `RouteConfig`

**Fields**:

- `organization`: The organizational unit or company associated with this route.
- `owner`: The individual or entity responsible for this route.
- `rate_limit`: Maximum number of requests allowed for this route in a given time period.
- `retries`: Number of times the request should be retried in case of failures.
- `archive`: Boolean indicating whether route data should be archived.
- `retention`: Data retention period.
- `budget`: Monetary or computational [budget](./models.md#budget) allocated for the operations of this route.
- `dlp`: [DLP](./models.md#dlp) configuration.

---

### `Routes`

---

**Fields**:

- `routes`: List of [route](./models.md#route) objects.

### `budget`

**Fields**:

- `enabled`: Enable/Disable Data Loss Prevention(DLP).
- `annual`: Annual budget limit.
- `monthly`: Monthly budget limit.
- `weekly`: Weekly budget limit.
- `currency`: Currency for the budget.

---

### `dlp`

**Fields**:

- `enabled`: Enable/Disable Data Loss Prevention(DLP).
- `strategy`: Data Loss Prevention strategy inspect or de-identify.

---

### `Template`

**Fields**:

- `name`: The unique identifier for this template.
- `description`: Description for this template.
- `type`: Type of the Template.
- `enabled`: Whether the template is enabled.
- `config`: [Configuration](./models.md#templateconfig) for the template.

---

### `TemplateConfig`

**Fields**:

- `infoTypes`: List of [infoTypes](./models.md#infotype).
- `transformation`: Transformation to be used.
- `notify`: Whether to notify.
- `reject`: Whether to reject.
- `likelihood`: Indicate how likely it is that a piece of data matches infoTypes.
- `routePrompt`: Prompt to be used for the route.

---

### `Secret`

**Fields**:

- `api_key`: Key of the Secret.
- `api_key_secret_name`: Name of the Secret.
- `api_key_secret_key`: API Key of the Secret.
- `api_key_secret_key_javelin`: Virtual API Key of the Secret.
- `provider_name`: Provider Name of the Secret.
- `query_param_key`: Query Param Key of the Secret.
- `header_key`: Header Key of the Secret.
- `group`: Group of the Secret.
- `enabled`: Whether the secret is enabled.

---

### `Secrets`

**Fields**:

- `secrets`: List of [secret](./models.md#secret) objects.

---

### `Templates`

**Fields**:

- `templates`: List of [template](./models.md#template) objects.

---

### `infoType`

**Fields**:

- `name`: Name of the infoType.
- `description`: Description of the infoType.
- `regex`: Regex of the infoType.
- `category`: Category of the infoType.

---

### `Transformation`

**Fields**:

- `method`: Method of the transformation Mask, Redact, Replace, etc.

---

### `QueryResponse`

**Fields**:

- `choices`: List of [choice](./models.md#choice).
- `created`: Creation timestamp.
- `id`: Unique identifier of the response.
- `model`: Model associated with the response.
- `object`: Object type like chat.completion.
- `system_fingerprint`: System fingerprint if available.
- `usage`: [Metrics](./models.md#usage) or data about the computational resources used.
- `javelin`: Processing data & metrics.

---

### `Choice`

**Fields**:

- `finish_reason`: Reason for the completion finish.
- `index`: Index of the choice.
- `message`: Message details.

---

### `Message`

**Fields**:

- `role`: Role or purpose of the message, e.g., 'error', 'info', 'warning'.
- `content`: The actual content or body of the message.

---

### `model`

**Fields**:

- `name`: The name of the LLM model.
- `provider`: Entity or service providing this LLM model.
- `suffix`: Additional descriptive or versioning information for the LLM model.
- `weight`: Weight of the model.

---

### `Usage`

**Fields**:

- `completion_tokens`: Number of tokens used in the completion.
- `prompt_tokens`: Number of tokens used in the prompt.
- `total_tokens`: Total number of tokens used.
