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

//Testers


powerOnOff();

//Text Flash Script
/* let screenTextFlash =  setInterval(() => {
    screenText.classList.add("invisible");
    setTimeout(() => {screenText.classList.remove("invisible");}, 2000)
});

clearInterval(screenTextFlash); */


function powerOnOff () {
    screenText.textContent = "< Turn on Console to Play >";

    powerButton.addEventListener("click", () => {
        if (power == 0) {
            screenText.classList.add("invisible");
            screenText.textContent = "Welcome to Rock Paper Scissors!";
            setTimeout(() => {
                screenText.classList.remove("invisible");
                for (var i = 0; i < playerCard.length; i++) {
                    playerCard[i].classList.remove("invisible");
                    };
            }, 3000);
            power++;
            console.log(power);
        }   else {
            screenText.textContent = "Powering off..";
            screenText.classList.remove("invisible");
            setTimeout(() => {
                screenText.textContent = "< Turn on Console to Play >";
                for (var i = 0; i < playerCard.length; i++) {
                    playerCard[i].classList.add("invisible");
                    };
            }, 2000);
            power--;
            console.log(power);
        }
    });
};





/* Script for RPS */
//Create an array to store RPS
const object = ["rock", "paper", "scissors"];

//Make function for getComputerChoice() and use the array
function getComputerChoice() {
    return object[~~Math.random() * object.length];
}

//Make function for getPlayerChoice() utilizing id
playerCard.forEach((button) => {
    button.addEventListener("click", () => {
        const emoji = button.querySelector(".player-card");
        playerChoice = emoji.alt;
    })
})

//Round function for gameplay
//Results