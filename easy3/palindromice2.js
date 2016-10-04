
function isPalindromic(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindromic(string) {
  var word = string.match(/[a-z0-9]/gi).join('').toLowerCase();
  return isPalindromic(word);
}


console.log(isRealPalindromic('333'));