const neighboursAlb = ["Montenegro", "Kosova", "North Macedonia", "Greece"];

neighboursAlb.push("Qipro");
console.log(neighboursAlb);

neighboursAlb.pop();
console.log(neighboursAlb);

if (!neighboursAlb.includes("Germany")) {
  console.log("Propably not a central European country");
}

neighboursAlb[neighboursAlb.indexOf("Montenegro")] = "Monte Negro";

console.log(neighboursAlb);
