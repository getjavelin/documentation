import CodeBlock from '@theme/CodeBlock';

# JavelinClient

JavelinClient class is designed to support both synchronous and asynchronous context managers. This means you can use the JavelinClient within a with statement to ensure resources are properly managed.  

The JavelinClient instance can be used as either a synchronous or asynchronous context manager. When entering a with block, it returns the client itself and when finished, it cleans up resources (like closing any open connections) when exiting a 'with' or 'async with' block respectively.

**Synchronous Client Example:**
<CodeBlock
language="python"
>
{`
with JavelinClient(JavelinConfig(base_url="localhost:8000")) as client:
    # use the client for synchronous operations
    ...
`}
</CodeBlock>

**Asynchronous Client Example:**
<CodeBlock
language="python"
>
{`
async with JavelinClient(JavelinConfig(base_url="localhost:8000")) as client:
    # use the client for asynchronous operations
    ...
`}
</CodeBlock>
---

### **Synchronous Methods**

#### `__init__(self, base_url: str, api_key: Optional[str] = None) -> None` {#init}
**Description**:  
Initializes the JavelinClient.

**Parameters**:  
- `base_url`: Base URL for the Javelin API.
- `api_key` (optional): API key for authorization (if required).

**Returns**:  
None.

---

#### `client`
**Description**:  
Property that returns an HTTP client for synchronous operations. If the client does not exist, it creates and initializes one.

**Returns**:  
An instance of `httpx.Client` initialized with the base URL, headers, and a specific timeout.

---

#### `aclient`
**Description**:  
Property that returns an HTTP client for asynchronous operations. If the client does not exist, it creates and initializes one.

**Returns**:  
An instance of `httpx.AsyncClient` initialized with the base URL, headers, and a specific timeout.

---

#### `__enter__(self) -> "JavelinClient"`
**Description**:  
Enter the runtime context for the synchronous client and returns itself.

**Returns**:  
The instance of the JavelinClient.

---

#### `__exit__(self, exc_type, exc_val, exc_tb) -> None`
**Description**:  
Exit the runtime context for the synchronous client.

**Parameters**:  
- `exc_type`: The type of exception.
- `exc_val`: The exception instance.
- `exc_tb`: The traceback object.

**Returns**:  
None.

---

#### `close(self)`
**Description**:  
Closes the synchronous client if it exists.

**Returns**:  
None.


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

#### `__init__(self, base_url: str, api_key: Optional[str] = None) -> None`
**Description**:  
Initializes the client with the provided base URL and an optional API key.

**Parameters**:  
- `base_url`: The base URL of the service or API endpoint.
- `api_key` (optional): The authentication key used to access the service. If not provided, the client may operate in an unauthenticated mode or utilize other means of authentication.

**Returns**:  
None. This method initializes the client instance.

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