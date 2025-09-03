---
id: style-guide
title: Documentation Style Guide
description: Comprehensive style guide for Javelin documentation including writing standards, formatting conventions, and content organization guidelines
sidebar_label: Style Guide
---

# Documentation Style Guide

This guide establishes consistent standards for all Javelin documentation to ensure clarity, usability, and professional presentation across our technical content.

## Writing Style

### Voice and Tone

- **Voice**: Clear, direct, and professional
- **Tone**: Helpful and instructive without being overly casual
- **Perspective**: Use second person ("you") when addressing users directly
- **Active voice**: Prefer active over passive voice

**Examples:**
- ✅ "Configure your API key in the environment variables"
- ❌ "API keys should be configured in environment variables"

### Tense

- Use present tense for describing current functionality
- Use future tense only when describing upcoming features
- Use past tense for completed actions in tutorials

**Examples:**
- ✅ "Javelin provides comprehensive audit trails"
- ✅ "After you complete this step, you will see the results"
- ❌ "Javelin will provide audit trails" (unless it's a future feature)

### Language Guidelines

- Write concisely and avoid unnecessary words
- Define technical terms when first introduced
- Use consistent terminology throughout documentation
- Avoid jargon unless it's industry-standard and defined

## Formatting Standards

### Headers

Use hierarchical heading structure:

```markdown
# Page Title (H1) - Only one per document
## Major Section (H2)
### Subsection (H3) 
#### Sub-subsection (H4) - Use sparingly
```

**Header Guidelines:**
- Use sentence case for headers
- Avoid ending headers with periods
- Keep headers descriptive but concise
- Don't skip heading levels (e.g., H1 → H3)

### Lists

**Unordered Lists:**
- Use hyphens (-) for consistency
- Capitalize the first word of each item
- End items with periods only if they're complete sentences
- Use parallel structure across items

**Ordered Lists:**
1. Use for sequential steps or procedures
2. Number items with periods (1. 2. 3.)
3. Follow the same punctuation rules as unordered lists

### Code Blocks

#### Language Tags
Always specify language for syntax highlighting:

```python
# Python code
from javelin_sdk import JavelinClient
```

```bash
# Shell commands
pip install javelin_sdk
```

```javascript
// JavaScript code
const client = new JavelinClient(config);
```

```json
{
  "configuration": "value"
}
```

#### Code Block Titles
Use descriptive titles for code blocks when helpful:

```python title="Initialize Javelin Client"
config = JavelinConfig(
    base_url="https://your-api-domain.com",
    javelin_api_key=os.getenv('JAVELIN_API_KEY')
)
```

#### Environment Variables
Format environment variables consistently:

```bash
export JAVELIN_API_KEY="your-api-key-here"
export OPENAI_API_KEY="your-openai-key-here"
```

### Response Examples

Format API responses consistently:

```json title="Example Response"
{
    "choices": [{
        "message": {
            "content": "Response content here"
        }
    }],
    "javelin": {
        "correlation_id": "01JQRJWPDMDMBRYTXR07RCAYBX",
        "archive_enabled": true
    }
}
```

### Error Handling Documentation

Structure error documentation with:
1. Error type/code
2. Description
3. Possible causes
4. Resolution steps

```python title="Error Handling Example"
try:
    client.create_route(route)
except UnauthorizedError:
    print("Failed to create route: Unauthorized")
except NetworkError:
    print("Failed to create route: Network Error")
```

## Front-matter Requirements

### Standard Front-matter Template

```yaml
---
id: unique-identifier
title: Human-Readable Page Title
description: Brief description of the page content for SEO and navigation (150-160 characters)
sidebar_label: Label for Sidebar
---
```

### Field Guidelines

- **id**: Use kebab-case, must be unique within the documentation
- **title**: Use sentence case, be descriptive and specific
- **description**: Write for search engines and previews, 150-160 characters
- **sidebar_label**: Keep concise for navigation, use title case

### Optional Front-matter Fields

```yaml
---
# For overview pages
slug: /
# For pages with specific URLs
slug: /custom-url
# For pages that shouldn't appear in sidebar
sidebar_position: 999
hide_in_sidebar: true
---
```

## Code Example Standards

### Complete Examples

Provide complete, runnable examples:

```python title="Complete Example"
from javelin_sdk import JavelinClient, JavelinConfig
import os
import dotenv

def main():
    # Load environment variables
    dotenv.load_dotenv()
    
    # Initialize client
    config = JavelinConfig(
        base_url="https://your-api-domain.com",
        javelin_api_key=os.getenv("JAVELIN_API_KEY")
    )
    client = JavelinClient(config)
    
    # Your code here
    
if __name__ == "__main__":
    main()
```

### Code Comments

- Use comments to explain complex logic
- Avoid obvious comments
- Focus on the "why" not the "what"
- Keep comments concise

### Placeholder Values

Use consistent placeholder formats:
- URLs: `https://your-api-domain.com`
- API Keys: `your-api-key-here` or `your-openai-key-here`
- Names: `your-provider-name`, `your-route-name`

## Link Guidelines

### Internal Links

Use relative paths for internal documentation links:

```markdown
[Python SDK Quickstart](../javelin-python/quickstart.md)
[Processor Overview](../javelin-processors/processors-overview)
```

### External Links

- Open external links in new tabs when appropriate
- Include brief context for external links
- Verify links before publishing

### Code Links

Link to specific files or sections when referencing code:

```markdown
See the [route configuration example](../javelin-python/quickstart.md#creating-a-route) for details.
```

## File Naming Conventions

### File Names
- Use kebab-case: `style-guide.md`, `api-reference.md`
- Be descriptive and specific
- Avoid abbreviations unless widely understood
- Use `.md` extension for all Markdown files

### Directory Structure
- Group related content in logical directories
- Use descriptive directory names
- Maintain consistent hierarchy depth
- Avoid deeply nested structures (max 3 levels recommended)

## Sidebar Organization Rules

### Category Structure

```javascript
{
  type: 'category',
  label: 'Category Name',
  items: [
    'path/to/overview',
    'path/to/detailed-guide',
    {
      type: 'category',
      label: 'Subcategory',
      items: [
        'path/to/subcategory-item'
      ]
    }
  ]
}
```

### Ordering Guidelines

1. Overview/introduction pages first
2. Getting started content
3. Feature-specific guides
4. Advanced topics
5. Reference material
6. Troubleshooting

## Content Type Guidelines

### API Documentation

#### Structure
1. **Overview**: Brief description of the API endpoint
2. **Authentication**: Required authentication methods
3. **Parameters**: Request parameters with types and descriptions
4. **Request Example**: Complete request example
5. **Response Format**: Response structure and field descriptions
6. **Response Example**: Sample response
7. **Error Codes**: Possible errors and their meanings

#### Parameter Documentation Format

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The provider name |
| `type` | string | Yes | Provider type (e.g., "openai") |
| `config` | object | No | Provider-specific configuration |

### How-to Guides

#### Structure
1. **Prerequisites**: What users need before starting
2. **Step-by-step instructions**: Numbered list with clear actions
3. **Verification**: How to confirm success
4. **Next steps**: Links to related content
5. **Troubleshooting**: Common issues and solutions

#### Prerequisites Format

```markdown
## Prerequisites

Before starting this guide, ensure you have:

- ✅ Javelin Python SDK installed
- ✅ Valid API credentials configured
- ✅ Basic familiarity with Python
```

### Reference Material

#### Structure
1. **Overview**: Brief description of the reference content
2. **Quick reference**: Tables or lists of key information
3. **Detailed descriptions**: Complete parameter/option documentation
4. **Examples**: Code samples for each major item

### Conceptual Explanations

#### Structure
1. **Introduction**: What concept is being explained
2. **Why it matters**: Business or technical value
3. **How it works**: Technical explanation
4. **Implementation details**: How to use in practice
5. **Best practices**: Recommended approaches
6. **Related concepts**: Links to related documentation

## Content Organization

### Admonitions

Use Docusaurus admonitions for important information:

```markdown
:::note
This feature requires Javelin v2.0 or higher.
:::

:::tip
For better performance, consider enabling caching.
:::

:::warning
This action cannot be undone.
:::

:::danger
Never commit API keys to version control.
:::

:::info
Additional resources are available in the API reference.
:::
```

#### When to Use Admonitions

- **Note**: Additional context or clarification
- **Tip**: Best practices or helpful suggestions
- **Warning**: Important considerations or potential issues
- **Danger**: Critical security or data loss warnings
- **Info**: Links to additional resources

### Prerequisites Structure

Format prerequisites consistently:

```markdown
## Prerequisites

To follow this guide, you'll need:

- [Javelin Python SDK](../javelin-python/quickstart.md) installed
- Valid Javelin API credentials
- Python 3.8 or higher
- Basic understanding of LLM concepts
```

### Cross-linking Best Practices

- Link to related concepts when first mentioned
- Provide "Next steps" sections with relevant links
- Use descriptive link text (avoid "click here")
- Link to specific sections when appropriate
- Maintain link accuracy during updates

### Navigation Helpers

Include navigation aids in longer documents:

```markdown
## Table of Contents

- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Advanced Usage](#advanced-usage)
- [Troubleshooting](#troubleshooting)
```

## Quality Checklist

Before publishing documentation, verify:

### Content Quality
- [ ] Information is accurate and up-to-date
- [ ] Examples are tested and working
- [ ] Prerequisites are clearly stated
- [ ] Next steps are provided
- [ ] Common issues are addressed

### Writing Quality
- [ ] Content follows style guidelines
- [ ] Headers use proper hierarchy
- [ ] Links are working and relevant
- [ ] Code examples include language tags
- [ ] Front-matter is complete and correct

### Technical Quality
- [ ] Code examples are complete and runnable
- [ ] API endpoints and parameters are accurate
- [ ] Error handling is demonstrated
- [ ] Security best practices are followed
- [ ] Environment variables are properly formatted

### User Experience
- [ ] Content is organized logically
- [ ] Complex concepts are broken down clearly
- [ ] Visual hierarchy guides readers effectively
- [ ] Cross-references help navigation
- [ ] Content serves the intended audience

## Contributing to This Guide

This style guide is a living document. When you notice patterns in the documentation that aren't covered here, or when you develop new conventions, please propose updates to keep this guide current and comprehensive.

To suggest changes:
1. Review existing documentation patterns
2. Propose specific guidelines with examples
3. Consider impact on existing content
4. Submit updates for team review
