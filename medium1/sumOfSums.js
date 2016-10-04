
function sumOfSums(array) {
  return array.map((item, idx) => {
    return item * (array.length - idx);
  } ).reduce((a, b) => a + b);
}

console.log(sumOfSums([3,5,2]));
console.log(sumOfSums([1,5,7,3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1,2,3,4,5]));