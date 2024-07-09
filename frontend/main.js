// script.js

window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
})
const functionApiUrl = 'https://getresumecounter28.azurewebsites.net/api/GetResumeCounter?code=Te3lxoH2zt68yu6vcFFfDG7GoaKfQAjijSorcgg6eNaOAzFupFAAiQ%3D%3D';
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
    });
    return count;
}

