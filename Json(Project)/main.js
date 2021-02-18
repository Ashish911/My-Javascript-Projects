
// UI Elements
let buttons = document.querySelector('.buttons');
let before = document.querySelector('.before');
let btn = document.querySelector('.remove');
let span = document.querySelector('span');
let icon = document.querySelector('.deleteicon');
let getBtn = document.querySelector('.getCustomer');
let getBtns = document.querySelector('.getCustomers');

getBtn.addEventListener('click', loadCustomer);

getBtns.addEventListener('click', loadCustomers);

btn.addEventListener('mouseover', beginTransition);

btn.addEventListener('click', remove);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const customer = JSON.parse(this.responseText);

            const output = `
            <div class="card">
                <div class="pic">
                    <img class="card_image" src="/pic.jpg" alt="picture">
                    <p class="absolute">Photo</p>
                </div>
                <div class="info">
                    <p class="name">${customer.name}</p>
                    <p class="contactNo">${customer.contact}</p>
                    <p class="description">${customer.description} </p>
                </div>
            </div>
            `;

            btn.style.display = 'block';

            document.querySelector('.grid').innerHTML = output;
        }
    }

    xhr.send();
}

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer) {
                output += `
                <div class="card">
                    <div class="pic">
                        <img class="card_image" src="/pic.jpg" alt="picture">
                        <p class="absolute">Photo</p>
                    </div>
                    <div class="info">
                        <p class="name">${customer.name}</p>
                        <p class="contactNo">${customer.contact}</p>
                        <p class="description">${customer.description} </p>
                    </div>
                </div>
                `
            })

            btn.style.display = 'block';

            document.querySelector('.grid').innerHTML = output;
        }
    }

    xhr.send();
}

function beginTransition(){
    span.style.fontSize = '0';
    span.style.transition = "all 0.5s ease";
    icon.style.marginLeft = '0';
    icon.style.marginRight = '5px';
    btn.addEventListener('mouseout', endTransition);
}

function endTransition() {
    span.style.fontSize = '16px';
    span.style.transition = "all 0.5s ease";
}

function remove() {
    icon.style.transform = "rotate(180deg)";
    icon.style.transition = "all 0.5s ease";

    icon.addEventListener('transitionend', function() {
        document.querySelector('.grid').innerHTML = '';
        icon.style.transform = "rotate(0deg)";
        btn.style.display = 'none';
    })
}