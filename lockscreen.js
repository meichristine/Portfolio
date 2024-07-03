let button = document.querySelector("button");

button.onclick=function(){
  setTimeout(callBack_func, 1000);
}
function callBack_func() {
  window.location.href = "yt-transition.html";
}

setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
  // Getting current time and date
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();

  // Setting time for 12 Hrs format
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;

  let currentTime = hour + ":" + min;

  // Displaying the time
  document.getElementById("clock").innerHTML = currentTime;
}
showTime();

/* Notification Animation */
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById('animated-button').style.bottom = 'calc(50vh - 25px)'; // Slide up to middle of screen
    document.getElementById('animated-button').style.opacity = '1'; // Fade in
  }, 2000); // 2000 milliseconds = 2 seconds

  document.getElementById('animated-button').addEventListener('click', function() {
    window.location.href = 'yt-transition.html'; // Replace with the URL of the other HTML page
  });
});
