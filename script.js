// Creating button variables to make Eventlisteners
var save9am = document.querySelector("#btn0");
var save10am = document.querySelector("#btn1");
var save11am = document.querySelector("#btn2");
var save12pm = document.querySelector("#btn3");
var save1pm = document.querySelector("#btn4");
var save2pm = document.querySelector("#btn5");
var save3pm = document.querySelector("#btn6");
var save4pm = document.querySelector("#btn7");
var save5pm = document.querySelector("#btn8");

// Creating variables for each input to store into local storage
var input0 = document.querySelector("#inputValue0");
var input1 = document.querySelector("#inputValue1");
var input2 = document.querySelector("#inputValue2");
var input3 = document.querySelector("#inputValue3");
var input4 = document.querySelector("#inputValue4");
var input5 = document.querySelector("#inputValue5");
var input6 = document.querySelector("#inputValue6");
var input7 = document.querySelector("#inputValue7");
var input8 = document.querySelector("#inputValue8");

// Get the value from local storage
// Set that value to the text input
input0.value = localStorage.getItem("9amSchedule");
input1.value = localStorage.getItem("10amSchedule");
input2.value = localStorage.getItem("11amSchedule");
input3.value = localStorage.getItem("12pmSchedule");
input4.value = localStorage.getItem("1pmSchedule");
input5.value = localStorage.getItem("2pmSchedule");
input6.value = localStorage.getItem("3pmSchedule");
input7.value = localStorage.getItem("4pmSchedule");
input8.value = localStorage.getItem("5pmSchedule");

save9am.addEventListener("click", function(e){
    e.preventDefault();
   localStorage.setItem("9amSchedule", input0.value);
});

save10am.addEventListener("click", function(e){
    e.preventDefault();
   localStorage.setItem("10amSchedule", input1.value);
});

save11am.addEventListener("click", function(e){
    e.preventDefault();
   localStorage.setItem("11amSchedule", input2.value);
});

save12pm.addEventListener("click", function(e){
    e.preventDefault();
   localStorage.setItem("12pmSchedule", input3.value);
});

save1pm.addEventListener("click", function(e){
    e.preventDefault();
   localStorage.setItem("1pmSchedule", input4.value);
});

save2pm.addEventListener("click", function(e){
    e.preventDefault();
   localStorage.setItem("2pmSchedule", input5.value);
});

save3pm.addEventListener("click", function(e){
    e.preventDefault();
   localStorage.setItem("3pmSchedule", input6.value);
});

save4pm.addEventListener("click", function(e){
    e.preventDefault();
   localStorage.setItem("4pmSchedule", input7.value);
});

save5pm.addEventListener("click", function(e){
    e.preventDefault();
   localStorage.setItem("5pmSchedule", input8.value);
});
