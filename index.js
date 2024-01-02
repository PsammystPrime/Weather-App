const input = document.querySelector('input');
const submit = document.getElementById('submit');
const statusPara = document.getElementById('status');
const resultPara = document.getElementById('result');



fetch ('https://api.weatherapi.com/v1/current.json?key=e05dad397b6a4d4e9f0171133233012&q=Nairobi', {mode: "cors"})
.then(function(response){
    return response.json()
})
.then(function(response){
    resultPara.textContent = response.current.condition.text
})
.catch(function(error){
    console.log('error')
})