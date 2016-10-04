
function removeVowels(arr) {
  return arr.map(word => {
    return word.replace(/[aeiou]/gi, '');
  })
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));