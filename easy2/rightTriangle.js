
function triangle(num) {
  for(var i = 1; i <= num; i++){
    console.log(Array(num - i + 1).join(' ') + Array(i + 1).join('*'));
  }
}

triangle(5);