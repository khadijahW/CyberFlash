// script.js

window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
})
const functionApiUrl = 'https://getresumecounter28.azurewebsites.net';
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 0;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}