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
      $('#toggle').removeClass('hidden');
    console.log(JSON.stringify(serverData));

    var wind = serverData.data.windSpeed;
    var clouds = serverData.data.description;
    var temp = serverData.data.temp;

    document.querySelector('#wind').innerHTML = wind;
    document.querySelector('#clouds').innerHTML = clouds;
    document.querySelector('#temp').innerHTML = temp;

  }



}); // close button event