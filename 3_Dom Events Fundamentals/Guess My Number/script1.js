const againBtn = document.querySelector(".again"); // againBtn to restart the game
const checkButton = document.querySelector(".check"); // button to check number
const messageText = document.querySelector(".message"); // mesage text variable
const body = document.querySelector("body"); // body selection
const numberFinder = document.querySelector(".number"); //const that hold div where secret number appear
const numberInput = document.querySelector(".guess"); // Input that takes the number
const gameOverStyle = "background-color: #DD5353;";
const correctNumberStyle = "background-color: #60b347;";
let randomNumber = Math.floor(Math.random() * 20) + 1; // random number

// score variables
let score = document.querySelector(".score");
let scoreValue = Number(score.innerHTML);
let initialScore = 20;

// highscore
let highscore = document.querySelector(".highscore");
let high = 0;

const displayMessage = function (message) {
  messageText.textContent = message;
};

againBtn.addEventListener("click", function () {
  initialScore = 20;
  body.style = "background-color: #222;";
  numberFinder.classList.remove("numberCorrect");
  randomNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage("🎯 Start guessing...");
  numberFinder.textContent = "?";
  numberInput.value = "";
  score.innerHTML = 20;
  scoreValue = initialScore;
});

checkButton.addEventListener("click", function () {
  const guesInput = Number(numberInput.value); // Number to guess by the user

  // When there is no number
  if (!guesInput) {
    displayMessage("🚫 No number");

    // When number is correct and player wins
  } else if (guesInput === randomNumber) {
    displayMessage("🎉 Correct Number");
    numberFinder.textContent = guesInput;
    numberFinder.classList.add("numberCorrect");
    body.style = correctNumberStyle;

    // High score calculate
    if (scoreValue > high) {
      high = scoreValue;
      highscore.textContent = high;
    }
  } else if (guesInput !== randomNumber) {
    if (scoreValue > 1) {
      displayMessage(guesInput > randomNumber ? "📈 To high" : "📉 To low");
      scoreValue--;
      score.innerHTML = scoreValue.toString();
    } else {
      displayMessage("⛔ Game Over!");
      score.innerHTML = 0;
      body.style = gameOverStyle;
    }
  }
});
