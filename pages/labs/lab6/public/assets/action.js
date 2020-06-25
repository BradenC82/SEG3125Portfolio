// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function(){

  $('form').on('submit', function(event){
      
      

      let form = document.getElementById('form');

      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{

        var item = $('form input');
        console.log(item.serializeArray());

        var item2 = $('form');
        console.log(item2.serializeArray());

        $.ajax({
          type: 'POST',
          url: '/niceSurvey2',
          data: $(this).serializeArray(),
          success: function(data){
            // do something with the data via front-end framework
            // Make the submit button red, disabled and saying Thank you
            $("#submit").css("background-color", "green");
            $("#submit").prop("disabled", "true");
            $("#submit").text("Thank you!");
          }
        });
      }

     
      return false;
  });
});
