const againBtn = document.querySelector(".again"); // againBtn to restart the game
const messageText = document.querySelector(".message"); // mesage text variable
const checkButton = document.querySelector(".check"); // button to check number
let randomNumber = Math.floor(Math.random() * 21); // random number
let highscoreArr = []; // Array to store scores and find highscore;

// score variables
let score = document.querySelector(".score");
let scoreValue = Number(score.innerHTML);
let initialScore = 20;

// highscore
let highscore = document.querySelector(".highscore");
let high = 0;

console.log(scoreValue);
console.log(randomNumber);

againBtn.addEventListener("click", function () {
  initialScore = 20;
  document.querySelector("body").style = "background-color: #222;";
  document.querySelector(".number").classList.remove("numberCorrect");
  randomNumber = Math.floor(Math.random() * 21);
  messageText.textContent = "🎯 Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  score.innerHTML = 20;
  scoreValue = initialScore;
  console.log(randomNumber);
});

checkButton.addEventListener("click", function () {
  const guesInput = Number(document.querySelector(".guess").value); // Number to guess by the user

  console.log(guesInput);

  // When there is no number
  if (!guesInput) {
    messageText.textContent = "🚫 No number";

    // When number is correct and player wins
  } else if (guesInput === randomNumber) {
    messageText.textContent = "🎉 Correct Number";
    document.querySelector(".number").textContent = guesInput;
    document.querySelector(".number").classList.add("numberCorrect");
    document.querySelector("body").style = "background-color: #60b347;";

    // High score calculate
    if (scoreValue > high) {
      high = scoreValue;
      highscore.textContent = high;
    }

    // When number is higher
  } else if (guesInput > randomNumber) {
    if (scoreValue > 1) {
      messageText.textContent = "📈 To high";
      scoreValue--;
      score.innerHTML = scoreValue.toString();
    } else {
      messageText.textContent = "⛔ Game Over!";
      score.innerHTML = 0;
      document.querySelector("body").style = "background-color: #DD5353;";
    }

    // When number is lower
  } else {
    if (scoreValue > 1) {
      messageText.textContent = "📉 To low";
      scoreValue--;
      score.innerHTML = scoreValue.toString();
    } else {
      messageText.textContent = "⛔ Game Over!";
      score.innerHTML = 0;
      document.querySelector("body").style = "background-color: #DD5353;";
    }
  }
});
