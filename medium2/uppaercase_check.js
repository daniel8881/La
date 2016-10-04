
function isUppercase(string) {
  if(string.length === 0) {
    return false;
  }

  var letters = string.replace(/[^a-z]/gi, '');

  for(var i = 0; i < letters.length; i++) {
    if(letters[i] !== letters[i].toUpperCase()) {
      return false;
    }
  }

  return true;
}

function isUppercase2(string) {
  return !string.match(/[a-z]/g);
}



console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));