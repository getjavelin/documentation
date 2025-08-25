---
id: application-usage-guides
title: Application Guides
description: Comprehensive guide for Javelin Application
sidebar_label: Guides
---

# Application Guides

This guide explains how to create and manage Applications in Javelin, generate and use API keys, apply application-level policies, review request logs in Chronicles.

## Creating an Application

1. Navigate to the **Applications** page within your gateway.
2. From the sidebar, open **Configuration**.  
3. Click **Create New Application** button.
4. Enter the following details in the **Details** tab:
   - **Name** – Unique identifier for your application.
   - **Type** – Application type (Assistant, Agent, Custom).
   - **Description** – A human-readable purpose for your application.
5. Click **Save**.

![Application Details Tab](/img/application/addApplication.png)

Once Application is created:  
- A **Developer Key** is automatically generated.
- This is a one time visible key, right after creation. Immediately copy and store it somewhere safe, as later you’ll only see a masked version of it.
- This key needs to be passed in the `X-Javelin-Apikey` header for any route request.

![Application Details Tab](/img/application/developerKeyModal.png)

## Developer Tab

The **Developer** tab allows you to:
- View all keys of the application.
- Generate new keys by clicking **Add Key**.
- Delete any API key in-case it is compromised.

**Usage:**  
For any request made through a route, include your Application API key in the header:
```bash
-H "X-Javelin-Apikey: <APPLICATION_API_KEY>"
```
This key authorizes requests and ensures activity is logged under your application.

![Developer Tab - Add Key Modal](/img/application/appDeveloperKey.png)


## Application Graph Tab

- Displays all LLM models accessed via this application's key.
- Shows **model name**, **number of requests**, and **last used** in a graph format.
- Helps you analyze usage patterns and identify high-traffic models.

![Application Graph Tab](/img/application/appGraph.png)


## Redteam Assessment Tab

- Displays any red team security assessments performed against this application.
- Allows tracking of vulnerabilities, model behavior checks, and evaluation results.
- For complete overview, see [Javelin RedTeam](../javelin-redteam).

![Redteam Assessment Tab](/img/application/redteamTab.png)


## Policy Tab

- Displays all **Application-level policies** currently applied to this application.
- Policies help safeguard your LLM usage by applying filters such as **content filtering**, **prompt injection detection**, **language detection**, and other guardrail mechanisms.
- For a complete breakdown of available policies and configuration options, see the [Policy Configuration Guide](./application-policy-configuration).

![Policy Tab](/img/application/policyTab.png)


## Chronicles Tab

- Displays all historical requests and responses for the application.
- Shows:
  - Model request details
  - Input and output from the LLM
  - Guardrails data
  - Raw JSON payloads
- Useful for debugging, auditing, and compliance checks.

![Chronicles Tab](/img/application/appChronicles.png)


:::tip
Keep your Application API key safe. Do not expose it to repositories or include it in browser-delivered code. Use secure platforms to share it with the others.
:::
