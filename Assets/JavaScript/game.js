// these are the characters the user can press on the keybord to guess the letter.
var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// this is making the computer guess a letter from the alphabetChoices variable. 
var computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];
// these are all variables for different things the user see. These are also used in js for the logic of the game.
var wins = 0;
var losses = 0;
var userChoicesEmpty = [];
var numberGuesses = 5;


// these varaible are used to link it back into HTML
var userGuessText = document.getElementById("userguess-text");
var numberGuessesText = document.getElementById("numberguesses-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

// this is recording the users key presses, and showing the outcome. (if the user guesses the correct answer and wins or he looses.)
document.onkeyup = function (event) {
    var userGuess = event.key;

    if (userGuess === computerGuess) {
        wins++;
        numberGuesses = 5;
        userChoicesEmpty = [];
        computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];
    }

    else if (userGuess != computerGuess) {
        
        numberGuesses--;
        
    }

    if (numberGuesses === 0) {
        losses++;
        computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];
        numberGuesses = 5;
        userChoicesEmpty = [];
    }
// this is showing the key the user pressed
    userChoicesEmpty.push(event.key);

// this is helping to link it back to HTML
    userGuessText.textContent = "Your guess: " + userChoicesEmpty;
    numberGuessesText.textContent = "Guesses Left: " + numberGuesses;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

}





