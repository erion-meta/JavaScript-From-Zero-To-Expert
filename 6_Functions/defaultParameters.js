const bookings = [];

const createBookings = function (
  flightNum,
  numPassengers = 1,
  price = 110 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBookings("EM1811", 4);
console.log(bookings);
