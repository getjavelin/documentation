# Getting Route
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="cURL">

```shell
curl -X GET "https://api.javelin.live/v1/admin/routes/cohere"  
```

</TabItem>
<TabItem value="py" label="Python">

```py
    from javelin_sdk import (
        JavelinClient,
        Route
    )

    import os

    # Retrieve environment variables
    javelin_api_key = os.getenv('JAVELIN_API_KEY')
    javelin_virtualapikey = os.getenv('JAVELIN_VIRTUALAPIKEY')
    llm_api_key = os.getenv('LLM_API_KEY')

    # create javelin client
    client = JavelinClient(base_url="https://api.javelin.live",
                        javelin_api_key=javelin_api_key,
                        javelin_virtualapikey=javelin_virtualapikey,
                        llm_api_key=llm_api_key
    ) 

    # route name to get is "eng_dept"
    route_name = "eng_dept"

    # get the route, for async use `await client.aget_route(route_name)`
    print(client.get_route(route_name))
```

</TabItem>
</Tabs>
