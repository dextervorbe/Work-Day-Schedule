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

document.querySelector("#time").innerHTML = moment().format();

// Creating variables for each input to store into local storage
const inputs = [
    document.querySelector("#inputValue0"),
    document.querySelector("#inputValue1"),
    document.querySelector("#inputValue2"),
    document.querySelector("#inputValue3"),
    document.querySelector("#inputValue4"),
    document.querySelector("#inputValue5"),
    document.querySelector("#inputValue6"),
    document.querySelector("#inputValue7"),
    document.querySelector("#inputValue8"),
];

// Get the value from local storage
// Set that value to the text input
inputs.forEach(input => {
    const key = input.dataset.hour;
    input.value = localStorage.getItem(key);
});

save9am.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("9", inputs[0].value);
});

save10am.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("10", inputs[1].value);
});

save11am.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("11", inputs[2].value);
});

save12pm.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("12", inputs[3].value);
});

save1pm.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("13", inputs[4].value);
});

save2pm.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("14", inputs[5].value);
});

save3pm.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("15", inputs[6].value);
});

save4pm.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("16", inputs[7].value);
});

save5pm.addEventListener("click", function(e){
    e.preventDefault();
    localStorage.setItem("17", inputs[8].value);
});


setInterval(function(){
    //First grab the time
    const currentHour = (new Date()).getHours();
    // Compare time and decide what to do
    
    inputs.forEach(function(input) {
        
        const hour = input.dataset.hour;

        if (Number(hour) < currentHour) {
            input.classList.remove("present");
            input.classList.remove("future");
            input.classList.add("past");
        } else if (currentHour === Number(hour)) {
            input.classList.remove("past");
            input.classList.remove("future");
            input.classList.add("present");
        } else {
            input.classList.remove("past");
            input.classList.remove("present");
            input.classList.add("future");
        }
    })

    
}, 1000);