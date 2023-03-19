// Optional Chaining ?.

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
      close: 23,
    },
    sat: {
      open: 11,
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

// console.log(restaurant.openingHours.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open || "closed";
//   console.log(`On day ${day} we are open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRissoto?.(0, 1) ?? "Method does not exist");

// Arrays
const user = [
  { name: "Erion", lastName: "Meta" },
  { name: "Qazo", lastName: "Luiz" },
];
console.log(user[3]?.name ?? "User does not exist");
