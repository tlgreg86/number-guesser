// DOM Elements
const guessBtn = document.querySelector('#numSubmit');
const clearBtn = document.querySelector('#numClear');
const userGuess = document.querySelector('#numInput');
const gameReset = document.querySelector('#gameReset');
const feedback = document.querySelector('#feedback');
const lastGuess = document.querySelector('#lstGuess');
const guessLabel = document.querySelector('h3');

// Game state
let randNumb = getRandomNumber(1, 100);

// Helper functions
function getRandomNumber(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function updateButtonStates(disabled = true) {
    guessBtn.disabled = disabled;
    clearBtn.disabled = disabled;
    gameReset.disabled = disabled;
}

function clearInput() {
    document.forms[0].reset();
    guessLabel.textContent = '';
    feedback.textContent = '';
    lastGuess.textContent = '';
}

// Event Listeners
userGuess.addEventListener('input', (e) => {
    updateButtonStates(!e.target.value);
});

clearBtn.addEventListener('click', clearInput);

gameReset.addEventListener('click', () => {
    clearInput();
    randNumb = getRandomNumber(1, 100);
});

guessBtn.addEventListener('click', () => {
    const value = parseInt(userGuess.value);
    
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }
    
    if (value < 1 || value > 100) {
        alert('Number out of range, please enter a number between 1 and 100');
        return;
    }
    
    lastGuess.textContent = value;
    guessLabel.textContent = 'Your last guess was';
    
    if (value < randNumb) {
        feedback.textContent = 'That is too low';
    } else if (value > randNumb) {
        feedback.textContent = 'That is too high';
    } else {
        feedback.textContent = 'BOOM!';
    }
});
