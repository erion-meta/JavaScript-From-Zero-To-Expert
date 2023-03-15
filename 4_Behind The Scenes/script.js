function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${firstName} is ${age} years old, and born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2000 && birthYear <= 2010) {
      const output2 = `Ohoo, ${firstName} you are a Trrim`;
      console.log(output2);
    }
  }
  printAge();
  return age;
}

const firstName = "Erion";
calcAge(2001);
