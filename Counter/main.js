var counter = 0;

// Elemenets
var counterNumber = document.getElementById('value');
var decrease = document.querySelector('.btn-decrease');
var reset = document.querySelector('.btn-reset');
var increase = document.querySelector('.btn-increase');

increase.addEventListener('click', function () {
    counter++;
    counterNumber.textContent = counter;
    if (counter > 0) {
        counterNumber.style.color = "green";
    } else if (counter < 0){
        counterNumber.style.color = "red";
    } else {
        counterNumber.style.color = "#d2dae2";
    }
})

decrease.addEventListener('click', function() {
    counter--;
    counterNumber.textContent = counter;
    if (counter > 0) {
        counterNumber.style.color = "green";
    } else if (counter < 0){
        counterNumber.style.color = "red";
    } else {
        counterNumber.style.color = "#d2dae2";
    }
})

reset.addEventListener('click', function() {
    counter = 0;
    counterNumber.textContent = counter;
    if (counter > 0) {
        counterNumber.style.color = "green";
    } else if (counter < 0){
        counterNumber.style.color = "red";
    } else {
        counterNumber.style.color = "#d2dae2";
    }
})
