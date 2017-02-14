const request = require('request');

request({ 
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=0000000000000',
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
  }
});