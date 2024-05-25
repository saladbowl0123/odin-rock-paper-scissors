const CHOICES = ["rock", "paper", "scissors"];
const HUMAN_CHOICE_PROMPT = `Enter ${CHOICES[0]}, ${CHOICES[1]}, or ${CHOICES[2]}:`;
const DRAW = `Draw`;
const WIN = `Win`;
const LOSE = `Lose`;
const HUMAN_SCORE = `Human score`;
const COMPUTER_SCORE = `Computer score`;

let humanScore = 0;
let computerScore = 0;

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
    humanChoice = prompt(HUMAN_CHOICE_PROMPT).toLowerCase();
  } while (!CHOICES.includes(humanChoice));
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  roundStatus = (CHOICES.indexOf(humanChoice)
    - CHOICES.indexOf(computerChoice)) % 3;
  switch (roundStatus) {
    case 0:
      console.log(`${DRAW}: ${humanChoice}`);
      break;
    case 1:
      console.log(`${WIN}: ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
      break;
    default:
      console.log(`${LOSE}: ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
  }
  console.log(
    `${HUMAN_SCORE}: ${humanScore}\n${COMPUTER_SCORE}: ${computerScore}`);
}

while (true) { playRound(getHumanChoice(), getComputerChoice()); }
