const apiKey = "d1d96effdd50f855cbc2baa09b4e40f8";
const url = "https://api.openweathermap.org/data/2.5/weather";

const submitButton = document.getElementById("submit")
const weather1 = document.getElementById("weather1")
const humidity = document.getElementById("humidity")
const place = document.getElementById("place")
const weatherImage = document.getElementById("weatherImage")
const windspeed = document.getElementById("windspeed")
const temperature = document.getElementById("temp")
const itemDContainer = document.getElementById("itemDContainer")

let cityResult = ""
let stateResult = ""

function changeResults () {
  cityResult = document.querySelector('#city').value
  stateResult = document.querySelector('#state').value
}

const getCurrentWeather = async () => {
  let urlToFetch = `${url}?q=${cityResult},us-${stateResult}&appid=${apiKey}&units=imperial`
    try {
        const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        itemDContainer.style.display = "grid";
        weather1.innerHTML = `Weather: ${jsonResponse['weather'][0]['main']}`
        humidity.innerHTML = `Humidity: ${jsonResponse['main']['humidity']}%`;
        place.innerHTML = `${cityResult}, ${stateResult}`;
        temperature.innerHTML = `Temperature: ${jsonResponse['main']['temp']} degrees`;
        windspeed.innerHTML = `Wind Speed: ${jsonResponse['wind']['speed']} knots`;
        switch (jsonResponse.weather[0].main) {
          case 'Clouds':
            weatherImage.src = "../Assets/WeatherImage/clouds.jpeg";
            break;
          case 'Thunderstorm':
            weatherImage.src = "../Assets/WeatherImage/thunderstorm.jpeg";
            break;
          case 'Drizzle':
            weatherImage.src = "../Assets/WeatherImage/drizzlerain.jpeg";
            break;
          case 'Rain':
            weatherImage.src = "../Assets/WeatherImage/Rain.jpeg";
            break;
          case 'Snow':
            weatherImage.src = "../Assets/WeatherImage/Snow.jpeg";
            break;
          case 'Mist':
            weatherImage.src = "../Assets/WeatherImage/mist.jpeg";
            break;
          case 'Smoke':
            weatherImage.src = "../Assets/WeatherImage/smoke.jpeg";
            break;
          case 'Haze':
            weatherImage.src = "../Assets/WeatherImage/haze.jpeg";
            break;
          case 'Dust':
            weatherImage.src = "../Assets/WeatherImage/dust.jpeg";
            break;
          case 'Fog':
            weatherImage.src = "../Assets/WeatherImage/fog.jpeg";
            break;
          case 'Sand':
            weatherImage.src = "../Assets/WeatherImage/sand.jpeg";
            break;
          case 'Ash':
            weatherImage.src = "../Assets/WeatherImage/ash.jpeg";
            break;
          case 'Squall':
            weatherImage.src = "../Assets/WeatherImage/squall.jpeg";
            break;
          case 'Tornado':
            weatherImage.src = "../Assets/WeatherImage/tornado.jpeg";
            break;
          case 'Clear':
            weatherImage.src = "../Assets/WeatherImage/clear.jpeg";
            break;
          default:
            weatherImage.src = "../Assets/OpenWeather-Logo.jpeg"
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


submitButton.addEventListener("click", changeResults);
submitButton.addEventListener("click", getCurrentWeather);
