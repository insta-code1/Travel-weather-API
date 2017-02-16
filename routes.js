const express = require('express');
const router = express.Router();


const fetchGeoLocation = require('./modules/geolocation');
const fetchWeatherData = require('./modules/weatherdata');


router.post('/api/weatherdata/', (req, response) => {
  
  let userInput = req.body.location;

  fetchGeoLocation(userInput, (err, res) => {
    if (err) {
      response.json({error: 1, message: err});
    } else {
      console.log(res.latitude, res.longitude);
      fetchWeatherData(res.latitude, res.longitude, (err, res) => {
          if (err) {
           response.json({error: 1, message: err});
          } else {
            response.json({error: 0, message: "success", data: res});
          }
      });
    }
  });

});




module.exports = router;