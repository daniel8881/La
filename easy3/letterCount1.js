
function wordSizes(string) {
  return string.split(' ').reduce((obj, word) => {
    obj[word.length] = obj[word.length] || 0;
    obj[word.length]++;
    return obj;
  }, {})
}


console.log(wordSizes('Four score and seven.'));