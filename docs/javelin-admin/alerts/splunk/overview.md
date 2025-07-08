# Steps to Create an HTTP Event Collector (HEC) in Splunk

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