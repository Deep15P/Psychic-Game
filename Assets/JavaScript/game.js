
var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


var computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];
var wins = 0;
var losses = 0;
var userChoicesEmpty = [];
var numberGuesses = 5;

// // this is what the comp uses to select from the array
// var grabbingRandomAlphabet = function (array) {
//     array[Math.floor(Math.random() * array.length)];
// }
// // here it selects a word form the "word" array
// var randomAlphabet = grabbingRandomAlphabet(alphabetChoices);
// console.log(randomAlphabet);

var userGuessText = document.getElementById("userguess-text");
var numberGuessesText = document.getElementById("numberguesses-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

// console.log(computerGuess);
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

    userChoicesEmpty.push(event.key);


    userGuessText.textContent = "Your guess: " + userChoicesEmpty;
    numberGuessesText.textContent = "Guesses Left: " + numberGuesses;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;

}





