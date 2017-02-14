const request = require('request');

request({ 
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=dublin+ireland',
  json: true
}, (error, response, body) => {
  console.log(`Response: ${JSON.stringify(response, undefined, 3)}`);
  let latitude = body.results[0].geometry.location.lat;
  let longitude = body.results[0].geometry.location.lng;
});