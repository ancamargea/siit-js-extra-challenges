console.log("Rolling a set of dices");

function rollDice(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}

function rollDiceSet(diceNumber = 2) {
  const diceSet = [];

  for (let i = 0; i < diceNumber; i++) {
    diceSet[i] = rollDice();
  }

  return diceSet;
}

// console.log(rollDiceSet());
// console.log(`You rolled ${rollDiceSet(6)}.`);

console.log("");
console.log("🎲 NEW DICE ROLL 🎲");
const roll = rollDiceSet(6);

for (let i = 0; i < roll.length; i++) {
  console.log(`Dice ${i + 1}: ${roll[i]}`);
}
