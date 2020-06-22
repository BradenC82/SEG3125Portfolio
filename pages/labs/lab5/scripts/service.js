var availability={
    'Bob Smith':[1,3,5],
    'Jack Richards':[2,3],
    'Morty Weathers':[3,5],
    'Jerry Senfield':[1],
    'Summer Serlin':[5],
    'Rick Sanchez':[1,3],
}

var selectedBarber = '';


function setBarber(event){
    console.log(event)
    console.log(event.target.value)
    selectedBarber = event.target.value;
    $("#dateInput").removeAttr("disabled");
}

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    let a = document.getElementById(txtPhone).value;
    let filter = /\(?\d{3}\)?[\s-]\d{3}[\s-]\d{4}/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCredit(txtCredit) {
    let a = document.getElementById(txtCredit).value;
    console.log(a,'ther here')
    let filter = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0 || date.getDay() == 6)
        return [false];

    if(selectedBarber!=''){
        for(let i=0; i< availability[selectedBarber].length; i++){
            if(date.getDay() == availability[selectedBarber][i]){
                return [false]
            }
        }
    }
    


    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}



// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone");
            $("#phone").addClass("is-invalid");
        }
        else {
            $("#phone").removeClass("is-invalid");
        }
    });

    $("#debit").on("change", function(){
        if (!validateCredit("debit")){
            alert("Wrong format for credit");
            $("#debit").addClass("is-invalid");
        }
        else {
            $("#debit").removeClass("is-invalid");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1st 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});