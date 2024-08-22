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

        // checks scores and calls winner function that ends game
        if(humanScore === 5 || computerScore === 5){
            winner();
        }
    }

    const humanSelection = e.target.className;
    
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);    
});

// to be used in play round function
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

