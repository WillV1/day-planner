//Add current date at the top of the planner 

$(document).ready(function () {
  var date = moment().format('dddd MMMM Do');
  console.log(date);
  $('#currentDay').text(date);

  //Create code that adds in business hours (9am - 5pm) into file for adding in hourly events to the left of the 
  //event text box

  moment().hour(i)

  for (var i = 9; i<=17; i++) {
    console.log(moment().hour(i).locale('en').format('hA'));
    if (time === ''){
      $(time).text(moment().hour(i).locale('en').format('hA'))
    } else {
      ''
    }
    }

//Set styling so that business hours that have passed are greyed out;  if / else for time component 
//Set styling so that the current time/hour is a red color;
 //Set styling so that hours that have not yet occured are in green 
var time = $('.time-block');

 function currentTime (){
  var currentTime = moment().hours();
  console.log(currentTime);
  time.each(function (){
  var hour = parseInt($(this).attr('id'))
  console.log($(this))
    if (hour === currentTime){
  $('.time-block > textarea').attr('class','present col-sm-10')
  } else if(currentTime > hour){
    time.attr('class', 'past')
  } else {
    time.attr('class', 'future')
  }
 })}
  currentTime()
 
//Set up local storage to store persistent changes in events by timeblock

var button = $('.saveBtn')

button.on('click', function(event) {
  event.preventDefault();
  var text = $(this).siblings('.col-sm-10').val();
  console.log(text);
  var parent = $(this).parent().attr('id');
  localStorage.setItem(parent, JSON.stringify(text));

console.log(parent);
  
})
//Use styling to transform pointer into a disk icon at the time of click event (saving of event)
$("#9 .col-sm-10").val(localstorage.getItem("9"))
localStorage.getItem(JSON.parse(parent))


});