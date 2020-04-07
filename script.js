//Add current date at the top of the planner - Done

$(document).ready(function () {
  var date = moment().format('dddd MMMM Do');
  console.log(date);
  $('#currentDay').text(date);



  //Create code that adds in business hours (9am - 5pm) into file for adding in hourly events to the left of the 
  //event text box

  var nine = moment().startOf('day').add(9, 'h').format('hA');
  $('#nine').text(nine);

  var ten = moment(nine, 'hA').add(1, 'h').format('hA');
  console.log(ten)
  $('#ten').text(ten);

  var eleven = moment(ten, 'hA').add(1, 'h').format('hA');
  $('#eleven').text(eleven);

  var twelve = moment(eleven, 'hA').add(1, 'h').format('hA');
  $('#twelve').text(twelve);

  var one = moment(twelve, 'hA').add(1, 'h').format('hA');
  $('#one').text(one);

  var two = moment(one, 'hA').add(1, 'h').format('hA');
  $('#two').text(two);

  var three = moment(two, 'hA').add(1, 'h').format('hA');
  $('#three').text(three);

  var four = moment(three, 'hA').add(1, 'h').format('hA');
  $('#four').text(four);

  var five = moment(four, 'hA').add(1, 'h').format('hA');
  $('#five').text(five);

//Create code that generates form fields corresponding to each hour of the day to enter events within timeblocks

//Create code that allows user to scroll through the day planner for showing each hour of the day

//Create code that allows the day planner to dynamically determine which hour of the day the user is in

//Set styling so that business hours that have passed are greyed out;  if / else for time component 


//Set styling so that the current time/hour is a red color; 
function currentTime (){
  var time = $('.hour');
  var currentTime = moment().format('LTS');
  console.log(currentTime);
  if (time === currentTime){
  time.attr('class','present')
  }
  }
  currentTime()
 
//Set styling so that hours that have not yet occured are in green 

//Create code that allows user to click within each hour timeblock to enter in an event

//Set up clickable save button to the right of the event text box within each hour timeblock 
//that allows information recorded to persist in timeblock even when window is refreshed
var text = $('.textarea')
var button = $('.saveBtn')

button.on('click', function(event) {
  event.preventDefault();})
localStorage.setItem('text', JSON.stringify(text))

//Use styling to create lock icon on the save button  - Font Awesome

//Use styling to transform pointer into a disk icon at the time of click event (saving of event)

//Create code that makes the hour timeblock, the textbox and the save button the same height

//Create code that provides (margin/padding?) between each hour textbox and save button

//Set up local storage to store persistent changes in events by timeblock

});