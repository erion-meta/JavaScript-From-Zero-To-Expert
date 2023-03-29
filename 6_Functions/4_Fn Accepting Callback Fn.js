const oneWord = function (str) {
  return str.replace(/ /g, "").toUpperCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

//High Order fn

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
};

transformer("Erion is the bo$$!", upperFirstWord);
transformer("Erion Bo$$", oneWord);
