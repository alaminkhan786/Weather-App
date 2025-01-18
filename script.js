const cityName = document.getElementById('cityName');
const cityTemp = document.getElementById('cityTemp');
const tempDescription = document.getElementById('tempDescription');
const search = document.getElementById('search');

weather_app('New York');

function weather_app(city){
    const api_key = '78f53f0555febe44ae9aaa95371a6674';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        cityName.innerHTML = data.name;
        cityTemp.innerHTML = Math.floor(data.main.temp - 273.15);
        tempDescription.innerHTML = data.weather[0].main;
    })
}

search.addEventListener('click', () => {
    weather_app(document.getElementById('cityNameInput').value);
});