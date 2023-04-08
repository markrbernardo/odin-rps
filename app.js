//Connect HTML to Javascript
//Containers
const vsBox = document.querySelector(".vs-box");
const resultContainer = document.querySelector(".result-container");
const roundIndicator = document.querySelector(".round-indicator");
const cardContainer = document.querySelector(".card-container");

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

//Default States
let power = 0;
let round = 1;
let playerSelection;
let computerChoice;
let playerScore = 0;
let cpuScore = 0;

//Sounds
const powerOnSound = new Audio("audio/power-on-sound.mp3");
const powerOffSound = new Audio("audio/power-off-sound.mp3");
const winSound = new Audio("audio/win-sound.mp3");
const loseSound = new Audio("audio/lose-sound.mp3");
const resultWin = new Audio ("audio/result-win-sound");


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
            powerOffSequence();
        }
    });
};

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
    powerOffSound.play();
    resultContainer.classList.add("invisible");
    vsBox.classList.add("invisible");
    screenText.textContent = "Powering off..";
    screenText.classList.remove("invisible");
    setTimeout(() => {
        screenText.textContent = "< Turn on Console to Play >";
        for (var i = 0; i < playerCard.length; i++) {
            playerCard[i].classList.add("invisible");
            };
    }, 1400);
    power--;
}

function roundIndicatorSequence() {
    let one = document.querySelector("#one");
    let two = document.querySelector("#two");
    let three = document.querySelector("#three");
    let four = document.querySelector("#four");
    let five = document.querySelector("#five");
    setTimeout(() => {
        roundCounter();
        vsBox.classList.add("invisible");
        resultContainer.classList.add("invisible");
    }, 3000);
    
    function roundCounter() {
        screenText.classList.add("invisible");
        let roundNumber;
        if (round == 1) {
            one.classList.add("shade");
            roundNumber = 1;
        } else if (round == 2) {
            one.classList.add("shade");
            two.classList.add("shade");
            roundNumber = 2;
        } else if (round == 3) {
            one.classList.add("shade");
            two.classList.add("shade");
            three.classList.add("shade");
            roundNumber = 3;
        } else if (round == 4) {
            one.classList.add("shade");
            two.classList.add("shade");
            three.classList.add("shade");
            four.classList.add("shade");
            roundNumber = 4;
        } else if (round == 5) {
            one.classList.add("shade");
            two.classList.add("shade");
            three.classList.add("shade");
            four.classList.add("shade");
            five.classList.add("shade");
            roundNumber = 5;
        } else {
            getPlayerReplay;
        }
    
        screenText.textContent = (`Round ${roundNumber}`);
        screenText.classList.remove("invisible");
        roundIndicator.classList.remove("invisible");

        gameSetup();
    }
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

        setTimeout(() => {
            gamePlay(playerChoice, computerChoice);
            if (round > 5) {
                evaluateScore();
                getPlayerReplay();
            }
        }, 1000);
    


    })
})

function gameSetup() {
    setTimeout(() => {
        playerPrompt.classList.remove("invisible");
        for (var i = 0; i < playerCard.length; i++) {
            playerCard[i].classList.remove("invisible");
            };
    }, 1500);
}



//Gameplay
function gamePlay (playerChoice, computerChoice) {
    screenText.classList.add("invisible");
    computerChoice = getComputerChoice().toLowerCase();
    playerChoice = playerChoice.toLowerCase();


    vsBox.classList.remove("invisible");
    vsBoxPlayerCard.textContent = (playerChoice);
    vsBoxCompCard.textContent = (computerChoice);


    if (round <= 5 && playerChoice == "rock" && computerChoice == "scissors") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Rock beats Scissors!");
        winSound.play();
        round++;
        console.log(round);
        playerScore ++;
        setTimeout(roundIndicatorSequence, 1000);
    } else if (round <= 5 && playerChoice == "rock" && computerChoice == "paper") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Lose. Paper beats Rock.");
        loseSound.play();
        round++;
        console.log(round);
        cpuScore++;
        setTimeout(roundIndicatorSequence, 1000);
    } else if (round <= 5 && playerChoice == "paper" && computerChoice == "rock") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Paper beats Rock!");
        winSound.play();
        round++;
        console.log(round);
        playerScore ++;
        setTimeout(roundIndicatorSequence, 1000);
    } else if (round <= 5 && playerChoice == "paper" && computerChoice == "scissors") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Lose. Scissors beat Paper.");
        loseSound.play();
        round++;
        console.log(round);
        cpuScore++;
        setTimeout(roundIndicatorSequence, 1000);
    } else if (round <= 5 && playerChoice == "scissors" && computerChoice == "paper") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Win! Scissors beats Paper!");
        winSound.play();
        round++;
        console.log(round);
        playerScore ++;
        setTimeout(roundIndicatorSequence, 1000);
    } else if (round <= 5 && playerChoice == "scissors" && computerChoice == "rock") {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("You Lose. Rock beats Scissors.");
        loseSound.play();
        round++;
        console.log(round);
        cpuScore++;
        setTimeout(roundIndicatorSequence, 1500);
    } else if (round <= 5 && playerChoice == computerChoice) {
        resultContainer.classList.remove("invisible");
        resultText.textContent = ("Draw.");
        round++;
        console.log(round);
        setTimeout(roundIndicatorSequence, 1000);
    } else {
        evaluateScore();
    }
}

//Score Evaluation
function evaluateScore() {
    vsBox.classList.add("invisible");
    screenText.classList.add("invisible");
    roundIndicator.classList.add("invisble");

    if (playerScore > cpuScore) {
        resultText.textContent = ("You win! Best out of 5!");
        resultWin.play();
        resultText.classList.remove("invisible");
    } else if (playerScore < cpuScore) {
        resultText.textContent = ("You Lose. The CPU did best out of 5.");
        resultText.classList.remove("invisible");
    } else {
        resultText.textContent = ("It was a draw.");
        resultText.classList.remove("invisible");
    }
}

//Results

function getPlayerReplay() {
    screenText.classList.remove("invisible");
    screenText.textContent = ("Would you Like to Play Again?");

}



//Unused Code

//Text Flash Script
/* let screenTextFlash =  setInterval(() => {
    screenText.classList.add("invisible");
    setTimeout(() => {screenText.classList.remove("invisible");}, 2000)
});

clearInterval(screenTextFlash); */