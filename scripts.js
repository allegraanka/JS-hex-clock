
let digitalClock = document.getElementById('clock');

function updateTime() {
  let currentDate = new Date();
  let currentHour = '0' + currentDate.getHours() %12;
  let currentMinutes = currentDate.getMinutes();
  let currentSeconds = currentDate.getSeconds();
  let theTime = currentHour.toString() + ':' + currentMinutes.toString() + ':' + currentSeconds.toString();
  digitalClock.innerHTML = theTime;
}

setInterval(updateTime,1000);

var greeting = document.getElementById('greeting');

function updateGreeting() {
  if (currentHour < 12) {
    greeting = 'Good morning!'
  } else if (currentHour > 12) {
    greeting = 'Good afternoon!'
  } else {
    greeting = 'Good evening!'
  }
}
document.write(greeting);

var photos = ['morning.jpg', 'afternoon.jpg', 'evening.jpeg']
function updatePhoto() {
  if (currentHour < 12) {
    return photos[0];
  } else if (currentHour > 12) {
    return photos[1];
  } else {
    return photos[2];
  }
}
