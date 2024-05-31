const CHOICES = ["rock", "paper", "scissors"];
const ROUND = `Round`;
const DRAW = `Draw`;
const WIN = `Win`;
const LOSE = `Lose`;
const HUMAN_SCORE = `Human score`;
const COMPUTER_SCORE = `Computer score`;

let roundNo = 1;
let humanScore = 0;
let computerScore = 0;
let winner;

const divRoundNo = document.querySelector("#div-round-no");
const btns = document.querySelector("#btns");
const divResults = document.querySelector("#div-results");

btns.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.id) {
    case "btn-rock":
      playRound(CHOICES[0], getComputerChoice());
      break;
    case "btn-paper":
      playRound(CHOICES[1], getComputerChoice());
      break;
    default:
      playRound(CHOICES[2], getComputerChoice());
  }
});

function getComputerChoice() {
  let x = Math.random();
  if (x < 1 / 3) {
    return CHOICES[0];
  } else if (x < 2 / 3) {
    return CHOICES[1];
  }
  return CHOICES[2];
}

function playRound(humanChoice, computerChoice) {
  divRoundNo.textContent = `${ROUND}: ${roundNo}`;
  roundStatus = CHOICES.indexOf(humanChoice)
    - CHOICES.indexOf(computerChoice);
  if (roundStatus < 0) roundStatus += 3;
  let status = "";
  switch (roundStatus) {
    case 0:
      status = `${DRAW}: ${humanChoice}`;
      break;
    case 1:
      status = `${WIN}: ${humanChoice} beats ${computerChoice}`;
      ++humanScore;
      break;
    default:
      status = `${LOSE}: ${computerChoice} beats ${humanChoice}`;
      ++computerScore;
  }
  divResults.textContent = `${status}; ${HUMAN_SCORE}: ${humanScore}; ${COMPUTER_SCORE}: ${computerScore}`;
  if (roundNo == 5) {
    humanScore > computerScore ? winner = "Human" : winner = "Computer";
  }
  if (winner) divResults.textContent += `; Winner: ${winner}`;
  ++roundNo;
}
