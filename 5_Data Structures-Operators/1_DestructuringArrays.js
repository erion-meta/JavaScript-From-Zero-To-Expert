// const arr = [2, 3, 4];
// const [x, y, z] = arr; // destructuring array

//console.log(x, y, z);

const restaurant = {
  name: "Ceren Ismet Shehu",
  location: "Surrel, Tirana(Albania)",
  categories: ["Albanian", "Meat", "Organic", "Traditional"],
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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
// // let [, , third, fourth] = restaurant.categories;
// // // console.log(third, fourth);

// [main, secondary] = [secondary, main]; // destructuring.. switching variables
// console.log(main, secondary);

// Recieve 2 retutn values from a function
// const [starter, main] = restaurant.order(2, 0); // destructuring
// console.log(starter, main);

// Nested Destructuring
// const nested = [2, 3, [4, 5]];
// const [one, , three] = nested;
// console.log(one, three);
// const [one, , [one1, two2]] = nested;
// console.log(one, one1, two2);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
