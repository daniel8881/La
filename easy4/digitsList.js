
function digiList(num) {
  return num.toString().split('').map(Number);
}

console.log(digiList(12345));