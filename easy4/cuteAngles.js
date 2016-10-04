var DEGREE = '\xB0';
var MINUTES_PER_DEGREE = 60;
var SECONDS_PER_DEGREE = 3600;

function dms(degreesFloat) {
    var degreesInt = Math.floor(degreesFloat);
    var minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
    var seconds = Math.floor((degreesFloat - degreesInt - minutes / MINUTES_PER_DEGREE) * SECONDS_PER_DEGREE);
    return degreesInt + DEGREE + padZeroes(minutes) + '\'' + padZeroes(seconds) + '\"';
}

function padZeroes(number) {
    var numString = number.toString();
    return numString.length < 2 ? '0' + numString : numString;
}
