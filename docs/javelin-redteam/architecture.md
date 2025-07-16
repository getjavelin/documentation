# Architecture

![Javelin-Redteam-Architecture](/img/redteam/RedteamArchitecture.png)

Javelin RedTeam is built with a modular, scalable architecture designed for enterprise-grade AI security testing. The system leverages distributed agents, queue-based processing, and comprehensive data management to deliver reliable and efficient red teaming capabilities.

## System Overview

The Javelin RedTeam platform consists of several interconnected components working together to provide comprehensive AI security assessments:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Admin API     │───▶│  FastAPI Server │───▶│   Redis Queue   │
│   (REST/CLI)    │    │   (Async API)   │    │  (Task Queue)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                       │
                                ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   PostgreSQL    │◀───│  Agent Smith    │◀───│ Worker Processes│
│   (Database)    │    │ (Orchestrator)  │    │   (Consumers)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
        ┌─────────────────────────────────────────────────┐
        │              Specialized Agents                 │
        ├─────────────┬─────────────┬─────────────────────┤
        │   Planner   │ Generator   │    Executor         │
        │   Agent     │   Agent     │    Agent            │
        ├─────────────┼─────────────┼─────────────────────┤
        │ Evaluator   │  Reporter   │  Vector Store       │
        │   Agent     │   Agent     │   (Prompts DB)      │
        └─────────────┴─────────────┴─────────────────────┘
```

## Core Components

### Javelin-Admin Service

Javelin-Admin service exposes APIs for all operations pertaining to Javelin-Redteam. All reads are handled directly by Javelin-Admin, whereas all writes are proxied to Javelin-Redteam fastapi server.


### FastAPI Server

The API server provides the primary interface for red teaming operations:

- **Asynchronous Processing**: Non-blocking API calls with immediate response
- **Request Validation**: Input validation and sanitization
- **Health Monitoring**: System status and performance metrics

```python
# API Endpoints
POST /v1/redteam/scan                     # Trigger new scan
POST /v1/redteam/scan/{id}/rerun          # Re-trigger a scan
POST /v1/redteam/scan/{id}/cancel         # Cancel running scan
GET  /v1/redteam/taxonomy                 # Get vulnerability taxonomy
```

### Redis Queue System

Distributed task processing for scalable operations:

- **Asynchronous Execution**: Decouple API requests from execution
- **Horizontal Scaling**: Add workers to increase throughput
- **Fault Tolerance**: Retry failed tasks and handle worker failures

```
Queue Flow:
API Request → Redis Queue → Worker Pool → Agent Execution → Database Storage
```

### PostgreSQL Database

Enterprise-grade data persistence:

- **Scan Management**: Track scan status, progress, and results
- **Vector Storage**: Store and retrieve attack prompt embeddings (pgvector)
- **Audit Trail**: Complete history of security assessments
- **Report Generation**: Structured data for comprehensive reporting

### Agent Smith (Orchestrator)

The central coordinator managing the entire red teaming workflow:

**Responsibilities:**
- Coordinate specialized agents
- Manage scan lifecycle
- Handle error recovery
- Monitor progress
- Generate final reports

## Specialized Agents

### Planner Agent

**Purpose**: Strategic planning and attack orchestration

**Capabilities:**
- Analyze target application characteristics
- Generate comprehensive attack strategies

**Output**: Detailed attack plan with category priorities and execution strategy

### Generator Agent

**Purpose**: Create sophisticated attack prompts

**Process:**
1. **Base Prompt Retrieval**: Fetch relevant prompts from vector database
2. **Template Processing**: Fill in contextual variables and placeholders
3. **Engine Enhancement**: Apply attack enhancement engines
4. **Quality Validation**: Ensure prompt effectiveness and relevance

**Engine Integration**: Works with all available engines to transform base prompts into advanced attacks

### Attack Executor

**Purpose**: Execute attacks against target applications

**Features:**
- **Multi-Protocol Support**: HTTP, gRPC, WebSocket, direct model calls
- **Concurrent Execution**: Parallel attack execution with rate limiting
- **Response Collection**: Capture and normalize target responses
- **Error Handling**: Robust error handling and retry mechanisms

### Attack Evaluator

**Purpose**: Analyze responses for vulnerabilities

**Evaluation Process:**
1. **Response Analysis**: Parse and structure target responses
2. **LLM Judge Evaluation**: Use specialized models to assess vulnerabilities
3. **Severity Classification**: Assign severity levels (Critical, High, Medium, Low)
4. **Evidence Collection**: Gather supporting evidence for findings

### Reporter

**Purpose**: Generate comprehensive security reports

**Report Components:**
- **Executive Summary**: High-level findings and risk assessment
- **Vulnerability Details**: Specific issues with evidence and examples
- **Attack Vectors**: Detailed attack scenarios and exploitation methods
- **Remediation Guidance**: Actionable recommendations and best practices
- **Compliance Mapping**: OWASP, NIST, and regulatory alignment

## Attack Generation

:::note
Please see the [engine overview](/docs/javelin-redteam/engines/overview.md) section for details regarding Attack Generation in Javelin-Redteam
:::

## Vector Database Integration

### Purpose

Store and retrieve attack prompts efficiently using semantic similarity and other filters
The overall workflow looks like below:

1. **Indexing**: Convert attack prompts to vector embeddings 
2. **Categorization**: Organize by vulnerability types and categories
3. **Retrieval**: Find relevant prompts based on target description 
4. **Enhancement**: Apply engines to transform base prompts


## Scalability & Performance

### Horizontal Scaling

- **Worker Processes**: Scale by adding more worker instances
- **Database Sharding**: Distribute data across multiple database instances
- **Load Balancing**: Distribute API requests across multiple server instances
- **Queue Partitioning**: Separate queues for different scan types

### Performance Optimizations

- **Connection Pooling**: Efficient database connection management
- **Caching**: Redis caching for frequently accessed data
- **Batch Processing**: Group similar operations for efficiency
- **Async Operations**: Non-blocking I/O for improved throughput

### Resource Management

`framework_config.yaml` config file allows us to specify and control many aspects of resource requirements by the Javelin-Redteam framework

```yaml
# Execution settings
min_timeout: 3 # Minimum value that can be used as timeout parameter after which scan will be aborted and marked as failed
max_timeout: 300 # Maximum value that can be used as timeout parameter after which scan will be aborted and marked as failed
max_tests_per_category: 1000 # Maxium number of tests that can be generated per category in the scan
max_concurrency: 10 # Maximum allowed concurrency when executing the test cases against the target app
# Queue and scan limits
max_tests: 10000  # Maximum total test cases per scan
max_pending_scans: 10  # Maximum pending scans in queue
```

## Security & Reliability

### Security Measures

- **API Authentication**: Bearer token authentication for API access
- **Input Validation**: Comprehensive input sanitization and validation
- **Audit Logging**: Complete audit trail of all operations
- **Secure Communication**: TLS encryption for all network communications

### Reliability Features

- **Health Checks**: Continuous monitoring of system components
- **Data Backup**: Regular database backups and recovery procedures
- **Error Recovery**: Automatic retry mechanisms with exponential backoff (COMING SOON)

### Monitoring & Observability

- **Metrics Collection**: Performance and usage metrics
- **Log Aggregation**: Centralized logging for debugging and analysis
- **Alert Systems**: Automated alerts for system issues
- **Dashboard**: Real-time system status and performance dashboards

This architecture enables Javelin RedTeam to provide enterprise-grade AI security testing while maintaining flexibility, scalability, and reliability across diverse deployment environments. 