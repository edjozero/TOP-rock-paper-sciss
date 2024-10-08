/* 

DOM ADDED ELEMENTS

*/

// grab content div to be able to put newly created elements inside
const content = document.querySelector("#content");

// get access to text div
const textDiv = document.querySelector(".text");

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
const rockText = document.createTextNode("Rock");
const paperText = document.createTextNode("Paper");
const scissorsText = document.createTextNode("Scissors");

rock.appendChild(rockText);
paper.appendChild(paperText);
scissors.appendChild(scissorsText);

// selectionsDiv.append(rock, paper, scissors);
selectionsDiv.appendChild(rock);
selectionsDiv.appendChild(paper);
selectionsDiv.appendChild(scissors);

content.appendChild(selectionsDiv);

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

textDiv.appendChild(scoreDiv);

// div for the rounds result text
const roundResultsDiv = document.createElement("div");
roundResultsDiv.setAttribute("id", "roundResults");

const roundsOl = document.createElement("ol");
roundsOl.setAttribute("id", "roundResultList");

roundResultsDiv.appendChild(roundsOl);

content.appendChild(roundResultsDiv);

const roundResultList = document.querySelector("#roundResultList");

// variables for startGame and the playerChoices div. we hide the choices before the game begins
const startGame = document.querySelector("#start-game");
const playerChoices = document.querySelector("#playerSelection");
playerChoices.style.display = "none"; //initially hidden

// add the player names: player and computer, also create variables for each which will be used later
const playerHeaderText = document.createTextNode("Player: ");
const playerHeader = document.querySelector("#playerHeader");

const computerHeaderText = document.createTextNode("Computer: ");
const computerHeader = document.querySelector("#computerHeader");

// grab text under game title and this is where the winner of the game will be announced
const gameStartText = document.querySelector(".gameStartText");


/* 

EVENT LISTENERS

*/

// event listener to start the game

startGame.addEventListener("click", () => {
    playerChoices.style.display = "flex";
    startGame.style.display = "none";
    gameStartText.textContent = "";

    // add player and computer names and scores to the page
    playerHeader.appendChild(playerHeaderText);
    playerHeader.textContent = `Player: ${humanScore}`;
    
    computerHeader.appendChild(computerHeaderText);
    computerHeader.textContent = `Computer: ${computerScore}`;
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
                addRoundTieText(humanChoice, computerChoice);
            }else if(computerChoice === "paper"){
                incrementComputerScore(humanChoice, computerChoice);
            }else if(computerChoice === "scissors"){
                incrementPlayerScore(humanChoice, computerChoice);
            }
        }
    
        if (humanChoice === "paper") {
            if(computerChoice === "paper"){
                addRoundTieText(humanChoice, computerChoice);
            }else if(computerChoice === "rock"){
                incrementPlayerScore(humanChoice, computerChoice);
            }else if(computerChoice === "scissors"){
                incrementComputerScore(humanChoice, computerChoice);
            }
        }
    
        if (humanChoice === "scissors") {
            if(computerChoice === "scissors"){
                addRoundTieText(humanChoice, computerChoice);
            }else if(computerChoice === "rock"){
                incrementPlayerScore(humanChoice, computerChoice);
            }else if(computerChoice === "paper"){
                incrementComputerScore(humanChoice, computerChoice);
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
        // winner text added once game is won
        gameStartText.textContent = "You win! Click Restart to play again.";
        gameStartText.style.color = "green";
        gameStartText.style.fontSize = "30px";

        playerChoices.style.display = "none";
    }else if(computerScore === 5){
        // winner text added once game is lost
        gameStartText.textContent = "Computer wins! Click Restart to play again.";
        gameStartText.style.color = "red";
        gameStartText.style.fontSize = "30px";

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
function incrementPlayerScore(human, computer){
    humanScore++;
    playerHeader.textContent = `Player: ${humanScore}`;

    // round result text added here
    const li = document.createElement("li");
    li.textContent = `You chose ${human}, Computer chose ${computer}. Human wins this round.`;
    roundResultList.appendChild(li);
    
}

function incrementComputerScore(human, computer){
    computerScore++;
    computerHeader.textContent = `Computer: ${computerScore}`;

    const li = document.createElement("li");
    li.textContent = `You chose ${human}, Computer chose ${computer}. Computer wins this round.`;
    roundResultList.appendChild(li);
}

function addRoundTieText(human, computer){
    const li = document.createElement("li");
    li.textContent = `You chose ${human}, Computer chose ${computer}. Tie, no one wins.`;
    roundResultList.appendChild(li);
}