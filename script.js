console.log("Hello World");

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
    if (winner == "tie") {
        console.log("Tie game!");
    }
    else if (winner == "human") {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } 
    else if (winner == "computer") {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    }
    return winner;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winner = null;
    let roundNumber = 0;
    while (roundNumber < 5) {
        winner = playRound();
        if (winner == "tie") {
            return;
        }
        else if (winner == "human") {
            humanScore += 1;
        }
        else if (winner == "computer") {
            computerScore += 1;
        }
    }
    console.log(`Game over!\nPlayer score: ${humanScore}\nComputer score: ${computerScore}`);
}

playGame();