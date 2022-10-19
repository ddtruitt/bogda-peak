$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id')
        console.log("this", time)
        console.log ("value", value)
        // save in local storage
        localStorage.setItem(time, value)
        // Shows a notification at the top of the page when the function is ran
        // Lets the user know that their changes are saved
        document.getElementById("notify").style.visibility = "visible";
        // Timeout to get rid of the notification after 5 seconds
        setTimeout(function () {
            document.getElementById("notify").style.visibility = "hidden";
        }, 5000);
    });
    
    // This function gets the current hour, and compares it with the hour presented in a timeblock
    // After comparison, changes the class to reflect if it is a past, present, or future hour and changes the class accordingly
    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();
        // loop over time blocks
        $('.time-block').each(function () {        
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
        // Hour comparison and class reassignment
        if (blockHour < currentHour) {
            $(this).addClass('past');
        } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
      });
    }


    hourUpdater();
    // This runs the hourUpdater every 15 seconds
    setInterval(hourUpdater, 15000);

    // This loads any saved data that was stored in  localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    // This displayes the current day in a "Day of the Week, Month Name, Date Number+Suffix" format
    // ie. Sunday, January 1st
    $('#currentDay').text(moment().format ('dddd, MMMM Do'));
});