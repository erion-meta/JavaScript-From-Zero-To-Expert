const milan = {
  name: "AC Milan",
  stadium: "San Siro",
  matches: [],
  playGames(city, oponent, date, month) {
    console.log(
      `${this.name} has a match with ${oponent} in ${city} in ${date} ${month}`
    );
    this.matches.push({
      oponent: oponent,
      city: city,
      date: date,
      month: month,
    });
  },
};

// milan.playGames("Napoli", "Napoli", 11, "April");
// milan.playGames("Torino", "Juventus", 03, "May");
// console.log(milan.matches);

const genoa = {
  name: "Genoa",
  stadium: "Luigi Ferraris",
  matches: [],
};

const matches = milan.playGames;

// Call Method
// matches.call(genoa, "Milano", "Inter", 11, "March");
// console.log(genoa.matches);

// Apply Method
// const matchData = ["Rome", "Lacio", 11, "April"];
// matches.apply(milan, matchData); // only arrays

// Call method
// matches.call(milan, ...matchData);
// console.log(milan);

// BIND method

const winGame = document.getElementById("buy");

const milanMatch = matches.bind(milan);
const genoaMatch = matches.bind(genoa);

milanMatch("Milano", "Inter", 07, "June");

const milanMatchMilano = matches.bind(milan, "Milano", "Inter");
milanMatchMilano(23, "May");

// With event listener

milan.points = 65;
milan.win = function () {
  this.points += 3;
  console.log(this.points);
};

winGame.addEventListener("click", milan.win.bind(milan));
