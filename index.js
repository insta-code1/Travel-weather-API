const request = require('request');
const appid = require('./weather_api_key');
const fetchGeoLocation = require('./geolocation');


fetchGeoLocation('dublin ireland', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.latitude, res.longitude);
    fetchWeatherData(res.latitude, res.longitude);
  }
});


let fetchWeatherData = (lat, log) => {

  request({
    url:`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${appid}`,
    json: true
  }, (error, response, body) => {

    if (error) {
      console.log('unable to fetch data');
    } else if (body.weather == null) {
      console.log('unable to find weather data for this address');
    } else if (response.statusCode == 200 && body.weather) {
      let weatherDataObj = {
        description: body.weather[0].description,
        temp: body.main.temp,
        windSpeed: body.wind.speed
      };
      console.log(`weatherDataObj: ${weatherDataObj.temp}`);

    }

    //  console.log(`Response: ${JSON.stringify(response, undefined, 3)}`);
  });
}
