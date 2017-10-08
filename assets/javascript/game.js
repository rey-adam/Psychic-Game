//vars 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var gussesLeft = 12; 
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
      gussesLeft = 12;
      alert(wins)
    }
    else if (userguess !== currentLetter) {
      losses++;
      alert(loses)
      {
        if (gussesLeft - 1 === 0);
      }
    }
    if (gussesLeft === 0) {
      loses++;
      gussesLeft = 12;
    }

   var html = "<p>Guess what letter I'm thinking of:</p>" 
   + "<p>Wins: " + wins + "<p>"
   + "</p>" + "<p>Loses: "+ loses + 
   "<p>Guesses Left: " + guessLeft + 
   "<p>Guessed Letter: " +  guessedLetters;
    document.querySelector("#psychicGame").innerHTML = html;
    }

