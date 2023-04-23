let arr = ["a", "b", "c", "d", "e", "f", "g"];

// SLICE
console.log("Slice");
console.log(arr.slice(2));
console.log(arr.slice(2, 5));
console.log(arr.slice(-1)); // last element

// SPLICE
console.log("Splice");
console.log(arr.splice(2));
console.log(arr);

// REVERSE
console.log("Reverse");
let arr2 = ["e", "r", "i", "o", "n"];
console.log(arr2.reverse());

// CONCAT
console.log("Concat");
console.log(arr.concat(arr2));
console.log([...arr, ...arr2]);

// JOIN

console.log(arr2.join(" - "));
