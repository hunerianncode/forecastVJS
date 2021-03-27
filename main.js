const api_key = "af1d62e6ecd4e6c60a55468b85437387";

let form = document.searchForm;

let cityName = form.cityName;
let button = form.button;

button.addEventListener('click',onClick);

function onClick(){
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&appid=" + api_key;
    
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('countryName').innerText = data.sys.country;
            document.getElementById('sunrise').innerText = timestampToDate(data.sys.sunrise);
            document.getElementById('sunset').innerText = timestampToDate(data.sys.sunset);
            document.getElementById('temp').innerText = kelvinToCelcius(data.main.feels_like);
            document.getElementById('tempMin').innerText = kelvinToCelcius(data.main.temp_min);
            document.getElementById('tempMax').innerText = kelvinToCelcius(data.main.temp_max);
            document.getElementById('humidity').innerText = data.main.humidity;
            document.getElementById('pressure').innerText = data.main.pressure;
            document.getElementById('speed').innerText = data.wind.speed;
            document.getElementById('deg').innerText = data.wind.deg;
        });
}

function timestampToDate(timestamp){
    let date = new Date(timestamp * 1000);

    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    return hours + ":" + minute + ":" + second;   
}

function kelvinToCelcius(kelvin){
    return Math.round(kelvin - 273.15);
}