/*
## CHALLENGE 7: Dice Game Simulation
Write a program that simulates a dice game where two players take turns to roll a 6-sided die. Each player rolls once per turn, and the player with the higher roll wins the round. The game continues for a set number of rounds, and at the end, the program should declare the winner based on who has won the most rounds.

Requirements
Simulate the rolling of a 6-sided die (random numbers between 1 and 6).
Let the user input how many rounds they want to play.
For each round, roll a die for Player 1 and Player 2.
After each round, display the outcome:
"Player 1 wins the round" if Player 1's roll is higher.
"Player 2 wins the round" if Player 2's roll is higher.
"It's a tie" if both players roll the same number.
At the end of all rounds, display the total number of rounds won by each player and declare the overall winner:
"Player 1 is the winner" or "Player 2 is the winner" based on who won more rounds.
If both players tie in total rounds won, declare "It's a tie."

Example
Input:  
    How many rounds would you like to play? 5  

Output:  
    Round 1:  
    Player 1 rolled: 4  
    Player 2 rolled: 3  
    Player 1 wins the round.  

    Round 2:  
    Player 1 rolled: 6  
    Player 2 rolled: 6  
    It's a tie.  

    Round 3:  
    Player 1 rolled: 2  
    Player 2 rolled: 5  
    Player 2 wins the round.  

    Round 4:  
    Player 1 rolled: 3  
    Player 2 rolled: 1  
    Player 1 wins the round.  

    Round 5:  
    Player 1 rolled: 1  
    Player 2 rolled: 4  
    Player 2 wins the round.  

    Final Result:  
    Player 1 won 2 rounds.  
    Player 2 won 3 rounds.  
    Player 2 is the winner!
*/

console.log("CHALLENGE 7: Dice Game Simulation");

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

let rounds = parseInt(prompt("Enter the number of rounds to play:"));

let player1Wins = 0;
let player2Wins = 0;

for (let round = 1; round <= rounds; round++) {
  let player1Roll = rollDie();
  let player2Roll = rollDie();

  console.log(`Round ${round}:`);
  console.log(`Player 1 rolled: ${player1Roll}`);
  console.log(`Player 2 rolled: ${player2Roll}`);

  if (player1Roll > player2Roll) {
    console.log("Player 1 wins the round");
    player1Wins++;
  } else if (player2Roll > player1Roll) {
    console.log("Player 2 wins the round");
    player2Wins++;
  } else {
    console.log("It's a tie");
  }

  console.log("----------------------");
}

console.log(
  `Total rounds won - Player 1: ${player1Wins}, Player 2: ${player2Wins}`
);

if (player1Wins > player2Wins) {
  console.log("Player 1 is the winner!");
} else if (player2Wins > player1Wins) {
  console.log("Player 2 is the winner!");
} else {
  console.log("It's a tie!");
}
