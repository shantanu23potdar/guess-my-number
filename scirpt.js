"use strict";
// Create a variable to store random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// Create a variable score with initial value of 20
let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;
// Guess number logic game

const displayMessage = (message) => {
    return document.querySelector('.message').textContent = message;
}

// Handle click event on button click
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if (!guess) {
        displayMessage("⛔️ No number!")
        // When player wins
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!")
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }// When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!")
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("💥 You lost the game!")
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    // Restore initial values of the 'score'
    score = 20;
    document.querySelector('.score').textContent = score;
    // Restore initial values of the 'secretNumber'
    secretNumber = Math.trunc(Math.random() * 20) + 1
    // Restore the initial conditions of the guess value
    document.querySelector('.guess').value = '';
    // Restore the original background color (#222) and number width (15rem)
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // Restore the initial conditions of the message
    displayMessage("Start guessing...")
    // Restore the initial conditions of the number
    document.querySelector('.number').textContent = "?";
})