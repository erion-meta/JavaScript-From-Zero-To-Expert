///////////// SCOPING /////////////////////

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `${firstName} is ${age} years old, and born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 2000 && birthYear <= 2010) {
//       const output2 = `Ohoo, ${firstName} you are a Trrim`;
//       console.log(output2);
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = "Erion";
// calcAge(2001);

//////////// HOISTING variables /////////////

// console.log(job); // undefined
// console.log(year); // Cannot access 'year' before initialization
// console.log(price); // Cannot access 'price' before initialization

// var job = "Lawyer";
// let year = 2023;
// const price = 2000;

// HOISTING functions

// console.log(addNum1(2, 3)); // 5
// console.log(addNum2(2, 3)); // Cannot access 'addNum2' before initialization
// console.log(addNum3(2, 3)); // Cannot access 'addNum3' before initialization

// function addNum1(a, b) {
//   return a + b;
// }

// const addNum2 = function (a, b) {
//   return a + b;
// };

// const addNum3 = (a, b) => a + b;

/////////////// THIS Keyword ////////////////

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this); // <ref *1> Object [global]
// };

// calcAge(2001);

// const calcAgeArrow = (birthYear) => {
//   console.log(2023 - birthYear);
//   console.log(this); // window{}
// };
// calcAgeArrow(2001);

// const erion = {
//   name: "erion",
//   lastname: "meta",
//   birthYear: 2001,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.birthYear);
//   },
// };

// erion.calcAge();

// const meta = {
//   birthYear: 2000,
// };

// meta.calcAge = erion.calcAge;
// meta.calcAge();

let lastName = "Meta";
let oldLastName = lastName;
lastName = "Keta";
console.log(lastName, oldLastName);

const amine = {
  firstName: "Amine",
  lastName: "Keta",
  age: 22,
};

const marriedAmine = amine;
marriedAmine.lastName = "Meta";
console.log(amine, ...marriedAmine);
