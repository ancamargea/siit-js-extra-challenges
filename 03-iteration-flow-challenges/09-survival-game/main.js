/*
## CHALLENGE 9: Survival Game
Write a JavaScript program that simulates a survival challenge. The program should prompt the user to enter:

The player's name
The player's starting Hit Points (HP) (maximum 100)
A hunting skill level (between 0 and 10)
The simulation will run for a set number of days. Each day, the player goes hunting to find food.

Hunting Mechanics:
The chance of a successful hunt is determined by the hunting skill.
A hunting skill of 0 means 0% success (always fails).
A hunting skill of 10 means 100% success (always succeeds).
A hunting skill of X gives an X × 10% success rate.
Use a simulated dice roll (a random number between 1 and 10) to determine the outcome:
If the roll is less than or equal to the hunting skill, the hunt succeeds (+10 HP).
Otherwise, the hunt fails (-10 HP).

Logging Daily Events:
Use console.log() to display the events of each day. Example output:

    Day 4 starts!  
    John (Hunting Skill: 5) rolls a 8  
    John is starving... 💀  
    Current HP: 50  

If the player's HP reaches 0 or below, they die and the simulation ends early. Otherwise, the game continues until the final day.

Good luck, survivor! 🚀
*/

console.log("CHALLENGE 9: Survival Game");

function survivalChallenge() {
  let playerName = prompt("Enter your name:");
  let startingHP = parseInt(prompt("Enter your starting HP (maximum 100):"));
  let huntingSkill = parseInt(
    prompt("Enter your hunting skill level (between 0 and 10):")
  );
  let days = parseInt(prompt("Enter the number of days for the simulation:"));

  if (
    startingHP < 0 ||
    startingHP > 100 ||
    huntingSkill < 0 ||
    huntingSkill > 10 ||
    days <= 0
  ) {
    alert("Invalid input. Please ensure all values are valid.");
    return;
  }

  let playerHP = startingHP;
  console.log(`Welcome to the survival challenge, ${playerName}!`);
  console.log(`Starting HP: ${playerHP}`);
  console.log(`Hunting skill: ${huntingSkill}`);
  console.log(`Simulation will run for ${days} days.\n`);

  for (let day = 1; day <= days; day++) {
    let huntRoll = Math.floor(Math.random() * 10) + 1;

    if (huntRoll <= huntingSkill) {
      playerHP += 10;
      console.log(
        `Day ${day}: Hunting successful! HP +10. Current HP: ${playerHP}`
      );
    } else {
      playerHP -= 10;
      console.log(
        `Day ${day}: Hunting failed. HP -10. Current HP: ${playerHP}`
      );
    }

    if (playerHP <= 0) {
      console.log(
        `${playerName} has died after ${day} days. Final HP: ${playerHP}`
      );
      break;
    }
  }

  if (playerHP > 0) {
    console.log(
      `${playerName} survived the full ${days} days! Final HP: ${playerHP}`
    );
  }
}

survivalChallenge();
