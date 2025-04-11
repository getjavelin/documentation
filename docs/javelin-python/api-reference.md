# API Reference
## Overview
This API allows users to manage and query routes. Below you'll find both synchronous and asynchronous methods detailed separately.

---

## class JavelinClient:

### **Synchronous Methods**

#### `close(self)`
**Description**: Closes the connection or resources associated with the object.  

---

#### `get_route(self, route_name: str) -> Route`
**Description**: Retrieves the details of a specific route given its name.  

**Parameters**:
- `route_name` : Name of the route to retrieve.

**Returns**:
- `Route`: The route object.

---

#### `create_route(self, route: Route) -> str`
**Description**: Creates a new route based on the provided route object.  

**Parameters**:
- `route` : Route object with details for creation.  

**Returns**:
- `str`: "OK" if the Route was created successfully

---

#### `update_route(self, route: Route) -> str`
**Description**: Updates an existing route based on the provided route object.  

**Parameters**:
- `route` (Route): Route object with updated details.  

**Returns**:
- `str`: Confirmation message or ID of the updated route.

---

#### `list_routes(self) -> Routes`
**Description**: Lists all available routes.  

**Returns**:
- `Routes`: A collection of route objects.

---

#### `query_route(self, route_name: str, query_body: Dict[str, Any]) -> QueryResponse`
**Description**: Queries a specific route based on the given query parameters.  

**Parameters**:
- `route_name` (str): Name of the route to query.
- `query_body` (Dict[str, Any]): Dictionary containing query parameters.

---

### **Asynchronous Methods**

#### `aclose(self)`
**Description**: Asynchronously closes the connection or resources associated with the object.

---

#### `aget_route(self, route_name: str) -> Route`
**Description**: Asynchronously retrieves the details of a specific route given its name.  

**Parameters**:
- `route_name` (str): Name of the route to retrieve.

**Returns**:
- `Route`: The route object.

---

#### `acreate_route(self, route: Route) -> str`
**Description**: Asynchronously creates a new route based on the provided route object. 

**Parameters**:
- `route` (Route): Route object with details for creation.

**Returns**:
- `str`: Confirmation message or ID of the created route.

---

#### `aupdate_route(self, route: Route) -> str`
**Description**: Asynchronously updates an existing route based on the provided route object.  

**Parameters**:
- `route` (Route): Route object with updated details.

**Returns**:
- `str`: Confirmation message or ID of the updated route.

---

#### `alist_routes(self) -> Routes`
**Description**: Asynchronously lists all available routes.  

**Returns**:
- `Routes`: A collection of route objects.

---

#### `aquery_route(self, route_name: str, query_body: Dict[str, Any]) -> QueryResponse`
**Description**: Asynchronously queries a specific route based on the given query parameters.  

**Parameters**:
- `route_name` (str): Name of the route to query.
- `query_body` (Dict[str, Any]): Dictionary containing query parameters.

---

#### `adelete_route(self, route_name: str) -> str`
**Description**: Asynchronously deletes a specific route based on its name.  

**Parameters**:
- `route_name` (str): Name of the route to delete.  

**Returns**:
- `str`: Confirmation message or ID of the deleted route.  


---
### JavelinClientError

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

models.py
class RouteConfig(BaseModel):
Fields:

    rate_limit
    owner
    organization
    archive
    retries

class Model(BaseModel):
Fields:

    name
    provider
    suffix

class Route(BaseModel):
Fields:

    name
    model
    config

class Routes(BaseModel):
Fields:

    routes

class Message(BaseModel):
Fields:

    role
    content

class ResponseMetaData(BaseModel):
Fields:

    route_name
    model
    archive_enabled
    input_tokens
    output_tokens
    total_tokens
    usage
    retries
    throttled

class QueryResponse(BaseModel):
Fields:

    llm_response
    metadata