var bill = prompt('What is the bill?');
var percentage = prompt('What is the percentage?');

var tip = (bill * (percentage / 100));
var total = (parseFloat(bill, 10) + tip);

console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + total.toFixed(2));