//

// document.querySelector(".number").textContent = 20;
// document.querySelector(".score").textContent = 13;
// document.querySelector(".highscore").textContent = 17;

const messageText = document.querySelector(".message");
const checkButton = document.querySelector(".check");

checkButton.addEventListener("click", function () {
  const guesInput = Number(document.querySelector(".guess").value);
  console.log(guesInput);

  if (!guesInput) {
    messageText.textContent = "No number";
  }
});
