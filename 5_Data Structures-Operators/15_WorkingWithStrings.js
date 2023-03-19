const airport = "TIA International Airport";
console.log(airport.slice(4));
console.log(airport.slice(0, airport.indexOf(" ")));
console.log(
  airport.slice(airport.lastIndexOf(" ") + 1, airport.lastIndexOf(" ") + 4)
);
console.log(airport.slice(-2));
console.log(airport.slice(2, -2));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log(`${seat} is a middle seat`);
  } else {
    console.log(`${seat} is not a middle seat`);
  }
};

checkMiddleSeat("113B");
checkMiddleSeat("223A");
checkMiddleSeat("103E");
