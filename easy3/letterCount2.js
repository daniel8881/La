
function wordSizes(string) {
  return string.split(' ').map(word => {
    return word.match(/[a-z]/gi).join('');
  }).reduce((obj, word) => {
    obj[word.length] = obj[word.length] || 0;
    obj[word.length]++;
    return obj;
  }, {})
}


console.log(wordSizes('What\'s up doc?'));