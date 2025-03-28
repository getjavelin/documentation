# Alert Integration

## Slack Alert Integration

Slack alerting in Javelin requires a webhook for sending messages to a Slack channel.

### Steps to Create a Slack Webhook

1. **Go to Slack API Portal:** Visit [Slack API](https://api.slack.com/apps) and sign in.
2. **Create a New App:** Click on "Create New App" and choose "From scratch."
3. **Select Features:** Under "Add features and functionality," click on "Incoming Webhooks."
4. **Activate Incoming Webhooks:** Toggle the switch to "On."
5. **Create a Webhook URL:** Scroll down to "Webhook URLs for Your Workspace" and click "Add New Webhook to Workspace."
6. **Choose a Channel:** Select the Slack channel where alerts should be sent.
7. **Copy the Webhook URL:** After authorization, copy the generated webhook URL.
8. **Use in Javelin:** Provide this webhook URL as a parameter in Javelin's Slack alert configuration.

## Splunk Alert Integration

Splunk alerting in Javelin requires the HTTP Event Collector (HEC) with a base URL, a token, and a payload containing `event` and `sourcetype` (which can have a manual value).

### Steps to Create an HTTP Event Collector (HEC) in Splunk

1. **Log in to Splunk:** Sign in to your Splunk instance.
2. **Navigate to HEC Settings:**
    - Go to "Settings" > "Data Inputs."
    - Click on "HTTP Event Collector."
3. **Create a New Token:**
    - Click on "New Token."
    - Provide a name for the token.
4. **Select Input Settings:**
    - Choose the allowed index where the events should be stored.
    - Set "Sourcetype" (can be set to "manual").
5. **Review and Submit:** Complete the setup and copy the generated token.
6. **Find Base URL:** The base URL follows the format: `https://<splunk-instance>:8088`.
7. **Use in Javelin:**
    - Provide the base URL and token in Javelin’s Splunk alert configuration.
    - Ensure the `payload` contains `event` and `sourcetype` fields.

This setup enables Javelin to send alerts to both Slack and Splunk effectively.

# Configuring Alerts in Javelin

## Steps to Configure an Alert

To configure an alert in the Javelin application, follow these steps:

### 1. Create a New Alert

Perform a **POST** request to:

```
<base_url>/v1/admin/alerts/config
```

with the following JSON body:

### Important Configuration Fields

- **name**: The name of the alert configuration.
- **receiver_type**: Can be `slack` or `splunk`.
- **enabled**: Boolean value (`true` or `false`) indicating if the alert is active.
- **configuration**: Contains specific parameters based on the receiver type.
    - For **Slack**, Javelin requires:
        - `webhook_url`: The Slack webhook URL.
    - For **Splunk**, Javelin requires:
        - `endpoint`: The Splunk HEC endpoint.
        - `token`: The authentication token.
        - `payload`: Contains `event` and `sourcetype`.
- **trigger_condition**: Specifies when the alert should be triggered (e.g., matching threat types).
    - The alert is triggered when any of the specified conditions match.
    - Supported fields:
        1. **account_ids**: Can contain a list of account IDs to trigger alerts based on specific accounts.
        2. **gateway_names**: Can contain a list of gateway names to trigger alerts based on specific gateway.
        3. **application_ids**: Can contain a list of application IDs to trigger alerts based on specific applications.
        4. **route_names**: Can contain a list of route names to trigger alerts when specific routes are accessed.
        5. **threats**: Can contain a list of threats; the alert is triggered when any of these threats are detected.
- **severity**: Defines the severity level of the alert (`low`, `medium`, `high`).

### Example Alert Configuration (Splunk)

```json
{
    "name": "Splunk alert",
    "receiver_type": "splunk",
    "enabled": true,
    "configuration": {
        "token": "<token>",
        "payload": {
            "event": "Javelin trigger",
            "sourcetype": "<sourcetype>"
        },
        "endpoint": "https://<splunk_url>:<port>/services/collector/raw"
    },
    "trigger_condition": {
        "threats": [
            "prompt_injection_detected",
            "sensitive_data_replaced"
        ]
    },
    "severity": "high"
}
```

---

### 2. Update an Existing Alert

To update an alert configuration, perform a **PUT** request to:

```
<base_url>/v1/admin/alerts/config/<alert_id>
```

with the full alert configuration including any updated fields.

Ensure you send the complete payload, not just the modified fields.

This allows Javelin to properly store and apply the updated alert settings.