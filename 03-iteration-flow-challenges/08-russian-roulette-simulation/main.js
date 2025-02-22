/*
## CHALLENGE 8: Russian Roulette Simulation
Write a JavaScript program that simulates a game of Russian Roulette using a browser confirm modal box. The game randomly loads one chamber with a "bullet," and the user can "pull the trigger" by clicking the "OK" button on the modal. If the bullet is in the chamber, the user "loses." If there’s no bullet, the game continues. The user can also choose to quit by clicking "Cancel."

Requirements
Simulate a 6-chamber revolver (6 possible positions).
Randomly load one chamber with a "bullet" (a randomly chosen position in the 6 chambers).
Use a "confirm" modal to ask the user if they want to "pull the trigger" or quit.
Clicking "OK" simulates pulling the trigger.
Clicking "Cancel" ends the game (user quits).
If the user "pulls the trigger":
If the bullet is in the current chamber, show an alert: "Bang! You lose." and end the game.
If the bullet is not in the chamber, show an alert: "Click! No bullet, try again."
Repeat until the user either "loses" or "quits."
Optionally, keep track of the number of successful pulls before the game ends.

Example

Input:  Pull the trigger? (Click OK to pull, Cancel to quit):  
Output: Click! No bullet, try again.

Input:  Pull the trigger? (Click OK to pull, Cancel to quit):  
Output: Click! No bullet, try again.

Input: Pull the trigger? (Click OK to pull, Cancel to quit):  
Output: Bang! You lose.

Output: You survived 2 rounds.
*/

console.log("CHALLENGE 8: Russian Roulette Simulation");

function playRussianRoulette() {
  let bulletPosition = Math.floor(Math.random() * 6);

  let pullCount = 0;

  while (true) {
    let userChoice = confirm(`Pull the trigger? (Attempt #${pullCount + 1})`);

    if (!userChoice) {
      alert("You quit the game. Goodbye!");
      break;
    }

    pullCount++;

    if (bulletPosition === pullCount - 1) {
      alert("Bang! You lose.");
      break;
    } else {
      alert("Click! No bullet, try again.");
    }
  }
}

playRussianRoulette();
