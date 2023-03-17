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
};

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Default variables
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 33,
// };
// ({ a, b } = obj);
// console.log(a, b);

// Nested obj
// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

restaurant.orderDelivery({
  time: "22:30",
  address: "Rruga e Kavajes",
  mainIndex: 2,
  starterIndex: 1,
});
