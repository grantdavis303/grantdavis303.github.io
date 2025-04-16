function updateTime() {
  var today = new Date();
  var hourNow = today.getHours();
  var minuteNow = today.getMinutes();

  // Format Hours
  if (hourNow > 12) {
    formattedHour = hourNow - 12;
  } else {
    formattedHour = hourNow;
  }

  // Format Minutes
  if (minuteNow >= 0 && minuteNow < 10) {
    formattedMinutes = '0' + minuteNow;
  } else {
    formattedMinutes = minuteNow;
  }

  // Format AM or PM
  if (hourNow >= 0 && hourNow < 12) {
    am_pm = 'am'
  } else {
    am_pm = 'pm'
  }

  // Display Formatted Final Time
  document.getElementById("time").innerHTML = `${formattedHour}:${formattedMinutes} ${am_pm}`;
}