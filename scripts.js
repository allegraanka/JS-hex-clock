
let digitalClock = document.getElementById('clock');
var photos = ['images/morning.jpg', 'images/afternoon.jpg', 'images/evening.jpeg']
var greeting = document.getElementById('greeting');
var currentDate, currentHour, currentMinutes, currentSeconds;

function updateTime() {
  currentDate = new Date();
  currentHour = '0' + currentDate.getHours() %12;
  currentMinutes = currentDate.getMinutes();
  currentSeconds = currentDate.getSeconds();
  let theTime = currentHour.toString() + ':' + currentMinutes.toString() + ':' + currentSeconds.toString();
  digitalClock.innerHTML = theTime;
  greeting.innerText = updateGreeting();
}

setInterval(updateTime,1000);

function updateGreeting() {
  if (currentHour < 12) {
    return 'Good morning!'
  } else if (currentHour > 12) {
    return 'Good afternoon!'
  } else {
    return 'Good evening!'
  }
}

function updatePhoto() {
  if (currentHour < 12) {
    return photos[0];
  } else if (currentHour > 12) {
    return photos[1];
  } else {
    return photos[2];
  }
}
