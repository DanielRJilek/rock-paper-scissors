let humanScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const scoreboard = document.querySelector(".scoreboard");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

function updateScore() {
    scoreboard.textContent = `Human Score: ${humanScore}\nComputer Score: ${computerScore}`;
}

updateScore();

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        return "rock";
    }
    else if (choice < 0.67) {
        return "paper";
    }
    else return "scissors";
}

function getHumanChoice() {
    return prompt("Your choice:");
}

function determineWinner(humanSelection, computerSelection) {
    if (humanSelection == computerSelection) {
        return "tie";
    }
    else if (humanSelection == "rock") {
        if (computerSelection == "paper") {
            return "computer";
        }
        else {
            return "human";
        }
    }
    else if (humanSelection == "paper") {
        if (computerSelection = "scissors") {
            return "computer";
        }
        else {
            return "human";
        }
    }
    else if (humanSelection = "scissors") {
        if (computerSelection = "rock") {
            return "computer";
        }
        else {
            return "human";
        }
    }
}

function playRound(string) {
    if (humanScore > 4) {
        gameOver("human");
    }
    else if (computerScore > 4) {
        gameOver("computer");
    }
    else {
        let winner = null;
        const humanSelection = string.toLowerCase();
        const computerSelection = getComputerChoice();
        winner = determineWinner(humanSelection, computerSelection);
        if (winner == "tie") {
            results.textContent = "Tie game!";
        }
        else if (winner == "human") {
            results.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
            humanScore+=1;
            updateScore();
            if (humanScore > 4) {
                gameOver(winner);
            }
        } 
        else if (winner == "computer") {
            results.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;
            computerScore+=1;
            updateScore();
            if (computerScore > 4) {
                gameOver(winner);
            }
        }
    }
}

function gameOver(winner) {
    results.textContent = `Game over! The ${winner} wins!`;
}