// Parameters:
// 	• Play a game of rock paper scissors in the console.
// 	• Complete 5 rounds of gameplay
// 	• Announce winner in console

// Extra:
// 	• Create  GUI for game

// ------------------------------------------------------------ //


let playerChoice;
let compChoice;


//Get computer choice and store value
// • getComputerChoice()
// • Will need a math.random() to allow computer to choose rock paper or scissors
// • return value in variable


function getComputerChoice() {
    let compDecision = Math.floor(Math.random() * 100);
    if (compDecision <= 33) {
        compChoice = "rock"; 
    }   else if (compDecision <= 66) {
            compChoice = "paper";
    }   else {
            compChoice = "scissors"
    }

    return compChoice;
};



//Get player selection and store choice
// • getPlayerSelection()
// • Will need to somehow get an input from the user. Either through prompt or GUI
function getPlayerSelection() {
    let playerSelection;
    playerChoice = "";
    while (playerChoice === "") {
        playerSelection = prompt("R,P, or S?: ");
            if (playerSelection.toLowerCase() == "r") {
                playerChoice = "rock";
            } else if (playerSelection.toLowerCase() == "p") {
                playerChoice = "paper";
            } else if (playerSelection.toLowerCase() == "s") {
                playerChoice = "scissors";
            } else {
                alert("Please choose a valid option.")
            }
    };
    return playerChoice;
};



//Evaluate getComputerChoice and getPlayerSelection and store win in variable
// • playRound()
function playRound(playerChoice, compChoice) {


    if (playerChoice == compChoice) {
        result = console.log("It's a draw. Please play again.");
    } else if (playerChoice == "rock" && compChoice == "scissors") {
        result = console.log("You win! Comp chose scissors");
    } else if (playerChoice == "paper" && compChoice == "rock") {
        result = console.log("You win! Comp chose rock");
    } else if (playerChoice == "scissors" && compChoice == "paper") {
        result = console.log("You win! Comp chose paper");
    } else if (playerChoice == "rock" && compChoice == "paper") {
        result = console.log("You lose. Comp chose paper");
    }  else if (playerChoice == "paper" && compChoice == "scissors") {
        result = console.log("You lose. Comp chose scissors");
    } else if (playerChoice == "scissors" && compChoice == "rock") {
        result = console.log("You lose. Comp chose rock");
    }

    return result;
};


function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerSelection(), getComputerChoice());
    };
};

game();
//Announce Winner of round/game
//Play 5 rounds