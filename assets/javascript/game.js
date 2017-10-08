//vars 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 12; 
var guessedLetters = [];



var currentLetter = letters[Math.floor(Math.random() * letters.length)];

console.log(currentLetter);

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
    toLowerCase();
    guessedLetters.push(userguess);
    
    console.log(userguess);

    //for loop
    // for (var i = 0; i < guessesLeft.length; i++){

    if (userguess === currentLetter) {
      wins++;
      guessesLeft = 12;
      guessedLetters.length = 0;
    }
    else if (guessesLeft === 0) {
      losses++;
      guessesLeft = 12;
      guessedLetters.length = 0;
    }
    else if (userguess !== currentLetter) {
      
      guessesLeft--;

    }

   var html = "<h1>Psychic Game</h1>" +
   "<h4>Guess what letter I'm thinking of</h4>" + 
   "<h3>Wins: " + wins + "</h3>"+ 
   "<h3>Losses: "+ losses + "</h3>" +
   "<h3>Guesses left: " + guessesLeft + "</h3>" +
   "<p>Your guesses so far: " +  guessedLetters; + "</p>";

    document.querySelector("#psychicGame").innerHTML = html;
    }

