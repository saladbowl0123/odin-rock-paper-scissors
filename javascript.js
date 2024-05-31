const CHOICES = ["rock", "paper", "scissors"];
const WINNERS = ["draw", "human", "computer"];

let roundNo = 0;
let humanScore = 0;
let computerScore = 0;
let roundWinnerId;
let roundWinner;
let gameWinnerId;
let gameWinner;

const divRoundNo = document.querySelector("#div-round-no");
const divBtns = document.querySelector("#div-btns");
const divResults = document.querySelector("#div-results");

divBtns.addEventListener ("click", btnClick);

function btnClick (event) {
  let target = event.target;
  let playerChoiceId;
  switch (target.id) {
    case "btn-rock":
      playerChoiceId = 0;
      break;
    case "btn-paper":
      playerChoiceId = 1;
      break;
    default:
      playerChoiceId = 2;
  }
  playRound(CHOICES[playerChoiceId], getComputerChoice());
}

function getComputerChoice () {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function playRound (humanChoice, computerChoice) {
  ++roundNo;
  divRoundNo.textContent = `Round: ${roundNo}`;
  roundWinnerId = CHOICES.indexOf(humanChoice)
    - CHOICES.indexOf(computerChoice);
  if (roundWinnerId < 0) roundWinnerId += 3;
  roundWinner = WINNERS[roundWinnerId];
  divResults.textContent = `Round winner: ${roundWinner}`;
  switch (roundWinnerId) {
    case 0:
      divResults.textContent += `; ${humanChoice} and ${computerChoice}`;
      break;
    case 1:
      divResults.textContent += `; ${humanChoice} beats ${computerChoice}`;
      ++humanScore;
      break;
    default:
      divResults.textContent += `; ${computerChoice} beats ${humanChoice}`;
      ++computerScore;
  }
  divResults.textContent += `; human score: ${humanScore}; computer score: ${computerScore}`;
  if (roundNo >= 5) announceGameWinner();
}

function announceGameWinner () {
  gameWinnerId = Math.sign(humanScore - computerScore);
  if (gameWinnerId == -1) gameWinnerId = 2;
  gameWinner = WINNERS[gameWinnerId];
  divResults.textContent += `; game winner: ${gameWinner}`;
  divBtns.removeEventListener("click", btnClick);
}
