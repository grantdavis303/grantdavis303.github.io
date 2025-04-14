function updateTime() {
  var today = new Date();
  var hourNow = today.getHours();
  var minuteNow = today.getMinutes();

  if (hourNow > 12) {
    formattedHour = hourNow - 12;
    am_pm = 'pm';
  } else {
    formattedHour = hourNow;
    am_pm = 'am';
  }

  if (minuteNow >= 0 && minuteNow < 10) {
    formattedMinutes = '0' + minuteNow;
  } else {
    formattedMinutes = minuteNow;
  }

  document.getElementById("time").innerHTML = `${formattedHour}:${formattedMinutes} ${am_pm} MT`;
}