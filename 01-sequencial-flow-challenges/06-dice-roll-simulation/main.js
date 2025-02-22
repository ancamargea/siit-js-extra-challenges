/*
## CHALLENGE 6: Dice Roll Simulation
The program generates and displays a random number between 1 and 6, simulating the roll of a six-sided die.
*/

console.log("CHALLENGE 6: Dice Roll Simulation");

/* Ca sa functioneze, trebuie buton in codul de HTML.
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  document.getElementById("result").innerText = "You rolled: " + randomNumber;
}
  */

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  alert("You rolled: " + randomNumber);
}
rollDice();
