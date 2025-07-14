---
id: infotypes-reference
title: InfoTypes Reference
description: Complete reference of all supported sensitive data types for Javelin's data protection
sidebar_label: InfoTypes Reference
---

# InfoTypes Reference

This reference guide provides a comprehensive list of all sensitive data types (InfoTypes) that can be detected by Javelin's data protection system. These InfoTypes are used in templates to define which types of sensitive information to detect and how to handle them.

## Personal Information

Information that can identify an individual person.

| InfoType | Description |
|----------|-------------|
| `EMAIL_ADDRESS` | Email addresses in various formats |
| `PHONE_NUMBER` | Phone numbers including international formats |
| `PERSON_NAME` | Individual names including first, last, and full names |
| `STREET_ADDRESS` | Physical street addresses |

## Government IDs & Documentation

Government-issued identification numbers and official documents.

| InfoType | Description |
|----------|-------------|
| `US_SOCIAL_SECURITY_NUMBER` | US Social Security Numbers (SSN) |
| `US_INDIVIDUAL_TAXPAYER_IDENTIFICATION_NUMBER` | US Individual Taxpayer Identification Numbers (ITIN) |
| `US_DRIVERS_LICENSE_NUMBER` | US driver's license numbers |
| `US_PASSPORT` | US passport numbers |
| `PASSPORT` | General passport numbers |
| `US_EMPLOYER_IDENTIFICATION_NUMBER` | US Employer Identification Numbers (EIN) |
| `US_ADOPTION_TAXPAYER_IDENTIFICATION_NUMBER` | US Adoption Taxpayer Identification Numbers (ATIN) |
| `US_PREPARER_TAXPAYER_IDENTIFICATION_NUMBER` | US Preparer Taxpayer Identification Numbers (PTIN) |

## Financial Information

Financial account numbers, credit cards, and payment-related data.

| InfoType | Description |
|----------|-------------|
| `CREDIT_CARD_NUMBER` | Credit card numbers from major issuers |
| `CREDIT_CARD_TRACK_NUMBER` | Magnetic stripe track data from credit cards |

## Medical & Healthcare

Medical records, healthcare identifiers, and health-related information.

| InfoType | Description |
|----------|-------------|
| `MEDICAL_RECORD_NUMBER` | Medical record identification numbers |
| `MEDICAL_TERM` | Medical terminology and health-related terms |
| `US_MEDICARE_BENEFICIARY_ID_NUMBER` | US Medicare Beneficiary Identifier (MBI) numbers |
| `US_HEALTHCARE_NPI` | US National Provider Identifier (NPI) numbers |
| `US_DEA_NUMBER` | US Drug Enforcement Administration (DEA) numbers |

## Authentication & Security

Credentials, tokens, and security-related information.

| InfoType | Description |
|----------|-------------|
| `AUTH_TOKEN` | Generic authentication tokens |
| `AWS_CREDENTIALS` | Amazon Web Services access keys and credentials |
| `AZURE_AUTH_TOKEN` | Microsoft Azure authentication tokens |
| `BASIC_AUTH_HEADER` | HTTP Basic Authentication headers |
| `GCP_API_KEY` | Google Cloud Platform API keys |
| `GCP_CREDENTIALS` | Google Cloud Platform credentials |
| `JSON_WEB_TOKEN` | JWT tokens used for authentication |
| `ENCRYPTION_KEY` | Cryptographic encryption keys |
| `OAUTH_CLIENT_SECRET` | OAuth client secret keys |
| `PASSWORD` | Passwords and passphrases |
| `SSL_CERTIFICATE` | SSL/TLS certificates |
| `STORAGE_SIGNED_POLICY_DOCUMENT` | Cloud storage signed policy documents |
| `STORAGE_SIGNED_URL` | Pre-signed URLs for cloud storage |
| `WEAK_PASSWORD_HASH` | Weak or compromised password hashes |
| `XSRF_TOKEN` | Cross-Site Request Forgery (CSRF) tokens |

## Network & Technical

Network identifiers, cookies, and technical system information.

| InfoType | Description |
|----------|-------------|
| `MAC_ADDRESS_LOCAL` | Media Access Control (MAC) addresses |
| `HTTP_COOKIE` | HTTP cookies containing session or tracking data |

## Vehicle Information

Vehicle-related identification numbers.

| InfoType | Description |
|----------|-------------|
| `VEHICLE_IDENTIFICATION_NUMBER` | Vehicle Identification Numbers (VIN) |

## Usage in Templates

These InfoTypes are used in data protection templates to specify which types of sensitive data to detect. Here's an example of how to use them:

```json
{
  "infoTypes": [
    {"name": "EMAIL_ADDRESS"},
    {"name": "PHONE_NUMBER"},
    {"name": "CREDIT_CARD_NUMBER"},
    {"name": "US_SOCIAL_SECURITY_NUMBER"}
  ]
}
```

## Custom InfoTypes

In addition to the built-in InfoTypes listed above, you can also create custom InfoTypes using:

- **Regular Expressions**: Define custom patterns to detect specific data formats
- **Dictionary-based Detection**: Use keyword lists to detect reserved or sensitive terms

Example of custom InfoTypes:

```json
{
  "infoTypes": [
    {
      "name": "OPENAI_API_KEY",
      "regex": "sk-[a-zA-Z0-9]{48}"
    },
    {
      "name": "RESERVED_KEYWORD",
      "dictionary": {
        "wordList": ["confidential", "secret", "private", "classified", "restricted"]
      }
    }
  ]
}
```

## Related Documentation

- [Data Protection Templates](/javelin-core/administration/createtemplate)
- [Sensitive Data Protection Overview](./privacyredaction.md)
- [InfoTypes Configuration](./infotypes.md)
