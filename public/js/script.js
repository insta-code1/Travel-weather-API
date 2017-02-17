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
     var msg = "Unable to connect to the internet";
     errorHandler(msg);
   }
  }); // $.ajax call


  function refreshTemplate() {
    $("#table").html("");
    $("#errorHandler").html("");
  }


  function errorHandler(error) {
    $('#toggle').addClass('hidden');
    refreshTemplate();
    errTemplate = `
      <div class="alert alert-danger" role="alert">
        <strong>Oh Snap!</strong> ${error}
      </div> `;
      $('#errorHandler').append(errTemplate);
  }


  function success(serverData) {
    refreshTemplate();


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

      $('#toggle').removeClass('hidden');
      $('#table').html("");
      document.querySelector('#icon').src = `
      http://openweathermap.org/img/w/${icon}.png`;

      $.each(myObject, function(key, val) {
        console.log(`Key:${key}, val:${val}`);
        var tableRow = `<tr><td>${key}</td><td>${val}</td></tr>`;

        $('#table').append(tableRow);
      });
    } else if (serverData.error === 1) {
      errorHandler(serverData.message);
    }
  }
}); // close button event