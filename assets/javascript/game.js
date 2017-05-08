//PSEUDOCODE

//Declare alphabet array variable
var alphabet = [ 'a', 'b', 'c', 'd', 'e',
                'f', 'g', 'h', 'i', 'j',
                    'k', 'l', 'm', 'n', 'o',
                    'p', 'q', 'r', 's', 't',
                    'u', 'v', 'w', 'x', 'y',
                    'z' ];

//Pull random letter from array and store it in a varaible.
 var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
 console.log(getRandomLetter);

console.log("Press any key to play!");

//Declare starting values for wins, guesses & losses
var guesses = 1
var wins = 0
var losses = 0

//Call function onkeyup
 document.onkeyup = function(event){

   if (event.key !== getRandomLetter && guesses > 0) {
     document.getElementById('guessesLeft').innerHTML -= guesses;

   } else if(event.key === getRandomLetter) {
     document.getElementById('winSlot').innerHTML = (++wins);

 }    else if (document.getElementById("guessesLeft").innerHTML === -10)
    document.getElementById("lossSlot").innerHTML = (++losses);
}


// (guesses - 1)
// document.getElementById('guessesLeft').innerHTML =
