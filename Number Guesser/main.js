// Game Values
let min = 1,
    max = 10,
    winning = getRandomNumber(min, max),
    guessLeft = 3;

// UI Elements
const input = document.querySelector('.input'),
    guessBtn = document.querySelector('.btn'),
    message = document.querySelector('.msg'),
    container = document.querySelector('.container');


const green = ['Damn Bro You Good At Dis Game', 'Sheeeeeeeesh', 'Niiiiiiicccce'];

const red = ["Physc That's The Wrong Numba", "Bruh You Serious", "Jesus Christ", "Com'On MA G"]

function greenText() {
    return Math.floor(Math.random() * green.length);
}

function redText() {
    return Math.floor(Math.random() * red.length);
}

container.addEventListener('mousedown', function(e) {
    if(e.target.className === 'again') {
        message.style.display = 'none';
        window.location.reload();
    }
})


// Event handler
guessBtn.addEventListener('click', function(e) {
    let guess = parseInt(input.value);
    

    // Validation
    if(isNaN(guess) || guess < min || guess > max) {
        showMessage('Please put a number between 1 - 10', '#F25042');
    } else {
        if (guess === winning) {
            // Won
            gameOver(true, green[greenText()]);
            
        } else {
            
            guessLeft -= 1;
    
            if(guessLeft == 0){
                // Lost
                
                gameOver(false, 'Bruh You Lost But I Got You Homie Next Round');
            } else {
                input.value = '';

                showMessage(red[redText()],'#F25042')
            }
        }
    }

    e.preventDefault();
})

function gameOver(won, msg) {
    
    let color;

    if(won) {
        color = '#2CB67D';
    } else {
        color = '#F25042';
    }

    input.disabled = true;

    showMessage(msg, color);

    // Play Again
    guessBtn.innerText = 'Play Again';
    guessBtn.className = 'again';

}


function showMessage(msg, color) {
    message.style.backgroundColor = color;
    if(color == '#F25042') {
        message.innerHTML = "<i class='fas fa-times'></i> " + msg;
    } else {
        message.innerHTML = "<i class='fas fa-glass-cheers'></i> " + msg;
    }
    message.style.display = 'block';
}

// Random winning Number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}