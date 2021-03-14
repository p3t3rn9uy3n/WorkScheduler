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
  var time7 = JSON.parse(localStorage.getItem("07:00 am"));
  sevenAm.val(time7);
  var time8 = JSON.parse(localStorage.getItem("8:00 am"));
  eightAm.val(time8);
  var time9 = JSON.parse(localStorage.getItem("9:00 am"));
  nineAm.val(time9);
  var time10 = JSON.parse(localStorage.getItem("10:00 am"));
  tenAm.val(time10);
  var time11 = JSON.parse(localStorage.getItem("11:00 am"));
  elevenAm.val(time11);
  var time12 = JSON.parse(localStorage.getItem("12:00 pm"));
  twelvePm.val(time12);
  var time1 = JSON.parse(localStorage.getItem("1:00 pm"));
  onePm.val(time1);
  var time2 = JSON.parse(localStorage.getItem("2:00 pm"));
  twoPm.val(time2);
  var time3 = JSON.parse(localStorage.getItem("3:00 pm"));
  threePm.val(time3);
  var time4 = JSON.parse(localStorage.getItem("4:00 pm"));
  fourPm.val(time4);
  var time5 = JSON.parse(localStorage.getItem("5:00 pm"));
  fivePm.val(time5);
} 

$(document).ready(function(){
    timeStore()
    timeColor()
  // Save button
    $(".saveBtn").on("click", function(){
      var userInput = $(this).siblings(".inputbox").val().trim();
      var hourSpan = $(this).siblings(".input-group-prepend").text().trim();
      localStorage.setItem(hourSpan, JSON.stringify(userInput));
  
    })
});

function timeColor () {
      
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