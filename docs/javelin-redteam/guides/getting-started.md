# Getting Started

This guide will walk you through running your first security assessment with Javelin RedTeam, from initial setup to analyzing results. By the end of this guide, you'll have conducted a comprehensive red team evaluation of an AI application and understand how to interpret the findings.

## Prerequisites

Before starting, ensure you have:

- **Access to Javelin RedTeam**: Login credentials to access Javelin Redteam interface from the UI.
- **Target Application**: HTTP endpoint, model API, or test application to test the application. Javelin-Redteam includes reference lab applications for conducting sample assessments. 

## Step 1: Prepare Your Target Application

### Target Application Requirements

Your target application should:
- **Accept HTTP requests** with JSON payloads
- **Return responses** in a consistent format
- **Be accessible** from the red team environment
- **Have appropriate permissions** for security testing

### Test Application Setup

Javelin Redteam already includes sample LLM backed lab apps for running redteam scans. Currently supported ones are:

#### Lab1

Lab1 implements a comprehensive indirect prompt injection testing environment that simulates a product support chatbot with vulnerable function calling capabilities.

The lab exposes five functions that the LLM can call, creating opportunities for indirect prompt injection attacks:

| Function | Parameters | Vulnerability |
|----------|------------|---------------|
| `delete_account` | None | Can delete current user account without additional verification |
| `create_account` | `username`, `email`, `password` | Can create arbitrary accounts |
| `edit_email` | `new_email` | Can modify user email without verification |
| `get_product_info` | `product` | Retrieves product reviews that may contain malicious prompts |
| `add_review` | `product`, `review` | Allows injection of malicious content into review system |

Endpoint Specification:

| Endpoint | Method | Purpose | Request Model | Response Model |
|----------|---------|---------|---------------|----------------|
| `/v1/redteam/lab1/chat` | POST | Main chat interface for testing attacks | ChatRequest | ChatResponse |
| `/v1/redteam/lab1/health` | GET | Health check for lab availability | None | Status object |
| `/v1/redteam/lab1/lab-instructions` | GET | Returns lab objectives and description | None | Instructions object |

For demonstration purposes, this lab uses ```gpt-3.5-turbo``` model.


## Step 2: Register the target application
To register a target application on the Javelin Gateway, follow the steps below:

### 1. Create the Application

First, register your target application as described in the [Creating Application Guide](../../javelin-core/application-configuration).

### 2. Configure API Request

In the **API Request** section of the application configuration details tab, provide the following details:

- **URL**  
  Enter the target application's URL prepared in Step 1.

- **Headers**  
  Specify any headers that need to be passed to your target application.  
  For example, authentication tokens, `Content-Type`, or any custom headers required.

- **Payload Template**  
  Provide a JSON schema representing the payload structure expected by the target application.

  > **Note:** Use `{{query}}` as a placeholder for dynamic values. This will be replaced at runtime during the actual application call.

![Create Redteam Assessment Button](/img/application/APIRequestSection.png)


### 3. Save the Application

After completing the above configurations, click **Save** to register the application with the Javelin Gateway.

## Step 3: Create Your First Scan Configuration

### 1. Navigate to Redteam Assessments

After creating your application, click on it to open the application overview. From the top menu, select the **Redteam Assessments** tab and then click on **Create New Assessment**.

![Create Redteam Assessment Button](/img/redteam/CreateRedteamAssessment.png)

---

### 2. Configure Scan Settings

You will be presented with a configuration form where you need to define the scan parameters. After filling in the necessary details, click **Next**.

![Redteam Configuration Settings Form](/img/redteam/RedteamConfigSettings.png)

#### Configuration Fields

The following table outlines each configurable field in this step, along with its description and constraints:

| Field                    | Description                                                                 | Type         | Constraints / Notes                         |
|--------------------------|-----------------------------------------------------------------------------|--------------|----------------------------------------------|
| **Max Duration**         | Maximum allowed time (in minutes) for the scan. Once this duration is reached, scan will be forcefully timed out. | Integer      | Range: `3` to `300`                          |
| **Concurrency**          | Displays how many test cases can run in parallel. This field is read-only and currently set to 1. | Integer (Read-only) | Currently fixed at `1`                       |
| **Test Cases per Category** | Maximum number of test cases to run for each selected category.             | Integer      | Maximum allowed: `500`                       |
| **Strictness Level**     | Determines the sensitivity of test rules.                                   | String (Fixed) | Default: `High`; Not configurable            |

