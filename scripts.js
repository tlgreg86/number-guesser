//Global variables that query my buttons for later use in my functions as well as my random number variable.

var guessBtn = document.querySelector('#numSubmit');
var clearBtn = document.querySelector('#numClear');
var userGuess = document.querySelector('#numInput');
var gameReset = document.querySelector('#gameReset');
var randNumb = getRandomNumber(1,100);

//Functions that enable/disable all buttons and clear all inputs/
function disableBtns(){
  guessBtn.disabled = true;
  clearBtn.disabled = true;
  gameReset.disabled = true;
};

function enableBtns(){
  guessBtn.disabled = false;
  clearBtn.disabled = false;
  gameReset.disabled = false;
};

function clearInput(){
  document.forms[0].reset();
  document.querySelector('h3').innerText = '';
  document.querySelector('#feedback').innerText = '';
  document.querySelector('#lstGuess').innerText = '';
};

function getRandomNumber( lower, upper ) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

userGuess.addEventListener('keyup', function(){
  if (userGuess.value == "") {
    disableBtns();
  };
});

userGuess.addEventListener('keyup', function(){
  enableBtns();
});

clearBtn.addEventListener('click', function(){
  clearInput();
});

gameReset.addEventListener('click', function(){
  window.location.reload();
});

guessBtn.addEventListener('click', function(){
  if (userGuess.value < 1 || 100 < userGuess.value) {
    alert('Number out of range, please enter a new number')
  }else if(userGuess.value < randNumb) {
    document.querySelector('#feedback').innerText = 'That is too low'
    document.querySelector('h3').innerText = 'Your last guess was'
  }else if (userGuess.value > randNumb) {
    document.querySelector('#feedback').innerText = 'That is too high'
    document.querySelector('h3').innerText = 'Your last guess was'
  }else if (userGuess.value == randNumb) {
    document.querySelector('#feedback').innerText = 'BOOM!'
    document.querySelector('h3').innerText = 'Your last guess was'
  }
});

gameReset.addEventListener('click', function(){
  clearInput();
  randNumb = getRandomNumber(1, 100);
  document.querySelector('#lstGuess').innerText = ''
  document.querySelector('#feedback').innerText = ''
});

guessBtn.addEventListener('click', function(){
  var userInput = document.querySelector('#numInput').value;
  var parseInput = parseInt(userInput);
  var lstGuess = document.querySelector('#lstGuess');
  checkInput();
  lstGuess.innerText = parseInput;
  function checkInput(userGuess){
    if (Number.isNaN(parseInput) == true) {
      alert('Please enter a valid number');
    };
  };
  });
