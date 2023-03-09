const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const johnBMI = john.calcBMI();
const markBMI = mark.calcBMI();
// console.log(johnBMI, markBMI);

if (john.bmi > mark.bmi) {
  console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`);
} else {
  console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`);
}
