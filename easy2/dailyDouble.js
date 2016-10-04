
function crunch(string) {
  var temp;
  var result = '';

  for(var i = 0; i < string.length; i++) {
    temp = string[i];
    if(string[i] !== string[i + 1] || i === string.length) {
      result += temp;
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('ggggggg'));
console.log(crunch('a'));
console.log(crunch(''));