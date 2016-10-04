
function substringsAtStart(string) {
  return string.split('').map((ele, idx, arr) => {
    return string.slice(0, idx + 1);
  })
}

console.log(substringsAtStart('abc'));
console.log(substringsAtStart('a'));
console.log(substringsAtStart('xyzzy'));