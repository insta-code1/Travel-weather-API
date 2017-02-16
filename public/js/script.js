$('#searchButton').on('click', function(e) {

  e.preventDefault();

 var userInput = $('#inputValue').val();
 var location = {"location" : userInput };

 $.ajax({
   type: "POST",
   url: "/api/weatherdata/",
   data: location,
   success: function(data) {
     $('#toggle').removeClass('hidden');
     console.log(JSON.stringify(data));
   },
   error: function() {
     alert('error');
   }

 }); // $.ajax call


}); // close button event