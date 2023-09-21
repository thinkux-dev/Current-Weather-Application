class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    // Extract the city name from the weather data
    // const city = data.results[0].components.county;

    // Construct the icon image URL
    const iconCode = weather.current.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    // this.location.textContent = `${city}`;
    this.desc.textContent = weather.current.weather[0].description;
    this.string.textContent = weather.current.temp;
    this.icon.setAttribute('src', iconUrl);
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
    this.feelsLike.textContent = `FeelsLike: ${weather.current.feels_like}`;
    this.dewpoint.textContent = `DewPoint: ${weather.current.dew_point}`;
    this.wind.textContent = `Wind: ${weather.current.wind_deg}`;
  }
}