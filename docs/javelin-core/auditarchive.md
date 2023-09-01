# Archiving 

Javelin supports robust archiving capabilities to satisfy a variety of use cases. 

## Use Cases

### Audit & Compliance
Every prompt, LLM request and response that is sent on a route can be configured to be archived. 
Note: Archiving incurs separate storage costs

Archives will be annotated with timestamp indicating the date and time for supporting audit and compliance requirements. Archived may be separately queried and reviewed. 

### Model Fine Tuning
Often Enterprises want to archive all conversations or request/response pairs on one or more routes for future model fine tuning or custom model building. 

Archives will support metadata tagging to store response effectiviness or accuracy scores. The accuracy scores can then be used for model training purposes. 


### Hallucination Detection
Once enabled, Archives can be subsequently searched or tagged with hallucination probabilities. See Hallucination Detection for more details. 

## Archive Retention
Archives can be configured to be automatically purged on a per-route basis or based on some elapsed time. For instance, records older than 180 days may be automatially marked for purging. 

## Compliance Deletions
To comply with GDPR, CCPA and other privacy regulations, Archives of individual records may be tagged and deleted. 