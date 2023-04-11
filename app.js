//Connect HTML to Javascript
//Containers
const vsBox = document.querySelector(".vs-box");
const resultContainer = document.querySelector(".result-container");
const roundIndicator = document.querySelector(".round-indicator");
const cardContainer = document.querySelector(".card-container");
const replayContainer = document.querySelector(".replay-container");

//Components
const roundIcon = document.querySelectorAll(".round-icon");
const vsBoxPlayerCard = document.querySelector(".player-choice");
const vsBoxCompCard = document.querySelector(".cpu-choice")
const playerCard = document.querySelectorAll(".player-card");
const resultText = document.querySelector(".result-text");
const screenText = document.querySelector(".screen-text");
const gameTitle = document.querySelector(".game-title");
const powerButton = document.querySelector(".power-button");
const playerPrompt = document.querySelector(".prompt");
const replayButton = document.querySelectorAll(".replay");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");

//Default States
let power = 0;
let round = 0;
let playerSelection;
let computerChoice;
let playerScore = 0;
let cpuScore = 0;
let roundNumber;

//Sounds
const powerOnSound = new Audio("audio/power-on-sound.mp3");
const powerOffSound = new Audio("audio/power-off-sound.mp3");
const winSound = new Audio("audio/win-sound.mp3");
const loseSound = new Audio("audio/lose-sound.mp3");
const drawSound = new Audio ("audio/draw-sound.mp3");
const resultWin = new Audio ("audio/result-win-sound.mp3");
const resultLose = new Audio ("audio/result-lose-sound.mp3");


//The Stage
powerSwitch();



//Switch function
function powerSwitch () {
    screenText.textContent = "< Turn on Console to Play >";

    powerButton.addEventListener("click", () => {
        if (power == 0) {
            console.log(power);
            powerOnSequence();

        }   else {
            console.log(power);
            console.log(round);
            round = 0;
            powerOffSequence();
        }
    });
}

//OnOff Sequences
function powerOnSequence() {
    screenText.classList.add("invisible");
    powerOnSound.play();
    screenText.textContent = "Welcome to Rock Paper Scissors!";
    setTimeout (() => {
        screenText.classList.remove("invisible");
        roundIndicatorSequence();
    }, 1500);
    power++;
}

function powerOffSequence() {
    clearTimeout();
    powerOffSound.play();
    resultContainer.classList.add("invisible");
    vsBox.classList.add("invisible");
    roundIndicator.classList.add("invisible");
    playerPrompt.classList.add("invisible");
    screenText.textContent = "Powering off..";
    screenText.classList.remove("invisible");
    setTimeout(() => {
        screenText.textContent = "< Turn on Console to Play >";
        for (var i = 0; i < playerCard.length; i++) {
            playerCard[i].classList.add("invisible");
            };
    }, 1400);
    round = 0;
    power--;
}

function roundIndicatorSequence() {
    round++;
    console.log(round);

    setTimeout(() => {
        resultContainer.classList.add("invisible");
        vsBox.classList.add("invisible");
        roundCounter();
    }, 3000);
    
    function roundCounter() {
        screenText.classList.add("invisible");
        if (round == 1) {
            one.classList.add("shade");
            roundNumber = 1;
            showRoundText();
            setupPlayerInterface();
        } else if (round == 2) {
            one.classList.add("shade");
            two.classList.add("shade");
            roundNumber = 2;
            showRoundText();
            setupPlayerInterface();
        } else if (round == 3) {
            one.classList.add("shade");
            two.classList.add("shade");
            three.classList.add("shade");
            roundNumber = 3;
            showRoundText();
            setupPlayerInterface();
        } else if (round == 4) {
            one.classList.add("shade");
            two.classList.add("shade");
            three.classList.add("shade");
            four.classList.add("shade");
            roundNumber = 4;
            showRoundText();
            setupPlayerInterface();
        } else if (round == 5) {
            one.classList.add("shade");
            two.classList.add("shade");
            three.classList.add("shade");
            four.classList.add("shade");
            five.classList.add("shade");
            roundNumber = 5;
            showRoundText();
            setupPlayerInterface();
        } else if (round == 6) {
            resultContainer.classList.remove("invisible");
            setTimeout(evaluateScore(), 3000);
        } else {
            clearTimeout();
        }
    }
}


function showRoundText() {
    screenText.textContent = (`Round ${roundNumber}`);
    screenText.classList.remove("invisible");
    roundIndicator.classList.remove("invisible");
}

