let playerSelection = window.prompt('Rock, Paper, or Scissors? ');
const computerSelection = computerPlay();

// play against computer
function computerPlay() {
    // randomly return 'Rock', 'Paper', 'Scissors'
    const choices = ['Rock', 'Paper', 'Scissors']
    const rpsChoice = choices[Math.floor(Math.random() * choices.length)]
    return rpsChoice
}

// function plays 1 round of rps
function playRound(playerSelection, computerSelection) {
    // req: case-insensitive input for playerSelection
    let player = playerSelection[0].toUpperCase() + playerSelection.substring(1)
    let computer = computerSelection;
    if (player === computer) {
        return 'tie'
    } else if (player === 'rock') {
        if (computer === 'scissors') {
            return 'player';
        } else if (computer === 'paper') {
            return 'computer';
        } 
    } else if (player === 'paper') {
        if (computer === 'rock') {
            return 'player';
        } else if (computer === 'scissors') {
            return 'computer';
        } 
    } else if (player === 'scissors') {
        if (computer === 'paper') {
            return 'player';
        } else if (computer === 'rock') {
            return 'computer';
        } 
    }
}

// console.log(playRound(playerSelection, computerSelection));

// function to play game 5 times 
// output: winner in each round, final winner
function game(n) {
    for (let i = 0; i < n; i++) {
        console.log(`Round ${i+1}`)
        playRound(playerSelection, computerSelection)
        // if (playRound(playerSelection, computerSelection) == `You Win! ${player} beats ${computer}`) {
        //     playerWins += 1
        // } else if (playRound(playerSelection, computerSelection) == `You Lose! ${computer} beats ${player}`) {
        //     computerWins += 1
        // }
    }
}

// game(5)