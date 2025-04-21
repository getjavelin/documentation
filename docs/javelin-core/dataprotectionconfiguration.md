# Integration Overview
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

Javelin provides a flexible framework for managing sensitive data. Its configuration options cater to a wide range of data privacy needs, from simple inspections to more complex data transformation tasks. 

# Template Object
When represented as json, the template object has the following structure:
<CodeBlock
  language="python">
  {`{
    "name": "name of the template",
    "description": "Template for Inspecting PII data",
    "type": "this could be \`inspect\`, \`de-identify\` etc.,",
    "enabled": true,
    "config": {
      "infoTypes": [{"name": "PASSWORD"}, {"name": "ENCRYPTION_KEY"}],
      "likelihood": "Likely"
    }
  }`}
</CodeBlock>


## Template Fields
These configuration settings are all defined per `template`, they are not global and are applied individually on each route. 

| Field | Description | 
| --------------- | --------------- | 
| `name` | The name of the template as it will appear on the gateway, specifically designed for data-sensitive protection. This should be a unique and descriptive title that clearly indicates the template's purpose, scope, or specific data protection capabilities it provides. The name facilitates easy identification and selection of the template for administrators and users navigating the system. | 
| `description` | Contain a brief but comprehensive description of the template, including its intended use case, primary features, and any unique characteristics | 
| `type` | Specifies the operational purpose of the template within the gateway's data protection framework. The type can be either `inspect`, indicating the template is designed to identify and report sensitive information without altering the data, or `de-identify`, which means the template is configured to remove, mask, or replace sensitive information to protect privacy. This distinction helps in selecting the appropriate template based on the data handling requirements of a specific task or workflow. | 
| `enabled`| This field indicates whether the template is currently enabled and should be considered active for use. It typically accepts a boolean value: true for enabled, indicating the template and its configurations are in use, or false for disabled, meaning the template is not in use and should be ignored by any processes or applications relying on these configurations. | 

### Config
| Field | Description | 
| --------------- | --------------- | 
| `infoTypes` | Defines the categories or types of sensitive information the system should identify and act upon. This could include personal identifiers (e.g., Social Security numbers, credit card numbers), health information, financial information, or any other data types considered sensitive within a particular context. Specifying infoTypes allows the system to target its scanning and protection mechanisms more effectively, ensuring that only relevant data is flagged for further action. | 
| `likelihood` | Specifies the confidence threshold or probability that identified information matches the defined infoTypes. This setting helps in tuning the sensitivity of the detection process, allowing for a balance between identifying true positives and minimizing false positives. Likelihood values might range from very low to very high, indicating the system's level of certainty required to flag data as sensitive. Adjusting this parameter can help organizations tailor the system's behavior to their risk tolerance and regulatory requirements, ensuring that data protection efforts are both effective and efficient. | 


