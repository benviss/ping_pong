// Back End Logic
var numberArray = [];
function createNumbers(number) {
  for (var i = 1; i <= number; i++) {

  }
}










// Front End Logic
$(document).ready(function() {
  $('form').submit(function() {
    var userInput = parseInt($('#userPing').val());

    if(userInput) {

    } else {
      alert('Please only enter a number')
    }
  });
});
