const http = new HTTP;

// Get Users
http.get('http://jsonplaceholder.typicode.com/users')
    .then(data => {
        console.log(data);
        let output = '';

        data.forEach(function(user) {
            output += `
                <div class="data">
                    <div class="upper">
                        <p>${user.name}</p>
                        <p>${user.phone}</p>
                    </div>
                    <div class="lower">
                        <p>${user.email}</p>
                    </div>
                </div>
            `

            document.querySelector('.users').innerHTML = output;
        })
    })
    .catch(err => console.log(err));

let fullname = document.querySelector('#name');
let pnumber = document.querySelector('#numba');
let haddress = document.querySelector('#address');
let uemail = document.querySelector('#email');
let btn = document.querySelector('#submit').addEventListener('click', post);

function post() {
    const data = {
        name: fullname.value,
        phone: pnumber.value,
        email: uemail.value,
        address : {
            city: haddress.value
        }
    }

    http.post('http://jsonplaceholder.typicode.com/users', data)
        .then(data => {
            let div = document.createElement('div');
            div.className = 'data';

            let upper = document.createElement('div');
            upper.className = 'upper';

            let name = document.createElement('p');
            name.innerText = data.name;
            
            let phone = document.createElement('p');
            phone.innerText = data.phone; 
            
            let lower = document.createElement('div');
            lower.className = 'lower';

            let email = document.createElement('p');
            email.innerText = data.email; 

            upper.appendChild(name);
            upper.appendChild(phone);

            lower.appendChild(email);

            div.appendChild(upper);
            div.appendChild(lower);

            document.querySelector('.users').appendChild(div);
        })
        .catch(err => console.log(err));

    console.log(data)
}

const data = {
    name: 'John Doe',
    username: 'johnnie',
    email: 'jdoe@gmail.com'
}

http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err))