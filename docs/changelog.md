---
id: changelog
title: Changelog
description: Complete changelog of Javelin platform updates, new features, security enhancements, and performance improvements
sidebar_label: Changelog
---

# Changelog

## January 2025 (v2.0.26)

### 🔧 Core Platform Improvements

**Performance & Reliability**
- Fixed deadlock issues in processor execution flow with enhanced debugging capabilities
- Improved core logging messages for better observability and troubleshooting
- Enhanced universal endpoint functionality for improved API handling
- Optimized model endpoint URL population in request chain processing

**Security & Data Protection**
- Fixed entropy value handling in security filters (corrected boolean type issue)
- Enhanced DLP processor accuracy to reduce false positives
- Improved invisible character detection in prompt analysis
- Updated CORS headers to use standardized `x-javelin-apikey` instead of `x-api-key`

### 🌐 Web Application & UI Enhancements

**User Experience Improvements**
- Enhanced report header sections with improved app endpoint field placement
- Fixed category display issues in reports when data is not present
- Improved fallback options handling and selection
- Fixed RedTeam UI JavaScript exceptions and UX issues

**Provider & Route Management**
- Fixed provider edit issues for Azure OpenAI and AWS configurations
- Resolved Amazon route creation issues with model name handling
- Enhanced duplicate checking for processor reference keys
- Improved suffix placeholder handling and general UI fixes

### 📊 Admin & Management Features

**Enhanced Administration**
- Added pagination support for better data navigation
- Improved "Created by" fields and key handling mechanisms
- Fixed API endpoint trailing slash issues
- Enhanced admin logging for better system monitoring

### 🐍 Python SDK Updates

**Developer Experience**
- Updated route models for improved API compatibility
- Enhanced universal endpoint scripts and functionality
- Added image generation support for unified endpoints
- Improved README documentation and setup instructions

### 🔒 Data Loss Prevention (DLP)

**Security Enhancements**
- Format preservation improvements and code standardization
- Enhanced request handling and dependency updates
- Improved security token handling for AWS Bedrock integration
- Upgraded urllib3 and requests dependencies for security patches

### 📈 Model Specifications

**Compatibility Updates**
- Updated to ModelSpec v1.0.46 with latest model definitions
- Enhanced model compatibility across multiple AI providers
- Improved model endpoint configurations and validation

### 🐛 Bug Fixes & Issues Resolved

**Core Platform**
- **#1236**: Fixed incorrect entropy_key value type (boolean instead of number)
- **#1218**: Resolved invisible character detection in prompt analysis
- **#1216**: Addressed DLP processor false positive detections
- **#1214**: Fixed null model endpoint URL in Chronicle and Traces
- **#1213**: Corrected entropy threshold blocking logic in route configuration
- **#1212**: Resolved AWS Bedrock Titan "invalid security token" errors

**Web Application**
- Fixed category display issues in reports interface
- Resolved RedTeam JavaScript exceptions and modal close actions
- Fixed provider configuration saving for Azure OpenAI and AWS

**Admin Platform**
- Enhanced pagination and data navigation
- Improved API endpoint handling and logging

### 🚀 DevOps & Infrastructure

**Continuous Integration**
- Enhanced CI/CD pipeline with automated changelog generation
- Improved patch management and deployment processes
- Enhanced dependency management and security scanning

## December 2024

### Security & Compliance

OpenAI-Compatible Model Specs, Updated model specs to align with Claude and OpenAI standards. Sensitive Data Protection, Enhanced filtering to prevent sensitive data leaks in API responses.

### Performance & Optimization

Optimized Query Performance, Added new indexes to traces and threats tables. Enhanced Caching Mechanism, Improved caching system for API responses to reduce latency.

### DevOps & Automation

Slack Plugin Updates, Bumped versions of Slack plugins in CI/CD pipelines. Version Bumps & Maintenance: Upgraded various dependencies and improved package management.

## November 2024

### New Features

Transformation Rules: Introduced transformation rules for model output handling. Advanced Gateway Filtering: Added gateway filtering by Business Unit ID, Organization ID, and Type.

### Security & Compliance

Threat Table Enhancements: Added security detectors to trace records stored in the Threats table. Audit Logging: Improved audit logs to capture changes in routes, providers, and secrets.

### Performance & DevOps

Upgraded Go Version: Migrated to Go 1.23.3 for performance improvements. Dockerfile Security Enhancements: Removed non-root users for improved container security.

## October 2024

### API & Infrastructure Improvements

Swagger Documentation Updates: Improved API documentation with better security schemes and operation IDs. KeyVault Enhancements: Enhanced transaction management and API key handling.

### Security & Compliance

Regex & Keyword Filtering: Introduced regex-based filtering to prevent sensitive data leaks. Security Patch for CORS Handling: Improved CORS rules to prevent unauthorized API access.

