//Communicates with the Open Weather API
const apiKey = "d1d96effdd50f855cbc2baa09b4e40f8";
const url = "https://api.openweathermap.org/data/2.5/weather";

//Pulls web page elements into JS code
const submitButton = document.getElementById("submit");
const weather1 = document.getElementById("weather1");
const humidity = document.getElementById("humidity");
const place = document.getElementById("place");
const weatherImage = document.getElementById("weatherImage");
const windspeed = document.getElementById("windspeed");
const temperature = document.getElementById("temp");
const containerGrid = document.getElementById('containerGrid');
const itemAContainer = document.getElementById("itemAContainer");
const itemABContainer = document.getElementById("itemABContainer");
const itemABA = document.getElementById("itemABA");
const itemABB = document.getElementById("itemABB");
const itemABC = document.getElementById("itemABC");
const itemABD = document.getElementById("itemABD");
const itemBContainer = document.getElementById("itemBContainer");
const itemCContainer = document.getElementById("itemCContainer");
const itemDContainer = document.getElementById("itemDContainer");
const menuButton = document.getElementById('menuButton');

//Creates variables to store form data
let cityResult = ""
let stateResult = ""

//Function to pull form data into from variables
function changeResults () {
  cityResult = document.querySelector('#city').value
  stateResult = document.querySelector('#state').value
}

//Function which calls Open Weather API and pulls data into HTML elements
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
            weatherImage.alt = "clouds"
            break;
          case 'Thunderstorm':
            weatherImage.src = "../Assets/WeatherImage/thunderstorm.jpeg";
            weatherImage.alt = "thunderstorm"
            break;
          case 'Drizzle':
            weatherImage.src = "../Assets/WeatherImage/drizzlerain.jpeg";
            weatherImage.alt = "drizzling rain"
            break;
          case 'Rain':
            weatherImage.src = "../Assets/WeatherImage/Rain.jpeg";
            weatherImage.alt = "pouring rain"
            break;
          case 'Snow':
            weatherImage.src = "../Assets/WeatherImage/Snow.jpeg";
            weatherImage.alt = "snow fall"
            break;
          case 'Mist':
            weatherImage.src = "../Assets/WeatherImage/mist.jpeg";
            weatherImage.alt = "misty"
            break;
          case 'Smoke':
            weatherImage.src = "../Assets/WeatherImage/smoke.jpeg";
            weatherImage.alt = "smokey weather"
            break;
          case 'Haze':
            weatherImage.src = "../Assets/WeatherImage/haze.jpeg";
            weatherImage.alt = "hazey city"
            break;
          case 'Dust':
            weatherImage.src = "../Assets/WeatherImage/dust.jpeg";
            weatherImage.alt = "dust ball"
            break;
          case 'Fog':
            weatherImage.src = "../Assets/WeatherImage/fog.jpeg";
            weatherImage.alt = "foggy"
            break;
          case 'Sand':
            weatherImage.src = "../Assets/WeatherImage/sand.jpeg";
            weatherImage.alt = "sand"
            break;
          case 'Ash':
            weatherImage.src = "../Assets/WeatherImage/ash.jpeg";
            weatherImage.alt = "volcano ash"
            break;
          case 'Squall':
            weatherImage.src = "../Assets/WeatherImage/squall.jpeg";
            weatherImage.alt = "squall"
            break;
          case 'Tornado':
            weatherImage.src = "../Assets/WeatherImage/tornado.jpeg";
            weatherImage.alt = "tornado"
            break;
          case 'Clear':
            weatherImage.src = "../Assets/WeatherImage/clear.jpeg";
            weatherImage.alt = "clear weather"
            break;
          default:
            weatherImage.src = "../Assets/OpenWeather-Logo.jpeg"
            weatherImage.alt = "Open Weather Logo"
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

//Calls getCurrentWeather function using form inputs upon submit button click event
submitButton.addEventListener("click", changeResults);
submitButton.addEventListener("click", getCurrentWeather);

//Function which displays nav menu in mobile view
function menuClick () {
  if (itemABContainer.style.display==="none"){
      containerGrid.style.gridTemplateRows="repeat(12,75px)";
      itemAContainer.style.gridRow="1 / span 4";
      itemAContainer.style.gridTemplateRows = "repeat(8,1fr)";
      itemABContainer.style.display="grid";
      itemABA.style.display="flex";
      itemABB.style.display="flex";
      itemABC.style.display="flex";
      itemABD.style.display="flex";
      itemABA.style.gridRow="1 / span 1";
      itemABB.style.gridRow="2 / span 1";
      itemABC.style.gridRow="3 / span 1";
      itemABD.style.gridRow="4 / span 1";
      itemBContainer.style.gridRow="5 / span 1";
      itemCContainer.style.gridRow="6 / span 2";
      itemDContainer.style.gridRow="8 / span 3";
      
  } else {
      containerGrid.style.gridTemplateRows="repeat(9,75px)";
      itemAContainer.style.gridRow="1 / span 2";
      itemAContainer.style.gridTemplateRows = "repeat(2,1fr)";
      itemABContainer.style.display="none";
      itemABA.style.display="none";
      itemABB.style.display="none";
      itemABC.style.display="none";
      itemABD.style.display="none";
      itemABA.style.gridRow="1 / span 1";
      itemABB.style.gridRow="1 / span 1";
      itemABC.style.gridRow="1 / span 1";
      itemABD.style.gridRow="1 / span 1";
      itemBContainer.style.gridRow="3 / span 1";
      itemCContainer.style.gridRow="4 / span 2";
      itemDContainer.style.gridRow="6 / span 3";
     
  }
}

//Turns menu button into a clickable event
menuButton.addEventListener('click',menuClick);