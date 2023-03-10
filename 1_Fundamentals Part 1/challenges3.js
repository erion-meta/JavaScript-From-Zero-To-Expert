let dolphinPoint1 = 97;
let dolphinPoint2 = 112;
let dolphinPoint3 = 101;
let koalaPoints1 = 109;
let koalaPoints2 = 99;
let koalaPoints3 = 106;

let dolphinAvrgPoints = (dolphinPoint1 + dolphinPoint2 + dolphinPoint3) / 3;
let koalaAvrgPoints = (koalaPoints1 + koalaPoints2 + koalaPoints3) / 3;

if (dolphinAvrgPoints > koalaAvrgPoints && dolphinAvrgPoints > 100) {
  console.log(`Winner is Dolphin team with ${dolphinAvrgPoints} points`);
} else if (koalaAvrgPoints > dolphinAvrgPoints && koalaAvrgPoints > 100) {
  console.log(`Winner is Koala team with ${koalaAvrgPoints} points`);
} else if (
  koalaAvrgPoints === dolphinAvrgPoints &&
  (dolphinAvrgPoints || koalaAvrgPoints) >= 100
) {
  console.log("Both teams are in draw!");
} else {
  console.log("Game is not completed!");
}
