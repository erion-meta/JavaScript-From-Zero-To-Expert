const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(z);

// 100 dice rolls
const diceRolls = Array.from(
  { length: 100 },
  (cur, i) => (i = Math.trunc(Math.random() * 6) + 1)
);
console.log(diceRolls);
