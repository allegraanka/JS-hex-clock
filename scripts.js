
let digitalClock = document.getElementById('clock');
var photos = ['images/morning.jpg', 'images/afternoon.jpg', 'images/evening.jpeg'];
var greeting = document.getElementById('greeting');
var currentDate, currentHour, currentMinutes, currentSeconds;
var mornImg = document.getElementById('morning');
var noonImg = document.getElementById('afternoon');
var eveImg = document.getElementById('evening');

var show = function(img) {
  img.style.display = 'block';
}

function civTime() {
  if (currentHour >= 13) {
    return currentHour - 12;
  } else {
    return currentHour;
  }
}

function updateTime() {
  currentDate = new Date();
  currentHour = currentDate.getHours();
  currentMinutes = currentDate.getMinutes();
  currentSeconds = currentDate.getSeconds();
  let theTime = civTime().toString().padStart(2, 00) + ':' + currentMinutes.toString().padStart(2, 00) + ':' + currentSeconds.toString().padStart(2, 00);
  digitalClock.innerText = theTime;
  greeting.innerText = updateGreeting();
}

function updateGreeting() {
  currentDate = new Date();
  currentHour = currentDate.getHours();
  currentMinutes = currentDate.getMinutes();
  currentSeconds = currentDate.getSeconds();
  if (currentHour < 12) {
    return 'Good morning!';
  } else if (currentHour > 12 && currentHour <= 17) {
    return 'Good afternoon!';
  } else {
    return 'Good evening!';
  }
  greeting.innerText = updateGreeting();
}

function updatePhoto() {
  currentDate = new Date();
  currentHour = currentDate.getHours();
  currentMinutes = currentDate.getMinutes();
  currentSeconds = currentDate.getSeconds();
  if (currentHour < 12) {
    show(mornImg);
  } else if (currentHour > 12 && currentHour <= 17) {
    show(noonImg);
  } else {
    show(eveImg);
  }
}

setInterval(updateTime, 1000); {
  updateTime();
  updateGreeting();
  updatePhoto();
}
