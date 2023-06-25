const ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
  choices = [ROCK, PAPER, SCISSORS];

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
