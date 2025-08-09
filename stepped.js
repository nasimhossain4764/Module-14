const price = 1500;
if (price >= 5000) {
  // 10% discount
  const discount = price * 10 / 100;
  const payAmount = price - discount;
  console.log("Your Payment Amount is: ", payAmount);
}
else if (price >= 3000) {
  // 5% discount
  const discount = price * 5 / 100;
  const payAmount = price - discount;
  console.log("Your Payment Amount is: ", payAmount);
}
else if (price >= 1500) {
  // 3% discount
  const discount = price * 3 / 100;
  const payAmount = price - discount;
  console.log("Your Payment Amount is: ", payAmount);
}

else {
  console.log("Your Payment Amount is: ", price);
}