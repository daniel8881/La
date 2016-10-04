
function buyFruit(arr) {
  var result = [];
  arr.forEach(ele => {
    for(var i = 0; i < ele[1]; i++) {
      result.push(ele[0]);
    }
  })

  return result;
}

console.log(buyFruit([["apples", 3], ["orange", 1], ["bananas", 2]]));