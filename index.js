function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = response.data.temperature.current;

  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#weather-city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "b186a53540a66b93c63e67af40o0ct1c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(refreshWeather);
}

function searchEngine(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchEngine);

searchCity("Philadelphia");
