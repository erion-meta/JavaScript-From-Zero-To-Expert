// Selecting elements

// Player 0
const player0El = document.querySelector(".player--0");
const namePlayer0 = document.getElementById("name--0");
const scorePlayer0 = document.getElementById("score--0");
const currentScore0 = document.getElementById("current--0");

// Player 1
const player1El = document.querySelector(".player--1");
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

const scoresArr = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

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
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch player
    switchPlayer();
  }
});

holdScoreBtn.addEventListener("click", function () {
  // Add current score to active player score
  scoresArr[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scoresArr[activePlayer];

  // Check if player score is 100
  if (scoresArr[activePlayer] >= 20) {
    // Finish the game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    // Switch to the next player
    switchPlayer();
  }
});

// Function to switch player
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}
