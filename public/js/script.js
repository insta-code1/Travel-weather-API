$('#searchButton').on('click', function(e) {

  e.preventDefault();

 var userInput = $('#inputValue').val();
 var location = {"location" : userInput };

 $.ajax({
   type: "POST",
   url: "/api/weatherdata/",
   data: location,
   success: function(data) {
     success(data);
   },
   error: function() {
     alert('error');
   }
  }); // $.ajax call


  function success(serverData) {

    if (serverData.error === 0) {

      var weatherData = serverData.data;
      var icon = weatherData.weather[0].icon;
      var temp = weatherData.main.temp;
      var description = weatherData.weather[0].description;
      var windSpeed = weatherData.wind.speed;
      var windDir = weatherData.wind.deg;
      var pressure = weatherData.main.pressure;
      var longitude = weatherData.coord.lon;
      var latitude = weatherData.coord.lat;

      var myObject = {
        "Temperature": temp,
        "Description": description,
        "Wind Speed": windSpeed,
        "Wind Direction": windDir,
        "Pressure": pressure,
        "Longitude": longitude,
        "Latitude": latitude
      };

      $('#table').html("");

      $.each(myObject, function(key, val) {
        console.log(`Key:${key}, val:${val}`);
        var tableRow = `<tr><td>${key}</td><td>${val}</td></tr>`;

        $('#table').append(tableRow);
      });








        $('#toggle').removeClass('hidden');
      console.log(JSON.stringify(serverData, undefined, 2));


    } else if (serverData.error === 1) {
      //handle the error
    }



  }



}); // close button event