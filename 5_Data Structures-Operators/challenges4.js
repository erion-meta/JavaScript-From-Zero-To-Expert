document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button1 = document.querySelector("button");
const textArea = document.querySelector("textarea");

button1.addEventListener("click", function () {
  const text = textArea.value;
  const rows = text.split("\n");

  for (ro of rows) {
    const [first, second] = ro.toLowerCase().trim().split("_");
    const sec = second[0].toUpperCase() + second.slice(1);
    const fullWord = first + sec;
    console.log(fullWord);
  }
});
