function computeSum(number) {
  var total = 0;
  for (var i = 1; i <= number; i++) {
    total += i;
  }

  return total;
}

function computeProduct(number) {
  var total = 1;
  for (var i = 1; i <= number; i++) {
    total *= i;
  }

  return total;
}

var number = prompt('Please enter an integer greater than 0');
var operation = prompt('Enter \"s\" to compute the sum, \"p\" to compute the product.');

if (operation == 's') {
  var sum = computeSum(number);
  console.log('The sum of the integers between 1 and ' + number + ' is ' + sum + '.');
} else if (operation == 'p') {
  var product = computeProduct(number);
  console.log('The product of the integers between 1 and ' + number + ' is ' + product + '.');
} else {
  console.log('Oops. Unknown operation.');
}