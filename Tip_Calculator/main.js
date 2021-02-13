let container = document.querySelector('.container');

container.addEventListener('input', updateAmount);

let up = document.querySelector('#cielamount');

up.addEventListener('click', formatCiel);

let down = document.querySelector('#flooramount'); 

down.addEventListener('click', formatFloor);

function updateAmount() {

    // UI elements
    let billInput = Number(document.querySelector('.billValue').value);
    let tipInput = document.querySelector('#tip-input').value;
    let splitInput = document.querySelector('#split-input').value;
    
    document.querySelector('#tip-percent').innerText = tipInput + "%";
    document.querySelector('#split-people').innerText = splitInput;
    
    
    let tipValue = billInput * (tipInput / 100);
    let total = billInput + tipValue;    
    let splitTotal = total / splitInput;
    
    document.querySelector('#tipOfBill').innerText = tipValue.toFixed(2);
    document.querySelector('#totalAmount').innerText = total.toFixed(2);
    document.querySelector('#sTotal').innerText = splitTotal.toFixed(2);
    
}

function formatCiel() {
    let tip = Number(document.querySelector('#tipOfBill').innerText);
    let total = Number(document.querySelector('#totalAmount').innerText);
    let splitInput = document.querySelector('#split-input').value;
    
    tip = Math.ceil(tip);
    total = Math.ceil(total);
    let splitTotal = total / splitInput;

    document.querySelector('#tipOfBill').innerText = tip.toFixed(2);
    document.querySelector('#totalAmount').innerText = total.toFixed(2);
    document.querySelector('#sTotal').innerText = splitTotal.toFixed(2);   
}

function formatFloor() {
    let tip = Number(document.querySelector('#tipOfBill').innerText);
    let total = Number(document.querySelector('#totalAmount').innerText);
    let splitInput = document.querySelector('#split-input').value;
    
    tip = Math.floor(tip);
    total = Math.floor(total);
    let splitTotal = total / splitInput;

    document.querySelector('#tipOfBill').innerText = tip.toFixed(2);
    document.querySelector('#totalAmount').innerText = total.toFixed(2);
    document.querySelector('#sTotal').innerText = splitTotal.toFixed(2);   
}