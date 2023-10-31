class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }
}

const erion = new PersonCL("Erion", 2001);
console.log(erion);
erion.calcAge();
erion.greet();
