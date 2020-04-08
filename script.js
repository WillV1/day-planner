//Add current date at the top of the planner 

$(document).ready(function () {
  var date = moment().format('dddd MMMM Do');

  $('#currentDay').text(date);

  //Create code that adds in business hours (9am - 5pm) into file for adding in hourly events to the left of the 
  //event text box

  //  moment().hour(i)
  //  var hour = ('#9');

  //for (var i = 9; i <= 17; i++) {
  //    console.log(moment().hour(i).locale('en').format('hA'));
  //    if ('#9' === '') {
  //      $(hour).html(moment().hour(i).locale('en').format('hA'))
  //    } else {
  //      ''
  //    }
  //  }

  //Set styling so that business hours that have passed are greyed out;  if / else for time component 
  //Set styling so that the current time/hour is a red color;
  //Set styling so that hours that have not yet occured are in green 
  var time = $('.time-block');

  function currentTime() {
    var current = moment().hours()

    console.log(current);

    time.each(function () {
      var hour = parseInt($(this).attr('id'))

      console.log(hour);

      if (hour === current) {
        $('.time-block > textarea').attr('class', 'present col-sm-10')
      } else if (current > hour) {
        $('.time-block > textarea').attr('class', 'past col-sm-10')
      } else {
        $('.time-block > textarea').attr('class', 'future col-sm-10')
      }
    })
  }
  currentTime()

  //Set up local storage to store persistent changes in events by timeblock

  var button = $('.saveBtn')

  button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-sm-10').val();
    var parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));

    var toDo = (JSON.parse(localStorage.getItem(parent)));
    $('#9 textarea').text(toDo);
    console.log(parent);

  })
  //Use styling to transform pointer into a disk icon at the time of click event (saving of event)



});