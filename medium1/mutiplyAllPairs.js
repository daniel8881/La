
function multiplyAllPairs(array1, array2) {
  var result = [];
  array1.forEach(element1 => {
    array2.forEach(element2 => {
      result.push(element1 * element2);
    })
  })

  return result.sort((a, b) => a - b);
}


console.log(multiplyAllPairs([2,4], [4,3,1,2]));