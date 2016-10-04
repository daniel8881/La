
function letterCaseCount(string) {
  var uppercase = string.match(/[A-Z]/g) || [];
  var lowercase = string.match(/[a-z]/g) || [];
  var neither = string.match(/[^a-z]/gi) || [];
  return {
    lowercase: lowercase.length,
    uppercase: uppercase.length,
    neither: neither.length,
  }
}


console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));