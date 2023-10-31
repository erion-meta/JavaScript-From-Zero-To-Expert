const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// Prototypes
Person.prototype.calcAge = function () {
  console.log("Age is: " + (2023 - this.birthYear));
};
jonas.calcAge();
console.log(Person.prototype);
