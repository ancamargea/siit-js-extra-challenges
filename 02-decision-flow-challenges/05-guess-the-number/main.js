/*
Create a program that generates a random number between 1 and 3. The user is prompted to guess the number, and if they guess correctly, they win.

Example 1 (user wins)
Input: 
    Users' guess: 3
Output: 
    You won!

    Example 2 (user loses)
Input: 
    Users' guess: 3
Output: 
    Wrong! The correct number was 1.
*/

console.log("CHALLENGE 6: Rock Scissors Paper generator");

let randomNumber = Math.floor(Math.random() * 3) + 1;

let userGuess = parseInt(prompt("Guess a number between 1 and 3:"));

if (userGuess === randomNumber) {
  alert("You win! The correct number was " + randomNumber);
} else {
  alert("You lose! The correct number was " + randomNumber);
}
