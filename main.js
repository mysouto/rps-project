// play against computer
function computerPlay() {
    // randomly return 'Rock', 'Paper', 'Scissors'
    const choices = ["Rock", "Paper", "Scissors"]
    const rpsChoice = choices[Math.floor(Math.random() * choices.length)]
    return rpsChoice
    // console.log(rpsChoice)
}

computerPlay()

// function plays 1 round of rps
// input: playerSelection, computerSelection
// output: return string with winner, "You Lose! Paper beats Rock"
// req: case-insensitive
// function playRound() {

// }

// let playerSelection = "rock";
// let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
