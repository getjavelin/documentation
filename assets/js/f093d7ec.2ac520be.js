"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2966],{18650:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>c});let n=JSON.parse('{"id":"javelin-processors/custom-processors","title":"Extension Guardrails","description":"Learn how to build custom extension guardrails using GRPC interfaces in Go, Python, and TypeScript","source":"@site/docs/javelin-processors/custom.md","sourceDirName":"javelin-processors","slug":"/javelin-processors/custom-processors","permalink":"/javelin-processors/custom-processors","draft":false,"unlisted":false,"editUrl":"https://github.com/getjavelin/documentation/tree/main/docs/javelin-processors/custom.md","tags":[],"version":"current","frontMatter":{"id":"custom-processors","title":"Extension Guardrails","description":"Learn how to build custom extension guardrails using GRPC interfaces in Go, Python, and TypeScript","sidebar_label":"Custom Processors"}}');var o=t(74848),s=t(28453),i=t(78667);let a={id:"custom-processors",title:"Extension Guardrails",description:"Learn how to build custom extension guardrails using GRPC interfaces in Go, Python, and TypeScript",sidebar_label:"Custom Processors"},l="Extension Guardrails",d={},c=[{value:"Custom Processor Interface",id:"custom-processor-interface",level:2},{value:"Building a Custom Guardrail",id:"building-a-custom-guardrail",level:2},{value:"Golang",id:"golang",level:3},{value:"Step1: Install the dependencies",id:"step1-install-the-dependencies",level:4},{value:"Step2: Generate the stubs from the <code>.proto</code> file",id:"step2-generate-the-stubs-from-the-proto-file",level:4},{value:"Step 3: Implement the server",id:"step-3-implement-the-server",level:4},{value:"Python",id:"python",level:3},{value:"Step1: Install the dependencies",id:"step1-install-the-dependencies-1",level:4},{value:"Step2: Generate the stubs from the <code>.proto</code> file",id:"step2-generate-the-stubs-from-the-proto-file-1",level:4},{value:"Step3: Implement the server",id:"step3-implement-the-server",level:4},{value:"TypeScript",id:"typescript",level:3},{value:"Step1: Install the dependencies",id:"step1-install-the-dependencies-2",level:4},{value:"Step2: Generate the stubs from the <code>.proto</code> file",id:"step2-generate-the-stubs-from-the-proto-file-2",level:4},{value:"Step3: Implement the server",id:"step3-implement-the-server-1",level:4},{value:"Enabling the Custom Guardrail in Javelin",id:"enabling-the-custom-guardrail-in-javelin",level:2}];function p(e){let r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"extension-guardrails",children:"Extension Guardrails"})}),"\n","\n",(0,o.jsx)(r.p,{children:"There are 2 components to building secure extension guardrails in Javelin:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"Extension Processor"}),"\n",(0,o.jsx)(r.li,{children:"Custom Guardrail Service"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"When incorporating extension guardrails, you will need to configure a special 'extension_processor' that will call the custom guardrail. The extension_processor is configured in Javelin's request or response chain to execute the custom guardrail and the GRPC endpoint for the custom guardrail is configured as input in the extension_processor configuration."}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Tip:"})," Extension guardrail endpoints should be implemented as GRPC services and configured in javelin for low latency and high throughput."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"The extension_processor provides a convenient and flexible GRPC interface that allows you to implement custom guardrails in any language that supports GRPC. The extension_processor can be configured to call the custom guardrail service over GRPC."}),"\n",(0,o.jsx)(i.A,{language:"yaml",children:`    +---------+
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
        +--------------------------+`}),"\n",(0,o.jsx)(r.h2,{id:"custom-processor-interface",children:"Custom Processor Interface"}),"\n",(0,o.jsxs)(r.p,{children:["The GRPC interface consists of the following methods (",(0,o.jsx)(r.code,{children:"javelin_guardrail_intf.proto"}),"):"]}),"\n",(0,o.jsx)(i.A,{language:"go",children:`syntax = "proto3";

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
}`}),"\n",(0,o.jsxs)(r.p,{children:["Custom guardrails can be implemented in any language and are ideally expected to be hosted/deployed in the same cluster that is running Javelin for low latency access. The custom processor should implement the ",(0,o.jsx)(r.code,{children:"Guardrail"})," service defined in the ",(0,o.jsx)(r.code,{children:".proto"})," file."]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"Evaluate"})," method should take a ",(0,o.jsx)(r.code,{children:"GuardrailRequest"})," as input and return a ",(0,o.jsx)(r.code,{children:"GuardrailResponse"})," as output."]}),"\n",(0,o.jsx)(r.h2,{id:"building-a-custom-guardrail",children:"Building a Custom Guardrail"}),"\n",(0,o.jsx)(r.p,{children:"You will first need to decide what language you plan to write your custom guardrail in. The custom guardrail can be written in any language that supports GRPC."}),"\n",(0,o.jsx)(r.h3,{id:"golang",children:"Golang"}),"\n",(0,o.jsx)(r.p,{children:"To build a custom guardrail in Golang, you will need to install the following dependencies:"}),"\n",(0,o.jsx)(r.h4,{id:"step1-install-the-dependencies",children:"Step1: Install the dependencies"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:`go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest`}),"\n",(0,o.jsxs)(r.h4,{id:"step2-generate-the-stubs-from-the-proto-file",children:["Step2: Generate the stubs from the ",(0,o.jsx)(r.code,{children:".proto"})," file"]}),"\n",(0,o.jsxs)(r.p,{children:["Next, you will need to generate the Golang code from the ",(0,o.jsx)(r.code,{children:".proto"})," file. You can use the following command to generate the Golang code:"]}),"\n",(0,o.jsx)(i.A,{language:"bash",children:"protoc --go_out=. --go-grpc_out=. javelin_guardrail_intf.proto"}),"\n",(0,o.jsx)(r.h4,{id:"step-3-implement-the-server",children:"Step 3: Implement the server"}),"\n",(0,o.jsx)(i.A,{language:"go",children:`package main

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
`}),"\n",(0,o.jsx)(r.h3,{id:"python",children:"Python"}),"\n",(0,o.jsx)(r.p,{children:"To build a custom guardrail in Python, you will need to install the following dependencies:"}),"\n",(0,o.jsx)(r.h4,{id:"step1-install-the-dependencies-1",children:"Step1: Install the dependencies"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:"pip install grpcio grpcio-tools"}),"\n",(0,o.jsxs)(r.h4,{id:"step2-generate-the-stubs-from-the-proto-file-1",children:["Step2: Generate the stubs from the ",(0,o.jsx)(r.code,{children:".proto"})," file"]}),"\n",(0,o.jsxs)(r.p,{children:["Next, you will need to generate the Python code from the ",(0,o.jsx)(r.code,{children:".proto"})," file. You can use the following command to generate the Python code:"]}),"\n",(0,o.jsx)(i.A,{language:"bash",children:"python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. javelin_guardrail_intf.proto"}),"\n",(0,o.jsx)(r.h4,{id:"step3-implement-the-server",children:"Step3: Implement the server"}),"\n",(0,o.jsx)(r.p,{children:"Sample python grpc guardrail server:"}),"\n",(0,o.jsx)(i.A,{language:"python",children:`import grpc
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
    server.stop(0)`}),"\n",(0,o.jsx)(r.h3,{id:"typescript",children:"TypeScript"}),"\n",(0,o.jsx)(r.p,{children:"To build a custom guardrail in TypeScript, you will need to install the following dependencies:"}),"\n",(0,o.jsx)(r.h4,{id:"step1-install-the-dependencies-2",children:"Step1: Install the dependencies"}),"\n",(0,o.jsx)(i.A,{language:"bash",children:"npm install @grpc/grpc-js @grpc/proto-loader"}),"\n",(0,o.jsxs)(r.h4,{id:"step2-generate-the-stubs-from-the-proto-file-2",children:["Step2: Generate the stubs from the ",(0,o.jsx)(r.code,{children:".proto"})," file"]}),"\n",(0,o.jsxs)(r.p,{children:["Next, you will need to generate the TypeScript code from the ",(0,o.jsx)(r.code,{children:".proto"})," file. You can use the following command to generate the\nTypeScript code:"]}),"\n",(0,o.jsx)(i.A,{language:"bash",children:`npm install -g grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./output \
    --grpc_out=grpc_js:./output \
    --ts_out=grpc_js:./output \
    -I ./proto path/to/your/javelin_guardrail_intf.proto`}),"\n",(0,o.jsx)(r.h4,{id:"step3-implement-the-server-1",children:"Step3: Implement the server"}),"\n",(0,o.jsx)(r.p,{children:"Sample TypeScript grpc guardrail server:"}),"\n",(0,o.jsx)(i.A,{language:"typescript",title:"gRPC Server Example",showLineNumbers:!0,children:`import * as grpc from '@grpc/grpc-js';
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
        console.error(\`Server error: \${err.message}\`);
    } else {
        console.log(\`Server listening on \${port}\`);
        server.start();
    }
});
`}),"\n",(0,o.jsx)(r.h2,{id:"enabling-the-custom-guardrail-in-javelin",children:"Enabling the Custom Guardrail in Javelin"}),"\n",(0,o.jsx)(r.p,{children:"To enable the custom guardrail in Javelin, you will need to configure the extension_processor in the Javelin configuration file. The extension_processor should be configured to call the custom guardrail service over GRPC."}),"\n",(0,o.jsx)(r.p,{children:"Add the following snippet in either the Request Chain or Response Chain configurations."}),"\n",(0,o.jsx)(i.A,{language:"python",children:`
    {
    "name": "Extension Processor",
    "reference": "extension",
    "will_block": true,
    "inputs": {
        "remote_url": "localhost:50051" // URL of the custom guardrail 
        }
    },
`})]})}function u(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);