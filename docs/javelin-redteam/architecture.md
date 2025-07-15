# Architecture

Javelin RedTeam is built with a modular, scalable architecture designed for enterprise-grade AI security testing. The system leverages distributed agents, queue-based processing, and comprehensive data management to deliver reliable and efficient red teaming capabilities.

## System Overview

The Javelin RedTeam platform consists of several interconnected components working together to provide comprehensive AI security assessments:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client API    │───▶│  FastAPI Server │───▶│   Redis Queue   │
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

### FastAPI Server

The API server provides the primary interface for red teaming operations:

- **Asynchronous Processing**: Non-blocking API calls with immediate response
- **Authentication & Authorization**: Secure access control for enterprise environments
- **Request Validation**: Input validation and sanitization
- **Health Monitoring**: System status and performance metrics

```python
# API Endpoints
POST /v1/redteam/scan          # Trigger new scan
GET  /v1/redteam/scan/{id}/status    # Monitor progress
GET  /v1/redteam/scan/{id}/report    # Retrieve results
POST /v1/redteam/scan/{id}/cancel    # Cancel running scan
GET  /v1/redteam/taxonomy      # Get vulnerability taxonomy
```

### Redis Queue System

Distributed task processing for scalable operations:

- **Asynchronous Execution**: Decouple API requests from execution
- **Horizontal Scaling**: Add workers to increase throughput
- **Fault Tolerance**: Retry failed tasks and handle worker failures
- **Priority Queues**: Prioritize critical security scans

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




## Vector Database Integration

### Purpose
Store and retrieve attack prompts efficiently using semantic similarity

### Implementation
- **Embedding Model**: text-embedding-ada-002 for prompt vectorization
- **Storage**: PostgreSQL with pgvector extension
- **Retrieval**: Similarity search based on category and context

### Workflow
1. **Indexing**: Convert attack prompts to vector embeddings
2. **Categorization**: Organize by vulnerability types and categories
3. **Retrieval**: Find relevant prompts based on target description
4. **Enhancement**: Apply engines to transform base prompts

## Engine Architecture

### Engine Factory Pattern

```python
class EngineFactory:
    """Factory for creating engine instances"""
    
    _ENGINE_REGISTRY = {
        "prompt_injection": PromptInjectionEngine,
        "adversarial": AdversarialEngine,
        "math_engine": MathEngine,
        "hidden_layer": HiddenLayerEngine,
        "bon": BonEngine,
        "direct_llm": DirectLLMEngine,
        # ... other engines
    }
```

### Engine Configuration Management

Each engine supports flexible configuration:

```yaml
engines:
  direct_llm:
    model: "grok-3"
    temperature: 0.8
    max_tokens: 2048
    
  adversarial:
    suffix_length: 20
    selection_strategy: "random"
    
  bon:
    n_candidates: 5
    sigma: 0.1
```

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

```yaml
framework:
  max_concurrent_scans: 2
  max_concurrent_tests: 5
  max_tests_per_category: 1000
  max_pending_scans: 10
```

## Security & Reliability

### Security Measures

- **API Authentication**: Bearer token authentication for API access
- **Input Validation**: Comprehensive input sanitization and validation
- **Audit Logging**: Complete audit trail of all operations
- **Secure Communication**: TLS encryption for all network communications

### Reliability Features

- **Health Checks**: Continuous monitoring of system components
- **Graceful Degradation**: Fallback mechanisms for component failures
- **Data Backup**: Regular database backups and recovery procedures
- **Error Recovery**: Automatic retry mechanisms with exponential backoff

### Monitoring & Observability

- **Metrics Collection**: Performance and usage metrics
- **Log Aggregation**: Centralized logging for debugging and analysis
- **Alert Systems**: Automated alerts for system issues
- **Dashboard**: Real-time system status and performance dashboards

## Deployment Architectures

### Cloud Deployment

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Load Balancer  │───▶│   API Servers   │───▶│  Redis Cluster  │
│   (AWS ALB)     │    │  (ECS/EKS)      │    │  (ElastiCache)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                       │
                                ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   PostgreSQL    │◀───│ Worker Processes│◀───│   Auto Scaling  │
│     (RDS)       │    │   (ECS Tasks)   │    │     Group       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### On-Premises Deployment

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Reverse Proxy  │───▶│   API Servers   │───▶│  Redis Instance │
│    (Nginx)      │    │   (Docker)      │    │   (Standalone)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                       │
                                ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   PostgreSQL    │◀───│ Worker Processes│◀───│ Process Manager │
│   (Self-hosted) │    │   (Docker)      │    │   (Supervisor)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Local Development

```
┌─────────────────┐    ┌─────────────────┐
│   CLI Interface │───▶│  Local Agents   │
│   (Direct)      │    │ (Direct Exec)   │
└─────────────────┘    └─────────────────┘
                                │
                                ▼
┌─────────────────┐    ┌─────────────────┐
│  Local Files    │◀───│ Configuration   │
│  (Reports)      │    │ (YAML Files)    │
└─────────────────┘    └─────────────────┘
```

## Configuration Management

### Hierarchical Configuration

1. **Framework Defaults**: Base system configuration
2. **Environment Variables**: Runtime configuration overrides
3. **Configuration Files**: Scan-specific parameters
4. **API Parameters**: Request-level overrides

### Configuration Precedence

```
API Request Parameters (Highest)
    ↓
Configuration Files
    ↓
Environment Variables
    ↓
Framework Defaults (Lowest)
```

## Integration Points

### CI/CD Integration

- **GitHub Actions**: Automated security testing workflows
- **Jenkins**: Pipeline integration for enterprise environments
- **GitLab CI**: Built-in CI/CD integration
- **Azure DevOps**: Microsoft ecosystem integration

### Monitoring Integration

- **Prometheus**: Metrics collection and alerting
- **Grafana**: Visualization and dashboards
- **ELK Stack**: Log aggregation and analysis
- **Datadog**: Application performance monitoring

### Third-Party Integrations

- **SIEM Systems**: Security information and event management
- **Ticketing Systems**: Automated vulnerability tracking
- **Slack/Teams**: Real-time notifications
- **Compliance Tools**: Automated compliance reporting

This architecture enables Javelin RedTeam to provide enterprise-grade AI security testing while maintaining flexibility, scalability, and reliability across diverse deployment environments. 