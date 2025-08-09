// Ternary Operator
// example 01
const age = 17;
age >= 18 ? console.log("You can vote") : console.log("You can't vote");



/* const age = 20;
if (age >= 18) {
  console.log("You can Vote");
}
else {
  console.log("You can't Vote");
} */







// example 02
let price = 500;
const isLeader = true;
price = isLeader === true ? 0 : price + 100;
console.log(price);



/*let price = 500;
const isLeader = false;
if (isLeader === true) {
  price = 0;
}
else {
  price = price + 100;
}
console.log(price);*/