const myCountry = {
  country: "Albania",
  capital: "Tirana",
  language: "Shqip",
  population: 2.8,
  neighbours: ["Montenegro", "Kosova", "North Macedonia", "Greece"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland;
console.log(myCountry);
