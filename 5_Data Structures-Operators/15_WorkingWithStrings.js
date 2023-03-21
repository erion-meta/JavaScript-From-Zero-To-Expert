const airport = "TIA International Airport";

// console.log(airport.slice(4));
// console.log(airport.slice(0, airport.indexOf(" ")));
// console.log(
//   airport.slice(airport.lastIndexOf(" ") + 1, airport.lastIndexOf(" ") + 4)
// );
// // console.log(airport.slice(-2));
// // console.log(airport.slice(2, -2));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log(`${seat} is a middle seat`);
//   } else {
//     console.log(`${seat} is not a middle seat`);
//   }
// };

// checkMiddleSeat("113B");
// checkMiddleSeat("223A");
// checkMiddleSeat("103E");

// Part 2

// console.log(airport.toLowerCase());
// console.log(airport.toUpperCase());

// const name = "eRiOn";
// const nameL = name.toLowerCase();
// const nameCorr = nameL[0].toUpperCase() + nameL.slice(1);
// console.log(nameCorr);

// Compare Emails

// const email = "erion@gmail.com";
// const emailCh = " erIon@Gmail.com \n";
// const emailOK = emailCh.toLowerCase().trim();
// console.log(emailOK);

// console.log(email === emailOK);

// Replacing

// const priceGB = "288,92£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const ann = "Omeee ca bone? Here ca the?";
// console.log(ann.replace(/ca/g, "cfare"));

// Booleans

// const plane = "Air Ca Bone 234B4";
// console.log(plane.includes("A"));
// console.log(plane.startsWith("Air"));
// console.log(plane.endsWith("B3"));

// Part 3

// console.log("I am Boss".split(" "));
// const name1 = "Erion Meta".split(" ");

// const [firstName, lastName] = name1;
// const newName = ["Mr. ", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

//

// Padding

// const msg = "Hello mis amigos";
// console.log(msg.padStart(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(234567876543));
console.log(maskCreditCard("237876543123452346"));
