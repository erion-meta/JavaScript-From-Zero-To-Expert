let billValue = 500;
let tip = 0;
let billToPay = 0;

function calcTip(billValue) {
  billValue >= 50 && billValue <= 300 ? (tip = "15%") : (tip = "20%");

  tip === "15%" ? (tipToPay = billValue * 0.15) : (tipToPay = billValue * 0.2);

  return tipToPay;
}
const checkTip = calcTip(billValue);
console.log(`Bill value = ${billValue}`);
console.log(`Tip = ${tip}`);
console.log(`Final tip to pay = ${calcTip(billValue)}`);

const bills = [125, 555, 44];
const tipArr = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(...tipArr);
