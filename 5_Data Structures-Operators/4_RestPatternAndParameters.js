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

// 1) Destructuring

// SPREAD, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [mishQ, , mishTH, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(mishQ, mishTH, otherFood);

// Objects
// const { sat, sun, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 4);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6);
