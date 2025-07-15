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

Register the target application on Javelin gateway as mentioned in the [creating application guide](/docs/javelin-core/applicationconfiguration.md)

## Step 2: Create Your First Scan Configuration

![](/img/redteam/CreateRedteamAssessment.png)

After creating the application, you can click on the application and select `Redteam Assessments` tab from the resulting menu, and click on `Create New Assessment`

![](/img/redteam/RedteamConfigSettings.png)

Then, select configuration settings for the scan and click `NEXT`. All the fields and their description is explained in the table below:

![](/img/redteam/ScanType.png)

Then select the scan type you want to run. Scan type determines the choice of subset of categories for which the scan will be run. If you want to choose amongst all the 15 available categories, go for a `custom` scan.

:::tip
For details about what is a category and what all categories are available, together with further explanation about each, see our [taxonomy guide](/docs/javelin-redteam/categories/overview.md)
:::

![](/img/redteam/ChooseCategory1.png)


Then select the categories that you want to run the scan for.

## Step 4: Run Your First Scan

![](/img/redteam/ChooseCategory2.png)

Lastly, click `RUN SCAN` to start running the assessment.


## Step 5: Monitor Scan Progress

![](/img/redteam/MonitorScan.png)

After that the scan will get `queued` for execution.
We will get back the list of assessments screen and once it starts executing, the status will change to `running`.
Every scan run will be assigned a unique id to track the data and report for that run.

Depending on the number of test cases, the scan can take from a few minutes to a few hours to run. This would be good time to grab some coffee!

Following are the status indicator values that one might encounter:

|Status|Description|
|------|-----------|
|`queued`|Scan is waiting to be processed in queue|
|`running`|Scan has started running|
|`completed`|Scan finished successfully|
|`failed`|Scan encountered an error|
|`cancelled`|Scan was cancelled/stopped while running|

:::note
The scan `completed` state means the execution of scan was successful. It could still have failing tests which means vulnerabilities were detected.
:::

## Step 6: Analyze Your Results

![](/img/redteam/CompletedScan.png)

Once the scan is complete, we can click on "View" under `Actions` to view detailed report of the scan run.

![](/img/redteam/ScanReport.png)

:::note
For Intepreting the report and taking remediation actions, please check the [Understanding redteam report guide](/docs/javelin-redteam/guides/understanding-reports.md)
:::


## Troubleshooting Common Issues

(coming soon)

## Support and Resources

### Documentation
- [Configuration Guide](/docs/javelin-redteam//configuration.md): Detailed configuration options
- [Categories Guide](/docs/javelin-redteam/categories/overview.md): Understanding vulnerability categories
- [Engines Guide](/docs/javelin-redteam/engines/overview.md): Attack enhancement techniques

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