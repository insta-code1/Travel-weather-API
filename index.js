const request = require('request');
const appid = require('./weather_api_key');

request({ 
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=dublin+ireland',
  json: true
}, (error, response, body) => {

  if (error) {
    console.log('Error while fetching data');
  } else if (body.status === "ZERO_RESULTS") {
    console.log('Unable to find address');
  } else if (body.status === "OK") {
    let latitude = body.results[0].geometry.location.lat;
    let longitude = body.results[0].geometry.location.lng;
    console.log(`longitude: ${longitude} and latitude: ${latitude}`);
   fetchWeatherData(latitude, longitude);
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
