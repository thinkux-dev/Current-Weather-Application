class Weather {
  constructor(lat, lon){
    this.apikey = "76476469d579b0ab58108187e691e239";
    this.part = "current"
    this.lat = lat;
    this.lon = lon;
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.lon}&appid=${this.apikey}`)

    const responseData = await response.json();

    return responseData;
  }

  reverseGeocode() {}

  changeLocation(lat, lon){
    this.lat = lat;
    this.lon = lon;
  }
}