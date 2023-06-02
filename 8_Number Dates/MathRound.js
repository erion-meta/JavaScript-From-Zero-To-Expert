console.log(Math.sqrt(49));
console.log(49 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 3, 4, 6, 7, 2, 3, 7, 4, 8, 10));
console.log(Math.max(5, 3, 4, 6, 7, "22", 3, 7, 4, 8, 10));

console.log(Math.min(5, 3, 4, 6, 7, 2, 3, 7, 4, 8, 10));

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor("23.9"));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
