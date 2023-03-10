function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const country1 = percentageOfWorld1(1441);
const country2 = percentageOfWorld1(60);
const country3 = percentageOfWorld1(150);

console.log(`China population percentage is ${country1}`);
console.log(`Italy population percentage is ${country2}`);
console.log(`Brazil population percentage is ${country3}`);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(`India ${percentageOfWorld2(2000)}`);