---

### 3. Select Scan Type

Choose the type of scan you want to execute.

![Scan Type Selection Screen](/img/redteam/ScanType.png)

- **Scan Type** determines the subset of categories used during the scan.
- To manually select from all **15 available categories**, choose the **Custom** option.

:::tip
For more information about scan categories, their purposes, and definitions, refer to our [Taxonomy Guide](/javelin-redteam/categories/overview).
:::

---

### 4. Engine Overview

You will now see the **Engines** screen, which displays the backend scanning engines Javelin selects based on your application's context.

![Engines Screen](/img/redteam/Engines.png)

- This is an informational screen only; no action is required.
- Click **Next** to proceed.

---

### 5. Choose Scan Categories

Select the categories you want the scan to cover.

![Category Selection Screen Part 1](/img/redteam/ChooseCategory1.png)

Use this screen to fine-tune the assessment scope based on your risk profile or application characteristics.

---

## Step 4: Run Your First Scan

Once you’ve selected the categories, click **RUN SCAN** to initiate the assessment.

![Category Selection Screen Part 2](/img/redteam/ChooseCategory2.png)

---

## Step 5: Monitor Scan Progress

Once the scan is initiated, it will enter the **queued** state.

![Scan Progress Monitoring Dashboard](/img/redteam/MonitorScan.png)

- You'll be redirected to the **Assessments List** view.
- The status of the scan will transition from `queued` → `running` → `completed` or `failed`, depending on the outcome.
- Each scan run is assigned a unique Scan ID for tracking and reporting purposes.

### Scan Status Indicators

| Status      | Description                                      |
|-------------|--------------------------------------------------|
| `queued`    | Scan is waiting in the queue to be processed.    |
| `running`   | Scan is currently in progress.                   |
| `completed` | Scan completed successfully.                     |
| `failed`    | Scan encountered an error during execution.      |
| `cancelled` | Scan was manually cancelled during execution.    |

:::note
A `completed` status only indicates that the scan ran to completion. It **does not** imply a vulnerability-free result—vulnerabilities may still be present.
:::

---

## Step 6: Analyze Your Results

After completion, locate your scan in the assessment list and click on **Report** under the `Actions` column (or click anywhere on the row) to view detailed results.

![Completed Scan Results View](/img/redteam/CompletedScan.png)

This will open the comprehensive scan report:

![Detailed Scan Report Dashboard](/img/redteam/ScanReport.png)

:::note
For guidance on interpreting the scan results and taking remediation steps, refer to our [Understanding Redteam Report Guide](understanding-reports).
:::

---

## How to Cancel a Scan

To cancel a running scan, click on the **Abort** button available in the **Actions** column of the scan table.

![Scan Progress Monitoring Dashboard](/img/redteam/MonitorScan.png)

A confirmation dialog will appear. Click **Yes** to confirm and abort the scan.

![RedTeam Scan Abort Confirmation](/img/redteam/AbortRedteamScan.png)

---

## Understanding Failed Scans

If a scan fails for any reason, an **error code** will be displayed in the **Actions** column of the scan table.

- You can **hover** over the error icon to view a quick description.
![Hover on Exit Code](/img/redteam/HoverExitCode.png)

- Alternatively, click on **Report** to open the detailed scan report view.

In the report view, you'll find:

- Scan configuration details
- Error code
- Full error description

![Failed Scan Report](/img/redteam/FailedScanReport.png)

---

## Troubleshooting Common Issues

(coming soon)

## Support and Resources

### Documentation
- [Configuration Guide](/javelin-redteam/configuration): Detailed configuration options
- [Categories Guide](/javelin-redteam/categories/overview): Understanding vulnerability categories
- [Engines Guide](/javelin-redteam/engines/overview): Attack enhancement techniques

### Community and Support
- **GitHub Issues**: Report bugs and request features
- **Documentation**: Comprehensive guides and examples
- **Enterprise Support**: Dedicated support for enterprise customers

### Best Practices
1. **Start Small**: Begin with basic scans before expanding
2. **Regular Testing**: Integrate into development workflow
3. **Remediation Focus**: Prioritize fixing found issues
4. **Continuous Learning**: Stay updated on new vulnerability types

Congratulations! You've completed your first Javelin RedTeam security assessment. Regular red teaming helps ensure your AI applications remain secure as they evolve and face new threats. 
