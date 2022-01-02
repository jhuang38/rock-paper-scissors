// computer's move will be randomly selected
function computerPlay() {
    /* randomly pick number between 0 and 2
    if 0, rock
    if 1, paper
    if 2, scissors */
    let option = Math.floor(Math.random() * 3);
    if (option == 0) {
        return "rock";
    } else if (option == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function for a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        // draw case - return value is 0
        console.log("Draw: You both picked " + playerSelection.toLowerCase() + ".");
        return 0;
    } else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") 
        || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")) {
        // case where player wins
        // return value is 1
        console.log("You won this round! " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".");
        return 1;
    } else {
        // case where computer wins
        // return value is -1
        console.log("You lost this round! " + computerSelection + " beats " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ".");
        return -1;
    }
}

// function for five rounds
function game() {
    let playerWins = 0, computerWins = 0;
    // loop through game 5 times
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("What do you want to play?")
        while (playerChoice.toLowerCase() != "rock" && playerChoice.toLowerCase() != "paper" && playerChoice.toLowerCase() != "scissors") {
            playerChoice = prompt("Please pick either rock, paper, or scissors!");
        }
        let result = playRound(playerChoice, computerPlay());
        if (result == 1) {
            ++playerWins;
        } else if (result == -1) {
            ++computerWins;
        }
        }
    if (playerWins > computerWins) {
        console.log("Congrats! You won more rounds!");
    } else if (playerWins < computerWins) {
        console.log("The computer won more rounds! Better luck next time...");
    } else {
        console.log("You won the same number of rounds as the computer!");
    }
}

// actual code
game();