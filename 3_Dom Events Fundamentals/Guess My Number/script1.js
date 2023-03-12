const messageText = document.querySelector(".message"); // mesage text variable
const checkButton = document.querySelector(".check"); // button to check number
let randomNumber = Math.floor(Math.random() * 21); // random number

// score variables
let score = document.querySelector(".score");
let scoreValue = Number(score.innerHTML);

// highscore
let highscore = document.querySelector(".highscore");

console.log(scoreValue);
console.log(randomNumber);

checkButton.addEventListener("click", function () {
  const guesInput = Number(document.querySelector(".guess").value); // Number to guess by the user

  console.log(guesInput);

  // When there is no number
  if (!guesInput) {
    messageText.textContent = "🚫 No number";

    // When number is correct and player wins
  } else if (guesInput === randomNumber) {
    messageText.textContent = "🎉 Correct Number";
    highscore.innerHTML = scoreValue.toString();
    document.querySelector(".number").textContent = guesInput;
    document.querySelector(".number").classList.add("numberCorrect");

    document.querySelector("body").style = "background-color: #60b347;";

    // When number is higher
  } else if (guesInput > randomNumber) {
    if (scoreValue > 1) {
      messageText.textContent = "📈 To high";
      scoreValue--;
      score.innerHTML = scoreValue.toString();
      highscore.innerHTML = scoreValue.toString();
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
      highscore.innerHTML = scoreValue.toString();
    } else {
      messageText.textContent = "⛔ Game Over!";
      score.innerHTML = 0;
      document.querySelector("body").style = "background-color: #DD5353;";
    }
  }
});
