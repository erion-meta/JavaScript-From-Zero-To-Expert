const Car = function (model, speed) {
  this.model = model;
  this.speed = speed;
  console.log(this.model + " going at " + this.speed + " km/h");
};

const car1 = new Car("Audi", 100);
const car2 = new Car("Mercedes", 120);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.model + " going at " + this.speed + " km/h");
};
car1.accelerate();

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.model + " going at " + this.speed + " km/h");
};
car2.brake();
car1.brake();
