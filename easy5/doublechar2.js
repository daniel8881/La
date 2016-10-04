
function doubleConsonants(string) {
  var arr = [];
  for(var i = 0; i < string.length; i++) {
    if(string[i].match(/[bcdfghjklmnpqrstvwxyx]/i)) {
      arr.push(string[i], string[i]);
    }else{
      arr.push(string[i]);
    }
  }

  return arr.join('');
}


console.log(doubleConsonants('String'));