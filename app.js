const vsBox = document.querySelector('.vs');
const resultBox = document.querySelector('.results');
const screenTextBox = document.querySelector('.screen-text-box');
const roundIndicatorBox = document.querySelector('.round-indicator');
const replayBox = document.querySelector('.replay-box');

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
let playerChoiceArray = [...playerChoice];

const volumeOn = document.querySelector('.volume-on');
const volumeOff = document.querySelector('.volume-off');
const soundBar = document.querySelector('.sound-bar');
const powerIcon = document.querySelector('.power-icon');
const powerButton = document.querySelector('.power');
const replayConfirmButton = document.getElementById('confirm');
const replayDeclineButton = document.getElementById('decline');

const weapons = ['Rock', 'Paper', 'Scissors'];

//Game's Default State ------------------------------------
let power = "off";
let round = 1;
let cpuScore = 0;
let playerScore = 0;
let cpuDecision;
let playerDecision;
printToElement(screenText, '< Turn on Console To Play >');
powerButton.addEventListener('click', activateGame);
replayConfirmButton.addEventListener('click', resetGame);
replayDeclineButton.addEventListener('click', powerOff);
//---------------------------------------------------------


function activateGame() {
    if (power == "off") {
        powerOn();

    } else if (power == "on") {
        powerOff();
    }
}

function powerOn() {
    console.log('');
    power = "on";
    console.log('RPS Power: On')
    console.log('');

    powerIcon.style.backgroundColor = "red";
    
    console.log('Welcome to Rock Paper Scissors!');
    printToElement(screenText, 'Welcome to Rock Paper Scissors');
    console.log('');

    activatePlayerChoice();
    removeGrayscaleFromPlayerChoice();
    console.log('Activate Player Controls');
    evaluateRound();
}

function powerOff() {
    round = 1;
    console.log('');
    resetRoundIcons();
    addClassName(vsBox, 'inactive');
    addClassName(resultBox, 'inactive');
    addClassName(roundIndicatorBox, 'inactive');
    addClassName(replayBox, 'inactive');
    removeClassName(screenTextBox,'inactive');
    addGrayscaleToPlayerChoice();
    power = "off";
    console.log('RPS Power: Off');
    powerIcon.style.backgroundColor = "white";
    printToElement(screenText, '< Turn on Console To Play >');
}


function resetGame() {
    round = 1;
    resetRoundIcons();
    console.log('');
    console.log('------------- Resetting Game -------------');
    console.log('');
    
    evaluateRound();
}

function evaluateRound() {
    if (round <= 5) {
        displayRound();
    } else if (round >= 6){
        evaluateGame();
    }
}

function displayRound() {
    addClassName(vsBox, 'inactive');
    addClassName(resultBox, 'inactive');
    addClassName(replayBox, 'inactive');
    removeClassName(screenTextBox, 'inactive');
    removeClassName(roundIndicatorBox, 'inactive');
    console.log('');
    
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

    console.log(`----------- Round ${round} -----------`);
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
        addClassName(screenTextBox, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 0)
        console.log('Draw');
        setDraw();
        shadeRoundIcon();
    } else if (playerDecision == 'rock' && cpuDecision == 'paper'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenTextBox, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 1)
        console.log('You Lose');
        setCpuWin();
        shadeRoundIcon();
    } else if (playerDecision == 'rock' && cpuDecision == 'scissors'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenTextBox, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 2)
        console.log('You Win!');
        setPlayerWin();
        shadeRoundIcon();
    } else if (playerDecision == 'paper' && cpuDecision == 'paper'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenTextBox, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 0)
        console.log('Draw');
        setDraw();
        shadeRoundIcon();
    } else if (playerDecision == 'paper' && cpuDecision == 'scissors'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenTextBox, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 1)
        console.log('You Lose');
        setCpuWin();
        shadeRoundIcon();
    } else if (playerDecision == 'paper' && cpuDecision == 'rock'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenTextBox, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 2)
        console.log('You Win!');
        setPlayerWin();
        shadeRoundIcon();
    } else if (playerDecision == 'scissors' && cpuDecision == 'scissors'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenTextBox, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 0)
        console.log('Draw');
        setDraw();
        shadeRoundIcon();
    } else if (playerDecision == 'scissors' && cpuDecision == 'rock'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenTextBox, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 1)
        console.log('You Lose');
        setCpuWin();
        shadeRoundIcon();
    } else if (playerDecision == 'scissors' && cpuDecision == 'paper'){
        removeClassName(resultBox, 'inactive');
        removeClassName(vsBox, 'inactive');
        addClassName(screenTextBox, 'inactive');
        printRoundEvaluation(playerDecision, cpuDecision, 2)
        console.log('You Win!');
        setPlayerWin();
        shadeRoundIcon();
    } else {
        console.log('Something went wrong. Please Refresh Page');
    }

    console.log('-------------------------------');
    console.log(`Player Score: ${playerScore} || CPU Score: ${cpuScore}`);
    console.log('-------------------------------');

    if (round <= 5) {
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
    playerChoiceArray.forEach((button) => {
        if (power === "on") {
        //Adds Hover styling to buttons//
            button.addEventListener('mouseover', () => {
                addClassName(button, 'card-hover');
            });
            button.addEventListener('mouseout', () => {
                removeClassName(button, 'card-hover');
            });
            button.addEventListener('click', () => {
                playerDecision = button.getAttribute('id');

                if (round <= 5 && playerDecision != undefined) {
                    console.log(`Player's Weapon: | ${playerDecision.toUpperCase()} |`);
                    playRound(playerDecision, cpuDecision);
                } else {
                }
                evaluateRound();
            });
        };
    });
}   

