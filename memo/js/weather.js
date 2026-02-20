const API_KEY = "0a2abbc9726d93a7e8ac1535e366fe49";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const temperature = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const weatherIcon = document.querySelector("#weather-icon");

        weather.innerText = data.weather[0].main;
        temperature.innerText = "현재 날씨 "+ Math.ceil(data.main.temp)+"°C";
        weatherIcon.src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
        
        
        
    });
}
function onGeoError(){
    alert("당신의 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);