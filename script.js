// grab content div to be able to put newly created elements inside
const content = document.querySelector("#content");

// div where rps buttons will be housed in
const selectionsDiv = document.createElement("div");
selectionsDiv.setAttribute("id", "playerSelection");

// create buttons for each selection for player: rock, paper, scissors
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

// set attributes for created buttons
rock.setAttribute("class", "rock");
paper.setAttribute("class", "paper");
scissors.setAttribute("class", "scissors");

// text for buttons
const rockText = document.createTextNode("Rock")
const paperText = document.createTextNode("Paper")
const scissorsText = document.createTextNode("Scissors")

rock.appendChild(rockText);
paper.appendChild(paperText);
scissors.appendChild(scissorsText);

// selectionsDiv.append(rock, paper, scissors);
selectionsDiv.appendChild(rock);
selectionsDiv.appendChild(paper);
selectionsDiv.appendChild(scissors);

content.appendChild(selectionsDiv);


// event listener to start the game
const startGame = document.querySelector("#start-game");
const playerChoices = document.querySelector("#playerSelection");
playerChoices.style.display = "none"; //initially hidden

startGame.addEventListener("click", () => {
    playerChoices.style.display = "block";
    startGame.style.display = "none";
});

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
// let humanScore = 0;
// let computerScore = 0;

// create logic for playing one round of the game

// function playRound(humanChoice, computerChoice){
//     if (humanChoice === "rock") {
//         if(computerChoice === "rock"){
//             console.log("Tie, no one wins");
//         }else if(computerChoice === "paper"){
//             console.log("Computer wins this round");
//             computerScore++;
//         }else if(computerChoice === "scissors"){
//             console.log("Human wins this round");
//             humanScore++;
//         }
//     }

//     if (humanChoice === "paper") {
//         if(computerChoice === "paper"){
//             console.log("Tie, no one wins");
//         }else if(computerChoice === "rock"){
//             console.log("Human wins this round");
//             humanScore++;
//         }else if(computerChoice === "scissors"){
//             console.log("Computer wins this round");
//             computerScore++;
//         }
//     }

//     if (humanChoice === "scissors") {
//         if(computerChoice === "scissors"){
//             console.log("Tie, no one wins");
//         }else if(computerChoice === "rock"){
//             console.log("Computer wins this round");
//             humanScore++;
//         }else if(computerChoice === "paper"){
//             console.log("Human wins this round");
//             computerScore++;
//         }
//     }
// }

// const humanSelection = getHumanChoice();

// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// create playGame function
// this function will take the playRound one inside.

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
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
    }

    // adjustment from where this code was before
    // it did not need to be in the for loop, actually had to be outside
    if (humanScore === computerScore) {
        console.log(`It's a tie! Human = ${humanScore} vs Computer = ${computerScore}`);
    }else if(humanScore > computerScore){
        console.log(`Human wins! Human = ${humanScore} vs Computer = ${computerScore}`);
    }else if(humanScore < computerScore){
        console.log(`Computer wins! Human = ${humanScore} vs Computer = ${computerScore}`);
    }
}

function reload() {
    location.reload();
    return false;
}

