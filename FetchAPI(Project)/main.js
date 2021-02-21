document.querySelector('#text').addEventListener('click', getText);

document.querySelector('#json').addEventListener('click', getJson);

document.querySelector('#api').addEventListener('click', getApiData);

function getText() {
    fetch('text.txt')
    .then(response => response.text())
    .then(data => {
        let output = `
            <p>${data}</p>
        `
        document.querySelector('.data').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getJson() {
    fetch('names.json')
    .then(response => response.json())
    .then(data => {
        let output = '';

        data.forEach(function(name) {
            output += `
                <p>${name.name}</p>
            `
        })

        document.querySelector('.data').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getApiData() {
    fetch('https://api.github.com/users')
    .then(response => response.json()) 
    .then(data => {
        let output = '';

        data.forEach(function(user) {
            output += `
                <p>${user.login}</p>
            `
        })

        document.querySelector('.data').innerHTML = output;
    })
    .catch(err => console.log(err));
}