/* Script for RPS */
//Create an array to store RPS
const objectChoices = ["rock", "paper", "scissors"];

//getComputerChoice() from random array
function getComputerChoice() {
    let cpuChoice = objectChoices[Math.floor(Math.random() * objectChoices.length)];
    console.log(cpuChoice);
    return cpuChoice;
}

//getPlayerChoice() from card clicks
playerCard.forEach((card) => {
    card.addEventListener("click", () => {
        const objectChoice = card.getAttribute("id");
        playerChoice = objectChoice;
        console.log(playerChoice);
        
        playerPrompt.classList.add("invisible");
        for (var i = 0; i < playerCard.length; i++) {
        playerCard[i].classList.add("invisible");
        };

        if (round <= 5) {
            setTimeout(gamePlay(playerChoice, computerChoice), 1000);
        } else {
            setTimeout(evaluateScore(), 3000);
        }
    })
});

function setupPlayerInterface() {
    setTimeout(() => {
        playerPrompt.classList.remove("invisible");
        for (var i = 0; i < playerCard.length; i++) {
            playerCard[i].classList.remove("invisible");
            };
    }, 1500);
}


function gamePlay (playerChoice, computerChoice) {
    screenText.classList.add("invisible");
    computerChoice = getComputerChoice().toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    vsBox.classList.remove("invisible");
    vsBoxPlayerCard.textContent = (playerChoice);
    vsBoxCompCard.textContent = (computerChoice);

    if (playerChoice == "rock" && computerChoice == "scissors") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Rock beats Scissors!");
        winSound.play();
        playerScore ++;
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Lose. Paper beats Rock.");
        loseSound.play();
        cpuScore++;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Paper beats Rock!");
        winSound.play();
        playerScore ++;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Lose. Scissors beat Paper.");
        loseSound.play();
        cpuScore++;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Scissors beats Paper!");
        winSound.play();
        playerScore ++;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Lose. Rock beats Scissors.");
        loseSound.play();
        cpuScore++;
    } else {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("Draw.");
        drawSound.play();
    }

    roundListener();
}


function roundListener () {
    console.log(round);
    
    if (round <= 5) {
        roundIndicatorSequence();
    } else {
        evaluateScore();
    }
}


function evaluateScore() {
    vsBox.classList.add("invisible");
    screenText.classList.add("invisible");
    roundIndicator.classList.add("invisible");

    if (playerScore > cpuScore) {
        resultText.textContent = ("You win! Best out of 5!");
        console.log(resultContainer.classList);
        resultWin.play();
        setTimeout(getPlayerReplay(), 2000);
    } else if (playerScore < cpuScore) {
        resultText.textContent = ("You Lose. The CPU did best out of 5.");
        console.log(resultContainer.classList);
        resultLose.play();
        setTimeout(getPlayerReplay(), 2000);
    } else {
        resultText.textContent = ("It was a draw.");
        console.log(resultContainer.classList);
        drawSound.play();
        setTimeout(getPlayerReplay(), 2000);
    }

    
}


function getPlayerReplay() {
   setTimeout(() => {
    screenText.classList.remove("invisible");
    screenText.textContent = ("Would you Like to Play Again?");
    replayContainer.classList.remove("invisible");
    vsBox.classList.add("invisible");
    roundIndicator.classList.add("invisible");
    playerPrompt.classList.add("invisible");
    for (var i = 0; i < playerCard.length; i++) {
        playerCard[i].classList.add("invisible");
        };
   }, 3000);
}

function clearRoundIcons() {
    two.classList.remove("shade");
    three.classList.remove("shade");
    four.classList.remove("shade");
    five.classList.remove("shade");
}

replayButton.forEach((option) => {
    option.addEventListener("click", () => {
        const replayChoice = option.getAttribute("id");
            
        if (replayChoice.toLowerCase() == "yes-replay") {
            replayContainer.classList.add("invisible");
            screenText.classList.add("invisible");
            resultContainer.classList.add("invisible");
            console.log(round);
            powerOnSound.play();
            clearRoundIcons();
            round = 0;
            roundIndicatorSequence();
        } else {
            replayContainer.classList.add("invisible");
            resultContainer.classList.add("invisible");
            clearRoundIcons();
            powerOffSequence();
        }
    })
})



//Unused Code

//Text Flash Script
/* let screenTextFlash =  setInterval(() => {
    screenText.classList.add("invisible");
    setTimeout(() => {screenText.classList.remove("invisible");}, 2000)
});

clearInterval(screenTextFlash); */