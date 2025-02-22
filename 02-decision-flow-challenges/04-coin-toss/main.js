/*
Create a program that simulates the flipping of a coin and displays the result: either Heads or Tails.

Example 1
Input: -
Output: Heads

Example 2
Input: -
Output: Tails
*/

console.log("CHALLENGE 4: Coin toss");

function tossCoin() {
  let result = Math.random() < 0.5 ? "Heads" : "Tails";

  alert("You tossed the coin and you got: " + result);
}
tossCoin();
