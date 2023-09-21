// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.lat, weatherLocation.lon);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
  const lat = document.getElementById('city').value;
  const lon = document.getElementById('state').value;

  // Change location
  weather.changeLocation(lat, lon);

  // Set location Local Storage
  storage.setLocationData(lat, lon);

  // Get and display weather
  getWeather();

  fetchWeatherAndCity();

  // Close modal('we are using jquery because bootstraps uses jquery')
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log('results', results)
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

async function reverseGeocode(lat, lon) {
  const apiKey = '98f56c508b084b3484e87cb3627442a7';
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('data=>', data)
    const city = data.results[0].components.state;

    return city;
  } catch (error) {
    throw new Error('Error in reverse geocoding:', error);
  }
}

async function fetchWeatherAndCity() {
  try {
    const data = await weather.getWeather();
    console.log('Weather Data:', data);

    const city = await reverseGeocode(weather.lat, weather.lon); // Pass lat and lon from the Weather object
    console.log('City:', city);

    // Update the UI with the city name
    ui.location.textContent = `City: ${city}`;

    // Paint the weather data to the rest of the UI
    ui.paint(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchWeatherAndCity();