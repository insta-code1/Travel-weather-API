const request = require('request');


let fetchGeoLocation = (address, callback) => {

  let geoData = encodeURI(address);

  request({ 
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${geoData}`,
    json: true
  }, (error, response, body) => {

    if (error) {
      callback('Error while fetching data');
    } else if (body.status === "ZERO_RESULTS") {
      callback('Unable to find address');
    } else if (body.status === "OK") {
      let geoCodeObj = {
         latitude: body.results[0].geometry.location.lat,
         longitude: body.results[0].geometry.location.lng,
      };
      callback(undefined, geoCodeObj);
    }
  });
}

module.exports = fetchGeoLocation;