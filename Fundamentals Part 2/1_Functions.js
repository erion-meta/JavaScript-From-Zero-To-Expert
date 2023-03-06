function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("Albania", 2.8, "Tirana");
const country2 = describeCountry("Italy", 60, "Rome");
const country3 = describeCountry("Kosova", 1.8, "Prishtina");

console.log(country1);
console.log(country2);
console.log(country3);
