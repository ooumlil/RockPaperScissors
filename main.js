const ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
  choices = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 100) % 3];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection !== ROCK &&
    playerSelection !== SCISSORS &&
    playerSelection !== PAPER
  )
    return "Invalid choice";
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

function game() {
  for (let index = 0; index < 5; ) {
    let playerSelection = prompt("Choose one: Rock, Paper or Scissors.");
    if (playerSelection !== null && playerSelection !== "") {
      let result = playRound(playerSelection, getComputerChoice());
      if (result !== "Invalid choice") {
        alert(result);
        index++;
      }
    }
  }
}

game();
