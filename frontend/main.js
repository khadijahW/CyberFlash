// script.js

window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
})
const functionApiUrl = 'https://getresumecounter28.azurewebsites.net';
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    fetch(functionApiURL)
        .then(response => response.json())
        .then(response => {
            console.log("Website called function API.");
            document.getElementById("counter").innerText = response.counter;
        })
        .catch(function(error){
    
        });
}