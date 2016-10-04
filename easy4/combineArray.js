
function union(array1, array2) {
  var newArray = [];
  array1.forEach(item => {
    if(newArray.indexOf(item) === -1) {
      newArray.push(item);
    }
  })

    array2.forEach(item => {
    if(newArray.indexOf(item) === -1) {
      newArray.push(item);
    }
  })

  return newArray;
}


console.log(union([1, 3, 5], [3, 6, 9]));