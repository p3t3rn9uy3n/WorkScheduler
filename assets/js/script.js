var currentDate = moment().format('dddd') + " " + moment().format("Do MMM");
var hour = moment().hours();
var sevenAm = $("#7am");
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");

// Header date
var interval = setInterval(function() {
var momentNow = moment();
  $('#currentDay').html(momentNow.format('MMMM DD') + ' '
    + momentNow.format('dddd')
    .substring(0,3));
}, 100);

function timeStore() {
  var time7 = JSON.parse(localStorage.getItem("07:00 AM"));
  sevenAm.val(time7);
  var time8 = JSON.parse(localStorage.getItem("8:00 AM"));
  eightAm.val(time8);
  var time9 = JSON.parse(localStorage.getItem("9:00 AM"));
  nineAm.val(time9);
  var time10 = JSON.parse(localStorage.getItem("10:00 AM"));
  tenAm.val(time10);
  var time11 = JSON.parse(localStorage.getItem("11:00 AM"));
  elevenAm.val(time11);
  var time12 = JSON.parse(localStorage.getItem("12:00 PM"));
  twelvePm.val(time12);
  var time1 = JSON.parse(localStorage.getItem("1:00 PM"));
  onePm.val(time1);
  var time2 = JSON.parse(localStorage.getItem("2:00 PM"));
  twoPm.val(time2);
  var time3 = JSON.parse(localStorage.getItem("3:00 PM"));
  threePm.val(time3);
  var time4 = JSON.parse(localStorage.getItem("4:00 PM"));
  fourPm.val(time4);
  var time5 = JSON.parse(localStorage.getItem("5:00 PM"));
  fivePm.val(time5);
} 

function background () {
  $(".inputbox").each(function () {
      var timeBack = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      if (hour > timeBack) {
          $(this).addClass("past");
      } else if (hour < timeBack) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  timeStore()
  background()
// Save button
  $(".saveBtn").on("click", function(){
    var input = $(this).siblings(".inputbox").val().trim();
    var hourTime = $(this).siblings(".input-group-prepend").text().trim();
    localStorage.setItem(hourTime, JSON.stringify(input));
  })

});