
function wordLengths(string) {
  return string.split(' ').map(word => {
    return word + ' ' + word.length;
  })
}


console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths('It ain\'t easy, is it?'));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));