function repeater(string) {
  var stringArray = [];
  for (var i = 0; i < string.length; i++) {
    stringArray.push(string[i], string[i]);
  }

  return stringArray.join('');
}