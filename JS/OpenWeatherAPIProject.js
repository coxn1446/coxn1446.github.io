const apiKey = "d1d96effdd50f855cbc2baa09b4e40f8";
const url = "https://api.openweathermap.org/data/2.5/weather";

const submitButton = document.getElementById("submit")
const weather1 = document.getElementById("weather1")
const humidity = document.getElementById("humidity")
const place = document.getElementById("place")
const weatherImage = document.getElementById("weatherImage")
const windspeed = document.getElementById("windspeed")
const temperature = document.getElementById("temperature")

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
        place.innerHTML = `${cityResult}, ${stateResult}`;
        weather1.innerHTML = `Weather: ${jsonResponse.weather[0].main}`;
        humidity.innerHTML = `Humidity: ${jsonResponse.main.humidity}%`;
        windspeed.innerHTML = `Wind Speed: ${jsonResponse.wind.speed} knots`;
        temperature.innerHTML = `Temperature: ${jsonResponse.main.temp} degrees`;
      }
    } catch (error) {
      console.log(error);
    }
  };


submitButton.addEventListener("click", changeResults);
submitButton.addEventListener("click", getCurrentWeather);
