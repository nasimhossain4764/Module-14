// Example 02
const age = 52;
const price = 500;
if (age <= 12) {
  console.log("You can eat for free!");
}
else if (age >= 60) {
  //50% discount
  const discount = price * 50 / 100;
  const payAmount = price - discount;
  console.log("You have to pay", payAmount, "TK");
}
else if (age >= 50) {
  //25% discount
  const discount = price * 25 / 100;
  const payAmount = price - discount;
  console.log("You have to pay", payAmount, "TK");
}

else {
  console.log("You have to pay:", price, "TK to eat");
}