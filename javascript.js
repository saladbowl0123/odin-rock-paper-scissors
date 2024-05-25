const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let x = Math.random();
  if (x < 1 / 3) {
    return CHOICES[0];
  } else if (x < 2 / 3) {
    return CHOICES[1];
  }
  return CHOICES[2];
}

function getHumanChoice() {
  let humanChoice;
  do {
    humanChoice = prompt(`Enter ${CHOICES[0]}, ${CHOICES[1]}, or ${CHOICES[2]}:`);
  } while (!CHOICES.includes(humanChoice));
  return humanChoice;
}
