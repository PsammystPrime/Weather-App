const input = document.querySelector('input');
const submit = document.getElementById('submit');
const statusPara = document.getElementById('status');
const resultPara = document.getElementById('result');
const time = document.getElementById('time');
const city = document.getElementById('city');
const region = document.getElementById('region');
const country = document.getElementById('country');
const image = document.querySelector('img');
const temperature = document.getElementById('temps');

submit.addEventListener('click', checkWeather);
function checkWeather(){
    statusPara.textContent = 'Fetching data...';
    country.textContent = '';
    resultPara.textContent = '';
    region.textContent = '';
    image.src = '';
    temperature.textContent = '';

    fetch (`https://api.weatherapi.com/v1/current.json?key=e05dad397b6a4d4e9f0171133233012&q=${input.value}`, {mode: "cors"})
    .then(function(response){
        statusPara.textContent = 'Fetching data...';
        return response.json()
    })
    .then(function(response){
        console.log(response)       
        statusPara.textContent = 'Weather updated!';
        let forecast = response.current.condition.text;
        resultPara.textContent = 'Forecast :' + ' ' +  forecast;
        time.textContent = 'Local time :' + ' ' +  response.location.localtime;
        region.textContent = 'Region :' + ' ' +   response.location.tz_id;
        country.textContent = 'Country :' + ' ' +  response.location.country;
        temperature.textContent = 'Temperature :' + ' ' + response.current.temp_c + '°C';
        image.src = response.current.condition.icon;
       
    })
    .catch(function(error){
        console.log(error)
        statusPara.textContent = `Failed to update the weather for ${input.value}`
        region.textContent = 'No matching location found'
    });
};

