const input = document.querySelector('input');
const submit = document.getElementById('submit');
const statusPara = document.getElementById('status');
const resultPara = document.getElementById('result');

submit.addEventListener('click', checkWeather);
function checkWeather(){
    statusPara.textContent = '';
    fetch (`https://api.weatherapi.com/v1/current.json?key=e05dad397b6a4d4e9f0171133233012&q=${input.value}`, {mode: "cors"})
    .then(function(response){
        statusPara.textContent = 'Fetching data...';
        return response.json()
    })
    .then(function(response){
        statusPara.textContent = `Weather for ${input.value} updated!`;
        resultPara.textContent = `${input.value} : ` + ' ' + response.current.condition.text;
    })
    .catch(function(){
        statusPara.textContent = `Failed to update the weather for ${input.value}`;
    });
};

