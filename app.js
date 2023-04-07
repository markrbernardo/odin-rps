//Connect HTML to Javascript
//Containers
const vsBox = document.querySelector(".vs-box");
const resultContainer = document.querySelector(".result-container");
const roundIndicator = document.querySelector(".round-indicator");
const cardContainer = document.querySelector(".card-container");

//Components
const roundIcon = document.querySelectorAll(".round-icon");
const playerCard = document.querySelectorAll(".player-card");
const screenText = document.querySelector(".screen-text");
const gameTitle = document.querySelector(".game-title");
const powerButton = document.querySelector(".power-button");
const playerPrompt = document.querySelector(".prompt");

//Default States
let power = 0;
let playerSelection;
let computerChoice;


let powerOnSound = new Audio("audio/power-on-sound.mp3");
let powerOffSound = new Audio("audio/power-off-sound.mp3");

//Testers


powerSwitch();

//Text Flash Script
/* let screenTextFlash =  setInterval(() => {
    screenText.classList.add("invisible");
    setTimeout(() => {screenText.classList.remove("invisible");}, 2000)
});

clearInterval(screenTextFlash); */


function powerSwitch () {
    screenText.textContent = "< Turn on Console to Play >";

    powerButton.addEventListener("click", () => {
        if (power == 0) {
            powerOnSequence();
            console.log(power);
            powerOnSound.play();
        }   else {
            powerOffSequence();
            console.log(power);
            powerOffSound.play();
        }
    });
};


function powerOnSequence() {
    screenText.classList.add("invisible");
    screenText.textContent = "Welcome to Rock Paper Scissors!";
    setTimeout(() => {
        screenText.classList.remove("invisible");
        for (var i = 0; i < playerCard.length; i++) {
            playerCard[i].classList.remove("invisible");
            };
    }, 1500);
    power++;
    roundCounter();
}

function powerOffSequence() {
    screenText.textContent = "Powering off..";
    screenText.classList.remove("invisible");
    setTimeout(() => {
        screenText.textContent = "< Turn on Console to Play >";
        for (var i = 0; i < playerCard.length; i++) {
            playerCard[i].classList.add("invisible");
            };
    }, 1500);
    power--;
}




/* Script for RPS */
//Create an array to store RPS
const objectChoices = ["rock", "paper", "scissors"];

//Make function for getComputerChoice() and use the array
function getComputerChoice() {
    return objectChoices[~~Math.random() * objectChoices.length];
}

//Make function for getPlayerChoice() utilizing id
playerCard.forEach((card) => {
    card.addEventListener("click", () => {
        const objectChoice = card.getAttribute("id");
        playerChoice = objectChoice;
        console.log(playerChoice);

        gamePlay(playerChoice, computerChoice);
    })
})

//Round function for gameplay
function gamePlay (playerChoice, computerChoice) {
    computerChoice = getComputerChoice().toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == "rock" && computerChoice == "scissors") {
        screenText.textContent = ("You Win! Rock beats Scissors!");
        screenText.classList.remove("invisible");
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        screenText.textContent = ("You Lose! Paper beats Rock!");
        screenText.classList.remove("invisible");
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        screenText.textContent = ("You Win! Paper beats Rock!");
        screenText.classList.remove("invisible");
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        screenText.textContent = ("You Lose! Scissors beats Paper!");
        screenText.classList.remove("invisible");
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        screenText.textContent = ("You Win! Scissors beats Paper!");
        screenText.classList.remove("invisible");
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        screenText.textContent = ("You Lose! Rock beats Scissors!");
        screenText.classList.remove("invisible");
    } else {
        screenText.textContent = ("Draw.");
        screenText.classList.remove("invisible");
    }
}

//Round-counter

let round = 0;

function roundCounter() {
    screenText.classList.add("invisible");
    let roundNumber;

    if (round = 0) {
        roundNumber = 1;
    } else if (round = 1) {
        roundNumber = 2;
    } else if (round = 2) {
        roundNumber = 3;
    } else if (round = 3) {
        roundNumber = 4;
    } else {
        roundNumber = 5;
    }

    console.log(round);
    screenText.textContent = (`Round ${roundNumber}`);
    screenText.classList.remove("invisible");
}

//Results