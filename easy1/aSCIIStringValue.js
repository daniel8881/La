function asciiValue(string) {
  var sum = 0;
  for (var i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }

  return sum;
}


console.log(asciiValue('Launch School'));