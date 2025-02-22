/*
## CHALLENGE 6: Number Guessing Game
Write a program that generates a random number between 1 and a specified maximum value (e.g., 100) and asks the user to guess the number. After each guess, the program should tell the user whether their guess is too high, too low, or correct. The game continues until the user guesses the correct number.

Requirements
Generate a random number within a specified range (1 to N).
Ask the user to input their guess.
After each guess, give feedback:
"Too high" if the guess is greater than the random number.
"Too low" if the guess is less than the random number.
"Correct" if the guess matches the random number.
Track the number of attempts and display it when the user guesses correctly.

Example
Input:  Guess a number between 1 and 100: 50  
Output: Your guess is too low.  

Input:  Guess a number between 1 and 100: 75  
Output: Your guess is too high.  

Input:  Guess a number between 1 and 100: 60  
Output: You guessed the number in 3 attempts.
*/

console.log("CHALLENGE 6: Number Guessing Game");

let maxValue = parseInt(
  prompt("Enter the maximum value for the random number:")
);

let randomNumber = Math.floor(Math.random() * maxValue) + 1;

let attempts = 0;

let guess = -1;

while (guess !== randomNumber) {
  guess = parseInt(prompt(`Guess the number between 1 and ${maxValue}:`));

  attempts++;

  if (guess > randomNumber) {
    console.log("Too high");
  } else if (guess < randomNumber) {
    console.log("Too low");
  } else {
    console.log(`Correct! You guessed the number in ${attempts} attempts.`);
  }
}
