//PSEUDOCODE

//Declare alphabet array variable
var alphabet = [ 'a', 'b', 'c', 'd', 'e',
                'f', 'g', 'h', 'i', 'j',
                    'k', 'l', 'm', 'n', 'o',
                    'p', 'q', 'r', 's', 't',
                    'u', 'v', 'w', 'x', 'y',
                    'z' ];

//Pull random letter from array and store it in a varaible.
//----make getRandomLetter a function with a keypress to begin.
 var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
 console.log(getRandomLetter);

console.log("Press any key to play!");

//Declare starting values for wins, guesses & losses
var startGuesses = 10
var guessDecrement = 10
var lossIncrement = 1
var wins = 0
var losses = 0
var recordKeys = []

//Call function onkeyup

document.onkeyup = function playGame (event) {

   var keyed = event.key;
   recordKeys.push(keyed);
   var keyToString = recordKeys.toString();
   document.getElementById("recordGuesses").innerHTML = keyToString;

   console.log(guessDecrement -= 1) //Make guessDecrement subtract itself by 1/keypress

  if (keyed === getRandomLetter) {
   console.log(document.getElementById('winSlot').innerHTML = (++wins));

 } else if (keyed !== getRandomLetter && guessDecrement > -1) {
     document.getElementById('guessesSlot').innerHTML = guessDecrement;

   } else if (guessDecrement === -1)
      document.getElementById("lossSlot").innerHTML += lossIncrement;


}




// (guesses - 1)
// document.getElementById('guessesLeft').innerHTML =
