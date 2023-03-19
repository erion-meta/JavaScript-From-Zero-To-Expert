const question = new Map([
  ["question", "Which is best programming language in the world?"],
  [1, "Java"],
  [2, "JavaScript"],
  [3, "Python"],
  ["correct", 2],
  [true, "Correct"],
  [false, "Try Again"],
]);

// Convert oject to Map
// const openHours = new Map(Object.entries(openingHours));

// Quiz App
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answStr = "Your answer: ";
const answer = 2;
console.log(answStr, answer);

console.log(question.get(question.get("correct") === answer));
