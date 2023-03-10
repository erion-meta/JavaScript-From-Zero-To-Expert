const populations = [1441, 60, 2.8, 150];
console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1([populations[0]]),
  percentageOfWorld1([populations[1]]),
  percentageOfWorld1([populations[2]]),
  percentageOfWorld1([populations[3]]),
];

console.log(percentages);
