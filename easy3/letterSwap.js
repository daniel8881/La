
function swap(string) {
  return string.split(' ').map(word => {
    if(word.length === 1){
      return word;
    }else{
      return word[word.length - 1] + word.slice(1, -1) + word[0];
    }
  }).join(' ');
}


console.log(swap('Oh what a wonderful day it is'));

