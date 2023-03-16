
//variables for save buttons
var but0 = document.getElementById("bt0")
var but1 = document.getElementById("bt1")
var but2 = document.getElementById("bt2")
var but3 = document.getElementById("bt3")
var but4 = document.getElementById("bt4")
var but5 = document.getElementById("bt5")
var but6 = document.getElementById("bt6")
var but7 = document.getElementById("bt7")
var but8 = document.getElementById("bt8")


//bring in moment and insert current time into the header
var time = moment()

$("#currentDay").text(time.format(" LLL"));

//variables for text areas
var text9 = $("#text1");
var text10 = $("#text2");
var text11 = $("#text3");
var text12 = $("#text4");
var text1 = $("#text5");
var text2 = $("#text6");
var text3 = $("#text7");
var text4 = $("#text8");
var text5 = $("#text9");

//get text from local storage
$(document).ready(function() {
    text9.val(localStorage.getItem("9AM") || " ");
    text10.val(localStorage.getItem("10AM") || " ");
    text11.val(localStorage.getItem("11AM") || " ");
    text12.val(localStorage.getItem("12PM") || " ");
    text1.val(localStorage.getItem("1PM") || " ");
    text2.val(localStorage.getItem("2PM") || " ");
    text3.val(localStorage.getItem("3PM") || " ");
    text4.val(localStorage.getItem("4PM") || " ");
    text5.val(localStorage.getItem("5PM") || " ");
});



//save text to local storage 
function saveText() { console.log("saved")
    localStorage.setItem("9AM", text9.val());
    
    localStorage.setItem("10AM", text10.val());
    localStorage.setItem("11AM", text11.val());
    localStorage.setItem("12PM", text12.val());
    localStorage.setItem("1PM", text1.val());
    localStorage.setItem("2PM", text2.val());
    localStorage.setItem("3PM", text3.val());
    localStorage.setItem("4PM", text4.val());
    localStorage.setItem("5PM", text5.val());
    console.log("saved again")
}




//add event listener to save button calling saveText function
but0.addEventListener("click", saveText);
but1.addEventListener("click", saveText);
but2.addEventListener("click", saveText);
but3.addEventListener("click", saveText);
but4.addEventListener("click", saveText);
but5.addEventListener("click", saveText);
but6.addEventListener("click", saveText);
but7.addEventListener("click", saveText);
but8.addEventListener("click", saveText);











