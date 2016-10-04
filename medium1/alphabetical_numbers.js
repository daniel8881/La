//baseF to decimal
//decimal to baseF

//input string seperated by space

//test case:
//F 0
//F 1
//10 0
//10 1

//idea:
//split the input find the base and number
//choose what function to use to covert the number

//1.baseF to 10
 //create a fib series into a array, it's length is equal number.length
 //loop i from 0 to number.length
 //if number[i] === 1 than total += fib array i



//2.10 to baseF
  //create a fibArr and the final number is small but closet to the input
  //loop i from 0 to fibArr.length
  //if(input - fibArr[i] > 0) then push 1, else push 0



function fib(len) {
  var fibArr = [1,1];
  var i = 2;
  while(fibArr.length < len) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    i++;
  }

  return fibArr.reverse();
}

function fibByNumber(number) {
  var fibArr = [1,1];
  var i = 2;
  while(fibArr[fibArr.length - 1] < number) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    i++;
  }
  fibArr.reverse().shift();
  return fibArr;
}


function decimalToFib(input) {
  var result = '';
  var fibArr = fibByNumber(input);
  var i = 0;
  while(i < fibArr.length) {
    if(input - fibArr[i] >= 0){
       result += '1';
       input -= fibArr[i];
       i++;
    } else {
       result += '0';
       i++;
    }


  }
 

  return result;
}


//1010010
function fibToDecimal(input) {
  var total = 0;
  var fibArr = fib(input.length);
  for(var i = 0; i < input.length; i++) {
    if(input[i] === '1') {
      total += fibArr[i];
    }
  }

  return total;
}

function fibCoverter(input) {
  var base = input.split(' ')[0];
  var number = input.split(' ')[1];
  if(base === 'F'){
    return fibToDecimal(number);
  }else if(base === '10'){
    return decimalToFib(Number(number));
  }
}


console.log(fibCoverter('10 9024720'));