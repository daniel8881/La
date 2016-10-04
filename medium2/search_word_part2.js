function searchWord(word, text) {
  var regex = new RegExp(word, 'gi');
  return text.replace(regex, '**' + word.toUpperCase() + '**');
}