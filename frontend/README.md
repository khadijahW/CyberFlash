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



define caching and purging as part of our CI/CD