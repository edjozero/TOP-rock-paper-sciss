// computer choice code

/*
    create new function called computer choice

    in function write code for returning an option between rock, paper, and scissors
    
    test function by entering a console.log
*/

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * choices.length);

    const randomChoice = choices[random];

    return randomChoice;
}


// now get the human choice

function getHumanChoice() {
    const userInput = prompt("Choose between rock, paper, and scissors").toLowerCase();
    return userInput;
}

// create scores for computer and human
let humanScore = 0;
let computerScore = 0;

// create logic for playing one round of the game

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock") {
        if(computerChoice === "rock"){
            console.log("Tie, no one wins");
        }else if(computerChoice === "paper"){
            console.log("Computer wins this round");
            computerScore++;
        }else if(computerChoice === "scissors"){
            console.log("Human wins this round");
            humanScore++;
        }
    }

    if (humanChoice === "paper") {
        if(computerChoice === "paper"){
            console.log("Tie, no one wins");
        }else if(computerChoice === "rock"){
            console.log("Human wins this round");
            humanScore++;
        }else if(computerChoice === "scissors"){
            console.log("Computer wins this round");
            computerScore++;
        }
    }

    if (humanChoice === "scissors") {
        if(computerChoice === "scissors"){
            console.log("Tie, no one wins");
        }else if(computerChoice === "rock"){
            console.log("Computer wins this round");
            humanScore++;
        }else if(computerChoice === "paper"){
            console.log("Human wins this round");
            computerScore++;
        }
    }
}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);