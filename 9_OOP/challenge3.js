const Car = function (model, speed) {
  this.model = model;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.model + " going at " + this.speed + " km/h");
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.model + " going at " + this.speed + " km/h");
};

const EV = function (model, speed, charge) {
  Car.call(this, model, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    this.model +
      " going at " +
      this.speed +
      " km/h, with a charge of: " +
      this.charge
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
