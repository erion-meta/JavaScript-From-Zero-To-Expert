const messageText = document.querySelector(".message");
const checkButton = document.querySelector(".check");

checkButton.addEventListener("click", function () {
  const guesInput = Number(document.querySelector(".guess").value);
  console.log(guesInput);

  if (!guesInput) {
    messageText.textContent = "No number";
  }
});
