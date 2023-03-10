const myCountry = {
  country: "Albania",
  capital: "Tirana",
  language: "Shqip",
  population: 2.8,
  neighbours: ["Montenegro", "Kosova", "North Macedonia", "Greece"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
