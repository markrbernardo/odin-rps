const vsBox = document.querySelector('.vs');
const resultBox = document.querySelector('.results');
const screenTextBox = document.querySelector('.screen-text-box');
const roundIndicatorBox = document.querySelector('.round-indicator');
const overlayBox = document.querySelector('.overlay');

const playerObject = document.querySelector('.player-object');
const cpuObject = document.querySelector('.cpu-object');
const resultImage = document.querySelector('.result-image');
const resultText = document.querySelector('.result-text');
const screenText = document.querySelector('.screen-text');

const roundOne = document.querySelector('#round-1');
const roundTwo = document.querySelector('#round-2');
const roundThree = document.querySelector('#round-3');
const roundFour = document.querySelector('#round-4');
const roundFive = document.querySelector('#round-5');

const playerChoice = document.querySelectorAll('.player-choice');

const volumeOn = document.querySelector('.volume-on');
const volumeOff = document.querySelector('.volume-off');
const soundBar = document.querySelector('.sound-bar');
const powerIcon = document.querySelector('.power-icon');
const powerButton = document.querySelector('.power');

let power = "off";
let round = 1;
let cpuScore = 0;
let playerScore = 0;
let cpuDecision;
let playerDecision;
screenText.textContent = "< Turn on Console To Play >";
powerButton.addEventListener('click', activateGame);

const weapons = ['Rock', 'Paper', 'Scissors'];


function activateGame() {
    if (power == "off") {
        powerOn();

    } else if (power == "on") {
        powerOff();
    }
}

function powerOn() {
    power = "on";
    console.log('RPS Power: On')
    powerIcon.style.backgroundColor = "red";
    printToElement(screenText, 'Welcome to Rock Paper Scissors');
    activatePlayerChoice();
    removeGrayscaleFromPlayerChoice();
    evaluateRound();

 

    console.log('Activate Player Controls');
}

function powerOff() {
    round = 1;
    resetRoundIcons();
    addClassName(vsBox, 'inactive');
    addClassName(resultBox, 'inactive');
    addClassName(roundIndicatorBox, 'inactive');
    removeClassName(screenText,'inactive');
    deactivatePlayerChoice();
    addGrayscaleToPlayerChoice();
    power = "off";
    console.log('RPS Power: Off');
    powerIcon.style.backgroundColor = "white";
    screenText.textContent = "< Turn on Console To Play >";


    console.log('Dectivate Player Controls');
}

function evaluateRound() {
    if (round <= 5) {
        displayRound();
    } else if (round = 6){
        console.log('Evaluate');
    }
}

function displayRound() {
    removeClassName(roundIndicatorBox, 'inactive');
    
    if (round == 1) {
        addClassName(roundOne, 'current');
        screenText.textContent = `Round ${round}`;
    } else if (round == 2) {
        addClassName(roundTwo, 'current');
        screenText.textContent = `Round ${round}`;
    } else if (round == 3) {
        addClassName(roundThree, 'current');
        screenText.textContent = `Round ${round}`;
    } else if (round == 4) {
        addClassName(roundFour, 'current');
        screenText.textContent = `Round ${round}`;
    } else if (round == 5) {
        addClassName(roundFive, 'current');
        screenText.textContent = `Round ${round}`;
    } else {
        console.log('Something went wrong');
    }

    console.log(`----- Round ${round} -----`);
}


function getCPUChoice() {
    let cpuChoice = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(`CPU's Weapon: | ${cpuChoice.toUpperCase()} |`);
    return cpuChoice;
}


