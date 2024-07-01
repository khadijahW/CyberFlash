// script.js

window.addEventListener('DOMContentLoaded', () => {
  getVisitCount();
});
// const functionApiUrl='https://getresumecount1.azurewebsites.net';

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
  console.log('Fetching visit count...');
  fetch(functionApiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          console.log('Received data:', data);
          if (data && typeof data.Count !== 'undefined') {
              console.log("Hello! You are visitor number: " + data.Count);
              document.getElementById('counter').innerText = data.Count;
          } else {
              throw new Error('Count data is invalid or missing');
          }
      })
      .catch(error => {
          console.error('Error fetching visit count:', error);
          document.getElementById('counter').innerText = 'Error loading count';
      });
};
