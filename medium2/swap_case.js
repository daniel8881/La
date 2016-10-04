
function swapcase(string) {
  var newString = '';
  for(var i = 0; i < string.length; i++) {
    if(string[i].match(/[A-Z]/)) {
      newString += string[i].toLowerCase();
    } else if(string[i].match(/[a-z]/)) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i];
    }
  }

  return newString;
}

console.log(swapcase('CamelCase'));
console.log(swapcase('Tonight on XYZ-TV'));