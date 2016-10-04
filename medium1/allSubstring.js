function substringsAtStart(string) {
  return string.split('').map((ele, idx, arr) => {
    return string.slice(0, idx + 1);
  })
}

function substring(string) {

  var result = [];
  var i = 0;
  while(i < string.length) {
    result = result.concat(substringsAtStart(string.slice(i)));
    i++;
  }

  return result;
}

console.log(substring('abcde'));