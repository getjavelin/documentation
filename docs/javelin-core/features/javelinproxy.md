# Super Resilience Proxy

## Overview: Always Proxy on Recoverable Internal Errors

Javelin introduces **Super Resilience Proxy**, a robust error-handling capability designed to improve system availability and gracefully degrade when internal components fail. By distinguishing between *acceptable failure states* and *recoverable internal errors*, Javelin ensures that end-user experience is protected even in the face of unexpected faults.

---

## 🔍 Error Categorization

Javelin classifies failures into two distinct categories:

### ✅ Acceptable Failure States
Structured rejections that are safe to expose to users:

- Guardrail policy violations
- Custom route not found
- Custom provider not found

These are returned as structured 4xx responses based on policy configuration or upstream logic.


### 🔁 Recoverable Internal Errors

Unexpected internal issues that **should not** be exposed to users:

- JSON marshaling/unmarshaling errors
- Missing or unknown model entries in universal route specs
- Internal microservice or admin API unavailability
- Guardrail model access failures or timeouts

---

## 🔄 Automatic Fallback to Proxy Mode

When a recoverable internal error is detected, Javelin will now **automatically fallback to proxy mode**—allowing the request to pass through transparently instead of returning a 5xx error.

### ✅ Benefits:
- Increased system resilience
- Higher availability
- Better user experience with fewer disruptions

This graceful degradation strategy ensures requests are completed even when internal enrichment or enforcement logic encounters issues.

---

## 📊 Metrics & Observability Integration

All fallback proxy events are:
- Logged with enriched metadata
- Surfaced in Observability traces with full context
- Useful for debugging, detection, and incident analysis

This enables teams to monitor fallback behavior, understand root causes, and optimize reliability over time.



## 📌 Note
Fallback behavior applies only to recoverable internal errors. Requests failing due to valid guardrail or policy violations will still return structured 4xx responses as per your configuration or upstream logic