function setPlayerWin() {
    ++playerScore;
    shadeRoundIcon('win');
}

function setCpuWin() {
    ++cpuScore;
    shadeRoundIcon('lose');
}

function setDraw() {
    shadeRoundIcon(true);
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
    removeClassName(roundOne, 'win');
    removeClassName(roundOne, 'lose');
    removeClassName(roundTwo, 'current');
    removeClassName(roundTwo, 'win');
    removeClassName(roundTwo, 'lose');
    removeClassName(roundThree, 'current');
    removeClassName(roundThree, 'lose');
    removeClassName(roundThree, 'win');
    removeClassName(roundFour, 'current');
    removeClassName(roundFour, 'win');
    removeClassName(roundFour, 'lose');
    removeClassName(roundFive, 'current');
    removeClassName(roundFive, 'win');
    removeClassName(roundFive, 'lose');
}

function evaluateGame() {
    addClassName(vsBox, 'inactive');
    addClassName(screenTextBox, 'inactive');
    removeClassName(replayBox, 'inactive');
    
    console.log('');
    console.log('⅋⅋⅋⅋⅋⅋ Final Score ⅋⅋⅋⅋⅋⅋⅋');
    console.log('Of 5 Rounds, the final score is:');
    console.log(`Player Score: ${playerScore} || CPU Score: ${cpuScore}`);
    console.log('');

    if (playerScore > cpuScore) {
        printToElement(resultImage, '🏆');
        printToElement(resultText, 'Congratulations! You won the game!');
        console.log('You won the game!');
    } else if (playerScore == cpuScore) {
        printToElement(resultImage, '🤝');
        printToElement(resultText, 'The game concluded in a Draw.');
        console.log('The game was a Draw.');
    } else if (playerScore < cpuScore) {
        printToElement(resultImage, '🏳️');
        printToElement(resultText, 'You lost the game.');
        console.log('You lost the game.');
    } else {
        console.log('Due to unforeseen circumstances, we cannot evaluate the outcome');
    }
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
}

/*
    //Debugging ----------------------------------------------------------
    console.log('____________Values_____________');
    console.log(power);
    console.log(round);
    //Debugging End-------------------------------------------------------


*/

function shadeRoundIcon (roundResult) {
    if (round == 1) {
        if (roundResult == 'win') {
            addClassName(roundOne, 'win');
        } else if (roundResult == 'lose') {
            addClassName(roundOne, 'lose');
        } else {

        };
    } else if (round == 2) {
        if (roundResult == 'win') {
            addClassName(roundTwo, 'win');
        } else if (roundResult == 'lose') {
            addClassName(roundTwo, 'lose');
        } else {
            
        };
    } else if (round == 3) {
        if (roundResult == 'win') {
            addClassName(roundThree, 'win');
        } else if (roundResult == 'lose') {
            addClassName(roundThree, 'lose');
        } else {
            
        };
    } else if (round == 4) {
        if (roundResult == 'win') {
            addClassName(roundFour, 'win');
        } else if (roundResult == 'lose') {
            addClassName(roundFour, 'lose');
        } else {
            
        };
    } else if (round == 5) {
        if (roundResult == 'win') {
            addClassName(roundFive, 'win');
        } else if (roundResult == 'lose') {
            addClassName(roundFive, 'lose');
        } else {
            
        };
    }
}