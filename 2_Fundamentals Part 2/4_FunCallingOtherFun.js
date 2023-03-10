function describeCountry(country, population) {
  return `${country} has ${population} milion people which is about ${percentageOfWorld3(
    population
  )}`;
}
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const china = describeCountry("China", 1441);
const italy = describeCountry("Italy", 60);
const albania = describeCountry("Albania", 2.8);

console.log(`${china} \n${italy} \n${albania}`);
