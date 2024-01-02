const input = document.querySelector('input');
const submit = document.getElementById('submit');
const statusPara = document.getElementById('status');
const resultPara = document.getElementById('result');
const time = document.getElementById('time');
const city = document.getElementById('city');
const region = document.getElementById('region');
const country = document.getElementById('country');
const image = document.querySelector('img');

submit.addEventListener('click', checkWeather);
function checkWeather(){
    statusPara.textContent = '';
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
       time.textContent = 'Local time :' + ' ' +  response.location.localtime
       region.textContent = 'Region :' + ' ' +   response.location.tz_id
       country.textContent = 'Country :' + ' ' +  response.location.country
       if (forecast.includes('cloudy')) {
        image.src = './weather/64x64/day/119.png'
       }else
        if (forecast.includes('Clear')) {
        image.src = '/weather/64x64/day/113.png' 
       }else
        if (forecast.includes('rain')) {
        image.src = './weather/64x64/day/263.png'
       }else
       if (forecast.includes('Wind')){
        image.src = './weather/64x64/day/377.png'
       }
       
    })
    .catch(function(err){
        console.log(err)
        statusPara.textContent = `Failed to update the weather for ${input.value}`;
    });
};

