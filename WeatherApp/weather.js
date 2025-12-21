const apiKey = "f0f3636c0ecb54367f37d9476458c69e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#iconBtn");
const weatherIcon = document.querySelector("#weatherIcon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();


    document.querySelector("#cities").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = "Wind: " + data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds") {
        document.querySelector("#weatherIcon").src = "Assets/clouds.png";
    }else if(data.weather[0].main == "Clear") {
        document.querySelector("#weatherIcon").src = "Assets/clear.png";
    }else if(data.weather[0].main == "Rain") {
        document.querySelector("#weatherIcon").src = "Assets/rain.png";
    }else if(data.weather[0].main == "Drizzle") {
        document.querySelector("#weatherIcon").src = "Assets/drizzle.png";
    }else if(data.weather[0].main == "Mist") {
        document.querySelector("#weatherIcon").src = "Assets/mist.png";
    } else if(data.weather[0].main == "Snow") {
        document.querySelector("#weatherIcon").src = "Assets/snow.png";
    }
    
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

