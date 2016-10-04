function leapYear(year) {
  if(year < 1752) {
    if(year % 4 === 0) {
      return true;
    }
  } else {
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
    }
  }

  return false;
}


console.log(leapYear(400));