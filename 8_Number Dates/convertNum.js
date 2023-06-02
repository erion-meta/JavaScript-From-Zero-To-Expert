// Conversion
console.log(Number("23"));
console.log(+"23");

// Parsing
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));

console.log(Number.parseInt("  2.5rem "));
console.log(Number.parseFloat("2.5rem"));

console.log(Number.isNaN(20));
console.log(Number.isNaN(+"21x"));
console.log(Number.isNaN("eri"));
