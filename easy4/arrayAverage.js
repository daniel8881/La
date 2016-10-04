
function average(arr) {
  return Math.floor(arr.reduce((a, b) => a + b) / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));