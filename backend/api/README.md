# This is the Backend

GetResumeCounter 
- adding the COSMOSDB Bindings 
Ensure that the correct nuget package is installed 

Copy the primary connection string from cosmos db to local.settings.json

You must create the function in order to have a local project folder otherwise you wont be able to deploy the function to azure

Then run func host start from api folder
- update html to include counter

-body holds the function counter and diplays it as seen below 

<body>
    <script src="main.js"></script>
    </h1>
    <p>This site has been viewed: <span id="counter"></span> times</p>                                       
</body>
                                    