function playRound(playerDecision, cpuDecision) {
    cpuDecision = getCPUChoice().toLowerCase();
    playerDecision = playerDecision.toLowerCase();
    
    console.log('');
    
    if (playerDecision == 'rock' && cpuDecision == 'rock'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenText, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 0)
        console.log('Draw');
    } else if (playerDecision == 'rock' && cpuDecision == 'paper'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenText, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 1)
        console.log('You Lose');
    } else if (playerDecision == 'rock' && cpuDecision == 'scissors'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenText, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 2)
        console.log('You Win!');
    } else if (playerDecision == 'paper' && cpuDecision == 'paper'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenText, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 0)
        console.log('Draw');
    } else if (playerDecision == 'paper' && cpuDecision == 'scissors'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenText, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 1)
        console.log('You Lose');
    } else if (playerDecision == 'paper' && cpuDecision == 'rock'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenText, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 2)
        console.log('You Win!');
    } else if (playerDecision == 'scissors' && cpuDecision == 'scissors'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenText, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 0)
        console.log('Draw');
    } else if (playerDecision == 'scissors' && cpuDecision == 'rock'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenText, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 1)
        console.log('You Lose');
    } else if (playerDecision == 'scissors' && cpuDecision == 'paper'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenText, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 2)
        console.log('You Win!');
    } else {
        console.log('Something went wrong. Please Try Again');
    }

    if (round < 5) {
        round++;
    } else {
        console.log('Go to Evaluation');
    }

    
}

//Customized functions//
function addClassName(element, className) {
    element.classList.add(className);
}

function removeClassName(element, className) {
    element.classList.remove(className);
}

function printToElement(element, string) {
    element.textContent = string;
}

function activatePlayerChoice() {

    if (power == "on") {
        playerChoice.forEach((card) => {
            //Adds Hover styling to buttons//
            card.addEventListener('mouseover', addButtonHover(card));
            card.addEventListener('mouseout', removeButtonHover(card));
            card.addEventListener('click', getPlayerDecision);
            
            function addButtonHover(element) {
                addClassName(element, 'card-hover');
            }
            
            function removeButtonHover(element) {
                removeClassName(element, 'card-hover');
            }
            
            function getPlayerDecision() {
                return playerDecision = card.getAttribute('id');
            }
        });

    } else  if (power == "off") {
        // Removes event listeners when power is "off"
        playerChoice.forEach((card) => {
            card.removeEventListener('mouseover', addButtonHover);
            card.removeEventListener('mouseout', removeButtonHover);
            card.removeEventListener('click', getPlayerDecision);
        });
    }
}

if (playerDecision != undefined) {
    evaluateRound();
    console.log(`Player's Weapon: | ${playerDecision.toUpperCase()} |`);
    playRound(playerDecision, cpuDecision);
}


function deactivatePlayerChoice() {
    playerChoice.forEach((button) => {
        //Removes Hover styling to buttons//
        button.removeEventListener('mouseover', () => {
            addClassName(button, 'card-hover');
        })
        button.removeEventListener('mouseout', () => {
            removeClassName(button, 'card-hover');
        })
    
    
        //Stops Gameplay on click
        button.removeEventListener('click', () => {
            evaluateRound();
            const playerDecision = button.getAttribute('id');
            console.log(`Player's Weapon: | ${playerDecision.toUpperCase()} |`);
            
            playRound(playerDecision, cpuDecision);
        });
    });
}

function removeGrayscaleFromPlayerChoice() {
    playerChoice.forEach((button) => {
        button.classList.remove('grayscale');
    });
}

function addGrayscaleToPlayerChoice() {
    playerChoice.forEach((button) => {
        button.classList.add('grayscale');
    });
}

function printRoundEvaluation(playerDecision, cpuDecision, reference) {
    let roundEvaluationText = [
        'Draw',
        `You lose. ${cpuDecision} beats ${playerDecision}`,
        `You win! ${playerDecision} beats ${cpuDecision}`,
    ];
    return printToElement(resultText, roundEvaluationText[reference]);
}

function resetRoundIcons() {
    removeClassName(roundTwo, 'current');
    removeClassName(roundThree, 'current');
    removeClassName(roundFour, 'current');
    removeClassName(roundFive, 'current');
}

/*
    //Debugging ----------------------------------------------------------
    console.log('____________Values_____________');
    console.log(power);
    console.log(round);
    //Debugging End-------------------------------------------------------


*/