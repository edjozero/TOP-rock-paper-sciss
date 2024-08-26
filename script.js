/* 

DOM ADDED ELEMENTS

*/

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

// new div where scores and round results will be displayed on page
// main div created
const resultsDisplay = document.createElement("div");
resultsDisplay.setAttribute("id", "results");

content.appendChild(resultsDisplay);

// div for the player scores, likely just two p tags idk
const scoreDiv = document.createElement("div");
scoreDiv.setAttribute("id", "scoreHeaders");

//headers for player & comp
const playerH = document.createElement("h3");
const computerH = document.createElement("h3");

playerH.setAttribute("id", "playerHeader");
computerH.setAttribute("id", "computerHeader");

scoreDiv.appendChild(playerH);
scoreDiv.appendChild(computerH);

resultsDisplay.appendChild(scoreDiv);

// counts div and count text
const countsDiv = document.createElement("div");
countsDiv.setAttribute("id", "countsText");

// p elements for player and computer counts
const playerCount = document.createElement("p");
const computerCount = document.createElement("p");

playerCount.setAttribute("id", "showPlayerCount");
computerCount.setAttribute("id", "showComputerCount");

countsDiv.appendChild(playerCount);
countsDiv.appendChild(computerCount);

resultsDisplay.appendChild(countsDiv);

// div for the rounds result text, probably a list?
const roundResultsDiv = document.createElement("div");
roundResultsDiv.setAttribute("id", "roundResults");

const roundsUl = document.createElement("ul");
roundsUl.setAttribute("id", "roundResultList");

roundResultsDiv.appendChild(roundsUl);

resultsDisplay.appendChild(roundResultsDiv);

/* 

EVENT LISTENERS

*/

// event listener to start the game
const startGame = document.querySelector("#start-game");
const playerChoices = document.querySelector("#playerSelection");
playerChoices.style.display = "none"; //initially hidden

startGame.addEventListener("click", () => {
    playerChoices.style.display = "block";
    startGame.style.display = "none";

    // add player and computer score text as well as show their current score here
    const playerHeaderText = document.createTextNode("Player: ");
    playerHeader.appendChild(playerHeaderText);
    showPlayerCount.textContent = humanScore;
    

    const computerHeaderText = document.createTextNode("Computer: ");
    computerHeader.appendChild(computerHeaderText);
    showComputerCount.textContent = computerScore;

});

// scores to track points of player and computer
let humanScore = 0;
let computerScore = 0;

// listener for player choices
playerChoices.addEventListener("click", (e) => {
    if(!e.target.matches("button")) return; //ignores non button click

    function playRound(humanChoice, computerChoice){
        if (humanChoice === "rock") {
            if(computerChoice === "rock"){
                console.log("Tie, no one wins");
            }else if(computerChoice === "paper"){
                console.log("Computer wins this round");
                incrementComputerScore();
            }else if(computerChoice === "scissors"){
                console.log("Human wins this round");
                incrementPlayerScore();
            }
        }
    
        if (humanChoice === "paper") {
            if(computerChoice === "paper"){
                console.log("Tie, no one wins");
            }else if(computerChoice === "rock"){
                console.log("Human wins this round");
                incrementPlayerScore();
            }else if(computerChoice === "scissors"){
                console.log("Computer wins this round");
                incrementComputerScore();
            }
        }
    
        if (humanChoice === "scissors") {
            if(computerChoice === "scissors"){
                console.log("Tie, no one wins");
            }else if(computerChoice === "rock"){
                console.log("Computer wins this round");
                incrementPlayerScore();
            }else if(computerChoice === "paper"){
                console.log("Human wins this round");
                incrementComputerScore();
            }
        }

        // checks scores and calls winner function that ends game
        winner();
    }

    const humanSelection = e.target.className;
    
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);    
});


/* 

FUNCTIONS

*/

// checks who got to 5 rounds won and ends game
function winner(){
    if(humanScore === 5){
        console.log("You win! Click Restart to play again.");
        playerChoices.style.display = "none";
    }else if(computerScore === 5){
        console.log("Computer wins! Click Restart to play again.");
        playerChoices.style.display = "none";
    }
}

// computer choice code, random option of r, p, or s
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * choices.length);

    const randomChoice = choices[random];

    return randomChoice;
}

function reload() {
    location.reload();
    return false;
}

// increment functions to increase score for each round won
function incrementPlayerScore(){
    humanScore++;
    showPlayerCount.textContent = humanScore;
}

function incrementComputerScore(){
    computerScore++;
    showComputerCount.textContent = computerScore;
}