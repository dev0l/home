$(function () {
  setInterval(function () {
    var seconds = new Date().getTime() / 1000;
    var time = new Date(),
      hours = time.getHours(),
      min = time.getMinutes(),
      sec = time.getSeconds(),
      millSec = time.getMilliseconds(),
      millString = millSec.toString().slice(0, -2),
      day = time.getDay(),
      ampm = hours >= 12 ? 'PM' : 'AM',
      month = time.getMonth(),
      date = time.getDate(),
      year = time.getFullYear(),
      monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

    //convert hours from military time and add the am or pm
    //if (hours > 11) $('#ampm').text(ampm);
    $('#ampm').text(ampm)
    if (hours > 12) hours = hours % 12;
    if (hours == 0) hours = 12;

    //add leading zero for min and sec 
    if (sec <= 9) sec = "0" + sec;
    if (min <= 9) min = "0" + min;

    $('#hours').text(hours);
    $('#min').text(":" + min + ":");
    $('#sec').text(sec);
    //$("#test").text(day);
    // $('#millSec').text(millString);
    $('.days:nth-child(' + (day + 1) + ')').addClass('active');
    $("#month").text(monthShortNames[month]);
    $('#date').text(date);
    $('#year').text(year);

  }, 100);

});