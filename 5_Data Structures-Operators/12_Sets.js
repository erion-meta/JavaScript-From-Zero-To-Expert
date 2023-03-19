const orderSet = new Set([
  "Mish",
  "Byrek",
  "Trahana",
  "Fli",
  "Mish",
  "Byrek",
  "Mish",
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has("Fli"));
console.log(orderSet.has("Tave Kosi"));
orderSet.add("Pilaf");
orderSet.delete("Trahana");
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = [
  "Ekonomiks",
  "Adm Biz",
  "Finance",
  "Finance",
  "IE",
  "IE",
  "Finance",
  "IE",
];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  `In our job are ${
    new Set(staff).size
  } types of worker, that are: ${staffUnique}`
);
