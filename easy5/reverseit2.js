

function reverseWords(string) {
  var stringArray = string.split(' ');
  var reversed = [];
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= 5) {
      reversed.push(stringArray[i].split('').reverse().join(''));
    } else {
      reversed.push(stringArray[i]);
    }
  }

  return reversed.join(' ');
}