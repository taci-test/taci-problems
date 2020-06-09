// Write a function called vowelsOnly which accepts a string str 
// and returns a new string consisting of just the vowels in str.

function vowelsOnly(str) {

    var matches = str.match(/[aeiou]/gi);

    if (!matches) {
        return "";
    }

    var newStr = "";

    for (var i = 0; i < matches.length; i++) {
        newStr = newStr + matches[i];
    }

    return newStr;
}
console.log(vowelsOnly("hello world")); // "eoo"
console.log(vowelsOnly("happy birthday to you")); // "aiaoou"
console.log(vowelsOnly("SHOUT it out")); // "OUiou"
console.log(vowelsOnly("aieeeeeeeeou")); // "aieeeeeeeeou"
console.log(vowelsOnly("nvwlsnlycnsnnts")); // ""