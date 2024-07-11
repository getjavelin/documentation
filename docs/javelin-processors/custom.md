# Custom Guardrails

Javelin can be extended with custom guardrails to enable additional functionality. Custom guardrails can be used to perform custom operations on the input data before it is sent to the model or on the output data before it is returned to the user. Custom guardrails can also be used to implement custom data transformations, data validation, data augmentation, and more. 

Javelin executes a processor chain configured as a directed acyclic graph(DAG) of processors. Each processor in the chain is a self-contained module designed to perform a specific function. The processors are arranged in a sequence to facilitate complex processing sequences and ensure the execution flow is efficient, logical, and adaptable to various enterprise needs. 

There are 2 components to building custom guardrails in Javelin:
1. Extension Processor
2. Custom Guardrail Service

When incorporating custom guardrails, you will need to configure a special 'extension_processor' that will call the custom guardrail. The extension_processor is configured in Javelin's request or response chain to execute the custom guardrail and the GRPC endpoint for the custom guardrail is configured as input in the extension_processor configuration. 

> **Tip:** Custom guardrail endpoints should be implemented as GRPC services and configured in javelin for low latency and high throughput.

The extension_processor provides a convenient and flexible GRPC interface that allows you to implement custom guardrails in any language that supports GRPC. The extension_processor can be configured to call the custom guardrail service over GRPC.

```yaml
    +---------+
    | Javelin |
    +---------+
        |
        v
    +---------------------------------+
    | +-----------+     +-----------+ |
    | | Processor | --> | Processor | |
    | +-----------+     +-----------+ |
    |        |              |         |
    |        v              v         |
    |    +--------------------------+ |
    |    |    Extension_Processor   | |
    |    +--------------------------+ |
    +---------------------------------+
                     |
                     | GRPC
                     v
        +--------------------------+
        | Custom Guardrail Service |
        +--------------------------+
```

## Custom Processor Interface

The GRPC interface consists of the following methods (`javelin_guardrail_intf.proto`):

```go
    syntax = "proto3";

    package api;

    // Specify the Go package where the generated files should reside
    option go_package = "javelin-core/pkg/chainprocessor/processor-sdk/api";

    // Define the Guardrail service
    service Guardrail {
        // Link the RPC method to the correct request and response message types
        rpc Evaluate(GuardrailRequest) returns (GuardrailResponse) {}
    }

    // Enum for different content types
    enum ContentType {
        CONTENT_TYPE_UNSPECIFIED = 0;  // Default value if not specified
        CONTENT_TYPE_JSON = 1;         // application/json
        CONTENT_TYPE_RAW_TEXT = 2;     // text/plain
        CONTENT_TYPE_EMBEDDINGS = 3;   // application/embeddings
        CONTENT_TYPE_JPEG = 4;         // image/jpeg
        CONTENT_TYPE_MP4 = 5;          // video/mp4
    }

    // GuardrailRequest message contains content type, payload, headers, config, 
    // and media data.
    message GuardrailRequest {
        // Type of the media (e.g., "text/json", "text/raw", "image/jpeg", "video/mp4")
        ContentType content_type = 1;

        // Dictionary of body entries
        string input_body = 2;

        // Dictionary of configuration entries
        map<string, string> config = 3;
        
        // Dictionary of header entries
        map<string, string> headers = 4;

        // Binary data for images or videos
        bytes input_media = 5;
    }

    // GuardrailResponse message contains transformed content type, 
    // body, response metadata, instructions, and media data.
    message GuardrailResponse {
        // Dictionary of transformed body entries
        string transformed_body = 1;

        // Dictionary of response metadata
        map<string, string> response_metadata = 2;

        // Dictionary of header entries
        map<string, string> headers = 3;

        // Transformed binary data for images or videos
        bytes transformed_media = 4;
    }
```

Custom guardrails can be implemented in any language and are ideally expected to be hosted/deployed in the same cluster that is running Javelin for low latency access. The custom processor should implement the `Guardrail` service defined in the `.proto` file. 

The `Evaluate` method should take a `GuardrailRequest` as input and return a `GuardrailResponse` as output.

## Building a Custom Guardrail
You will first need to decide what language you plan to write your custom guardrail in. The custom guardrail can be written in any language that supports GRPC.

### Golang
To build a custom guardrail in Golang, you will need to install the following dependencies:

