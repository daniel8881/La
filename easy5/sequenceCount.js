

function sequence(count, firstNum) {
  var result = [];
  var sum = 0;
  for (var i = 0; i < count; i++) {
    result.push(sum += firstNum);
  }

  return result;
}