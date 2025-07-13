---
id: changelog
title: Changelog
description: Complete changelog of Javelin platform updates, new features, security enhancements, and performance improvements
sidebar_label: Changelog
---

# Changelog

## January 2025

### Application Enhancements

Introduced the concept of applications, allowing for structured app versioning and schema improvements. Added support for querying traces by trace ID, improving observability.

### Security & Compliance

Introduced a new Threats table for storing security-related trace records. Improved KeyVault transaction handling and validation for better security.Implemented security enhancements to prevent CORS-related vulnerabilities.

### Performance & Infrastructure

System Performance Metrics, Added avg_model_latency to system performance tracking. Enhanced Pub/Sub Handling, Reimplemented pub/sub for better Redis handling under load. Database Performance, Optimized query performance and improved indexing across key tables.

### DevOps & CI/CD

Pipeline Enhancements, Improved CI/CD pipeline, including better PR status tracking and linting. Automated changelog updates as part of the release process. Integrated Trivy scans into the build pipeline for improved security monitoring.

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
