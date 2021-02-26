const number = document.querySelector('.inputs');

document.querySelector('.btn').addEventListener('click', getJokes);

const msg = ["Just 1 bro u serious", "Damn Bro 2 ain't enough init", "3's a fine numba", "Bro you need to go to the doctor"];

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

    document.querySelector('.msg').style.display = 'flex';
    if(number.value == 1) {
        document.querySelector('.msgText').innerHTML = msg[number.value - 1];
    } else if(number.value == 2) {
        document.querySelector('.msgText').innerHTML = msg[number.value - 1];
    } else if(number.value == 3) {
        document.querySelector('.msgText').innerHTML = msg[number.value - 1];
    } else if(number.value >= 4) {
        document.querySelector('.msgText').innerHTML = msg[3];
    }

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

    setTimeout(function(){
        document.querySelector('.msg').style.display = 'none';
    },2000)
}

async function jokes() {

    const response = await fetch(`http://api.icndb.com/jokes/random/${number.value}`)

    const data = await response.json();

    return data;

}