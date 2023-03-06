let dolphinPoint1 = 85;
let dolphinPoint2 = 54;
let dolphinPoint3 = 41;
let koalaPoints1 = 23;
let koalaPoints2 = 34;
let koalaPoints3 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinAvr = calcAverage(dolphinPoint1, dolphinPoint2, dolphinPoint3);
const coalaAvr = calcAverage(koalaPoints1, koalaPoints2, koalaPoints3);

console.log(`Dolphin average points = ${dolphinAvr}`);
console.log(`Koalas average points = ${coalaAvr}`);

function checkWinner(dolphinAvr, coalaAvr) {
  if (dolphinAvr >= 2 * coalaAvr) {
    console.log(`Dolphins win (${dolphinAvr} vs ${coalaAvr})`);
  } else if (coalaAvr >= 2 * dolphinAvr) {
    console.log(`Koalas win (${coalaAvr} vs ${dolphinAvr})`);
  } else {
    console.log("Undefined winner");
  }
}

checkWinner(dolphinAvr, coalaAvr);
