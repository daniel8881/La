
function staggeredCase(string) {
  var newString = '';

  for(var i = 0; i < string.length; i++) {
    if(i % 2 === 0) {
      newString += string[i].toUpperCase();
    }else{
      newString += string[i].toLowerCase();
    }
  }

  return newString;
}


console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 444 numbers'));