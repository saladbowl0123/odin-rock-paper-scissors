const CHOICES = ["rock", "paper", "scissors"];
const HUMAN_CHOICE_PROMPT = `Enter ${CHOICES[0]}, ${CHOICES[1]}, or ${CHOICES[2]}:`;

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

function playGame(numRounds) {

  const ROUND = `Round`;
  const DRAW = `Draw`;
  const WIN = `Win`;
  const LOSE = `Lose`;
  const HUMAN_SCORE = `Human score`;
  const COMPUTER_SCORE = `Computer score`;
  const HUMAN_WIN_GAME = `Human wins the game`;
  const COMPUTER_WIN_GAME = `Computer wins the game`;
  const DRAW_GAME = `Game draw`;

  let humanScore = 0;
  let computerScore = 0;

  function playRound(roundNo, humanChoice, computerChoice) {
    console.log(`${ROUND} ${roundNo}`);
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

  for (let i = 0; i < numRounds; i++) {
    playRound(i + 1, getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log(HUMAN_WIN_GAME);
  } else if (humanScore < computerScore) {
    console.log(COMPUTER_WIN_GAME);
  } else {
    console.log(DRAW_GAME);
  }
}

let numRounds = 5;

playGame(numRounds);
