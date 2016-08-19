// Back End Logic
function pingPong(number) {
  var pingArray = [];
  for (var i = 1; i <= number; i++) {
  if ((i % 15) === 0) {
    pingArray.push('ping-pong!')
  }
  else if ((i % 3) === 0) {
    pingArray.push('ping!')
  } else if((i % 5) === 0) {
    pingArray.push('pong!')
  } else
    pingArray.push(i);
  }
  return pingArray;
}

// Front End Logic
$(document).ready(function() {

  $('form').submit(function(event) {
    $("ul").empty();
    var userInput = parseInt($('#userPing').val());
    if(userInput) {
      var pingArray = pingPong(userInput)
      for (var i = 0; i < pingArray.length; i++) {
        $('<li>' + pingArray[i] + '</li>').appendTo('ul');
      }
    } else {
      alert('Please only enter a number')
    }

    event.preventDefault();
  });
});
