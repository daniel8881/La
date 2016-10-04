var numbers = [];

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));

var lastNumber = prompt('Enter the last number:');

if (numbers.indexOf(lastNumber) >= 0) {
  console.log('The number ' + lastNumber + ' appears in [' + numbers + '].');
} else {
  console.log('The number ' + lastNumber + ' does not appear in [' + numbers + '].');
}
