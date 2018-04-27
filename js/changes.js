function getStylesheet() {
      var currentTime = new Date().getHours();
  console.log(currentTime);

  // hour is between 0 and 5 - midnight to 4am
      if (0 <= currentTime && currentTime < 5) {
       document.write("<link rel='stylesheet' href='css/night.css'>");
       document.getElementById("day").innerHTML = "You are reading this in the wee hours.";
      }
  // hour is between 5 and 10 am inclusive
      if (5 <= currentTime && currentTime < 11) {
       document.write("<link rel='stylesheet' href='css/morning.css'>");
       document.getElementById("day").innerHTML = "Good Morning!";
      }
  // hour is between 11 and 15 inclusive - 11am to 3pm
      if (11 <= currentTime && currentTime < 16) {
       document.write("<link rel='stylesheet' href='css/day.css'>");
       document.getElementById("day").innerHTML = "Good Afternoon!";

      }
  // hour is between 16 and 21 - 4 to 9pm inclusive
      if (16 <= currentTime&&currentTime < 22) {
       document.write("<link rel='stylesheet' href='css/evening.css'>");
        document.getElementById("day").innerHTML = "Good Evening!";
      }
  // hour is between 22 and 24 inclusive - 10pm to 12am
      if (22 <= currentTime&&currentTime <= 24) {
       document.write("<link rel='stylesheet' href='css/night.css'>");
        document.getElementById("day").innerHTML = "Good Night! Get some good rest.";
      }

}

getStylesheet();


function dayStyles() {

 var day = new Date().getDay(); // gets day of week number 0-6
 var saying = ', a good day.';


  // assigns day string to variable day
switch (day) {
    case 0:
        day = "Sunday";
        saying = ", Some day."
        break;
    case 1:
        day = "Monday";
    saying = ", Moon day.";
        break;
    case 2:
        day = "Tuesday";
        saying = ", Tuse day.";
        break;
    case 3:
        day = "Wednesday";
        saying = ", Waddo day.";
        break;
    case 4:
        day = "Thursday";
;        saying = ", Turnt day."
        break;
    case 5:
        day = "Friday";
        saying = " Fried day";
        break;
    case 6:
        day = "Saturday";
        saying = ", Sat a day.";
        break;
}
  console.log(day);

  var msg = "It is " + day;
      msg +=  saying;


  var el = document.getElementById("demo");
  el.innerHTML = msg;


}
dayStyles();
