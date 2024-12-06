const searchBtn = document.querySelector(".searchContainer button");
const inputBox = document.querySelector(".searchContainer input");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const weatherIcon = document.querySelector("#weatherIcon");

const apiKey = "e646af4835cb45edb33888be2b24dad2";
const units = "metric"

function defaultWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
        cityName.textContent = data.name;
        temp.textContent = `${Math.floor(data.main.temp)}°C`
        wind.textContent = `${data.wind.speed} KM/H`;
        humidity.textContent = `${data.main.humidity}%`
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "./images/clouds.png"
                console.log("clouds")
                break;
            case "Drizzle":
                weatherIcon.src = "./images/drizzle.png"
                console.log("drizzle")
                break;
            case "Mist":
                weatherIcon.src = "./images/mist.png"
                console.log("mist")
                break;
            case "Rain":
            weatherIcon.src = "./images/rain.png"
            console.log("rain")
                break;
            case "Snow":
            weatherIcon.src = "./images/snow.png"
            console.log("snow")
                break;
            default:
                weatherIcon.src = "./images/clear.png"
                console.log("default")
                break;
        }
    })
}
defaultWeather();

searchBtn.addEventListener("click",() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&appid=${apiKey}&units=${units}`)
    .then((res) => res.json())
    .then((data) => {
        if(inputBox.value == ""){
            console.log("input box is empty")
        }
        else{
            console.log(data)
        cityName.textContent = data.name;
        temp.textContent = `${Math.floor(data.main.temp)}°C`;
        wind.textContent = `${data.wind.speed} KM/H`;
        humidity.textContent = `${data.main.humidity}%`;
        inputBox.value = "";
        inputBox.setAttribute("placeholder",data.name);
        console.log(data.weather[0].main);
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "./images/clouds.png"
                console.log("clouds")
                break;
            case "Drizzle":
                weatherIcon.src = "./images/drizzle.png"
                console.log("drizzle")
                break;
            case "Mist":
                weatherIcon.src = "./images/mist.png"
                console.log("mist")
                break;
            case "Rain":
            weatherIcon.src = "./images/rain.png"
            console.log("rain")
                break;
            case "Snow":
            weatherIcon.src = "./images/snow.png"
            console.log("snow")
                break;
            default:
                weatherIcon.src = "./images/clear.png"
                console.log("default")
                break;
        }
        }
    })
});