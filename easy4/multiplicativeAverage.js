
function showMultiplicativeAverage(arr) {
  var averageOfProduct = arr.reduce((a, b) => a * b) / arr.length;
  return averageOfProduct.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));