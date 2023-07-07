const ROCK = `✊`,
  PAPER = `✋`,
  SCISSORS = `✌`,
  choices = [ROCK, PAPER, SCISSORS];

var computerCount = 0,
  playerCount = 0;

let buttons = document.querySelectorAll(`.choice`),
  playerScore = document.querySelector(`#player-score`),
  result = document.querySelector(`#result`),
  modal = document.querySelector(`#modal`),
  computerScore = document.querySelector(`#computer-score`);

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 100) % 3];
}

function playRound(playerSelection, computerSelection) {
  let WINNER = `You win! ${playerSelection} beats ${computerSelection}`,
    LOSER = `You lose! ${computerSelection} beats ${playerSelection}`,
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

function update(playerSelection) {
  computerSelection = getComputerChoice();
  let gameResult = playRound(playerSelection, computerSelection),
    WINNER = `You win! ${playerSelection} beats ${computerSelection}`,
    LOSER = `You lose! ${computerSelection} beats ${playerSelection}`;
  if (gameResult === WINNER) playerCount++;
  else if (gameResult === LOSER) computerCount++;
  playerScore.textContent = `${playerCount}`;
  computerScore.textContent = `${computerCount}`;
  result.textContent = `${gameResult}`;
  if (playerCount === 5 || computerCount === 5) {
    let para = document.createElement(`p`),
      closeButton = document.createElement(`button`);
    closeButton.textContent = `Close`;
    if (playerCount === 5) para.textContent = `You won!`;
    else if (computerCount === 5) para.textContent = `You lost!`;
    playerCount = 0;
    computerCount = 0;
    closeButton.addEventListener(`click`, () => {
      modal.close();
      modal.removeChild(para);
      modal.removeChild(closeButton);
    });
    modal.appendChild(para);
    modal.appendChild(closeButton);
    modal.showModal();
  }
}

buttons.forEach((button) =>
  button.addEventListener(`click`, () => update(button.textContent))
);
