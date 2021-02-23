
document.getElementById('getUser').addEventListener('click', users);

function users() {
    getUsers()
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach(function(datas) {
            output+= `
                <div> 
                    <p>${datas.name}</p>
                    <p>${datas.website}</p>
                    <p>${datas.email}</p>
                </div>
            `
        })
        document.querySelector('.data').innerHTML = output;
    }) 
    .catch(err => console.log(err));
}

function display(data) {
    return `<div><p>${data.name}</p></div>`
}

async function getUsers() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return data;
}