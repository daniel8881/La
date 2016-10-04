function staggeredCase(string) {
    var newString = '';
    var idx = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i].match(/[a-z]/i)) {
            if (idx % 2 === 0) {
                newString += string[i].toUpperCase();
            } else {
                newString += string[i].toLowerCase();
            }
            idx++;
        } else {
          newString += string[i];
        }
       


    }

    return newString;
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL CAPS'));
console.log(staggeredCase('ignore 77 the 444 numbers'));