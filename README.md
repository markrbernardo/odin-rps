# Odin Project: Rock, Paper, Scissors
* Preview of this Project is found here: https://htmlpreview.github.io/?https://github.com/markrbernardo/odin-rps/blob/main/index.html
* This Project uses Audio from http://www.Zapsplat.com
- Objective: make a simple implementation of "Rock, Paper, Scissors" run on the console.
- Future Objective: Add a GUI with buttons and text

- With this project I hope to:
    - Practice more logic through the use of javascript
    - Practice a bit of design when GUI is added
    - Maybe even theme the design as a card game?

## Log
### 03.24.2023 Project Start Date
### 03.27.2023
- Finished console-based rps game on javascript.js
- Beginning to create the GUI of game

### 03.28.2023
- Continued to make wireframe of GUI
    - Worked out how to simplify classes a bit more. Still uncertain of best practices.
    - Really focusing on responsiveness
    - Used a CSS media query for the first time

### 04.03.2023
- Gutted the old html and started fresh to make the interface better and more responsive.
- Tried to keep tabs on classes to make sense.

### 04.05.2023
- Began to tinker with javascript to make the html and css more interactive
- Created an OnOff sequence utilizing setTimeout() to delay code
- Need to getPlayerChoice via button clicks

### 04.07.2023
- Fixed button issue where the id value of the .player-card button was not registering 
- Added some fun sounds to OnOff sequence
- Previewed project on mobile device
    - The overall look is not great, need to adjust responsiveness
- Next step is to figure out how to display and evaluate the 5-round system
- The game generally does what I want to do, but I need to fix the roundIndicatorSequence from running the 6th time.
- I have a lot of repeating code that I can clean up.

### 04.08.2023
- I pretty much have a very ROUGH v1.0 of RPS.
    - I have a working javascript code for RPS that
        - Has an on/off switch
        - Plays a game of RPS using a GUI
        - Evaluates the overall player/cpu score (not explicitly)
        - Has a 5-round system
        - Has a replay function
        - Sequence of events work
- I want to add win/lose tokens on the round icons
- App breaks when you turn on/off too quickly

### 04.10.2023
- Began to redesign the GUI of RPS
    - I am realizing that responsiveness is kind of tricky to get right.

### 04.16.2023
- Continued to restyle app. It's slowly looking how I want it to

#RPS Redo
## 04.17.2023 Notes
- Complete redo. Seem to have better result and cleaner code.
- Referenced other code. Responsiveness worked best with the main area being responsive and not the header or footer.

## 04.20.2023 Notes
- Will try to fix reset of rounds and grayscale/remove button of input.
    - Reset works only once -- Then round counter doubles or triples roundEvaluation on single click.
- Need to fix eventListener issues. 
    - Need to somehow make the function work for both add/removeEventListener. (Simply stating the same anonymous function does not mean that the functions are the same.)
    - Therefore, I think I need to somehow simplify the expressions in order to make this work.

## 04.21.2023
- Still unable to fix the eventListener issue. -Reverted back to a working console code.
- Made some loops to make a FULL stop after 5-rounds on the console.
- Finished gameEvaluation -Would like to eventually put a score-display-box
- I don't know why the screeenText showing the rounds, don't work - Fixed. mistook screenText for screenTextBox
- Game works when player completes first run-through and subsequent runs of gameplay.
- Game breaks after application is turned off using the power button or declines replay, then player turns application back on. Round system is off due to eventListeners not being removed on "power off".
- Player W/L Function in round-indicator - Fix Functionality
- Need to implement setTimeout() in order for game to be comprehended by the player.
- Set up vsbox text - finished
- Had to add a line of code in default state in app.js to allow for a line break in the textContent of screenText
- I may declare this as a soft v1.0?