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

#### `NetworkError`

Indicates a network-related error while communicating with the Javelin service.

#### `RouteNotFoundError`

Indicates that a specified route was not found in the Javelin service.

#### `RateLimitExceededError`

Indicates that the rate limit for the Javelin service has been exceeded.

#### `RouteAlreadyExistsError`

Indicates that an attempt was made to create a route that already exists in the Javelin service.

#### `InternalServerError`

Indicates that the Javelin service encountered an internal server error.

#### `MethodNotAllowedError`

Indicates that an attempted method is not allowed on the specified route or resource.

#### `UnauthorizedError`

Indicates that the client is not authorized to perform the attempted action on the Javelin service.

#### `ValidationError`

Indicates that there was a validation error with the provided data or request.
