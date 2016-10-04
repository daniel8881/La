
function prefix(num) {
  var digit = num % 10;
  var tens = num % 100;

  if(digit === 1 && tens !== 11) {
    return num + 'st';
  } else if(digit === 2 && tens !== 12) {
    return num + 'nd';
  } else if(digit === 3 && tens !== 13) {
    return num + 'rd';
  } else {
    return num + 'th';
  }
}


function century(year) {
  var century = Math.ceil(year / 100);
  return prefix(century);
}

console.log(century(1127));

