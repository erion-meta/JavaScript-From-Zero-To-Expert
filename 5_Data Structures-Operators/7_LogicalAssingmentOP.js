// ~~ OR ~~ assingment operator

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// same thing as up 👇

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// ~~ NULLISH ~~ assingment operator

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// console.log(rest1);
// console.log(rest2);

// ~~ AND ~~ assingment operator

// rest1.owner = rest1.owner && "<Anonymous>";
// rest2.owner = rest2.owner && "<Anonymous>";
rest1.owner &&= "<Anonymous>";
rest2.owner &&= "<Anonymous>";

console.log(rest1);
console.log(rest2);
