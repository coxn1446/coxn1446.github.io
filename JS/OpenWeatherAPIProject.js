const apiKey = "d1d96effdd50f855cbc2baa09b4e40f8";
const url = "https://api.openweathermap.org/data/2.5/weather";

const submitButton = document.getElementById("submit")
const testHTML = document.getElementById("test")

let cityResult = ""
let stateResult = ""

function changeResults () {
  cityResult = document.querySelector('#city').value
  stateResult = document.querySelector('#state').value
}

const getCurrentWeather = async () => {
  let urlToFetch = `${url}?q=${cityResult},us-${stateResult}&appid=${apiKey}`
    try {
        const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        testHTML.innerHTML = jsonResponse.name;
      }
    } catch (error) {
      console.log(error);
    }
  };


submitButton.addEventListener("click", changeResults);
submitButton.addEventListener("click", getCurrentWeather);
