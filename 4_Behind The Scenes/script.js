// SCOPING

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

// HOISTING variables

// console.log(job); // undefined
// console.log(year); // Cannot access 'year' before initialization
// console.log(price); // Cannot access 'price' before initialization

// var job = "Lawyer";
// let year = 2023;
// const price = 2000;

// HOISTINg functions

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
