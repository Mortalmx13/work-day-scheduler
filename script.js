var rightNowHour = moment().format("H");
var today = moment().format("MMM Do, YYYY");

// current date at top of page
$("#currentDay").text(today);
var saveBtn = document.querySelector("button")

//sets up changing color of text box for past/present/future
$(".time-run").each(function (){
    var colorNum = parseInt($(this).attr("id"));

    if(colorNum < rightNowHour){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }else if(colorNum === rightNowHour){
       
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    } 
   
})



//saves the message on that hours box
saveBtn.addEventListener("click", function(){
    var box = $(this).siblings(".time-run").val();
    var num = $(this).parent().attr("id");

    localStorage.setItem(box,num);
})

$("#9box .time-run").val(localStorage.getItem("9box"));
$("#10box .time-run").val(localStorage.getItem("10box"));
$("#11box .time-run").val(localStorage.getItem("11box"));
$("#12box .time-run").val(localStorage.getItem("12box"));
$("#13box .time-run").val(localStorage.getItem("13box"));//1pm
$("#14box .time-run").val(localStorage.getItem("14box"));//2pm
$("#15box .time-run").val(localStorage.getItem("15box"));//3pm
$("#16box .time-run").val(localStorage.getItem("16box"));//4pm
$("#17box .time-run").val(localStorage.getItem("17box"));//5pm

   
console.log(rightNowHour);
