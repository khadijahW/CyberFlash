# Azure Resume 

This is my Cloud Resume built in Azure. The resume is a static website hosted on Azure Storage visually presented using files built with HTML, javascript and CSS.
My site can be viewed by navigating to https://thecyberflash.net/

Additionally her is the architecture diagram for my project:

<p align = "center">
<img src ="https://github.com/khadijahW/CyberFlash/blob/main/Azure.png" width ="650">
  </p>



# Frontend
- The frontend folder contains the files used to host the static website
- The api folder contains the dotnet API deployed to Azure functions
- The main.js file contains the visitor counter code

# Backend 
 - This is where the HTTP trigger function resides. When the functions is triggered it retrieves the CosmosDB item and adds 1 to it and returns this value to the GetResumeCounter


# Workflow


# Issues 
As I progressed through the project, I faced a few challenges and realizations as noted below:
I decided to document this issues for my own future record and also believe that this may help others if attempting this project.

>[Issue] The project Function was missing as I prepared to deploy my function
            Why: Copying files from other repositories I had created rather than the individual code


>[Issue] Resume counter not working
           why: Issue with main.js formating and displaying counter in html file 


>[Issue] This XML file does not appear to have any style information associated with it. The document tree is shown below. InvalidQueryParameterValue Value for one of the query parameters specified in the request URI is invalid. RequestId:349475fe-801e-003f-7333-cc2d80000000 Time:2024-07-02T03:56:37.3972391Z comp
          Why: Fronted end files not updated and necessary CORS orgin missing 


>[Issue] Backend workflow Failure
          Why: This is because the backend has not been implemented yet 
