/*
## CHALLENGE 4: Random Excuse Generator
Write a program that generates a random excuse. The program should:

Randomly select an introductory phrase (e.g., "Sorry, but...").
Select a "perpetrator" (e.g., "my dog," "the weather," etc.).
Choose a "motivation" (e.g., "ate my homework," "made a mess," etc.).
Combine these parts to form a complete, random excuse.

STRUCTURE
Introductory Phrases:
"Sorry, but..."
"I can't believe it, but..."
"I was planning to do it, but..."
"This might sound crazy, but..."

Perpetrators:
"my dog"
"a drunken elf"
"the pope"
"your uncle on a skateboard"
"Jesus and Budha"

Motivations:
"insisted on playing a game of chess"
"broke my computer"
"made a mess"
"stole my charger"
"forced me to play rock paper scissors for 3 hours"

EXAMPLE
Input:  - 
Output: I was planning to do it, but your uncle on a skateboard stole my charger! 
*/

console.log("CHALLENGE 4: Random Excuse Generator");

function generateRandomExcuse() {
  const introPhrases = [
    "Sorry, but",
    "I can't believe it, but",
    "I was planning to do it, but",
    "This might sound crazy, but",
  ];

  const perpetrators = [
    "my dog",
    "a drunken elf",
    "the pope",
    "your uncle on a skateboard",
    "Jesus and Budha",
  ];

  const motivations = [
    "insisted on playing a game of chess",
    "broke my computer",
    "made a mess",
    "stole my charger",
    "forced me to play rock paper scissors for 3 hours",
  ];

  const intro = introPhrases[Math.floor(Math.random() * introPhrases.length)];
  const perpetrator =
    perpetrators[Math.floor(Math.random() * perpetrators.length)];
  const motivation =
    motivations[Math.floor(Math.random() * motivations.length)];

  const excuse = `${intro} ${perpetrator} ${motivation}.`;

  console.log(excuse);
}

generateRandomExcuse();
