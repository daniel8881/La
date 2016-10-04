
function sum(number) {
  return number.toString().split('').map(Number).reduce((a, b) => a + b);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));