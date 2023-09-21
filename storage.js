class Storage{
  constructor(){
    this.lat;
    this.lon;
    this.defaultLat = '11.6600';
    this.defaultLon = '4.7792';
  }

  getLocationData(){
    if(localStorage.getItem('city') === null){
      this.lat = this.defaultLat;
    }else{
      this.lat = localStorage.getItem('city');
    }

    if(localStorage.getItem('state') === null){
      this.lon = this.defaultLon;
    }else{
      this.lon = localStorage.getItem('state');
    }

    return{
      lat: this.lat,
      lon: this.lon
    }
  }

  setLocationData(lat, lon){
    localStorage.setItem('city', lat);
    localStorage.setItem('state', lon);
  }
}