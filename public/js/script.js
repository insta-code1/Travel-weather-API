$('#searchButton').on('click', function(e) {

  e.preventDefault();

 var userInput = $('#inputValue').val();
 var location = {"location" : userInput };

 $.ajax({
   type: "POST",
   url: "/api/weatherdata",
   data: location,
   success: function() {
     alert(location);
   },
   error: function() {
     alret('error');
   }

 }); // $.ajax call


}); // close button event