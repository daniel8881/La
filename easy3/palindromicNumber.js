function isPalindromic(string) {
  return string === string.split('').reverse().join('');
}


function isPalindromicNumber(number) {
  return isPalindromic(number.toString());
}


console.log(isPalindromicNumber(123210));