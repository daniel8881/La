function findFibonacciIndexByLength(length) {
  var first = 1;
  var second = 1;
  var index = 2;
  var fibonacci;
  do {
    fibonacci = first + second;
    index++;
    first = second;
    second = fibonacci;
  } while (fibonacci.toString().length < length);

  return index;
}