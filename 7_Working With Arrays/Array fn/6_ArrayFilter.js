// The filter Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log("Deposits: " + deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log("Deposits (for): " + depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log("Withdrawals: " + withdrawals);
