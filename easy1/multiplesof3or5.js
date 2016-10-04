
function multisum(num) {
  var total = 0;
  for(var i = 3; i <= num; i++) {
    if(i % 3 === 0 || i % 5 === 0){
      total += i;
    }
  }

  return total;
}

console.log(multisum(20));