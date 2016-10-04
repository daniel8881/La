
function runningTotal(arr) {
  var value = 0;
  return arr.map(item => {
    value += item
    return value;
  })
}

console.log(runningTotal([2,5,13]));
console.log(runningTotal([14, 11, 7, 15, 20]));