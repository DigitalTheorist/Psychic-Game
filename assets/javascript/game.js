
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

var startGuesses = 10
var guessDecrement = 10
var lossIncrement = 0
var wins = 0
var losses = 0
var recordKeys = []

$("#play-again").on("click", function() { //jquery onclick button (callback function)
  console.log("PLAY AGIAN button");
    getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(getRandomLetter);
    guessDecrement = 10;
    startGuesses = 0;
    recordKeys = [];
    document.onkeyup = playGame;
  });

$("#restart-all").on("click", function() { //jquery onclick button (callback function)
  console.log("clicked restart button");
  location.reload();
  });


//
//Start Game Function - press play agian button, array resets to blank
//MOVED INTO FUNCTION - NEED TO KEEP OUTSIDE? -
//Declare starting values for wins, guesses & losses


//Primary game function
  var playGame = function startGame (event) { //make this a button click and anonymous function

  var keyed = event.key;
   recordKeys.push(keyed);
   var keyToString = recordKeys.toString();
   document.getElementById("recordGuesses").innerHTML = keyToString;

   if (keyed === getRandomLetter) {
   document.getElementById('winSlot').innerHTML = (++wins);

  } else if (keyed !== getRandomLetter && guessDecrement > 0) {
    guessDecrement -= 1; //Make guessDecrement subtract itself by 1/keypress
     document.getElementById('guessesSlot').innerHTML = guessDecrement;

  } if (guessDecrement === 0) {
    document.getElementById("lossSlot").innerHTML = (++lossIncrement);
 }
}
