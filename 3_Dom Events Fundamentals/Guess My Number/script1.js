const messageText = document.querySelector(".message");
const checkButton = document.querySelector(".check");
let randomNumber = Math.floor(Math.random() * 21);
// score variables
let score = document.querySelector(".score");
let scoreValue = Number(score.innerHTML);

console.log(scoreValue);
console.log(randomNumber);

checkButton.addEventListener("click", function () {
  const guesInput = Number(document.querySelector(".guess").value);

  console.log(guesInput);

  if (!guesInput) {
    messageText.textContent = "No number";
  } else if (guesInput === randomNumber) {
    messageText.textContent = "Correct Number";
  } else if (guesInput > randomNumber) {
    messageText.textContent = "To high";
    scoreValue--;
    score.innerHTML = scoreValue.toString();
  } else {
    messageText.textContent = "To low";
    scoreValue--;
    score.innerHTML = scoreValue.toString();
  }
});
