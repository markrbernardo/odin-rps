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
const vsText = document.querySelector(".vs-text");
const vsBoxCompCard = document.querySelector(".cpu-choice")
const playerCard = document.querySelectorAll(".player-card");
const resultImage = document.querySelector(".result-image");
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

//Sequences
function powerOnSequence() {
    hideScreenText();
    powerOnSound.play();
    screenText.textContent = "Welcome to Rock Paper Scissors!";
    setTimeout (() => {
        showScreenText();
        roundIndicatorSequence();
    }, 1500);
    power = 1;
}

function powerOffSequence() {
    clearTimeout(roundIndicatorSequence);
    powerOffSound.play();
    hideResults();
    hideVsBox();
    hideRoundIndicator();
    hidePlayerPrompt();
    screenText.textContent = "Powering off..";
    showScreenText();
    showPowerText();
    round = 0;
    power = 0;
}

function roundIndicatorSequence() {
    round++;
    console.log(round);

    setTimeout(() => {
        hideResults();
        hideVsBox();
        roundCounter();
    }, 3000);
    
    function roundCounter() {
        hideScreenText();
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
            showResults();
            setTimeout(evaluateScore(), 3000);
        } else {
            clearTimeout(roundIndicatorSequence);
        }
    }
}


function showRoundText() {
    screenText.textContent = (`Round ${roundNumber}`);
    showScreenText();
    showRoundIndicator();
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
        
        hidePlayerPrompt();
        hidePlayerCards();

        if (round <= 5) {
            setTimeout(gamePlay(playerChoice, computerChoice), 1000);
        } else {
            setTimeout(evaluateScore(), 3000);
        }
    })
});

function setupPlayerInterface() {
    setTimeout(() => {
        showPlayerPrompt();
        showPlayerCards();
    }, 1500);
}


function gamePlay (playerChoice, computerChoice) {
    hideScreenText();
    computerChoice = getComputerChoice().toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    showVsBox();

    if (playerChoice == "rock" && computerChoice == "scissors") {
        vsBoxPlayerCard.textContent = ("✊");
        vsBoxCompCard.textContent = ("✌");
        showResults();
        resultText.textContent = ("You Win! Rock beats Scissors!");
        winSound.play();
        playerScore ++;
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        vsBoxPlayerCard.textContent = ("✊");
        vsBoxCompCard.textContent = ("✋");
        showResults();
        resultText.textContent = ("You Lose. Paper beats Rock.");
        loseSound.play();
        cpuScore++;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        vsBoxPlayerCard.textContent = ("✋");
        vsBoxCompCard.textContent = ("✊");
        showResults();
        resultText.textContent = ("You Win! Paper beats Rock!");
        winSound.play();
        playerScore ++;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        vsBoxPlayerCard.textContent = ("✋");
        vsBoxCompCard.textContent = ("✌");
        showResults();
        resultText.textContent = ("You Lose. Scissors beat Paper.");
        loseSound.play();
        cpuScore++;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        vsBoxPlayerCard.textContent = ("✌");
        vsBoxCompCard.textContent = ("✋");
        showResults();
        resultText.textContent = ("You Win! Scissors beats Paper!");
        winSound.play();
        playerScore ++;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        vsBoxPlayerCard.textContent = ("✌");
        vsBoxCompCard.textContent = ("✊");
        showResults();
        resultText.textContent = ("You Lose. Rock beats Scissors.");
        loseSound.play();
        cpuScore++;
    } else if (playerChoice == "rock" && computerChoice == "rock") {
        vsBoxPlayerCard.textContent = ("✊");
        vsBoxCompCard.textContent = ("✊");
        showResults();
        resultText.textContent = ("Draw.");
        drawSound.play();
    } else if (playerChoice == "paper" && computerChoice == "paper") {
        vsBoxPlayerCard.textContent = ("✋");
        vsBoxCompCard.textContent = ("✋");
        showResults();
        resultText.textContent = ("Draw.");
        drawSound.play();
    } else {
        vsBoxPlayerCard.textContent = ("✌");
        vsBoxCompCard.textContent = ("✌");
        showResults();
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
    hideVsBox();
    hideScreenText();
    hideRoundIndicator();

    if (playerScore > cpuScore) {
        resultText.textContent = ("You win! Best out of 5!");
        resultWin.play();
        setTimeout(getPlayerReplay(), 2000);
    } else if (playerScore < cpuScore) {
        resultText.textContent = ("You Lose. The CPU did best out of 5.");
        resultLose.play();
        setTimeout(getPlayerReplay(), 2000);
    } else {
        resultText.textContent = ("It was a draw.");
        drawSound.play();
        setTimeout(getPlayerReplay(), 2000);
    }

    
}


function getPlayerReplay() {
   setTimeout(() => {
    showScreenText();
    screenText.textContent = ("Would you Like to Play Again?");
    showReplayContainer();
    hideVsBox();
    hideRoundIndicator();
    hidePlayerPrompt();
    hidePlayerCards();
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
            hideReplayContainer();
            hideScreenText();
            hideResults();
            console.log(round);
            powerOnSound.play();
            clearRoundIcons();
            round = 0;
            roundIndicatorSequence();
        } else {
            hideReplayContainer();
            hideResults();
            clearRoundIcons();
            powerOffSequence();
        }
    })
})

function showPowerText() {
    setTimeout(() => {
        screenText.textContent = "< Turn on Console to Play >";
        hidePlayerCards();
        }, 1400);
}


function showPlayerPrompt() {
    playerPrompt.classList.remove("invisible");
}

function hidePlayerPrompt() {
    playerPrompt.classList.add("invisible");
}

function showReplayContainer() {
    replayContainer.classList.remove("invisible");
}

function hideReplayContainer() {
    replayContainer.classList.add("invisible");
}

function showScreenText() {
    screenText.classList.remove("invisible");
}

function hideScreenText() {
    screenText.classList.add("invisible");
}

function showRoundIndicator() {
    roundIndicator.classList.remove("invisible");
}

function hideRoundIndicator() {
    roundIndicator.classList.add("invisible");
}

function showResults() {
    resultImage.classList.remove("invisible");
    resultText.classList.remove("invisible");
}

function hideResults() {
    resultImage.classList.add("invisible");
    resultText.classList.add("invisible");
}

function showPlayerCards() {
    for (var i = 0; i < playerCard.length; i++) {
        playerCard[i].classList.remove("invisible");
    }
}

function hidePlayerCards() {
    for (var i = 0; i < playerCard.length; i++) {
        playerCard[i].classList.add("invisible");
    }
}

function showVsBox() {
    vsBoxPlayerCard.classList.remove("invisible");
    vsText.classList.remove("invisible");
    vsBoxCompCard.classList.remove("invisible");
}

function hideVsBox() {
    vsBoxPlayerCard.classList.add("invisible");
    vsText.classList.add("invisible");
    vsBoxCompCard.classList.add("invisible");
}
//Unused Code

//Text Flash Script
/* let screenTextFlash =  setInterval(() => {
    screenText.classList.add("invisible");
    setTimeout(() => {screenText.classList.remove("invisible");}, 2000)
});

clearInterval(screenTextFlash); */