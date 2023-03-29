const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetOme = greet("Ome");
greetOme("Migoooo");

//Arrow
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow("Ku jeee ree")("Migooo");
