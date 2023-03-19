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
      close: 23,
    },
    fri: {
      open: 13,
      close: 22,
    },
    sat: {
      open: 10,
      close: 24,
    },
    sun: {
      open: 10,
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

// Property NAMES
const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

let str = `We are open on ${properties.length} days : `;
for (const days of properties) {
  str += `${days}, `;
}
// console.log(str);

// Property VALUES
const propertiesValues = Object.values(restaurant.openingHours);
// for (const values of propertiesValues) {
//   console.log(values);
// }

// Entire OBJECT
const entries = Object.entries(restaurant.openingHours);

for (const [key, { open, close }] of entries) {
  console.log(
    `${
      key.charAt(0).toUpperCase() + key.slice(1)
    }: We are open at ${open} and close at ${close}`
  );
}
