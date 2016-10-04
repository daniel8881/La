function interleave(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    newArray.push(array1[i], array2[i]);
  }

  return newArray;
}