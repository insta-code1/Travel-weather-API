const express = require('express');
const router = express.Router();


const fetchGeoLocation = require('./modules/geolocation');
const fetchWeatherData = require('./modules/weatherdata');


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


module.exports = router;