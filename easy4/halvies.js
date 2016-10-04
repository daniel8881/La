function halvsies(array) {
  var half = Math.ceil(array.length / 2);
  var firstHalf = array.slice(0, half);
  var secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}