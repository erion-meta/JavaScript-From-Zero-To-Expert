const flight = "LH234";
const erion = {
  name: "Erion Meta",
  passport: 1234567,
};

const checkIN = function (flightNum, passenger) {
  flightNum = "LE123";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 1234567) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport");
  }
};

checkIN(flight, erion);
console.log(flight, erion);
