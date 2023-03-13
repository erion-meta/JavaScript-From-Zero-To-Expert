// Selecting elements

// Player 0
const namePlayer0 = document.getElementById("name--0");
const scorePlayer0 = document.getElementById("score--0");
const currentScore0 = document.getElementById("current--0");

// Player 1
const namePlayer1 = document.getElementById("name--1");
const scorePlayer1 = document.getElementById("score--1");
const currentScore1 = document.getElementById("current--1");

// Game buttons elements
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdScoreBtn = document.querySelector(".btn--hold");

// Field elemnets
const diceEl = document.querySelector(".dice");

// Starting conditions
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
diceEl.classList.add("hidden");

let currScore = 0;

// Rolling Dice
rollDiceBtn.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove("hidden");

  diceEl.src = `diceIMG/dice-${dice}.png`;

  // 3. Check for rolled dice; if true, switch to the next player
  if (dice !== 1) {
    // Add dice to current score
    currScore += dice;
    currentScore0.textContent = currScore;
  } else {
    // Switch player
  }
});
