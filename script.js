var rightNowHour = moment().format("H");
var today = moment().format("MMM Do, YYYY");
var box9 = document.querySelector("#box9");
// current date at top of page
$("#currentDay").text(today);


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
   
console.log(rightNowHour);
console.log(colorNum);