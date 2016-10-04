

function multiplyList(arr1, arr2) {
  var newArray = [];
  for(var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i] * arr2[i]);
  }

  return newArray;
}


console.log(multiplyList([3,5,7], [9,10,11]));