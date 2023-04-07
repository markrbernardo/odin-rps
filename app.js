//Connect HTML to Javascript
//Containers
const vsBox = document.querySelector(".vs-box");
const resultContainer = document.querySelector(".result-container");
const roundIndicator = document.querySelector(".round-indicator");
const cardContainer = document.querySelector(".card-container");

//Components
const roundIcon = document.querySelectorAll(".round-icon");
const playerCard = document.querySelectorAll(".player-card");
const resultText = document.querySelector(".result-text");
const screenText = document.querySelector(".screen-text");
const gameTitle = document.querySelector(".game-title");
const powerButton = document.querySelector(".power-button");
const playerPrompt = document.querySelector(".prompt");

//Default States
let power = 0;
let playerSelection;
let computerChoice;

//Sounds
let powerOnSound = new Audio("audio/power-on-sound.mp3");
let powerOffSound = new Audio("audio/power-off-sound.mp3");



powerSwitch();



//Power button event
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

//OnOff Sequences
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

//getComputerChoice() from random array
function getComputerChoice() {
    return objectChoices[Math.floor(Math.random() * objectChoices.length)];
}

//getPlayerChoice() from card clicks
playerCard.forEach((card) => {
    card.addEventListener("click", () => {
        const objectChoice = card.getAttribute("id");
        playerChoice = objectChoice;
        console.log(playerChoice);

        gamePlay(playerChoice, computerChoice);
    })
})

//Gameplay
function gamePlay (playerChoice, computerChoice) {
    screenText.classList.add("invisible");
    computerChoice = getComputerChoice().toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == "rock" && computerChoice == "scissors") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Rock beats Scissors!");
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Lose. Paper beats Rock.");
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Paper beats Rock!");
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Lose. Scissors beat Paper.");
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Scissors beats Paper!");
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Lose! Rock beats Scissors");
    } else {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Rock beats Scissors!");
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





//Unused Code

//Text Flash Script
/* let screenTextFlash =  setInterval(() => {
    screenText.classList.add("invisible");
    setTimeout(() => {screenText.classList.remove("invisible");}, 2000)
});

clearInterval(screenTextFlash); */