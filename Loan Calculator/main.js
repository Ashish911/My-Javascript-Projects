let container = document.querySelector('.left');

let calculateBtn = document.querySelector('.submitBtn');

// Range Vars

let amount = document.getElementById('amountInput');
let interest = document.getElementById('interestInput');
let year = document.getElementById('yearInput');

// Vars
let startingAmount = document.getElementById('startingAmount');
let endingAmount = document.getElementById('endingAmount');

// Starting and Ending Value
let starting = document.getElementById('starting');
let ending = document.getElementById('ending');

container.addEventListener('input', updateValue);

calculateBtn.addEventListener('click', calculateLoan);

starting.addEventListener('blur', updateMin);

ending.addEventListener('blur', updateMax);


function updateValue() {

    document.getElementById('amountBig').innerText = amount.value; 
    document.getElementById('interestBig').innerText = interest.value; 
    document.getElementById('yearBig').innerText = year.value; 

}

function calculateLoan() {
    // UI Vars
    let totalAmount = document.querySelector('.total_Amount');
    let totalInterest = document.querySelector('#thickInterest');
    let monthlyPayment = document.querySelector('#monthlyPayment');

    const calculatedInterest = interest.value / 100 / 12 ;
    const calculatedPayments = year.value * 12;

    // For Monthly Payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);

    const monthly = (amount.value * x * calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.innerText = "$" + monthly.toFixed(2);
        totalAmount.innerText = (monthly * calculatedPayments).toFixed(2);
        totalInterest.innerText = "$" + ((monthly * calculatedPayments) - amount.value).toFixed(2);
    }
}

function updateMin() {
    if(Number(starting.value) >= amount.max) {
        alert('Cannot have minimun greater than max');
        starting.value = '';
    } else {
        startingAmount.innerText = "$" + starting.value;
        amount.min = starting.value;
        if(amount.min > 1) {
            if(Number(document.getElementById('amountBig').innerText) < amount.min ) {
                document.getElementById('amountBig').innerText = amount.min; 
            }
        } else if (amount.min == 1){
            document.getElementById('amountBig').innerText = 1; 
        }
    }

}

function updateMax() {
    if(ending.value <= amount.min) {
        alert('Cannot have maximun less than min');
        ending.value = '';
    } else {
        endingAmount.innerText = "$" + ending.value;
        amount.max = ending.value;
    }
}
