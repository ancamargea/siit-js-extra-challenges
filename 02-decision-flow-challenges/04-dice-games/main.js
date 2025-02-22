/*
Create a program that simulates a dice roll game between two players. The program will ask for the players' names, roll the dice for each player, and then display the results.

Example 1
Input: 
    First player name: Ann
    Second player name: Bob
Output: 
    Ann rolls: 3
    Bob rolls: 5
    Bob wins!

    Example 2

Input: 
    First player name: Ann
    Second player name: Bob
Output: 
    Ann rolls: 2
    Bob rolls: 2
    It's a tie!
*/

console.log("CHALLENGE 4: Dice game");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let player1 = prompt("Enter the name of Player 1:");
let player2 = prompt("Enter the name of Player 2:");

let roll1 = rollDice();
let roll2 = rollDice();

alert(player1 + " rolled: " + roll1);
alert(player2 + " rolled: " + roll2);

if (roll1 > roll2) {
  alert(player1 + " wins!");
} else if (roll2 > roll1) {
  alert(player2 + " wins!");
} else {
  alert("It's a tie!");
}
