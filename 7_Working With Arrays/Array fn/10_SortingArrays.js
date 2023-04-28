// String
const owners = ["Qazim", "Latif", "Hasan", "Lutfi", "Abdyl", "Belo"];
console.log("Original: ", owners);
console.log("Sorted: ", owners.sort());

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("Original: ", movements);

// return < 0, A,B (keep order)
// return > 0, A,B (switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log("Ascending: ", movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log("Descending: ", movements);

// .........
const a = [3, 3, 4, 1, 2, 3, 7, 7, 7, 6, 6, 5, 5, 8, 8, 3, 3];
a.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log("Ascending: ", a);
