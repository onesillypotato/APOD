// apod.js

async function fetchAPOD() {
    try {
      const datePicker = document.getElementById('datePicker').value;
      const apiKey = '3fEC8aKDeyTQqsLWQnHoQxIcPHRkscvPsSkf7rQt'; // Your NASA API Key
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${datePicker}`;
  
      const response = await fetch(url);
      const data = await response.json();
      
      displayAPOD(data);
    } catch (error) {
      console.error('Error fetching APOD:', error);
    }
}
  
function displayAPOD(data) {
    console.log(data)
    const apodContainer = document.getElementById('apodContainer');
    apodContainer.innerHTML = ''; // Clear previous content
  
    const title = document.createElement('h2');
    title.textContent = data.title;
  
    const date = document.createElement('p');
    date.textContent = data.date;

    const test = document.createElement('h3');
    test.textContent = data.explanation;

    const apodImage = document.createElement('img');
    apodImage.id = 'apodImage';
    apodImage.src = data.url;
    apodImage.alt = data.title;
  
    apodContainer.appendChild(title);
    apodContainer.appendChild(date);
    apodContainer.appendChild(apodImage);
    apodContainer.appendChild(test);
    
}
  
document.getElementById('fetchButton').addEventListener('click', fetchAPOD);
  

