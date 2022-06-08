// play against computer
function computerPlay() {
    // randomly return 'Rock', 'Paper', 'Scissors'
    const choices = ["Rock", "Paper", "Scissors"]
    const rpsChoice = choices[Math.floor(Math.random() * choices.length)]
    return rpsChoice
}

// function plays 1 round of rps
// req: case-insensitive input for playerSelection
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

// function to play game 5 times 
// output: winner in each round, final winner
function game(n) {
    // vars to keep score
    // let playerWins = 0
    // let computerWins = 0
    for (let i = 0; i < n; i++) {
        console.log(`Round {i+1}`)
        playRound(playerSelection, computerSelection)
        // track winner in each round
        // if (playRound(playerSelection, computerSelection) == `You Win! ${player} beats ${computer}`) {
        //     playerWins += 1
        // } else if (playRound(playerSelection, computerSelection) == `You Lose! ${computer} beats ${player}`) {
        //     computerWins += 1
        // }
    }
}

// game(5)