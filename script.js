'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const currScore1 = document.querySelector('#current--0');
const currScore2 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
score0.textContent = '0';
score1.textContent = '0';
dice.classList.add('hidden');
var player = 1;
let num = 0;
let currentScore = 0;
let player1Score = 0;
let player2Score = 0;
const generateRandom = function () {
    num = Math.trunc(Math.random() * 6) + 1;
}
const switchPlayer = function () {
    if (player == 1) {
        player1Score += currentScore;
        currScore1.textContent = 0;
        if (player1Score >= 100) {
            player1.classList.add('player--winner');
        }
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        player = 2;
    }
    else {
        console.log('player 2');
        player2Score += currentScore;
        currScore2.textContent = 0;
        if (player2Score >= 100) {
            player2.classList.add('player--winner');
        }
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
        player = 1;
    }
    score0.textContent = player1Score;
    score1.textContent = player2Score;
    console.log(player);
    currentScore = 0;
}
btnRoll.addEventListener('click', function () {
    console.log(player);
    generateRandom();
    dice.classList.remove('hidden');
    dice.src = `dice-${num}.png`;
    if (num != 1) {
        currentScore += num;
        if (player == 1) {
            currScore1.textContent = currentScore;
        }
        else {
            currScore2.textContent = currentScore;
        }
    }
    else {
        currentScore = 0;
        switchPlayer();
        currScore1.textContent = '0';
        currScore1.textContent = '0';
    }
});
const resetGame = function () {
    player1Score = 0;
    player2Score = 0;
    player = 2;
    if (player1.classList.contains('player--winner')) {
        player1.classList.remove('player--winner');
    }
    if (player2.classList.contains('player--winner')) {
        player2.classList.remove('player--winner');
    }
    switchPlayer();
}
btnHold.addEventListener('click', function () {
    if (currentScore != 0) {
        switchPlayer();
    }
});
btnNew.addEventListener('click', resetGame);