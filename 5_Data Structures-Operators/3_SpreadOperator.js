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

// Spread operator in array
// const arr = [4, 5, 6];
// const badArr = [2, 3, arr[0], arr[1], arr[2]];
// console.log(badArr);
// const newArr = [2, 3, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, "Fli"];
// console.log(newMenu);

// Copy 2 array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects

// const str = "Erion";
// const letter = [...str];
// console.log(letter);

const ingredients = ["karkaleca", "kungull", "pana"];
restaurant.orderPasta(...ingredients);
