function displayTemperature(response){
    let tempElement = document.querySelector('#temperature');
    tempElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector('#city');
    cityElement.innerHTML = response.data.name;
    let descriptionElement = document.querySelector('#description');
    descriptionElement.innerHTML = response.data.weather[0].description;
    let humidityElement = document.querySelector('#humidity');
    humidityElement.innerHTML = response.data.main.humidity;
let windElement = document.querySelector('#wind');
windElement.innerHTML = Math.round(response.data.wind.speed);
}




let apiKey = '361e0aa61c613a70c483b8ca214c4ec2';
let spiUrl = `api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl),then(displayTemperature);
