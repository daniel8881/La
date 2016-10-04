var SQMETERS_TO_SQFEET = 10.7639;
var length = prompt('Enter the length of the room in meters:');
var width = prompt('Enter the width of the room in meters:');

var area_in_meters = length * width;
var area_in_feet = area_in_meters * SQMETERS_TO_SQFEET;

console.log('The area of the room is ' + area_in_meters.toFixed(2) +
      ' square meters (' + area_in_feet.toFixed(2) + ' square feet).');