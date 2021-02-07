// Arrays for convo
// Quotes array
let quotes = ["Be yourself; everyone else is already taken.","So many books, so little time.", "A room without books is like a body without a soul."];

let saidBy = [["Oscar Wilde", "Marilyn Monroe"], ["Marcus Tullius Cicero","Albert Einstein"], ["Bernard M. Baruch", "Frank Zappa"]]

// var for game
let counter = 0;
let ans;

// UI Element
var msg = document.getElementById('text-to-speech');

var p = document.querySelector('p');

var convert = document.getElementById('speak');

var start = document.getElementById('start');

var answer = document.getElementById('answer');

// UI EventListener
convert.addEventListener('click', convertToAudio); 

start.addEventListener('click', startConvo);

answer.addEventListener('click', nextQuestion);

// Convert function
function convertToAudio() {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';

    speech.text = msg.value;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 100;

    window.speechSynthesis.speak(speech)
}

// Convo function
function startConvo() {
    p.innerText = quotes[counter];

    let output ='';

    
    for(let i = 0; i < saidBy[counter].length; i++) {
        output += `
            <button class="answers">${saidBy[counter][i]}</button>
        `
    }

    start.style.display = 'none';

    document.querySelector('#answer').innerHTML = output;
}

console.log(counter)

function nextQuestion(e) {
    // counter
    
    if(e.target.className == 'answers') {
        counter++;
        if(counter < 3) {
            p.innerText = quotes[counter];
        
            let output ='';
        
            for(let i = 0; i < saidBy[counter].length; i++) {
                output += `
                    <button class="answers">${saidBy[counter][i]}</button>
                `
            }
        
            document.querySelector('#answer').innerHTML = output;
        } else {
            p.innerHTML = 'Game Finished';
    
            let output = '<button class="Play-again">Play Again</button>'

            document.querySelector('#answer').innerHTML = output;
        }
        console.log(counter)
    } else if (e.target.className == 'Play-again') {
        location.reload();
    }
}

console.log(counter)