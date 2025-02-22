console.log("Dice roll simulation");

/*
function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  alert("You rolled: " + randomNumber);
}
rollDice();
*/

// sides poate lua orice valoare (6, 12, 36...) sau poate ramane fara valoare.
function rollDice(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}