### Performance Enhancements

Optimized System Performance Metrics: Improved performance tracking for AI models. Improved CI/CD Pipelines: Enhanced build and deployment workflows with automated validation.

## September 2024

### Major Analytics & Telemetry Infrastructure Upgrade

Enhancements to the analytics infrastructure including pub-sub for large scale analytics capture and telemetry aggregations.

***Breaking change:*** All analytics data will now be stored in a new data store. We are not migrating the old data to the new store so old data will not be available. Graphs, Analytics and Metrics will only show data from the date of the upgrade.

### Regex & Keyword Filtering Support

We are introducing regex and keyword filtering support as a part of Javelin Data Protection. This will allow users to define custom filters based on regex patterns and keywords to protect sensitive data.

### Enhanced Security Filters for Data Protection

Introduction of advanced security filters for code detection, markdown detection, and keyword/regex checks to prevent security vulnerabilities and data breaches.

### Custom Processor Support

Javelin now supports a javascript-based custom processor that can be used to implement custom logic for API calls, including data transformations and response handling.

### Bug Fixes & Enhancements

Various bug fixes and enhancements to improve the overall stability and performance of the platform.

## August 2024

### Security Dashboard Integration with OWASP LLM Top 10

Launch of a comprehensive security dashboard categorizing vulnerabilities aligned with the latest OWASP Large Language Models (LLM) Top 10 risks, enhancing the ability to monitor and mitigate potential security threats effectively.

### Comprehensive Audit Logging

Implementation of detailed audit logs for all user activities related to Routes, Providers, Data Protection, and Secrets management, ensuring traceability and compliance with security policies.

### Enhanced API Call Tracing with OpenTelemetry

Introduction of OpenTelemetry-based tracing for all API interactions through the Gateway, allowing for precise performance monitoring and debugging capabilities.

### Python SDK Enhancements

Upgrades and optimizations to the Python SDK to improve usability, performance, and compatibility with the latest Python versions.

### Documentation Overhaul

Significant updates to API documentation, including revamped Swagger files and enhanced overall documentation, making it easier for developers to understand and integrate APIs.

### Advanced Analytics Features

Enhancements to analytics functionalities, focusing on better data capture techniques and visualization tools to provide deeper insights into data usage and trends.

### New Security Guardrails

Code/Markdown Detection: Implementation of advanced security filters designed to detect and handle code or markdown injections, ensuring content integrity and preventing security vulnerabilities.

## July 2024

### Roles and User Management Framework

Expanded support for managing roles, permissions, and user access across groups, teams, and entire organizations, enhancing control over user activities and data access.

### Granular Privilege Control

Definition of distinct privileges for various user roles such as Super Admins, Super Members, Team Members, and Team Admins, ensuring appropriate access levels are maintained.

### Permissions Enforcement on UI and API

Comprehensive permissions management across all UI pages and API calls, safeguarding against unauthorized actions and ensuring system security.

### API Usage and Performance Analytics Dashboard

New analytics dashboard providing insights into API usage, performance statistics, error tracking, and latency measurements, aiding in efficient AI management.

### Chronicle for Compliance

Detailed chronicles for all AI calls, including logs, error reports, and performance metrics specifically for Route Configuration, helping in troubleshooting and optimizations.

### UI Enhancements for Navigation

Updates to UI components such as sidebars, headers, and footers, aimed at improving the overall user navigation experience.

### Extension Processor for Custom API Logic

Introduction of an Extension Processor to implement custom logic for API calls, including data transformations and response handling, with support for gRPC.

### New Security Guardrails and Streaming Support

Implementation of new security measures like keyword checks and code vulnerability scanners, alongside support for real-time data streaming technologies such as Redis and Kafka.

## June 2024

### Websocket Support in Core Platform

Integration of WebSocket technology into the core platform to enable real-time, bi-directional communication between clients and servers.

### Support for more models and frameworks

Incorporation of support for non-OpenAI models, such as Bedrock, allowing for greater flexibility and diversity in machine learning operations.

### Playground for Real-Time Testing

Establishment of a playground environment for real-time testing and experimentation with new features and configurations.

### Enhanced Guardrails for Team and Global Settings

New functionalities for setting and managing security guardrails at both team and gateway levels, ensuring consistent security practices across all operational levels.

### UI Improvements for Guardrail Configurations

User interface updates to facilitate the definition and management of guardrails, tailored to team and organizational requirements.

### Configurations Across Teams and Organizations

Enhanced support for managing configurations across teams and organizations, providing scalability and flexibility in deployments.

### Automation Enhancements for Private VPCs

Improved automation processes for private Virtual Private Cloud (VPC) deployments, optimizing resource utilization and deployment efficiency.
