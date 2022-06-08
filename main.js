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
    let player = playerSelection[0].toUpperCase() + playerSelection.substring(1)
    let computer = computerSelection
    if (player == computer) {
        return "It's a tie!"
    } else if ((player == "Rock" && computer == "Scissors") || (player == "Paper" && computer == "Rock") || (player == "Scissors" && computer == "Paper")) {
        return `You Win! ${player} beats ${computer}`
    } else if ((computer == "Rock" && player == "Scissors") || (computer == "Paper" && player == "Rock") || (computer == "Scissors" && player == "Paper")) {
        return `You Lose! ${computer} beats ${player}`
    }
}

let playerSelection = "rock";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
