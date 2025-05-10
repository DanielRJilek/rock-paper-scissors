console.log("Hello World");
let humanScore = 0;
let computerScore = 0;

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

function playRound() {
    let winner = null;
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(`Computer chooses ${computerSelection}`);
    winner = determineWinner(humanSelection, computerSelection);
    
}