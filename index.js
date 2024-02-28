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

    //Fetch data from the API
    fetch (`https://api.weatherapi.com/v1/current.json?key=e05dad397b6a4d4e9f0171133233012&q=${input.value}`, {mode: "cors"})
    //Receive a promise as a JSON file
    .then((response)=>{
        statusPara.textContent = 'Fetching data...';
        return response.json()
    })
    //Resolve the promise
    .then((response)=>{     
        statusPara.textContent = 'Weather updated!';
        let forecast = response.current.condition.text;
        resultPara.textContent = 'Forecast :' + ' ' +  forecast;
        time.textContent = 'Local time :' + ' ' +  response.location.localtime;
        region.textContent = 'Region :' + ' ' +   response.location.tz_id;
        country.textContent = 'Country :' + ' ' +  response.location.country;
        temperature.textContent = 'Temperature :' + ' ' + response.current.temp_c + '°C';
        image.src = response.current.condition.icon;
    })
    // an error
    .catch(function(error){
        console.log(error)
        let err = `"${error}"`
        if (err.includes('undefined') === true){
             statusPara.textContent = `Failed to update the weather for ${input.value}`
             region.textContent = 'No matching location found'
        }else{
            statusPara.textContent = `Failed to fetch the weather for ${input.value}`
            region.textContent = 'Check your Network Connectivity then Retry.'
        }
    });
};

