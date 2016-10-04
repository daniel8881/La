var age = prompt('What is your age?');
var retirementAge = prompt('At what age would you like to retire?');

var today = new Date();

var currentYear = today.getFullYear();
var workYearsToGo = retirementAge - age;
var retirementYear = currentYear + workYearsToGo;

console.log('It\'s ' + currentYear + '. You will retire in ' + retirementYear + '.');
console.log('You have only ' + workYearsToGo + ' years of work to go!');