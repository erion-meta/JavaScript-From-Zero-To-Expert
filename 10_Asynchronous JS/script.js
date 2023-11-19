// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));

// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log("Test end");

//////////

// const lotterryPromise = new Promise(function (resolve, reject) {
//   console.log("Lotter draw is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You win");
//     } else {
//       reject(new Error("You lost your money!!"));
//     }
//   }, 2000);
// });

// lotterryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

///// Async/ Await

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await res.json();
  console.log(data);
};

whereAmI("albania");
console.log("First");
