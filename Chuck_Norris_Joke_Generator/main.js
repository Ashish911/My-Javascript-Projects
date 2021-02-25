document.querySelector('.btn').addEventListener('click', getJokes);

// Using Old XHR METHOD

// function getJokes(e) {

//     const number = document.querySelector('.inputs').value;

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//     xhr.onload = function() {
//         if(this.status === 200) {
//             const response = JSON.parse(this.responseText);

//             let output = '';

//             console.log('asd');

//             if(response.type === 'success') {
//                 response.value.forEach(function(joke) {
//                     output += `
//                         <p>${joke.joke}</p>
//                     `
//                 })
//             } else {
//                 output += '<p>Something went wrong';
//             }


//             document.querySelector('.data').innerHTML = output;
//         }
//     }

//     xhr.send();

//     e.preventDefault();
// }

// Using Async And Fetch API

function getJokes() {

    jokes()
    .then(data => {
        console.log(data);
        let output = '';
        data.value.forEach(function(joke) {
            output += `
                        <p>${joke.joke}</p>
                    `
        })

        document.querySelector('.data').innerHTML = output;
    })
    .catch(err => console.log(err));
}

async function jokes() {
    const number = document.querySelector('.inputs').value;

    const response = await fetch(`http://api.icndb.com/jokes/random/${number}`)

    const data = await response.json();

    return data;

}