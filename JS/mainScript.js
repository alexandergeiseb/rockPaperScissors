//funtion for randomly returning one of the 3 choices in rps
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//function for player to pick from prompt
function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];

  while (true) {
    let input = prompt("Choose rock, paper, or scissors:", choices.join(", "));

    if (input === null) {
      return null;
    }

    input = input.toLowerCase();

    if (choices.includes(input)) {
      return input;
    } else {
      alert("Invalid choice. Please choose rock, paper, or scissors.");
    }
  }
}

//game logic
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You WIN!!! ${humanChoice} beats ${computerChoice}`;
  } else {
    return `You Lose! :( ${computerChoice} beats ${humanChoice}`;
  }
}

//rounds implementation

function game() {
  let humanScore = 0;
  let computerScore = 0;
  const targetScore = 5;

  while (humanScore < targetScore && computerScore < targetScore) {
    const result = playRound(getHumanChoice(), getComputerChoice());
    console.log(result);

    if (result.startsWith("You WIN!!!")) {
      humanScore = humanScore + 1;
    } else if (result.startsWith("You Lose!")) {
      computerScore = computerScore + 1;
    } else {
      console.log("It's a tie! No point awarded.");
    }
  }
  if (humanScore > computerScore) {
    console.log(`Final Score: ${humanScore}-${computerScore}\ You Win! :)`);
  } else {
    console.log(`Final Score: ${humanScore}-${computerScore}\ You Lose! :(`);
  }
}

game();
