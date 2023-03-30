const milan = {
  name: "AC Milan",
  stadium: "San Siro",
  matches: [],
  playGames(city, oponent) {
    console.log(`${this.name} has a match with ${oponent} in ${city}`);
    this.matches.push({ oponent: oponent, city: city });
  },
};

milan.playGames("Napoli", "Napoli");
milan.playGames("Torino", "Juventus");
console.log(milan.matches);

const genoa = {
  name: "Genoa",
  stadium: "Luigi Ferraris",
  matches: [],
};

const matches = milan.playGames;

matches.call(genoa, "Milano", "Inter");
console.log(genoa.matches);

const matchData = ["Rome", "Lacio"];
matches.apply(milan, matchData); // only arrays

matches.call(milan, ...matchData);
