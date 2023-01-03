function setTime() {
  var date1 = new Date();
  var date2 = new Date(2023, 3, 12, 10, 0, 0);
  var diff = new Date(date2.getTime() - date1.getTime());

  var months = diff.getUTCMonth() - 1; // Gives month count of difference
  var days = diff.getUTCDate() - 1; // Gives day count of difference
  var hours = diff.getHours();
  var mins = diff.getMinutes();
  var secs = diff.getSeconds();

  var monthEle = document.getElementById("clock_month");
  monthEle.textContent = decorNumber(months);
  var dayEle = document.getElementById("clock_day");
  dayEle.textContent = decorNumber(days);
  var hour = document.getElementById("clock_hour");
  hour.textContent = decorNumber(hours);
  var min = document.getElementById("clock_min");
  min.textContent = decorNumber(mins);
  var sec = document.getElementById("clock_sec");
  sec.textContent = decorNumber(secs);
}

function decorNumber(num) {
  return ("0" + num).slice(-2);
}

setInterval(() => {
  if (!document.hidden) {
    setTime();
  }
}, 1000);
