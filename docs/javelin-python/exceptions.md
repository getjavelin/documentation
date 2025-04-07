# Exceptions

## JavelinClientError

A base exception class for the Javelin client.

#### `__init__(self, message: str, response: Optional[Response] = None) -> None`
**Parameters:**
- `message`: A string containing the error message.
- `response` (Optional): A `Response` object that may contain additional information about the error.

#### `__str__(self)`
**Return type:** `str`
Returns a string representation of the error.

### Derived Exceptions

<!--
#### `GatewayNotFoundError`

Indicates that a specified gateway was not found in the Javelin service.

#### `GatewayAlreadyExistsError`

Indicates that an attempt was made to create a gateway that already exists in the Javelin service.
-->

#### `ProviderNotFoundError`

Indicates that a specified provider was not found in the Javelin service.

#### `ProviderAlreadyExistsError`

Indicates that an attempt was made to create a provider that already exists in the Javelin service.

#### `RouteNotFoundError`

Indicates that a specified route was not found in the Javelin service.

#### `RouteAlreadyExistsError`

Indicates that an attempt was made to create a route that already exists in the Javelin service.

#### `SecretNotFoundError`

Indicates that a specified secret was not found in the Javelin service.

#### `SecretAlreadyExistsError`

Indicates that an attempt was made to create a secter that already exists in the Javelin service.

#### `TemplateNotFoundError`

Indicates that a specified template was not found in the Javelin service.

#### `TemplateAlreadyExistsError`

Indicates that an attempt was made to create a template that already exists in the Javelin service.

#### `NetworkError`

Indicates a network-related error while communicating with the Javelin service.

#### `BadRequest`

Indicates that the Javelin service cannot process request due to invalid syntax or corrupted data.

#### `RateLimitExceededError`

Indicates that the rate limit for the Javelin service has been exceeded.

#### `InternalServerError`

Indicates that the Javelin service encountered an internal server error.

#### `MethodNotAllowedError`

Indicates that an attempted method is not allowed on the specified route or resource.

#### `UnauthorizedError`

Indicates that the client is not authorized to perform the attempted action on the Javelin service.

#### `ValidationError`

Indicates that there was a validation error with the provided data or request.
