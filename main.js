const ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
  choices = [ROCK, PAPER, SCISSORS];

let computerCount = 0,
  playerCount = 0;

let rockButton = document.querySelector(`#rock`),
  paperButton = document.querySelector(`#paper`),
  scissorsButton = document.querySelector(`#scissors`),
  playerScore = document.querySelector(`#player-score`),
  result = document.querySelector(`#result`),
  computerScore = document.querySelector(`#computer-score`);

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 100) % 3];
}

function playRound(playerSelection, computerSelection) {
  let WINNER = `You win! ${playerSelection} beats ${computerSelection}.`,
    LOSER = `You lose! ${computerSelection} beats ${playerSelection}.`,
    TIE = `Its a tie!`;
  return playerSelection === computerSelection
    ? TIE
    : playerSelection === SCISSORS && computerSelection === PAPER
    ? WINNER
    : playerSelection === PAPER && computerSelection === ROCK
    ? WINNER
    : playerSelection === ROCK && computerSelection === SCISSORS
    ? WINNER
    : LOSER;
}

rockButton.addEventListener(`click`, () => {
  playerSelection = `rock`;
  computerSelection = getComputerChoice();
  let gameResult = playRound(playerSelection, computerSelection);
  let WINNER = `You win! ${playerSelection} beats ${computerSelection}.`,
    LOSER = `You lose! ${computerSelection} beats ${playerSelection}.`,
    TIE = `Its a tie!`;
  if (gameResult === WINNER) {
    console.log(gameResult);
    playerCount++;
  } else if (gameResult === LOSER) {
    console.log(gameResult);
    computerCount++;
  } else {
    console.log(gameResult);
  }
  playerScore.textContent = `${playerCount}`;
  computerScore.textContent = `${computerCount}`;
  result.textContent = `${gameResult}`;
});

paperButton.addEventListener(`click`, () => {
  playerSelection = `paper`;
  computerSelection = getComputerChoice();
  let gameResult = playRound(playerSelection, computerSelection);
  let WINNER = `You win! ${playerSelection} beats ${computerSelection}.`,
    LOSER = `You lose! ${computerSelection} beats ${playerSelection}.`,
    TIE = `Its a tie!`;
  if (gameResult === WINNER) {
    console.log(gameResult);
    playerCount++;
  } else if (gameResult === LOSER) {
    console.log(gameResult);
    computerCount++;
  } else {
    console.log(gameResult);
  }
  playerScore.textContent = `${playerCount}`;
  computerScore.textContent = `${computerCount}`;
  result.textContent = `${gameResult}`;
});

scissorsButton.addEventListener(`click`, () => {
  playerSelection = `scissors`;
  computerSelection = getComputerChoice();
  let gameResult = playRound(playerSelection, computerSelection);
  let WINNER = `You win! ${playerSelection} beats ${computerSelection}.`,
    LOSER = `You lose! ${computerSelection} beats ${playerSelection}.`,
    TIE = `Its a tie!`;
  if (gameResult === WINNER) {
    console.log(gameResult);
    playerCount++;
  } else if (gameResult === LOSER) {
    console.log(gameResult);
    computerCount++;
  } else {
    console.log(gameResult);
  }
  playerScore.textContent = `${playerCount}`;
  computerScore.textContent = `${computerCount}`;
  result.textContent = `${gameResult}`;
});
