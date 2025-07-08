# Steps to Create a Slack Webhook

1. **Go to Slack API Portal:** Visit [Slack API](https://api.slack.com/apps) and sign in.
2. **Create a New App:** Click on "Create New App" and choose "From scratch."
3. **Select Features:** Under "Add features and functionality," click on "Incoming Webhooks."
4. **Activate Incoming Webhooks:** Toggle the switch to "On."
5. **Create a Webhook URL:** Scroll down to "Webhook URLs for Your Workspace" and click "Add New Webhook to Workspace."
6. **Choose a Channel:** Select the Slack channel where alerts should be sent.
7. **Copy the Webhook URL:** After authorization, copy the generated webhook URL.
8. **Use in Javelin:** Provide this webhook URL as a parameter in Javelin's Slack alert configuration.