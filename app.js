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
    } else {
        powerOff();
    }
}

function powerOn() {
    power = "on";
    console.log('RPS Power: On')
    powerIcon.style.backgroundColor = "red";
    screenText.textContent = "Welcome to Rock Paper Scissors";
    removeClassFromPlayerChoice('grayscale');
    evaluateRound();
}

function powerOff() {
    round = 1;
    power = "off";
    console.log('RPS Power: Off');
    powerIcon.style.backgroundColor = "white";
    screenText.textContent = "< Turn on Console To Play >";
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
    } else if (round == 6) {
        console.log('Something went wrong');
    }
}


function getCPUChoice() {
    let cpuChoice = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(`CPU's Weapon: | ${cpuChoice.toUpperCase()} |`);
    return cpuChoice;
}

playerChoice.forEach((button) => {
    button.addEventListener('click', () => {
        evaluateRound();
        console.log(`----- Round ${round} -----`);
        
        const playerDecision = button.getAttribute('id');
        console.log(`Player's Weapon: | ${playerDecision.toUpperCase()} |`)
        
        playRound(playerDecision, cpuDecision);
    });
})





function playRound(playerDecision, cpuDecision) {
    cpuDecision = getCPUChoice().toLowerCase();
    playerDecision = playerDecision.toLowerCase();
    
    console.log('');
    
    if (playerDecision == 'rock' && cpuDecision == 'rock'){
        printRoundEvaluation(playerDecision, cpuDecision, 0)
        console.log('Draw');
    } else if (playerDecision == 'rock' && cpuDecision == 'paper'){
        printRoundEvaluation(playerDecision, cpuDecision, 1)
        console.log('You Lose');
    } else if (playerDecision == 'rock' && cpuDecision == 'scissors'){
        printRoundEvaluation(playerDecision, cpuDecision, 2)
        console.log('You Win!');
    } else if (playerDecision == 'paper' && cpuDecision == 'paper'){
        printRoundEvaluation(playerDecision, cpuDecision, 0)
        console.log('Draw');
    } else if (playerDecision == 'paper' && cpuDecision == 'scissors'){
        printRoundEvaluation(playerDecision, cpuDecision, 1)
        console.log('You Lose');
    } else if (playerDecision == 'paper' && cpuDecision == 'rock'){
        printRoundEvaluation(playerDecision, cpuDecision, 2)
        console.log('You Win!');
    } else if (playerDecision == 'scissors' && cpuDecision == 'scissors'){
        printRoundEvaluation(playerDecision, cpuDecision, 0)
        console.log('Draw');
    } else if (playerDecision == 'scissors' && cpuDecision == 'rock'){
        printRoundEvaluation(playerDecision, cpuDecision, 1)
        console.log('You Lose');
    } else if (playerDecision == 'scissors' && cpuDecision == 'paper'){
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

function removeClassFromPlayerChoice(className) {
    playerChoice.forEach((button) => {
        button.classList.remove(className);
    });
}

function printRoundEvaluation(playerDecision, cpuDecision, reference) {
    let roundEvaluationText = [
        'Draw',
        `You lose. ${cpuDecision} beats ${playerDecision}`,
        `You win! ${playerDecision} beats ${cpuDecision}`,
    ];
    return printToElement(screenText, roundEvaluationText[reference]);
}

function evaluateRound() {
    if (round <= 5) {
        displayRound();
    } else if (round = 6){
        console.log('Evaluate');
    }
}