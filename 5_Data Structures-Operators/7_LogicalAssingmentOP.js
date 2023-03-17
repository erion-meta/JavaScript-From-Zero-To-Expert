const restaurant = {
  name: "Ceren Ismet Shehu",
  location: "Surrel, Tirana(Albania)",
  categories: ["Albanian", "Meat", "Traditional", "Organic"],
  starterMenu: [
    "Fergese",
    "Trahana",
    "Salce Kosi",
    "Pispili",
    "Sallate Jeshile",
  ],
  mainMenu: [
    "Mish Qingji",
    "Berxolle Vici",
    "Mish i Thate",
    "Jufka",
    "Tave Kosi ",
  ],
  openingHours: {
    thu: {
      open: 11,
      close: 24,
    },
    fri: {
      open: 13,
      close: 24,
    },
    sat: {
      open: 11,
      close: 24,
    },
    sun: {
      open: 11,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at time ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const rest1 = {
  name: "Mrrizi",
  numGuest: 0,
};
const rest2 = {
  name: "Artigano",
  owner: "Qazim Rroshi",
};

// ~~ OR ~~ assingment operator

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// same thing as up 👇

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// ~~ NULLISH ~~ assingment operator

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// console.log(rest1);
// console.log(rest2);

// ~~ AND ~~ assingment operator

// rest1.owner = rest1.owner && "<Anonymous>";
// rest2.owner = rest2.owner && "<Anonymous>";
rest1.owner &&= "<Anonymous>";
rest2.owner &&= "<Anonymous>";

console.log(rest1);
console.log(rest2);
