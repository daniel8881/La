
function isPalindromice(string) {
  return string === string.split('').reverse().join('');
}