#### Step1: Install the dependencies
```bash
    go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

#### Step2: Generate the stubs from the `.proto` file
Next, you will need to generate the Golang code from the `.proto` file. You can use the following command to generate the Golang code:

```bash
    protoc --go_out=. --go-grpc_out=. javelin_guardrail_intf.proto
```

#### Step 3: Implement the server
```go
    package main

    import (
        "context"
        "log"
        "net"

        "google.golang.org/grpc"
        pb "path/to/your/generated/package" // Use the correct package path
    )

    type server struct {
        pb.UnimplementedGuardrailServer
    }

    func (s *server) Evaluate(ctx context.Context, in *pb.GuardrailRequest) (*pb.GuardrailResponse, error) {
        response := &pb.GuardrailResponse{
            TransformedBody: map[string]string{"message": "Processed: " + in.GetInputBody()["data"]},
        }
        return response, nil
    }

    func main() {
        lis, err := net.Listen("tcp", ":50051")
        if err != nil {
            log.Fatalf("failed to listen: %v", err)
        }
        s := grpc.NewServer()
        pb.RegisterGuardrailServer(s, &server{})
        log.Printf("Server listening at %v", lis.Addr())
        if err := s.Serve(lis); err != nil {
            log.Fatalf("failed to serve: %v", err)
        }
    }
```


### Python
To build a custom guardrail in Python, you will need to install the following dependencies:

#### Step1: Install the dependencies
```bash
    pip install grpcio grpcio-tools
```

#### Step2: Generate the stubs from the `.proto` file
Next, you will need to generate the Python code from the `.proto` file. You can use the following command to generate the Python code:

```bash
    python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. javelin_guardrail_intf.proto
```

#### Step3: Implement the server
Sample python grpc guardrail server:
```python
    import grpc
    from concurrent import futures
    import time
    import test_guardrail_pb2
    import test_guardrail_pb2_grpc

    class GuardrailServicer(test_guardrail_pb2_grpc.GuardrailServicer):
        def Evaluate(self, request, context):
            print("Received request: ", request)
            response = test_guardrail_pb2.GuardrailResponse()
            response.transformed_body["output"] = "Hello from Python"
            return response

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    test_guardrail_pb2_grpc.add_GuardrailServicer_to_server(GuardrailServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server started")
    try:
        while True:
            time.sleep(86400)
    except KeyboardInterrupt:
        server.stop(0)
```

### TypeScript
To build a custom guardrail in TypeScript, you will need to install the following dependencies:

#### Step1: Install the dependencies
```bash
    npm install @grpc/grpc-js @grpc/proto-loader
```

#### Step2: Generate the stubs from the `.proto` file
Next, you will need to generate the TypeScript code from the `.proto` file. You can use the following command to generate the 
TypeScript code:
```bash
    npm install -g grpc-tools
    grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./output \
        --grpc_out=grpc_js:./output \
        --ts_out=grpc_js:./output \
        -I ./proto path/to/your/javelin_guardrail_intf.proto
```    

#### Step3: Implement the server
Sample TypeScript grpc guardrail server:
```typescript
    import * as grpc from '@grpc/grpc-js';
    import * as protoLoader from '@grpc/proto-loader';
    import { ProtoGrpcType } from './proto/test_guardrail'; // Adjust the import according to your generated file

    const packageDefinition = protoLoader.loadSync('path/to/your/javelin_guardrail_intf.proto', {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
    const testPlugin = protoDescriptor.test_plugin;

    function evaluate(call: grpc.ServerUnaryCall<pb.GuardrailRequest, pb.GuardrailResponse>, 
    callback: grpc.sendUnaryData<pb.GuardrailResponse>) {
        const response: pb.GuardrailResponse = {
            transformedBody: { message: 'Processed: ' + call.request.inputBody['data'] }
        };
        callback(null, response);
    }

    function getServer() {
        const server = new grpc.Server();
        server.addService(testPlugin.Guardrail.service, { evaluate: evaluate });
        return server;
    }

    const server = getServer();
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(`Server error: ${err.message}`);
        } else {
            console.log(`Server listening on ${port}`);
            server.start();
        }
    });
```

## Enabling the Custom Guardrail in Javelin

To enable the custom guardrail in Javelin, you will need to configure the extension_processor in the Javelin configuration file. The extension_processor should be configured to call the custom guardrail service over GRPC.

Add the following snippet in either the Request Chain or Response Chain configurations.

```json
    {
    "name": "Extension Processor",
    "reference": "extension",
    "will_block": true,
    "inputs": {
        "remote_url": "localhost:50051" // URL of the custom guardrail 
        }
    },

```
