// Selecting elements

// Player 0
const namePlayer0 = document.getElementById("name--0");
const scorePlayer0 = document.getElementById("score--0");
const currentScore0 = document.getElementById("current--0");

// Player 1
const namePlayer1 = document.getElementById("name--1");
const scorePlayer1 = document.getElementById("score--1");
const currentScore1 = document.getElementById("current--1");

// Field elemnets
const diceEl = document.querySelector(".dice");

// Starting conditions
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
diceEl.classList.add("hidden");
