
var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// var words = ['narcos', 'house of cards', 'abstract', 'you', 'mindhunter', 'ozark', 'dear white people', 'master of none']
var numberGuesses = 5;
var guessChoices = [];
var wins = 0;
var losses = 0;

// list of variable that will be taking the place in the HTML 
// if/else statements to compare the letter with user and computer
// guesses, wins, and losses update 
// guesses so far by the user
// 

document.onkeyup - function(event) {
    var userGuess = event.key;
}

// this is what the comp uses to select from the array
var grabbingRandomShow = function(array) {
    array[Math.floor(Math.random() * array.length)];
}
// here it selects a word form the "word" array
var randomShow = grabbingRandomShow(alphabetChoices);
console.log ('randomShow', randomShow);

if (userGuess < 1) {
    
}