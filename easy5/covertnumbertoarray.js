
function reversedNumber(num) {
  return +num.toString().split('').reverse().join('');
}


console.log(reversedNumber(12345));