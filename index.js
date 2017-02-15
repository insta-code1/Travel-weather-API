const request = require('request');
const appid = require('./weather_api_key');
const fetchGeoLocation = require('./geolocation');
const fetchWeatherData = require('./weatherdata');


fetchGeoLocation('dublin ireland', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.latitude, res.longitude);
    fetchWeatherData(res.latitude, res.longitude, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(JSON.stringify(res));
        }
    });
  }
});


