let billValue = 430;
let tip = 0;
let billToPay = 0;

billValue >= 50 && billValue <= 300 ? (tip = "15%") : (tip = "20%");

tip === "15%"
  ? (billToPay = billValue + billValue * 0.15)
  : (billToPay = billValue + billValue * 0.2);

console.log(`Bill value = ${billValue}`);
console.log(`Tip = ${tip}`);
console.log(`Final bill to pay = ${billToPay}`);
