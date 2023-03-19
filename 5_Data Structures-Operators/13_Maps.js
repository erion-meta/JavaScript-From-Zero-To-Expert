const restaurant = new Map();
restaurant.set("name", "Natyra e Qete");
restaurant.set(1, "Tirane, Albania");
restaurant.set(2, "Spille, Rrogozhine");
restaurant
  .set("categories", ["Deti", "Tradicionale", "Pizza", "Mish"])
  .set("open", 10)
  .set("close", 12)
  .set(true, "We are open");
console.log(restaurant.set(false, "We are closed"));

console.log(restaurant.get("name"));
console.log(restaurant.get(2));
console.log(restaurant.size);
// restaurant.clear();
console.log(restaurant);
