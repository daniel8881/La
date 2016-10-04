
function cleanUp(text) {
  var cleanText = '';
  for (var i = 0; i < text.length; i++) {
    if (isLowerCaseLetter(text[i]) || isUpperCaseLetter(text[i])) {
      cleanText += text[i];
    } else {
      if (i > 0 && cleanText[cleanText.length - 1] !== ' ') {
        cleanText += ' ';
      }
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}