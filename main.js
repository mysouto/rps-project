// play against computer
function computerPlay() {
    // randomly return 'Rock', 'Paper', 'Scissors'
    const choices = ["Rock", "Paper", "Scissors"]
    const rpsChoice = choices[Math.floor(Math.random() * choices.length)]
    return rpsChoice
}

// function plays 1 round of rps
// input: playerSelection, computerSelection
// output: return string with winner, "You Lose! Paper beats Rock"
// req: case-insensitive
function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase()
    computer = computerSelection.toLowerCase()
    if (player == computer) {
        return "It's a tie!"
    }
    
    if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
        return `You Win! ${player} beats ${computer}`
    } else if ((computer == "rock" && player == "scissors") || (computer == "paper" && player == "rock") || (computer == "scissors" && player == "paper")) {
        return `You Lose! ${computer} beats ${player}`
    }
}

let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
