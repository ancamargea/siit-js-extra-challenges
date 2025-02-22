/*
## CHALLENGE 5: Lottery Number Draw
Write a program that simulates a lottery draw. The program should:

Randomly generate a set of winning numbers.
Allow the user to enter their chosen numbers.
Compare the user's numbers with the winning numbers and display how many matches they got.

Example
Input: 
    3
    12
    19
    34
    40
    45

Output:
    Winning numbers: 5 12 23 34 41 45  
    Your numbers: 3 12 19 34 40 45  
    You matched 3 numbers!  
*/

console.log("CHALLENGE 5: Lottery Number Draw");

function simulateLottery() {
  let winningNumbers = [5, 12, 23, 34, 41, 45];
  while (winningNumbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 49) + 1;
    if (!winningNumbers.includes(randomNumber)) {
      winningNumbers.push(randomNumber);
    }
  }

  let userInput = prompt(
    "Enter your 6 lottery numbers (between 1 and 49), separated by commas:"
  );

  let userNumbers = userInput.split(",").map(Number);

  if (
    userNumbers.length !== 6 ||
    userNumbers.some(isNaN) ||
    userNumbers.some((num) => num < 1 || num > 49)
  ) {
    alert("Invalid input! Please enter exactly 6 numbers between 1 and 49.");
    return;
  }

  let matches = userNumbers.filter((num) =>
    winningNumbers.includes(num)
  ).length;

  alert(`Winning numbers: ${winningNumbers.join(" ")}`);
  alert(`Your numbers: ${userNumbers.join(" ")}`);
  alert(`You matched ${matches} number(s)!`);
}

simulateLottery();
