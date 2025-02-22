/*
Create a program that randomly generates one of the options of the rock-paper-scissors game.

Example 1
Input: -
Output: Rock

Example 2
Input: -
Output: Paper
*/

console.log("CHALLENGE 6: Rock Scissors Paper generator");

function generateComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
let computerChoice = generateComputerChoice();
alert("Computer's choice: " + computerChoice);
