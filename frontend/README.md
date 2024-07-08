# CyberFlash
 main.js contains visitor counter code 

Updating github files 
- git add -A
- git commit -m " " 
- git push 

1. Editing html file 
2. When to create Cosmos Db accounnt next 
3. Creating the Azure Function
- using func host start 
4. Editing html file to make counter data visible
- the main.js file has a data.count which should match the count in cosmosDB
{
    "id": "1",
    "count": 9,
    "_rid": "kadMAP-s8-oBAAAAAAAAAA==",
    "_self": "dbs/kadMAA==/colls/kadMAP-s8-o=/docs/kadMAP-s8-oBAAAAAAAAAA==/",
    "_etag": "\"bc0083da-0000-0200-0000-66822f6c0000\"",
    "_attachments": "attachments/",
    "_ts": 1719807852
}


In azure add https://getresumecounter28.azurewebsites.net
to the CORS section

Then right click frontend folder and deploy to static website 




                                            <!--body holds the function counter and diplays it -->

                                            Hi, I'm Khadijah<br>
                                            <body>
                                                <script src="main.js"></script>
                                              </h1>
                                              <p>This site has been viewed: <span id="counter"></span> times</p>
                                              
                                              </body>


Next is configuring the custom domain using azure cdn
- storage account  
- then create azure cdn
- adding custom domain(cyberflash.net) to CDN profile
- have to enablle https and enable cors setting 
- associate the endpoint 
- Validate domain custom ownership
-   note this can take approximately 10 minutes to load 

Validation state hen from approved to deployed



This XML file does not appear to have any style information associated with it. The document tree is shown below.
<Error>
<Code>InvalidQueryParameterValue</Code>
<Message>Value for one of the query parameters specified in the request URI is invalid. RequestId:349475fe-801e-003f-7333-cc2d80000000 Time:2024-07-02T03:56:37.3972391Z</Message>
<QueryParameterName>comp</QueryParameterName>
<QueryParameterValue/>
<Reason/>
</Error>

- to fix this error make sure files are updated to azure storage by redeploying frontend files 
- add https://thecyberflash.net to  CORS in azure

created workflows
.github/workflows/backend.main.yml #1: Commit 6d112b6 pushed by khadijahW
- backend failed 
- this is because the backend has not been implemented yet 

Error

when loading 
https://getresumecounter12.z20.web.core.windows.net/
the counter was not working 

- running inspect on the loaded page and correcting the errors will allow the api to run
- checking main.js for proper formating also helps 
- this also helps it show on the cyberflash.net


github and linkedin icons not displaying in html 
-need to add this 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">