# Getting Started

This guide will walk you through running your first security assessment with Javelin RedTeam, from initial setup to analyzing results. By the end of this guide, you'll have conducted a comprehensive red team evaluation of an AI application and understand how to interpret the findings.

## Prerequisites

Before starting, ensure you have:

- **Access to Javelin RedTeam**: Login credentials to access Javelin Redteam interface from the UI.
- **Target Application**: HTTP endpoint, model API, or test application to test the application. Javelin-Redteam includes reference lab applications for conducting sample assessments. 


## Step 1: Prepare Your Target Application

To understand more about target application please check [target applications section](../target-applications.md)
For this demo purposes, we will use `lab1`, (a sample app bundled with redteam) as described in the target applications section that uses openai models.

## Step 2: Register lab1

To register a target application on the Javelin Gateway, follow the steps below:


### 1. Add Application

First, add your target application (lab1 in this case) as described in the [Creating Application Guide](../../javelin-core/applicationconfiguration.md).

### 2. Configure API Request

In the **API Request** section of the application configuration details tab, provide the following details:

#### URL Configuration
- **URL**: Enter the target application's URL
- **Method**: Specify HTTP method (GET/POST)
- **Endpoint**: Complete endpoint path

#### Headers Configuration
Specify any headers that need to be passed to your target application:
- Authentication tokens
- Content-Type headers
- Custom headers required by your application

Example headers:
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer your-api-token",
  "X-API-Key": "your-api-key"
}
```

#### Payload Template
Provide a JSON schema representing the payload structure expected by the target application.

**Important**: Use `{{query}}` as a placeholder for dynamic values. This will be replaced at runtime during the actual application call.

Example payload template:
```json
{
  "query": "{{query}}"
}
```

:::note
Javelin-Redteam can automatically detect template fields and populate the target prompt into appropriate fields
It will look for the following fields and fill the first one it finds in the payload
["prompt", "query", "user_input", "request"]
:::

![API Request Configuration](/img/application/APIRequestSection.png)

### 3. Save the Application

After completing the above configurations, click **Save** to register the application with the Javelin Gateway.

The app is now ready to scan using javelin-redteam.


## Step 3: Create Your First Scan Configuration

### 1. Navigate to Redteam Assessments

After creating your application, click on it to open the application overview. From the top menu, select the **Redteam Assessments** tab and then click on **Create New Assessment**.

![Create Redteam Assessment Button](/img/redteam/RedteamAssessmentTab.png)

---

### 2. Configure Scan Settings

You will be presented with a configuration form where you need to define the scan parameters. After filling in the necessary details, click **Next**.

![Redteam Configuration Settings Form](/img/redteam/RedteamConfigSettings.png)

#### Configuration Fields

The following table outlines each configurable field in this step, along with its description and constraints:

| Field                    | Description                                                                 | Type         | Constraints / Notes                         |
|--------------------------|-----------------------------------------------------------------------------|--------------|----------------------------------------------|
| **Max Duration**         | Maximum allowed time (in minutes) for the scan. Once this duration is reached, scan will be forcefully timed out. | Integer      | Range: `3` to `750`                          |
| **Test Cases per Category** | Maximum number of test cases to run for each selected category.             | Integer      | Maximum allowed: `500`                       |
<!-- | **Concurrency**          | Displays how many test cases can run in parallel. This field is read-only and currently set to 1. | Integer (Read-only) | Currently fixed at `1`                       | -->
<!-- | **Strictness Level**     | Determines the sensitivity of test rules.                                   | String (Fixed) | Default: `High`; Not configurable            | -->

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

Once the scan is initiated, you'll be redirected to the **Assessments List** view where you can monitor progress.

:::tip
For detailed information about monitoring scans, cancelling running scans, and handling failed scans, see our [Scan Management Guide](scan-management.md).
:::

## Step 6: Analyze Your Results

After completion, locate your scan in the assessment list and click on **Report** under the `Actions` column (or click anywhere on the row) to view detailed results.

![Completed Scan Results View](/img/redteam/RedteamAssessmentTab.png)

This will open the comprehensive scan report:

![Detailed Scan Report Dashboard](/img/redteam/ScanReportHead.png)

:::note
For guidance on interpreting the scan results and taking remediation steps, refer to our [Understanding Redteam Report Guide](understanding-reports.md).
:::

---

## Support and Resources

### Documentation
- [Configuration Guide](/javelin-redteam/configuration): Detailed configuration options
- [Categories Guide](/javelin-redteam/categories/overview): Understanding vulnerability categories
- [Engines Guide](/javelin-redteam/engines/overview): Attack enhancement techniques
- [Scan Management Guide](/javelin-redteam/scan-management): Monitoring and managing scans

### Best Practices
1. **Start Small**: Begin with basic scans before expanding
2. **Regular Testing**: Integrate into development workflow
3. **Remediation Focus**: Prioritize fixing found issues

Congratulations! You've completed your first Javelin RedTeam security assessment. Regular red teaming helps ensure your AI applications remain secure as they evolve and face new threats. 
