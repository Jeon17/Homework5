//On Ready
$(document).ready(function(){



//Save Button functionality
$(".saveBtn").on("click", function(){
   console.log(".saveBtn")
    //get nearby values
    var time = $(this).parent().attr("id");
    var value = $(this).siblings("descriptions").val();
//save to localStorage
localStorage.setItem(time, time); 
});


//Hour Updater
function hourUpdater(){
    //Gets current number of hours
    var currentHour = moment().hours();
    
    //loop over time blocks
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        //Check to see if we have passed this time
        if(blockHour < currentHour){
            $(this).addClass("past");
        }
        else if(blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else //else we add future class
        {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    });
}
    //Calling hourUpdater
    return hourUpdater()


//Loading local Storage saved

$('#hour-9 .description').val(localStorage.getItem("hour-9"));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

//displaying  current day on the page

$("currentDay").text(moment().format("dddd, MMMM Do"));

});