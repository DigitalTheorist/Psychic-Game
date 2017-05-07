//PSEUDOCODE

//Declare variables

var alphabet = [ 'a', 'b', 'c', 'd', 'e',
                   'f', 'g', 'h', 'i', 'j',
                   'k', 'l', 'm', 'n', 'o',
                   'p', 'q', 'r', 's', 't',
                   'u', 'v', 'w', 'x', 'y',
                   'z' ];
// var wins = ;
// var losses = ;
// var guesses = ;
var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(getRandomLetter);

document.onkeyup = function(event){

  if (event.key === getRandomLetter) {
    document.getElementById('winSlot').innerHTML = (wins =  + 1);
  } else if (event.key !== getRandomLetter) {
    document.getElementById('guessesLeft').innerHTML = (guesses =  - 1);
  }
}

var guesses = 10
var wins = 0
