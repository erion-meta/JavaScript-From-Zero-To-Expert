let billValue = 500;

function calcTip(billValue) {
  return billValue >= 50 && billValue <= 300
    ? (tipToPay = billValue * 0.15)
    : (tipToPay = billValue * 0.2);
}

const checkTip = calcTip(billValue);
console.log(`Bill value = ${billValue}`);
console.log(`Tip to pay = ${calcTip(billValue)}`);

const bills = [125, 555, 44];
const tipArr = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(...tipArr);
