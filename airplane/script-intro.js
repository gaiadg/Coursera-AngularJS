$("#buttonSkipIntro").on('click', function(){
     window.location = "ticket.html";
});

console.log("Hi this is Gaia");
// change background
var myHours = new Date();
var myHours = myHours.getHours();
if (myHours >= 5 && myHours <= 9) {
      $("body").addClass("gradient-day");
       $("h1").css('color', '#000000');
       $("h3").css('color', '#000000');

       $("#airlineFlightCode").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('border-color', '#000000');
      console.log("dawn");

  } else if (myHours > 9 && myHours <= 15) {
       $("body").addClass("gradient-day");
       $("h1").css('color', '#000000');
       $("h3").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('border-color', '#000000');
       // $("input#airlineCode").css('color', '#000000');
       $(".airport-group").css('border-bottom', '#000000');
       $("input").addClass('gradientDay');
       $("#mainlogo").css('background-image','url(img/AirplanemodeLogo-black.svg)');
       console.log("day");


     } else if (myHours > 15 && myHours <= 17) {
       $("body").addClass("gradient-evening");
       $("h1").css('color', '#000000');
       $("h2").css('color', '#000000');
       $("h3").css('color', '#000000');
       $(".times").css('color', '#000000');
       $(".wrap").css('border-color', '#000000');
       $(".airportName.Depart").css('color', '#000000');
       $(".airportName.Arrival").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('border-color', '#000000');
       $(".airplane-details").css('border-color', '#000000');
       $(".itinerary").css('border-color', '#000000');
       $("input#airlineFlightCode").css('color', '#000000');
       $("input#airlineFlightCode").css('border-color', '#000000');
       $("input#departureAirportInTheForm").css('color', '#000000');
       $("input#departureAirportInTheForm").css('border-color', '#000000');
       $("input#datepicker").css('color', '#000000');
       $("input#datepicker").css('border-color', '#000000');
       $(".airport-group").css('border-bottom', '#000000');
       $("input").addClass('gradientDay');
       $("#weatherFromIcon").css('background-image','url(img/sun-black.svg)');
       $(".plane-icon").css('background-image','url(img/plane-icon-black.svg)');
       $("#weatherToIcon").css('background-image','url(img/sun-black.svg)');
       $("#terminal-Departure").css('color', '#000000');
       $("#gate-Departure").css('color', '#000000');
       $("#terminal-Arrival").css('color', '#000000');
       $("#gate-Arrival").css('color', '#000000');
       $("#mainlogo").css('background-image','url(img/AirplanemodeLogo-black.svg)');
       console.log("afternoon");


     } else if (myHours >17 && myHours <= 23) {
       $("body").addClass("gradient-night");
                    console.log("night");

     } else {
       $("body").addClass("gradient-night");
     }
