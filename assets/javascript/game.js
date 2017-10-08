//vars 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 12; 
var guessedLetters = [];
// var letterToGuess =


var currentLetter = letters[Math.floor(Math.random() * letters.length)];

console.log(currentLetter);

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
    toLowerCase();
    
    console.log(userguess);

    if (userguess === currentLetter) {
      wins++;
      guessesLeft = 12;
      alert(wins)
    }
    else if (userguess !== currentLetter) {
      losses++;
      alert(losses)
      {
        if (guessesLeft - 1 === 0);
      }
    }
    if (guessesLeft === 0) {
      losses++;
      guessesLeft = 12;
    }

   var html = "<p>Guess what letter I'm thinking of:</p>" + 
   "<p>Wins: " + wins + "</p>"+ 
   "<p>Losses: "+ losses + "</p>" +
   "<p>Guesses Left: " + guessesLeft + "</p>" +
   "<p>Guessed Letter: " +  guessedLetters; + "</p>";
    document.querySelector("#psychicGame").innerHTML = html;
    }

