// computer's move will be randomly selected
function computerPlay() {
    let option = Math.floor(Math.random() * 3);
    if (option == 0) {
        return "rock";
    } else if (option == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// div for displaying results
const roundResult = document.querySelector(".text");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

// function for a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        // draw case - return value is 0
        roundResult.textContent = "Draw: You both picked " + playerSelection.toLowerCase() + ".";
        return 0;
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") 
        || (playerSelection == "scissors" && computerSelection == "paper")) {
        // case where player wins
        // return value is 1
        roundResult.textContent = "You won this round! " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".";
        return 1;
    } else {
        // case where computer wins
        // return value is -1
        roundResult.textContent = "You lost this round! " + computerSelection + " beats " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + ".";
        return -1;
    }
}

// event listeners for buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// update score function
let playerScore = 0, computerScore = 0;
function updateScore() {
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
}

updateScore(playerScore, computerScore);

function checkResult(result) {
    if (result == 1) {
        ++playerScore;
    } else if (result == -1) {
        ++computerScore;
    }
}
function checkVictory() {
    if (playerScore == 5) {
        roundResult.textContent = "Congrats! You won more rounds!";
    } else if (computerScore == 5) {
        roundResult.textContent = "Better luck next time, the computer won..."
    }
}

roundResult.textContent = "Click one of the options to play!";
updateScore();

rockButton.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        let result = playRound('rock', computerPlay());
        checkResult(result);
        updateScore();
        checkVictory();
    } else {

    }
});
paperButton.addEventListener('click', () =>  {
    if (playerScore < 5 && computerScore < 5) {
        let result = playRound('paper', computerPlay());
        checkResult(result);
        updateScore();
        checkVictory();
    } else {

    }
});
scissorsButton.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        let result = playRound('paper', computerPlay());
        checkResult(result);
        updateScore();
        checkVictory();
    } else {
        
    }
});