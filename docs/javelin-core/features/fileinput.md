# Inline File Input

## Inline File Input Support Across Providers

Javelin provides a **unified interface** for working with inline file input (base64-encoded or inline reading) across all supported AI providers.  

This allows developers to seamlessly pass files (documents, images, media, etc.) to models without needing provider-specific handling.

For details on **supported file types** and provider-specific limitations, please refer to the official documentation linked below.

---

| Provider         | Inline File Input Support | Official Documentation |
|------------------|----------------------------|------------------------|
| **OpenAI**       | ✅ Base64 inline | [OpenAI File Guide](https://platform.openai.com/docs/guides/pdf-files?api-mode=responses#base64-encoded-files) |
| **Azure OpenAI** | ✅ Responses API supports base64 inline | [Azure Responses API](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/responses?utm_source=chatgpt.com&tabs=python-key#base64-encoded-image) |
| **Anthropic**    | ✅ Base64 inline | [Anthropic File Handling](https://docs.claude.com/en/docs/build-with-claude/pdf-support#option-2%3A-base64-encoded-pdf-document) |
| **Amazon Bedrock** | ✅ Inline reading | [Bedrock Example](https://builder.aws.com/content/2i4v2vZRb9YgL2RxkawPiF8f0lZ/using-document-chat-with-the-amazon-bedrock-converse-api) |
| **Gemini**       | ✅ Inline reading | [Gemini Inline Files](https://ai.google.dev/gemini-api/docs/document-processing#inline_data) |

---

:::note 
While Javelin ensures a consistent API experience, the exact file formats and size limits are defined by each provider. Please review their official documentation for the most up-to-date details.
:::

## Example: Inline File Input via Javelin Unified Endpoint


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

<details>
<summary>OpenAI</summary>
<Tabs>
  <TabItem value="Python">
    ```python [Python]
    import requests, os, base64, mimetypes
    # Config
    JAVELIN_OPEN_API = "https://your-api-domain.com/v1/responses"
    OPENAI_KEY = os.getenv("OPENAI_KEY")
    JAVELIN_API_KEY = os.getenv("JAVELIN_API_KEY")

    FILE_PATH = "/your/path/to/pdf-file"

    def get_base64(file_path):
        with open(file_path, "rb") as f:
            data = f.read()

        return base64.b64encode(data).decode("utf-8")

    base64_string = get_base64(FILE_PATH)

    payload = {
        "model": "gpt-5",
        "input": [
            {
                "role": "user",
                "content": [
                    {"type": "input_text", "text": "What is this file about?"},
                    {
                        "type": "input_file",
                        "file_data": f"data:application/pdf;base64,{base64_string}",
                        "filename": <your-file-name>,
                    },
                ],
            }
        ],
    }

    headers = {
        "Authorization": f"Bearer {OPENAI_KEY}",
        "Content-Type": "application/json",
        "x-javelin-apikey": JAVELIN_API_KEY,
        "x-javelin-route": "<your-javelin-unified-route>",
    }

    resp = requests.post(JAVELIN_OPEN_API, headers=headers, json=payload)
    resp.raise_for_status()
    print("\n=== Model Output ===")
    print(resp.json().get("output_text", resp.json()))
    ```
  </TabItem>
  
  <TabItem value="Shell">
    ```bash [Shell]
    curl -X POST "https://your-api-domain.com/v1/responses" \
    -H "Authorization: Bearer $OPENAI_KEY" \
    -H "x-javelin-apikey: $JAVELIN_API_KEY" \
    -H "x-javelin-route: <your-javelin-unified-route>" \
    -H "Content-Type: application/json" \
    -d '{
        "model": "gpt-5",
        "input": [
        {
            "role": "user",
            "content": [
            {
                "type": "input_text", 
                "text": "What is this file about?"
            },
            {
                "type": "input_file",
                "file_data": "data:application/pdf;base64,BASE64_STRING_HERE",
                "filename": "<your-file-name>"
            }
            ]
        }
        ]
    }'
    ```
  </TabItem>
</Tabs>
</details>

<details>
<summary>Azure OpenAI</summary>
<Tabs>
<TabItem value="Python">
```python [Python]
import requests, os, base64, mimetypes

# Config
JAVELIN_AZURE_API = "https://your-api-domain.com/v1/openai/responses?api-version=2025-04-01-preview"
AZURE_OPENAI_KEY = os.getenv("AZURE_OPENAI_KEY")
JAVELIN_API_KEY = os.getenv("JAVELIN_API_KEY")

FILE_PATH = "/your/path/to/pdf-file"

def get_base64(file_path):
    with open(file_path, "rb") as f:
        data = f.read()

    return base64.b64encode(data).decode("utf-8")

base64_string = get_base64(FILE_PATH)

payload = {
    "model": "gpt-5",
    "input": [
        {
            "role": "user",
            "content": [
                {"type": "input_text", "text": "What is this file about?"},
                {
                    "type": "input_file",
                    "file_data": f"data:{mime_type};base64,{base64_string}",
                    "filename": filename,
                },
            ],
        }
    ],
}

headers = {
    "Api-Key": f"{AZURE_OPENAI_KEY}",
    "Content-Type": "application/json",
    "x-javelin-apikey": JAVELIN_API_KEY,
    "x-javelin-route": "your-javelin-unified-route",
}

resp = requests.post(JAVELIN_AZURE_API, headers=headers, json=payload)
resp.raise_for_status()
print("\n=== Model Output ===")
print(resp.json().get("output_text", resp.json()))
    ```
</TabItem>

<TabItem value="Shell">
```bash [Shell]
curl -X POST "https://your-api-domain.com/v1/openai/responses?api-version=2025-04-01-preview" \
-H "Api-Key: $AZURE_OPENAI_KEY" \
-H "x-javelin-apikey: $JAVELIN_API_KEY" \
-H "x-javelin-route: <your-javelin-unified-route>" \
-H "Content-Type: application/json" \
-d '{
    "model": "gpt-5",
    "input": [
    {
        "role": "user",
        "content": [
        {
            "type": "input_text", 
            "text": "What is this file about?"
        },
        {
            "type": "input_file",
            "file_data": "data:application/pdf;base64,BASE64_STRING_HERE",
            "filename": "sample.pdf"
        }
        ]
    }
    ]
}'
    ```
    </TabItem>
</Tabs>
</details>

<details>
<summary>Amazon Bedrock</summary>
:::note
Amazon Bedrock works with both **base64-encoded files** and **raw inline files**.  
The example below demonstrates usage **without base64 encoding**.
:::
<Tabs>
  <TabItem value="Python">
    ```python [Python]
    import requests, os, base64

    model_id = "anthropic.claude-3-haiku-20240307-v1:0"

    # Config
    JAVELIN_AMAZON_API = f"https://your-api-domain.com/v1/model/{model_id}/converse"
    JAVELIN_API_KEY = os.getenv("JAVELIN_API_KEY")

    FILE_PATH = "/your/path/to/pdf-file"

    def get_doc_bytes(file_path):
        with open(file_path, "rb") as f:
            data = f.read()

        return data

    doc_byte = get_doc_bytes(FILE_PATH)

    payload = {
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "text": "Briefly compare the models described in this document",
                    },
                    {
                        "document": 
                        {
                            "format": "pdf",
                            "name": "Amazon Nova Service Cards", 
                            "source": {
                                "bytes": doc_byte
                        }
                        }
                    }
                ]
            }
        ]
    }

    headers = {
        "Content-Type": "application/json",
        "x-javelin-apikey": JAVELIN_API_KEY,
        "x-javelin-route": "<your-javelin-unified-route>"
    }

    resp = requests.post(JAVELIN_AMAZON_API, headers=headers, json=payload)
    resp.raise_for_status()
    print("\n=== Model Output ===")
    print(resp.json().get("output_text", resp.json()))
    ```
  </TabItem>
  
  <TabItem value="Shell">
    ```bash [Shell]
    curl -X POST "https://your-api-domain.com/v1/model/{model_id}/converse" \
    -H "x-javelin-apikey: $JAVELIN_API_KEY" \
    -H "x-javelin-route: <your-javelin-unified-route>" \
    -H "Content-Type: application/json" \
    -d '{
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "text": "Briefly compare the models described in this document",
                    },
                    {
                        "document": 
                        {
                            "format": "pdf",
                            "name": "Amazon Nova Service Cards", 
                            "source": {
                                "bytes": "<BYTES_HERE>"
                        }
                        }
                    }
                ]
            }
        ]
    }'
    ```
  </TabItem>
</Tabs>
</details>