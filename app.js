const apikey = "3cd8af3eb832c4cf483e6f7fa2765fb5" ;
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const wicon = document.querySelector(".weather-icon");
async function theweather(city="munnar")
{
    const response = await fetch(apiurl + city +`&appid=${apikey}`);


    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
    var data = await response.json();

    

    document.querySelector(".city").textContent= data.name;
    document.querySelector(".temp").textContent= Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").textContent= data.main.humidity + " %";
    document.querySelector(".wind").textContent= data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") wicon.src = "./images/clouds.png"
    else if(data.weather[0].main == "Clear") wicon.src = "./images/clear.png"
    else if(data.weather[0].main == "Rain") wicon.src = "./images/rain.png"
    else if(data.weather[0].main == "Drizzle") wicon.src = "./images/drizzle.png"
    else if(data.weather[0].main == "Mist") wicon.src = "./images/mist.png"

    document.querySelector(".weather").style.display = "block" ;
    document.querySelector(".error").style.display = "none";
    }
}



const serach = document.querySelector(".search input")
const serachbtn = document.querySelector(".search button")

serachbtn.addEventListener("click" , ()=>{
    theweather(serach.value);
} )
