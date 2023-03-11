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

  if (!guesInput) {
    messageText.textContent = "No number";
  } else if (guesInput === randomNumber) {
    messageText.textContent = "Correct Number";
    highscore.innerHTML = scoreValue.toString();
  } else if (guesInput > randomNumber) {
    messageText.textContent = "To high";
    scoreValue--;
    score.innerHTML = scoreValue.toString();
    highscore.innerHTML = scoreValue.toString();
  } else {
    messageText.textContent = "To low";
    scoreValue--;
    score.innerHTML = scoreValue.toString();
    highscore.innerHTML = scoreValue.toString();
  }
});
