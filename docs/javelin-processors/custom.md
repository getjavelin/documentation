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

The GRPC interface consists of the following methods (.proto):

```go
    // Sample interface (for most recent interface please refer to the latest .proto file)
    syntax = "proto3";

    package test_plugin;

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
        map<string, string> input_body = 2;

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
        map<string, string> transformed_body = 1;

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

