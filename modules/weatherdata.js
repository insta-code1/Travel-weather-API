const request = require('request');
const appid = require('../weather_api_key');

let fetchWeatherData = (lat, log, callback) => {

  request({
    url:`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&units=metric&appid=${appid}`,
    json: true
  }, (error, response, body) => {

    if (error) {
      callback('unable to fetch data');
    } else if (body.weather == null) {
      callback('unable to find weather data for this address');
    } else if (response.statusCode == 200 && body.weather) {
      callback(undefined, body);
    }
  });
}

module.exports = fetchWeatherData;