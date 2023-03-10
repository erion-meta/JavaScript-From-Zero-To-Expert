//Bmi challenge

let heightMark = 1.69;
let weightMark = 78;
let heightJones = 1.95;
let weightJones = 92;

let markBmi = weightMark / (heightMark * heightMark);
let johnBmi = weightJones / (heightJones * heightJones);
let markHigherBmi = markBmi > johnBmi;

if (markBmi > johnBmi) {
  console.log(`Mark BMI (${markBmi}) is higher than John BMI (${johnBmi})`);
} else if (johnBmi > markBmi) {
  console.log(`John BMI (${johnBmi}) is higher than Mark BMI (${markBmi})`);
} else {
  console.log("Both BMI are equal");
}
