//divisible by 4
//not divisible by 100
//divisible by 400

function leapYear(year) {
  if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }

  return false;
}


console.log(leapYear(240000));