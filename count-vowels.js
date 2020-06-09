
function countVowels(str) {
    // create a variable to check for vowels only
    var matches = str.match(/[aeiou]/gi);

    var obj = {};

    if (!matches) {
        return {};
    }

    // iterate through the str
    for (var i = 0; i < matches.length; i++) {

        var key = matches[i];
        // check if current value is equal vowel
        if (!(key in obj)) {
            obj[key] = 1;

        } else {
            obj[key] += 1;
        }
    }
    return obj;
    console.log("obj", obj);
}
console.log(countVowels("hello world")); // "eoo"
console.log(countVowels("happy birthday to you")); // "aiaoou"
console.log(countVowels("SHOUT it out")); // "OUiou"
console.log(countVowels("aieeeeeeeeou")); // "aieeeeeeeeou"
console.log(countVowels("nvwlsnlycnsnnts")); // ""